"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[6459],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4705:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"rstudio",title:"Setting up RStudio ALB workspace",sidebar_label:"Setting up RStudio ALB workspace"},c=void 0,s={unversionedId:"installation_guide/installation/rstudio",id:"installation_guide/installation/rstudio",title:"Setting up RStudio ALB workspace",description:"Overview",source:"@site/docs/installation_guide/installation/rstudio.md",sourceDirName:"installation_guide/installation",slug:"/installation_guide/installation/rstudio",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/rstudio",draft:!1,tags:[],version:"current",frontMatter:{id:"rstudio",title:"Setting up RStudio ALB workspace",sidebar_label:"Setting up RStudio ALB workspace"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Installing using Cloud9",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/cloud9install"},next:{title:"Upgrade process for command line installations",permalink:"/service-workbench-on-aws-cn/installation_guide/upgrading/commandline"}},m={},p=[{value:"Overview",id:"overview",level:3},{value:"Creating main account and hosting account",id:"creating-main-account-and-hosting-account",level:3},{value:"Creating a public hosted zone in the main account",id:"creating-a-public-hosted-zone-in-the-main-account",level:3},{value:"Creating a new name server record in the shared domain",id:"creating-a-new-name-server-record-in-the-shared-domain",level:3},{value:"Requesting a public certificate in main account for the hosted zone",id:"requesting-a-public-certificate-in-main-account-for-the-hosted-zone",level:3},{value:"Requesting a certificate in AWS Certificate Manager",id:"requesting-a-certificate-in-aws-certificate-manager",level:4},{value:"Creating a new record in the main account",id:"creating-a-new-record-in-the-main-account",level:4},{value:"Creating a staging file using the latest Service Workbench code",id:"creating-a-staging-file-using-the-latest-service-workbench-code",level:3},{value:"Creating AMIs",id:"creating-amis",level:3},{value:"Installing EC2 RStudio Server",id:"installing-ec2-rstudio-server",level:3},{value:"Requesting a new public certificate within member account for hosted zone domain",id:"requesting-a-new-public-certificate-within-member-account-for-hosted-zone-domain",level:3},{value:"Creating a new record in the main account hosted zone",id:"creating-a-new-record-in-the-main-account-hosted-zone",level:3},{value:"Accessing RStudio Workspace in Service Workbench",id:"accessing-rstudio-workspace-in-service-workbench",level:3}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can access the RStudio workspace type by using the template and AMI provided in AWS partner\u2019s repository. The following table summarizes the sequence of steps that you need to follow to complete the installation for RStudio ALB workspace in the Service Workbench environment."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Task"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#createacct"},"Creating main account and hosting account")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides information on how to set up the environment used for RStudio workspace types. In these accounts, you will set up hosted zones, configure the certificates required for deploying RStudio ALB workspace.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hostedzone"},"Creating a public hosted zone in the main account")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides routing information about how you want to route traffic for a domain/subdomain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#nserver"},"Creating a new name server record in the shared domain")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides a name to the hosted zone. Here, you will copy the values (containing routing information) that you created in the main account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#pubcert"},"Requesting a public certificate in main account for the hosted zone")),(0,i.kt)("td",{parentName:"tr",align:null},"Request a public certificate in the main account for the hosted zone. The region is chosen as ",(0,i.kt)("inlineCode",{parentName:"td"},"us-east-1"),". Using this option, you request a public certificate from Amazon. By default, these public certificates are trusted by browsers and operating systems.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#staging"},"Creating a staging file using the latest Service Workbench code")),(0,i.kt)("td",{parentName:"tr",align:null},"Download the latest Service Workbench code and set up the staging file for deploying RStudio ALB workspace. For more information about staging file, see ",(0,i.kt)("a",{parentName:"td",href:"/installation_guide/installation/pre-installation/conf-settings"},"Configuration settings"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#ami"},"Creating AMIs")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the basis of RStudio environment that researchers use for research. Refer to the AWS partner\u2019s ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/RLOpenCatalyst/Service_Workbench_Templates/blob/main/RStudio/machine-images/config/infra/README.md"},"README")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#rstudio"},"Installing EC2 RStudio Server")),(0,i.kt)("td",{parentName:"tr",align:null},"Deploys RStudio into Service Workbench\u2019s portfolio. Refer to the AWS partner\u2019s ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/RLOpenCatalyst/Service_Workbench_Templates/blob/main/RStudio/machine-images/config/infra/README.md"},"README")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#newpubcert"},"Requesting a new public certificate within member account for hosted zone domain")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides steps on how to request a public certificate for member (hosting) account using ACM. The certificate contains the ARN value that is used to import the products.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#newrec"},"Creating a new record in the main account hosted zone")),(0,i.kt)("td",{parentName:"tr",align:null},"Validates the member account public certificate. Without the validation, no workspaces can be created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#swb"},"Accessing RStudio Workspace in Service Workbench")),(0,i.kt)("td",{parentName:"tr",align:null},"Configure RStudio ALB using Service Workbench.")))),(0,i.kt)("h3",{id:"creating-main-account-and-hosting-account"},"Creating main account and hosting account"),(0,i.kt)("a",{name:"createacct"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will learn to create a main account and a hosting account and assign Admin role to these accounts."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create/Register Account"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Account Creation")," page, choose ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Create AWS Accounts")," page, specify the account email address, account name, secondary owner, financial owner, ownership group, description, and account type."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Submit"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,i.kt)("li",{parentName:"ol"},"Create a console role:",(0,i.kt)("br",{parentName:"li"}),"a. Choose ",(0,i.kt)("strong",{parentName:"li"},"Add"),".",(0,i.kt)("br",{parentName:"li"}),"b. For ",(0,i.kt)("strong",{parentName:"li"},"One Click Roles"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Admin"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Follow the same steps above to create a hosting account and choose the admin role. In the description, specify that it is a hosting account."),(0,i.kt)("h3",{id:"creating-a-public-hosted-zone-in-the-main-account"},"Creating a public hosted zone in the main account"),(0,i.kt)("a",{name:"hostedzone"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will learn to create a public hosted zone for the main account and add routing information to it. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign in to the AWS Management Console.   "),(0,i.kt)("li",{parentName:"ol"},"Under AWS Services, choose ",(0,i.kt)("strong",{parentName:"li"},"Route 53"),".     "),(0,i.kt)("li",{parentName:"ol"},"On the Route 53 dashboard, choose ",(0,i.kt)("strong",{parentName:"li"},"Hosted zones"),".      "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create hosted zone"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Create hosted zone")," page:",(0,i.kt)("br",{parentName:"li"}),"a.\tFor ",(0,i.kt)("strong",{parentName:"li"},"Domain name"),", enter the domain name.",(0,i.kt)("br",{parentName:"li"}),"b.\tFor ",(0,i.kt)("strong",{parentName:"li"},"Description \u2013 optional"),", enter the description.",(0,i.kt)("br",{parentName:"li"}),"c.\tFor ",(0,i.kt)("strong",{parentName:"li"},"Type"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Public hosted zone"),".       "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create hosted zone"),".     "),(0,i.kt)("li",{parentName:"ol"},"Copy the values from the ",(0,i.kt)("strong",{parentName:"li"},"Value/Route traffic to")," field for later use.   ")),(0,i.kt)("h3",{id:"creating-a-new-name-server-record-in-the-shared-domain"},"Creating a new name server record in the shared domain"),(0,i.kt)("a",{name:"nserver"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will learn to create a new record name for the public hosted zone."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign in to the AWS Management Console."),(0,i.kt)("li",{parentName:"ol"},"Under AWS Services, choose ",(0,i.kt)("strong",{parentName:"li"},"Route 53"),"."),(0,i.kt)("li",{parentName:"ol"},"On the Route 53 dashboard, choose ",(0,i.kt)("strong",{parentName:"li"},"Hosted zones"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose the hosted zone that you just created."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create record"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Quick create record")," page, choose ",(0,i.kt)("strong",{parentName:"li"},"Add another record"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Record name"),", enter the name."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Record type"),", choose ",(0,i.kt)("strong",{parentName:"li"},"NS \u2013 Name servers for a hosted zone"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Value"),", enter the values that you copied from the Value/Route traffic to field earlier."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"TTL (seconds)"),", enter the value."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Routing policy"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Simple routing"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create records"),".")),(0,i.kt)("h3",{id:"requesting-a-public-certificate-in-main-account-for-the-hosted-zone"},"Requesting a public certificate in main account for the hosted zone"),(0,i.kt)("a",{name:"pubcert"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will learn how to request a certificate for the main account in AWS Certificate Manager (ACM) and access the CNAME record details from that certificate."),(0,i.kt)("h4",{id:"requesting-a-certificate-in-aws-certificate-manager"},"Requesting a certificate in AWS Certificate Manager"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign in to the AWS Management Console.    "),(0,i.kt)("li",{parentName:"ol"},"Go to AWS Certificate Manager.",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("strong",{parentName:"li"},"Note"),": To use an ACM certificate with Amazon CloudFront, you must request or import the certificate in the US East (N. Virginia) region.      "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Request a certificate"),".     "),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Request certificate")," page, choose ",(0,i.kt)("strong",{parentName:"li"},"Request a public certificate"),".     "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Next"),".      "),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Request a public certificate")," page:",(0,i.kt)("br",{parentName:"li"}),"a.\tFor ",(0,i.kt)("strong",{parentName:"li"},"Domain names"),", enter the domain name.",(0,i.kt)("br",{parentName:"li"}),"b.\tFor ",(0,i.kt)("strong",{parentName:"li"},"Select validation method"),", choose ",(0,i.kt)("strong",{parentName:"li"},"DNS validation \u2013 recommended"),".     "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Request"),".    "),(0,i.kt)("li",{parentName:"ol"},"Refresh your screen to view the newly created certificate.     "),(0,i.kt)("li",{parentName:"ol"},"Choose the certificate to view the details.       "),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("strong",{parentName:"li"},"Domains"),", copy the values for ",(0,i.kt)("strong",{parentName:"li"},"CNAME name")," and ",(0,i.kt)("strong",{parentName:"li"},"CNAME value"),".       ")),(0,i.kt)("h4",{id:"creating-a-new-record-in-the-main-account"},"Creating a new record in the main account"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go the main account. "),(0,i.kt)("li",{parentName:"ol"},"Choose the hosted zone created earlier. See ",(0,i.kt)("a",{parentName:"li",href:"#hostedzone"},"Creating a public hosted zone in the main account"),"."),(0,i.kt)("li",{parentName:"ol"},"Create a new record."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Record name"),", paste the first part of the ",(0,i.kt)("strong",{parentName:"li"},"CNAME")," record created in the previous section. "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Value"),", paste the ",(0,i.kt)("strong",{parentName:"li"},"CNAME value")," copied in the previous section."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create records"),".")),(0,i.kt)("h3",{id:"creating-a-staging-file-using-the-latest-service-workbench-code"},"Creating a staging file using the latest Service Workbench code"),(0,i.kt)("a",{name:"staging"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will learn how to create and configure the staging file for setting up the RStudio ALB workspace."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/main/config/settings")," directory.    "),(0,i.kt)("li",{parentName:"ol"},"Create a new staging file. Example:",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("inlineCode",{parentName:"li"},"cp example.yml albr.yml")),(0,i.kt)("li",{parentName:"ol"},"In the newly created stage file, remove comments and keep awsRegion as us-east-1. You can change the value of awsProfile , for example, rstudio. Update the configuration (config file) and credentials (credentials file) within the ",(0,i.kt)("inlineCode",{parentName:"li"},".aws")," folder so that the new account details are included. The updated config file should have the following values: ",(0,i.kt)("inlineCode",{parentName:"li"},"region")," (default is ",(0,i.kt)("inlineCode",{parentName:"li"},"us-east-1"),"), output (",(0,i.kt)("inlineCode",{parentName:"li"},"yaml"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"account_id"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"role_name"),". To update credentials, you need to create a CLI user. For more information on creating a user, see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM users"),".     "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"solutionName"),", enter ",(0,i.kt)("inlineCode",{parentName:"li"},"sw"),".     "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"envName"),", enter the stage name, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"albr"),".      "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"envType"),", enter a name, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"dev"),".     "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"createServiceCatalogPortfolio"),", enter the value as ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".      "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"rootUserEmail"),", enter the email address.      "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"domainName"),", enter the domain name of the main account hosted zone.       "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"certificateArn"),", copy the certificate ARN of the main account and paste it.       "),(0,i.kt)("li",{parentName:"ol"},"From ",(0,i.kt)("inlineCode",{parentName:"li"},"defaults.yml")," file, copy the hostedZoneId into the newly created staging file (for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"albr.yml"),"). "),(0,i.kt)("li",{parentName:"ol"},"Copy the Hosted zone ID details Hosted zone page in Route 53 and paste it in ",(0,i.kt)("inlineCode",{parentName:"li"},"hostedZoneId")," in your staging file.     ")),(0,i.kt)("p",null,"Your new stage file is now ready for deployment."),(0,i.kt)("h3",{id:"creating-amis"},"Creating AMIs"),(0,i.kt)("a",{name:"ami"}),(0,i.kt)("p",null,"Follow the instructions in the README to install EC2 RStudio server AMIs. You can go to your main account and access these AMIs under Images."),(0,i.kt)("p",null,"Note: Edit the configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"RStudio/machine-images/config/infra/configuration.json"),"). You need to update the region (to match your deployment config file), ",(0,i.kt)("inlineCode",{parentName:"p"},"amiName")," (suggested: ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio-alb"),"), and ",(0,i.kt)("inlineCode",{parentName:"p"},"awsProfile")," (to match your deployment config file). Update ",(0,i.kt)("inlineCode",{parentName:"p"},"stageName")," to match your deployment configuration file."),(0,i.kt)("h3",{id:"installing-ec2-rstudio-server"},"Installing EC2 RStudio Server"),(0,i.kt)("a",{name:"rstudio"}),(0,i.kt)("p",null,"Follow the instructions in the README to install EC2 RStudio server."),(0,i.kt)("h3",{id:"requesting-a-new-public-certificate-within-member-account-for-hosted-zone-domain"},"Requesting a new public certificate within member account for hosted zone domain"),(0,i.kt)("a",{name:"newpubcert"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will learn to request a public certificate for member (hosting) account using ACM and copy the ARN value."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign in to the AWS Management Console."),(0,i.kt)("li",{parentName:"ol"},"Choose Certificate Manager. "),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"AWS Certificate Manager")," page, choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Request a certificate"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificate type"),", choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Request a public certificate"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("inlineCode",{parentName:"li"},"Request a public certificate")," page:",(0,i.kt)("br",{parentName:"li"}),"a.\tFor ",(0,i.kt)("inlineCode",{parentName:"li"},"Domain names"),", enter the domain name in the following two ways: ",(0,i.kt)("inlineCode",{parentName:"li"},"example.corp.com")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"*.example.corp.com"),". Here, ",(0,i.kt)("inlineCode",{parentName:"li"},"example.corp.com")," is the full domain name.",(0,i.kt)("br",{parentName:"li"}),"b.\tFor ",(0,i.kt)("strong",{parentName:"li"},"Select validation method"),", choose ",(0,i.kt)("strong",{parentName:"li"},"DNS validation \u2013 recommended"),".       "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Request"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Certificate")," page, within Certificate status, copy the ARN. The ARN will be used to import the products.")),(0,i.kt)("h3",{id:"creating-a-new-record-in-the-main-account-hosted-zone"},"Creating a new record in the main account hosted zone"),(0,i.kt)("a",{name:"newrec"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": This task validates the member account public certificate. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the hosting account certificate manager."),(0,i.kt)("li",{parentName:"ol"},"On the certificate page, copy values for ",(0,i.kt)("inlineCode",{parentName:"li"},"CNAME name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"CNAME value"),"."),(0,i.kt)("li",{parentName:"ol"},"Switch over to the main account."),(0,i.kt)("li",{parentName:"ol"},"On the AWS Management Console, choose ",(0,i.kt)("strong",{parentName:"li"},"Route 53"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Hosted zones"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose the domain name."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create new record"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Record name"),", paste the first part of the CNAME record created in the previous section. "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Record type"),", choose ",(0,i.kt)("strong",{parentName:"li"},"CNAME \u2013 Routes traffic to another domain"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Value"),", paste the ",(0,i.kt)("strong",{parentName:"li"},"CNAME value")," copied in the previous section."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create records"),".")),(0,i.kt)("h3",{id:"accessing-rstudio-workspace-in-service-workbench"},"Accessing RStudio Workspace in Service Workbench"),(0,i.kt)("a",{name:"swb"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task"),": You will log in to Service Workbench, create a user and configure the account for using RStudio ALN workspace."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign in to Service Workbench first time as the root user."),(0,i.kt)("li",{parentName:"ol"},"Add a local user."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Accounts"),", ",(0,i.kt)("strong",{parentName:"li"},"AWS Accounts"),", ",(0,i.kt)("strong",{parentName:"li"},"Add AWS Account"),", add the member account."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Accounts"),", ",(0,i.kt)("strong",{parentName:"li"},"Indexes"),", ",(0,i.kt)("strong",{parentName:"li"},"Add Index")," associated with member account, create an index."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Accounts"),", ",(0,i.kt)("strong",{parentName:"li"},"Projects"),", ",(0,i.kt)("strong",{parentName:"li"},"Add Project")," associated with that index, create a new project."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Users"),", ",(0,i.kt)("strong",{parentName:"li"},"Users"),", ",(0,i.kt)("strong",{parentName:"li"},"Detail"),", ",(0,i.kt)("strong",{parentName:"li"},"Edit"),", associate the user with the new project."),(0,i.kt)("li",{parentName:"ol"},"Import EC2 RStudio Server and add new configuration for the workspace type. ",(0,i.kt)("inlineCode",{parentName:"li"},"ACMSSLCertArn")," is asking for the member account certificate ARN. "),(0,i.kt)("li",{parentName:"ol"},"Enter the instance type for the EC2 instance. ",(0,i.kt)("inlineCode",{parentName:"li"},"AmiId")," is the AMI ID of the newly created AMI in the main account. "),(0,i.kt)("li",{parentName:"ol"},"Approve the configuration."),(0,i.kt)("li",{parentName:"ol"},"Create a new workspace in by selecting the RStudio Server workspace type and configuration."),(0,i.kt)("li",{parentName:"ol"},"Connect to the RStudio Workspace. Make sure popups are enabled.")))}d.isMDXComponent=!0}}]);