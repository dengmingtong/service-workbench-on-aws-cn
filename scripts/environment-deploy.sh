#!/bin/bash
set -e

pushd "$(dirname "${BASH_SOURCE[0]}")" > /dev/null
# shellcheck disable=SC1091
[[ $UTIL_SOURCED != yes && -f ./util.sh ]] && source ./util.sh
popd > /dev/null

# Add the version information to the stage file
./scripts/get-release-info.sh "$STAGE"

# Install
install_dependencies "$@"

function disableStats {
  COMPONENT_DIR=$1
  pushd "$SOLUTION_DIR/$COMPONENT_DIR" > /dev/null
  # Disable serverless stats globally (only strictly needs to be done one time)
  # For more information: https://www.serverless.com/framework/docs/providers/aws/cli-reference/slstats#disable-statistics-and-usage-tracking
  $EXEC sls slstats --disable
  popd > /dev/null
}

function componentDeploy {
  COMPONENT_DIR=$1
  COMPONENT_NAME=$2

  pushd "$SOLUTION_DIR/$COMPONENT_DIR" > /dev/null
  printf "\nDeploying component: %s ...\n\n" "$COMPONENT_NAME"
  $EXEC sls deploy --stage "$STAGE"
  printf "\nDeployed component: %s successfully \n\n" "$COMPONENT_NAME"
  popd > /dev/null
}

function goComponentDeploy() {
  COMPONENT_DIR=$1
  COMPONENT_NAME=$2

  pushd "$SOLUTION_DIR/$COMPONENT_DIR" > /dev/null
  printf "\nDeploying Go component: %s ...\n\n" "$COMPONENT_NAME"
  $EXEC sls deploy-go --stage "$STAGE"
  printf "\nDeployed Go component: %s successfully \n\n" "$COMPONENT_NAME"
  popd > /dev/null
}

disableStats "infrastructure"
componentDeploy "infrastructure" "Infrastructure"
componentDeploy "pre-deployment" "Pre-Deployment"

# We now need to invoke the pre deployment lambda (we can do this locally)
#$EXEC sls invoke local -f preDeployment -s $STAGE
printf "\nInvoking pre-deployment steps\n\n"
pushd "$SOLUTION_DIR/pre-deployment" > /dev/null
$EXEC sls invoke -f preDeployment --stage "$STAGE"
popd > /dev/null

# Check if AMI Sharing is enabled and call prep-devops-account
amiSharingEnabled=$( get_stage_value "enableAmiSharing" )
if [ "$amiSharingEnabled" = true ]; then
  printf "AMI Sharing Enabled. Deploying DevOps account stack"
  componentDeploy "prepare-devops-acc" "Prepare-DevOps-Account"
else
  printf "AMI Sharing Disabled. Skip DevOps account stack"
fi

ENABLE_ALB=$( get_stage_value "enableAlb" )
echo ENABLE_ALB:$ENABLE_ALB
if [[ "$ENABLE_ALB" = true ]]; then
  echo "start create alb for website"
  componentDeploy "lambda-website" "Lambda-Website"
  componentDeploy "alb" "ALB"
  # add weburl config
  pushd "$(dirname "${BASH_SOURCE[0]}")" > /dev/null
  source ./setAlbDnsAsWebsiteUrl.sh "$@"
  popd > /dev/null
 
fi

componentDeploy "backend" "Backend"

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

REGION=$(cat "$SCRIPT_DIR"/../main/config/settings/"$STAGE".yml | grep ^awsRegion)
echo $REGION
ENABLE_LAMBDA_EDGE=$( get_stage_value "enableLambdaEdge" )
echo ENABLE_LAMBDA_EDGE:$ENABLE_LAMBDA_EDGE
if [[ "$REGION" != *"cn-"* ]] && [[ "$ENABLE_LAMBDA_EDGE" = true ]]; then
  echo "deploy lambdaedge"
  componentDeploy "edge-lambda" "Edge-Lambda"
fi
componentDeploy "post-deployment" "Post-Deployment"
goComponentDeploy "environment-tools" "Environment-Tools"

# We now need to invoke the post deployment lambda (we can do this locally)
#$EXEC sls invoke local -f postDeployment -s $STAGE
printf "\nInvoking post-deployment steps\n\n"
pushd "$SOLUTION_DIR/post-deployment" > /dev/null
$EXEC sls invoke -f postDeployment -l --stage "$STAGE"
popd > /dev/null

# Deploy UI
pushd "$SOLUTION_DIR/ui" > /dev/null

# first we package locally (to populate .env.local only)
printf "\nPackaging website UI\n\n"
$EXEC sls package-ui --local=true --stage "$STAGE"
# then we package for deployment
# (to populate .env.production and create a build via "npm build")
$EXEC sls package-ui --stage "$STAGE"

printf "\nDeploying website UI\n\n"
# Deploy it to S3, invalidate CloudFront cache
$EXEC sls deploy-ui --invalidate-cache=true --stage "$STAGE"
printf "\nDeployed website UI successfully\n\n"
popd > /dev/null

if [[ "$ENABLE_ALB" = true ]]; then
  # copy website static files to lambda website folder
  cp -rf $SOLUTION_DIR/ui/build/* $SOLUTION_DIR/lambda-website/docker-website/website
  
  componentDeploy "lambda-website" "Lambda-Website"
  # remove the last line which is added in the setAlbDnsAsWebsiteUrl.sh script
  awk -v n=1 'NR==FNR{total=NR;next} FNR==total-n+1{exit} 1' main/config/settings/"$STAGE".yml main/config/settings/"$STAGE".yml | tee main/config/settings/"$STAGE"_temp.yml
  mv -f main/config/settings/"$STAGE"_temp.yml main/config/settings/"$STAGE".yml
fi

printf "\n----- ENVIRONMENT DEPLOYED SUCCESSFULLY 🎉 -----\n\n"
pushd "$(dirname "${BASH_SOURCE[0]}")" > /dev/null

# shellcheck disable=SC1091
source ./get-info.sh "$@"

popd > /dev/null
