#!/bin/bash
set -e
set -o pipefail

pushd "$(dirname "${BASH_SOURCE[0]}")" > /dev/null
# shellcheck disable=SC1091
[[ $UTIL_SOURCED != yes && -f ./util.sh ]] && source ./util.sh
popd > /dev/null

# Setup the execution command
init_package_manager

##
#  Sets the following environment variables containing information about the deployed environment and displays a
#  human friendly summary message containing info about the environment
#
# WEBSITE_URL
# API_ENDPOINT
#
##
function get_info() {
  pushd "$SOLUTION_DIR/infrastructure" > /dev/null
  local stack_name_infrastructure
  stack_name_infrastructure=$($EXEC sls info -s "$STAGE" | grep 'stack:' --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')
  popd > /dev/null

  pushd "$SOLUTION_DIR/backend" > /dev/null
  local stack_name_backend
  stack_name_backend=$($EXEC sls info -s "$STAGE" | grep 'stack:' --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')
  popd > /dev/null

  local solution_name aws_region aws_profile
  # Note that we disable exit on non-zero for this section as the awsProfile
  # will not be present in the CI/CD pipeline YAML and that fact, combined
  # with set -o pipefail, will cause this script to exit with a non-zero rc.
  set +e
  solution_name="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^solutionName:' -m 1 --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
  aws_region="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^awsRegion:' -m 1 --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
  aws_profile="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^awsProfile:' -m 1 | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
  set -e


  local website_domain_name=''
  local native_admin_psswd_cmd=''

  if [ "$aws_profile" ]; then

    # shellcheck disable=SC2016
    native_admin_psswd_cmd="aws ssm get-parameters --names /$STAGE/$solution_name/user/native/admin/password --output text --region $aws_region --profile $aws_profile --with-decryption --query Parameters[0].Value"
    # shellcheck disable=SC2016
    website_url="$(aws cloudformation describe-stacks --stack-name "$stack_name_infrastructure" --output text --region "$aws_region" --profile "$aws_profile" --query 'Stacks[0].Outputs[?OutputKey==`WebsiteUrl`].OutputValue')"
    # shellcheck disable=SC2016
    api_endpoint="$(aws cloudformation describe-stacks --stack-name "$stack_name_backend" --output text --region "$aws_region" --profile "$aws_profile" --query 'Stacks[0].Outputs[?OutputKey==`ServiceEndpoint`].OutputValue')"
  else

    # shellcheck disable=SC2016
    native_admin_psswd_cmd="aws ssm get-parameters --names /$STAGE/$solution_name/user/native/admin/password --output text --region $aws_region --with-decryption --query Parameters[0].Value"
    # shellcheck disable=SC2016
    website_url="$(aws cloudformation describe-stacks --stack-name "$stack_name_infrastructure" --output text --region "$aws_region" --query 'Stacks[0].Outputs[?OutputKey==`WebsiteUrl`].OutputValue')"
    # shellcheck disable=SC2016
    api_endpoint="$(aws cloudformation describe-stacks --stack-name "$stack_name_backend" --output text --region "$aws_region" --query 'Stacks[0].Outputs[?OutputKey==`ServiceEndpoint`].OutputValue')"
  fi

  export ENV_NAME="${STAGE}"
  export WEBSITE_URL="${website_url}"
  export API_ENDPOINT="${api_endpoint}"

  ENABLE_ALB=$( get_stage_value "enableAlb" )
  if [[ "$ENABLE_ALB" = true ]]; then
    set +e
    pushd "$SOLUTION_DIR/alb" > /dev/null
    stack_name_alb=$($EXEC sls info -s "$STAGE" | grep 'stack:' --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')
    popd > /dev/null    
    aws_region="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^awsRegion:' -m 1 --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
    aws_profile="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^awsProfile:' -m 1 | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
    set -e

    if [ "$aws_profile" ]; then
      website_url="$(aws cloudformation describe-stacks --stack-name "$stack_name_alb" --output text --region "$aws_region" --profile "$aws_profile" --query 'Stacks[0].Outputs[?OutputKey==`LoadBalancerDNSNAme`].OutputValue')"
    else
      # shellcheck disable=SC2016
      website_url="$(aws cloudformation describe-stacks --stack-name "$stack_name_alb" --output text --region "$aws_region" --query 'Stacks[0].Outputs[?OutputKey==`LoadBalancerDNSNAme`].OutputValue')"
    fi 
    lowerWebUrl=$(awk '{print tolower($0)}' <<<"${website_url}")
    ALB_PORT=$( get_stage_value "albPort" )
    export ALB_ENDPOINT=http://"${lowerWebUrl}":"${ALB_PORT}"
  fi

  echo "-------------------------------------------------------------------------"
  echo "Summary:"
  echo "-------------------------------------------------------------------------"
  echo "Env Name                           : ${ENV_NAME}"
  echo "Solution                           : ${solution_name}"
  echo "Website URL                        : ${WEBSITE_URL}"
  if [[ "$ENABLE_ALB" = true ]]; then
    echo "Alb URL                            : ${ALB_ENDPOINT}"
  fi
  echo "API Endpoint                       : ${API_ENDPOINT}"

  # only show profile and root password when running in an interactive terminal
  if [ -t 1 ] ; then
    [ -z "${aws_profile}" ] || echo "AWS Profile                        : ${aws_profile}"
    native_admin_psswd="$(${native_admin_psswd_cmd})"
    echo "Temporary Native Pool Password     : ${native_admin_psswd}"
  else
    echo "Temporary Native Pool Password     : execute ${native_admin_psswd_cmd}"
  fi

  echo "-------------------------------------------------------------------------"
}

get_info
