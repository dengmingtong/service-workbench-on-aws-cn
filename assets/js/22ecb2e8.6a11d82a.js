"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),c=["components"],l={id:"prepare_master_account",title:"Prepare the organizational account",sidebar_label:"Prepare the organizational Account"},s=void 0,p={unversionedId:"deployment/reference/prepare_master_account",id:"deployment/reference/prepare_master_account",isDocsHomePage:!1,title:"Prepare the organizational account",description:"Note: This section is required only if Service Workbench is to be used to vend accounts in the AWS Organization by using *Create Account. If Service Workbench uses only billing accounts onboarded using Add Account*, this section can be omitted.",source:"@site/docs/deployment/reference/prepare_master_account.md",sourceDirName:"deployment/reference",slug:"/deployment/reference/prepare_master_account",permalink:"/service-workbench-on-aws-cn/deployment/reference/prepare_master_account",editUrl:"/edit/develop/docs/docs/deployment/reference/prepare_master_account.md",tags:[],version:"current",frontMatter:{id:"prepare_master_account",title:"Prepare the organizational account",sidebar_label:"Prepare the organizational Account"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Account structure",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/account_structure"},next:{title:"Prepare your account for AppStream",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/appstream"}},u=[{value:"Create a Configuration File",id:"create-a-configuration-file",children:[],level:3},{value:"Enable AWS Organizations in the organizational account",id:"enable-aws-organizations-in-the-organizational-account",children:[],level:3},{value:"Deploy the prepare master account SDC",id:"deploy-the-prepare-master-account-sdc",children:[],level:3},{value:"Confirm the creation of organizational role",id:"confirm-the-creation-of-organizational-role",children:[],level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": ",(0,o.kt)("em",{parentName:"p"},"This section is required only if Service Workbench is to be used to vend accounts in the AWS Organization by using ",(0,o.kt)("strong",{parentName:"em"},"Create Account"),". If Service Workbench uses only billing accounts onboarded using ",(0,o.kt)("strong",{parentName:"em"},"Add Account"),", this section can be omitted.")),(0,o.kt)("p",null,"In this step, you deploy the prepare_master_acc Separately Deployable Component (SDC) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main/solution/prepare-master-acc")," directory. This creates a role in the organizational account that allows ",(0,o.kt)("inlineCode",{parentName:"p"},"AssumeRole"),", and has the main account as its trusted entity. If you have deployed Service Workbench in an organizational account, the main account is also the organizational account, and the trusted entity is the same account ID as the organizational account."),(0,o.kt)("p",null,"The default settings in this step are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Main Account ID"),": The current AWS Account ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"External ID"),": The string ",(0,o.kt)("strong",{parentName:"li"},"workbench"))),(0,o.kt)("p",null,"These default values are sufficient if you are deploying Service Workbench to an organizational account, and the default profile has permissions for the organizational account, since the main account is also the organizational account. If deploying Service Workbench to the main AWS account that is not the same account as the organizational account, you must create a configuration file to specify the main account ID and the profile to use. This profile must have permissions for the organizational account."),(0,o.kt)("h3",{id:"create-a-configuration-file"},"Create a Configuration File"),(0,o.kt)("p",null,"If deploying Service Workbench in an account other than that accessed by the current default profile, create a stage-named configuration file in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"main/solution/prepare-master-acc/config/settings")," by copying ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<stage>.yml"),".  Edit the file as appropriate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"awsProfile"),": The AWS Credentials profile with permissions for the Master account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mainAccountID"),": The 12 digit AWS Account ID for the Main AWS account, where the solution is deployed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"externalId"),": As desired.  The string ",(0,o.kt)("strong",{parentName:"li"},"workbench")," is often used.  This string will be needed when creating an AWS account within Service Workbench.")),(0,o.kt)("h3",{id:"enable-aws-organizations-in-the-organizational-account"},"Enable AWS Organizations in the organizational account"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/console/?nc2=type_a"},"AWS Management Console"),", navigate to AWS Organizations to ensure that an organization exists for the organizational account. If it does not, then create a new one. There is no configuration setting. Service Workbench creates a new account in the AWS Organizations for this deployment, named after the stage name used at deployment."),(0,o.kt)("h3",{id:"deploy-the-prepare-master-account-sdc"},"Deploy the prepare master account SDC"),(0,o.kt)("p",null,"To deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"prepare_master_acc")," SDC, perform the following: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read the file: ",(0,o.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"),".  "),(0,o.kt)("li",{parentName:"ol"},"Deploy the orhanizational account SDC from the directory,  ",(0,o.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.sh}"},"    pnpx sls deploy --stage <stage>\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To display the ARN of the organizational role from the same directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.sh}"},"    pnpx sls info --verbose --stage <stage>\n")),(0,o.kt)("p",null,"The organizational role ARN will be needed when adding accounts within Service Workbench."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note"),": Running the convenience script ",(0,o.kt)("inlineCode",{parentName:"em"},"scripts/master-account-deploy.sh <stage>")," will perform the same steps as ",(0,o.kt)("inlineCode",{parentName:"em"},"pnpx sls deploy"),", above.")),(0,o.kt)("h3",{id:"confirm-the-creation-of-organizational-role"},"Confirm the creation of organizational role"),(0,o.kt)("p",null,"The newly-created role will contain the String ",(0,o.kt)("strong",{parentName:"p"},"MasterRole"),". It has two policies and trusts the main account. "),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/prepare_master_account_0.jpg")}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Figure: Permissions policies"))),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/prepare_master_account_1.jpg")}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Figure: Edit trust relationships"))))}d.isMDXComponent=!0}}]);