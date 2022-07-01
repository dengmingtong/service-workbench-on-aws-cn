"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[565],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(2263),o=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(4996),s=["components"],l={id:"authentication",title:"Upgrading deprecated internal authentication",sidebar_label:"Upgrading to deprecated internal authentication"},u=void 0,c={unversionedId:"installation_guide/upgrading/authentication",id:"installation_guide/upgrading/authentication",isDocsHomePage:!1,title:"Upgrading deprecated internal authentication",description:"In the Service Workbench version 5.0.0, internal authentication has been deprecated. To upgrade to this version from your current version of Service Workbench, the administrators need to prepare the environment for an upgrade by deactivating, terminating, or disassociating internal users and the resources to which they are associated. The following tasks must be completed to prepare the Service Workbench environment for an upgrade:",source:"@site/docs/installation_guide/upgrading/authentication.md",sourceDirName:"installation_guide/upgrading",slug:"/installation_guide/upgrading/authentication",permalink:"/service-workbench-on-aws-cn/installation_guide/upgrading/authentication",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/upgrading/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Upgrading deprecated internal authentication",sidebar_label:"Upgrading to deprecated internal authentication"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Upgrading AWS solution installation",permalink:"/service-workbench-on-aws-cn/installation_guide/upgrading/solutions"},next:{title:"Post upgrade",permalink:"/service-workbench-on-aws-cn/installation_guide/postupgrade"}},d=[{value:"Terminating workspaces",id:"terminating-workspaces",children:[],level:2},{value:"Deactivating/deleting SSH keys",id:"deactivatingdeleting-ssh-keys",children:[{value:"Using Service Workbench UI to delete SSH keys",id:"using-service-workbench-ui-to-delete-ssh-keys",children:[],level:3},{value:"Using Postman to deactivate SSH keys",id:"using-postman-to-deactivate-ssh-keys",children:[],level:3},{value:"Using command line to deactivate SSH keys",id:"using-command-line-to-deactivate-ssh-keys",children:[],level:3}],level:2},{value:"Disassociating projects",id:"disassociating-projects",children:[],level:2},{value:"Disassociating organization studies",id:"disassociating-organization-studies",children:[{value:"Using Postman to disassociate organization study",id:"using-postman-to-disassociate-organization-study",children:[],level:3},{value:"Using command line to disassociate organization study",id:"using-command-line-to-disassociate-organization-study",children:[],level:3}],level:2},{value:"Deactivating internal authentication users",id:"deactivating-internal-authentication-users",children:[],level:2},{value:"Setting up Postman for Service Workbench",id:"setting-up-postman-for-service-workbench",children:[],level:2},{value:"Getting authentication token",id:"getting-authentication-token",children:[{value:"Using Service Workbench UI",id:"using-service-workbench-ui",children:[],level:3}],level:2},{value:"Migrating My Study resources",id:"migrating-my-study-resources",children:[],level:2}],h={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the Service Workbench version 5.0.0, internal authentication has been deprecated. To upgrade to this version from your current version of Service Workbench, the administrators need to prepare the environment for an upgrade by deactivating, terminating, or disassociating internal users and the resources to which they are associated. The following tasks must be completed to prepare the Service Workbench environment for an upgrade:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Workspaces created by internal authentication users must be terminated.  "),(0,i.kt)("li",{parentName:"ul"},"SSH keys generated by internal authentication users must be deactivated or deleted."),(0,i.kt)("li",{parentName:"ul"},"Internal authentication users cannot be associated to any projects."),(0,i.kt)("li",{parentName:"ul"},"Internal authentication users cannot be associated to any organizational studies."),(0,i.kt)("li",{parentName:"ul"},"Internal authentication users (including the root user) must be deactivated or deleted.")),(0,i.kt)("p",null,"To allow administrators to revert to the Service Workbench version when internal authentication was supported, we recommend deactivating instead of deleting the resources."),(0,i.kt)("p",null,"If you haven\u2019t created IdP/native Cognito users before deploying version 5.0.0, you can re-deploy the previous release to create them, and then retry deploying version 5.0.0."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important"),": Follow these instructions in this order to avoid resources being removed before they should have been. Some resources depend on others being active to allow for the deactivation."),(0,i.kt)("p",null,"You may be required to use the Service Workbench API library to complete this process. You can either do this by using ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," (an external software that can either be used as a web version or download to your desktop), or the command line package ",(0,i.kt)("a",{parentName:"p",href:"https://curl.se/"},"cURL"),". For instructions on how to set up your Postman environment, see ",(0,i.kt)("a",{parentName:"p",href:"#setpostman"},"Setting up Postman for Service Workbench"),"."),(0,i.kt)("h2",{id:"terminating-workspaces"},"Terminating workspaces"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to Service Workbench as an administrator using either the internal or external authentication administrator\u2019s account."),(0,i.kt)("li",{parentName:"ol"},"Terminate workspaces: Go to the Workspaces page and terminate all active workspaces owned by internal users.")),(0,i.kt)("h2",{id:"deactivatingdeleting-ssh-keys"},"Deactivating/deleting SSH keys"),(0,i.kt)("h3",{id:"using-service-workbench-ui-to-delete-ssh-keys"},"Using Service Workbench UI to delete SSH keys"),(0,i.kt)("p",null,"Using the Service Workbench UI, you can only see your own SSH keys and can only delete the SSH keys. One option is to have all of your users log in before deployment and delete all of their SSH keys. Alternatively, if you attempt to deploy the latest version of Service Workbench, the output of the failed upgrade should list the SSH key IDs you need to deactivate. An administrator can deactivate another user\u2019s SSH key using the ",(0,i.kt)("inlineCode",{parentName:"p"},"{{baseURL}}/api/key-pairs/:keyPairId/deactivate")," API. Repeat whichever process you choose for each SSH key that needs to be deactivated."),(0,i.kt)("h3",{id:"using-postman-to-deactivate-ssh-keys"},"Using Postman to deactivate SSH keys"),(0,i.kt)("p",null,"When using Postman, make sure you have a valid token in your environment variable (for instructions to get this token, see ",(0,i.kt)("a",{parentName:"p",href:"#token"},"Getting authentication token"),". "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Collections or APIs section, navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws/api/key-pairs/{key Pair Id}")," API."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"PUT Deactivate key pair"),". "),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Params")," section, paste the SSH key Id from the output of the failed deployment in the path variable for keyPairId."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Send"),".")),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/deactivate_ssh_key.png")}),(0,i.kt)("h3",{id:"using-command-line-to-deactivate-ssh-keys"},"Using command line to deactivate SSH keys"),(0,i.kt)("p",null,"When using command line, make sure you have a valid token. For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"p",href:"#token"},"Getting authentication token"),". In your terminal, paste and substitute the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request PUT 'http://{{baseURL}}/api/key-pairs/{{keyPairId}}/deactivate' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{token}}' \\\n--data-raw '{\n \"rev\": 0\n}'\n")),(0,i.kt)("h2",{id:"disassociating-projects"},"Disassociating projects"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Within the Service Workbench UI, go to the Users page and choose the Users tab. "),(0,i.kt)("li",{parentName:"ol"},"For any user that the identity prover is internal, if the Project column has a value other than none, choose ",(0,i.kt)("strong",{parentName:"li"},"Detail"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Edit"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"X")," next to any values in the ",(0,i.kt)("strong",{parentName:"li"},"Project")," field. "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Save")," and repeat for all internal authentication users. ")),(0,i.kt)("h2",{id:"disassociating-organization-studies"},"Disassociating organization studies"),(0,i.kt)("p",null,"Using Service Workbench UI to disassociate organization studies\nIf you attempt to deploy the newest version of Service Workbench, the output of the failed upgrade should list the organization studies and their administrators you need to disassociate with internal authentication users. A Service Workbench administrator user can change permissions on any organization study using the ",(0,i.kt)("inlineCode",{parentName:"p"},"{{baseURL}}/api/studies/:studyId/permissions")," API. Repeat whichever process you choose for each organization study that needs to have permissions edited. You can combine removing multiple users from the same organization study but can only edit one study per request."),(0,i.kt)("h3",{id:"using-postman-to-disassociate-organization-study"},"Using Postman to disassociate organization study"),(0,i.kt)("p",null,"When using Postman, make sure you have a valid token in your environment variable. For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"p",href:"#token"},"Getting authentication token"),". "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Collections or APIs section, navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws/api/studies/{study Id}/permissions")," API. "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"PUT update study permissions"),". "),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Params")," section, paste an organization studyId from the output of the failed deployment in the path variable for studyId. "),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Body")," section, add the user Ids of the users you want to add and to remove and their respective permission levels. "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Send"),".")),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/diss_org_study.png")}),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/diss_org_study1.png")}),(0,i.kt)("h3",{id:"using-command-line-to-disassociate-organization-study"},"Using command line to disassociate organization study"),(0,i.kt)("p",null,"When using command line, make sure you have a valid token. For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"p",href:"#token"},"Getting authentication token"),". In your terminal, paste and substitute the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request PUT \'http://{{baseURL}}/api/studies/{{study-id}}/permissions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{token}}\' \\\n--data-raw \'{\n "usersToAdd": [\n {\n "uid": "u-HJtc1fiQnF5XNmrIu6KLU",\n "permissionLevel": "admin"\n }\n ],\n "usersToRemove": [\n {\n "uid": "u-ebgwibnfdbv57uyeuygrf8",\n "permissionLevel": "readonly"\n }\n ]\n}\'\n')),(0,i.kt)("p",null,"Before you proceed to the last step, try to deploy to upgrade to the newest version of Service Workbench. If any checks besides the check for internal authentication users do not pass, remedy that by repeating the respective step above before proceeding in this document."),(0,i.kt)("h2",{id:"deactivating-internal-authentication-users"},"Deactivating internal authentication users"),(0,i.kt)("p",null,"This is the last step. To deactivate internal authentication users: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the Service Workbench UI, go to the ",(0,i.kt)("strong",{parentName:"li"},"Users")," page.   "),(0,i.kt)("li",{parentName:"ol"},"For each internal user, choose ",(0,i.kt)("strong",{parentName:"li"},"Detail"),".   "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Deactivate User"),". Only the root user can deactivate itself. You must have Service Workbench version 4.2.0 or later deployed to deactivate the root user as itself. Deactivate the root user after at least one external authentication user has been created.   "),(0,i.kt)("li",{parentName:"ol"},"To deactivate the root user, log in to the Service Workbench UI as the internal authentication root user.   "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Detail"),".   "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Deactivate user"),". You immediately lose access to the UI if you are logged into the user account you just deactivated.   ")),(0,i.kt)("p",null,"After completing all of those steps, you are now ready to deploy and see if you pass all of the checks. If a check does not pass, check the output on the command line and repeat the step to deactivate/terminate/disassociate the listed resource. Check the CloudWatch log for predeployment in the main account for more information. There should be additional logging there to help debug. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important"),": After the upgrade to Service Workbench 5.0.0, My Studies owned by internal users would need to be transferred over to external IdP/Cognito native users. Service Workbench administrator must migrate these My Studies to the respective external authentication users after deployment. Administrators are responsible for completing this migration. This can be done by utilizing an API tool of choice. For instructions on how to complete this migration, see ",(0,i.kt)("a",{parentName:"p",href:"#migrating"},"Migrating My Study resources"),"."),(0,i.kt)("h2",{id:"setting-up-postman-for-service-workbench"},"Setting up Postman for Service Workbench"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"),".   ",(0,i.kt)("a",{name:"setpostman"})),(0,i.kt)("li",{parentName:"ol"},"After opening Postman, either sign in, create a free account, or continue to app without signing in (there should be an option for this at the bottom).    "),(0,i.kt)("li",{parentName:"ol"},"On the navigation pane, choose ",(0,i.kt)("strong",{parentName:"li"},"Import"),".    "),(0,i.kt)("li",{parentName:"ol"},"Import ",(0,i.kt)("inlineCode",{parentName:"li"},"openapi.yml")," from the Service Workbench repository. This imports the APIs as a collection if you are not logged in.      "),(0,i.kt)("li",{parentName:"ol"},"Choose the ",(0,i.kt)("strong",{parentName:"li"},"Environment quick look")," icon.  ")),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/setting_postman1.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Environment")," section, either choose ",(0,i.kt)("strong",{parentName:"li"},"Add")," (if you do not have an environment yet set for the Service Workbench environment you need to edit) or select the environment that corresponds to the Service Workbench environment you are preparing for upgrade. It will appear as:   ")),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/setting_postman2.png")}),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/setting_postman3.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"If you are adding a new environment, you will need to add two new variables.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl")," variable. The value should be the API endpoint for the Service Workbench environment. This can be found in the information displayed after deployed the environment or after running ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts/get-info.sh <stage>")," in your ",(0,i.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws")," repository folder: ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},":::service-workbench-on-aws % scripts/get-info.sh stage   \nSTAGE supplied as command line argument: stage   \n-------------------------------------------------------------------------  \nSummary:   \n-------------------------------------------------------------------------   \nEnv Name  :stage   \nSolution  : sw    \nWebsite URL : https://------------.cloudfront.net\nAPI Endpoint  : https://----------.execute-api.us-east-1.amazonaws.com/  stage\n...    \n-------------------------------------------------------------------------\n"))),(0,i.kt)("li",{parentName:"ul"},"Create a token variable. For more information on how to set this value, see ",(0,i.kt)("a",{parentName:"li",href:"#token"},"Getting authentication token"),". Save these values and set this environment as active by choosing the three dots at the top of the panel and then choosing ",(0,i.kt)("strong",{parentName:"li"},"Set as active environment"),". Now, when you choose the ",(0,i.kt)("strong",{parentName:"li"},"Environment quick look")," icon, you should see the information you just added. If you are using an existing environment, navigate to that environment from the dropdown that displays your current active environment.     ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Choose the desired environment.        "),(0,i.kt)("li",{parentName:"ul"},"Set this environment as active by choosing the three dots at the top of the panel and then choosing ",(0,i.kt)("strong",{parentName:"li"},"Set as active environment"),".   "))))),(0,i.kt)("li",{parentName:"ol"},"Now, when you choose the ",(0,i.kt)("strong",{parentName:"li"},"Environment quick look")," icon, you should be able to view the environment\u2019s information.   "),(0,i.kt)("li",{parentName:"ol"},"If you have not set it up yet (only in the case of existing environments) navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Authorization")," tab for the ",(0,i.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws")," collection or API.   "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Type")," drop-down, choose ",(0,i.kt)("strong",{parentName:"li"},"Bearer Token"),".    "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Token"),", enter ",(0,i.kt)("inlineCode",{parentName:"li"},"{{token}}"),".   "),(0,i.kt)("li",{parentName:"ol"},"Save this configuration.    ")),(0,i.kt)("h2",{id:"getting-authentication-token"},"Getting authentication token"),(0,i.kt)("h3",{id:"using-service-workbench-ui"},"Using Service Workbench UI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to Service Workbench on your web browser. ",(0,i.kt)("a",{name:"token"})),(0,i.kt)("li",{parentName:"ol"},"Right click and inspect the page to display the developer console. "),(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Network")," tab. "),(0,i.kt)("li",{parentName:"ol"},"Choose another page within the Service Workbench UI. "),(0,i.kt)("li",{parentName:"ol"},"You should see items populate in the ",(0,i.kt)("strong",{parentName:"li"},"Name")," column. "),(0,i.kt)("li",{parentName:"ol"},"Choose one of them and then choose the ",(0,i.kt)("strong",{parentName:"li"},"Headers")," tab. "),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Request Headers")," section, there should be an authorization property"),(0,i.kt)("li",{parentName:"ol"},"Copy that value. This is your authentication token.")),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/setting_postman4.png")}),(0,i.kt)("h2",{id:"migrating-my-study-resources"},"Migrating My Study resources"),(0,i.kt)("p",null,"We will be using API calls to migrate My Study resources.",(0,i.kt)("a",{name:"migrating"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you do not know which My Study resources you need to migrate, first use the ",(0,i.kt)("inlineCode",{parentName:"li"},"{{baseUrl}}/api/migrate/my-studies GET")," API. When using Postman, make sure you have a valid token in your environment variable. For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"li",href:"#token"},"Getting authentication token"),".     ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the Collections or APIs section, navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws/api/migrate/my-studies")," API.    "),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"GET list My Study(s)")," in environment.     "),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Send"),". The response will either be an empty list or a list of My Study Ids and current owner user IDs. In the former case, nothing more is needed to be done in this section as no migration of My Study resources is needed.   "),(0,i.kt)("li",{parentName:"ul"},"For command line, make sure you have a valid token. For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"li",href:"#token"},"Getting authentication token"),". In your terminal paste and substitute the following:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  ```\n  curl --location --request GET 'https://{{baseUrl}}/api/migrate/my-studies' \\\n  --header 'Authorization: Bearer {{token}}'\n  ```       \n"))))),(0,i.kt)("li",{parentName:"ol"},"If you have My Study resources to migrate, you can make one API call to the ",(0,i.kt)("inlineCode",{parentName:"li"},"{{baseUrl}}/api/migrate/my-studies PUT")," API. You need to have the list of study IDs you wish to migrate and the non-internal authentication user IDs to whom you wish to migrate the ownership.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Postman, make sure you have a valid token in your environment variable For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"li",href:"#token"},"Getting authentication token"),".       "),(0,i.kt)("li",{parentName:"ul"},"In the Collections or APIs section, navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws/api/migrate/my-studies")," API.    "),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"PUT migrate My Study(s) to new user(s)"),".           "),(0,i.kt)("li",{parentName:"ul"},"In the body section, create objects with studyId and uid values.    "),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Send"),".")),(0,i.kt)("img",{src:(0,r.Z)("img/deployment/installation/migrating_my_studies.png")}),(0,i.kt)("p",null,"For command line, make sure you have a valid token. For more information on how to get this token, see ",(0,i.kt)("a",{parentName:"p",href:"#token"},"Getting authentication token"),". In your terminal paste and substitute the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request PUT \'https://{{baseUrl}}/api/migrate/my-studies\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{token}}\' \\\n--data-raw \'[\n {\n "studyId": "test_study_id",\n "uid": "u-C-l14OuIfNk7vL7AqmjvC"\n },\n {\n "studyId": "test_study_id",\n "uid": "u-C-l14OuIfNk7vL7AqmjvC"\n }\n]\'\n')),(0,i.kt)("p",null,"You can verify that all My Study resources are migrated by repeating step 1."))}p.isMDXComponent=!0}}]);