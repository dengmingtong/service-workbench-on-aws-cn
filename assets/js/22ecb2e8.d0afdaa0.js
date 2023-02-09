"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4996),c=["components"],l={id:"prepare_master_account",title:"Prepare the organizational account",sidebar_label:"Prepare the organizational Account"},s=void 0,p={unversionedId:"deployment/reference/prepare_master_account",id:"deployment/reference/prepare_master_account",title:"Prepare the organizational account",description:"Note: This section is required only if Service Workbench is to be used to vend accounts in the AWS Organization by using Create Account. If Service Workbench uses only billing accounts onboarded using Add Account, this section can be omitted.",source:"@site/docs/deployment/reference/prepare_master_account.md",sourceDirName:"deployment/reference",slug:"/deployment/reference/prepare_master_account",permalink:"/service-workbench-on-aws-cn/deployment/reference/prepare_master_account",draft:!1,tags:[],version:"current",frontMatter:{id:"prepare_master_account",title:"Prepare the organizational account",sidebar_label:"Prepare the organizational Account"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Account structure",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/account_structure"},next:{title:"Prepare your account for AppStream",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/appstream"}},u={},m=[{value:"Create a Configuration File",id:"create-a-configuration-file",level:3},{value:"Enable AWS Organizations in the organizational account",id:"enable-aws-organizations-in-the-organizational-account",level:3},{value:"Deploy the prepare master account SDC",id:"deploy-the-prepare-master-account-sdc",level:3},{value:"Confirm the creation of organizational role",id:"confirm-the-creation-of-organizational-role",level:3}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": ",(0,o.kt)("em",{parentName:"p"},"This section is required only if Service Workbench is to be used to vend accounts in the AWS Organization by using ",(0,o.kt)("strong",{parentName:"em"},"Create Account"),". If Service Workbench uses only billing accounts onboarded using ",(0,o.kt)("strong",{parentName:"em"},"Add Account"),", this section can be omitted.")),(0,o.kt)("p",null,"In this step, you deploy the prepare_master_acc Separately Deployable Component (SDC) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main/solution/prepare-master-acc")," directory. This creates a role in the organizational account that allows ",(0,o.kt)("inlineCode",{parentName:"p"},"AssumeRole"),", and has the main account as its trusted entity. If you have deployed Service Workbench in an organizational account, the main account is also the organizational account, and the trusted entity is the same account ID as the organizational account."),(0,o.kt)("p",null,"The default settings in this step are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Main Account ID"),": The current AWS Account ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"External ID"),": The string ",(0,o.kt)("strong",{parentName:"li"},"workbench"))),(0,o.kt)("p",null,"These default values are sufficient if you are deploying Service Workbench to an organizational account, and the default profile has permissions for the organizational account, since the main account is also the organizational account. If deploying Service Workbench to the main AWS account that is not the same account as the organizational account, you must create a configuration file to specify the main account ID and the profile to use. This profile must have permissions for the organizational account."),(0,o.kt)("h3",{id:"create-a-configuration-file"},"Create a Configuration File"),(0,o.kt)("p",null,"If deploying Service Workbench in an account other than that accessed by the current default profile, create a stage-named configuration file in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"main/solution/prepare-master-acc/config/settings")," by copying ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<stage>.yml"),".  Edit the file as appropriate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"awsProfile"),": The AWS Credentials profile with permissions for the Master account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mainAccountID"),": The 12 digit AWS Account ID for the Main AWS account, where the solution is deployed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"externalId"),": As desired.  The string ",(0,o.kt)("strong",{parentName:"li"},"workbench")," is often used.  This string will be needed when creating an AWS account within Service Workbench.")),(0,o.kt)("h3",{id:"enable-aws-organizations-in-the-organizational-account"},"Enable AWS Organizations in the organizational account"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/console/?nc2=type_a"},"AWS Management Console"),", navigate to AWS Organizations to ensure that an organization exists for the organizational account. If it does not, then create a new one. There is no configuration setting. Service Workbench creates a new account in the AWS Organizations for this deployment, named after the stage name used at deployment."),(0,o.kt)("h3",{id:"deploy-the-prepare-master-account-sdc"},"Deploy the prepare master account SDC"),(0,o.kt)("p",null,"To deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"prepare_master_acc")," SDC, perform the following: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read the file: ",(0,o.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"),".  "),(0,o.kt)("li",{parentName:"ol"},"Deploy the orhanizational account SDC from the directory,  ",(0,o.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.sh}"},"    pnpx sls deploy --stage <stage>\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To display the ARN of the organizational role from the same directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.sh}"},"    pnpx sls info --verbose --stage <stage>\n")),(0,o.kt)("p",null,"The organizational role ARN will be needed when adding accounts within Service Workbench."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note"),": Running the convenience script ",(0,o.kt)("inlineCode",{parentName:"em"},"scripts/master-account-deploy.sh <stage>")," will perform the same steps as ",(0,o.kt)("inlineCode",{parentName:"em"},"pnpx sls deploy"),", above.")),(0,o.kt)("h3",{id:"confirm-the-creation-of-organizational-role"},"Confirm the creation of organizational role"),(0,o.kt)("p",null,"The newly-created role will contain the String ",(0,o.kt)("strong",{parentName:"p"},"MasterRole"),". It has two policies and trusts the main account. "),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/prepare_master_account_0.jpg")}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Figure: Permissions policies"))),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/prepare_master_account_1.jpg")}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Figure: Edit trust relationships"))))}h.isMDXComponent=!0}}]);