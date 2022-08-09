"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4996),c=["components"],s={id:"architecture",title:"Service Workbench architecture",sidebar_label:"Service Workbench architecture"},l=void 0,u={unversionedId:"installation_guide/architecture",id:"installation_guide/architecture",isDocsHomePage:!1,title:"Service Workbench architecture",description:"Service Workbench integrates existing AWS services, such as Amazon CloudFront, AWS Lambda, and AWS Step Functions. Service Workbench enables you to create your own custom templates and share those templates with other organizations. To provide cost transparency, Service Workbench has been integrated with AWS Cost Explorer, AWS Budgets, and AWS Organizations.",source:"@site/docs/installation_guide/architecture.md",sourceDirName:"installation_guide",slug:"/installation_guide/architecture",permalink:"/service-workbench-on-aws-cn/installation_guide/architecture",editUrl:"/edit/develop/docs/docs/installation_guide/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Service Workbench architecture",sidebar_label:"Service Workbench architecture"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Service Workbench overview",permalink:"/service-workbench-on-aws-cn/installation_guide/overview"},next:{title:"Installation components",permalink:"/service-workbench-on-aws-cn/installation_guide/components"}},d=[{value:"Main account",id:"main-account",children:[],level:3},{value:"Hosting account",id:"hosting-account",children:[],level:3},{value:"Authentication",id:"authentication",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3},{value:"AWS Service Catalog",id:"aws-service-catalog",children:[],level:3},{value:"Workspace management",id:"workspace-management",children:[],level:3},{value:"Cost control",id:"cost-control",children:[{value:"Accounts, indexes, and projects",id:"accounts-indexes-and-projects",children:[],level:4},{value:"Dashboard",id:"dashboard",children:[],level:4}],level:3},{value:"Workspace sizes",id:"workspace-sizes",children:[],level:3}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Service Workbench integrates existing AWS services, such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"},"Amazon CloudFront"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"},"AWS Lambda"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-stepfunctions.html"},"AWS Step Functions"),". Service Workbench enables you to create your own custom templates and share those templates with other organizations. To provide cost transparency, Service Workbench has been integrated with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-getting-started.html"},"AWS Cost Explorer"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html"},"AWS Budgets"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"},"AWS Organizations"),"."),(0,o.kt)("h3",{id:"main-account"},"Main account"),(0,o.kt)("p",null,"This is the account where Service Workbench infrastructure is deployed."),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/installation/main_account.png")}),(0,o.kt)("h3",{id:"hosting-account"},"Hosting account"),(0,o.kt)("p",null,"This is the account where compute resources are deployed."),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/installation/hosting_account.png")}),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Service Workbench on AWS can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"},"Amazon Cognito")," as a source of authentication. Amazon Cognito can federate with different authentication providers, which make it easier to federate with Active Directory, Auth0, or other identity providers."),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("p",null,"Service Workbench distinguishes between three types of research study data: My Studies, Organizational Studies, and Open Data. The former two are datasets stored and maintained either by you or the overall organization or groups. Open Data refers to data available through open data on AWS. Frequent scans against the open dataset ensure that latest open datasets are available to users."),(0,o.kt)("h3",{id:"aws-service-catalog"},"AWS Service Catalog"),(0,o.kt)("p",null,"The core of the Workspace management in Service Workbench is ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc"},"AWS Service Catalog"),". Here, the system finds and manages the templates that are used to define Workspaces. When you want to use a new Workspace type, it can be created as an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},"AWS CloudFormation template")," inside AWS Service Catalog. "),(0,o.kt)("h3",{id:"workspace-management"},"Workspace management"),(0,o.kt)("p",null,"Besides provisioning an environment using templates, you can access your Workspaces, view billing details, or decommission them."),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/installation/workspace_management.png")}),(0,o.kt)("h3",{id:"cost-control"},"Cost control"),(0,o.kt)("h4",{id:"accounts-indexes-and-projects"},"Accounts, indexes, and projects"),(0,o.kt)("p",null,"Service Workbench uses AWS accounts to manage compute Workspaces. This way, you can use different accounts for different projects, cost centers, or another purpose and manage cost. With the vending capability, an administrator can generate new AWS accounts under the same AWS Organizations by using the Service Workbench interface."),(0,o.kt)("h4",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"A dashboard displays a quick overview of the cost your Workspaces or projects have accumulated. This helps you to stay on budget and track Workspaces that possibly consume more resources."),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/installation/dashboard.png")}),(0,o.kt)("h3",{id:"workspace-sizes"},"Workspace sizes"),(0,o.kt)("p",null,"When you create a Workspace from a template, you can choose the Workspace type in addition to multiple environment sizes. An administrator can pre-define these sizes and associate them with users based on individual permissions."),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/installation/workspace_sizes.png")}))}h.isMDXComponent=!0}}]);