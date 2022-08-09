"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[2852],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9963:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),s=["components"],c={id:"aws_services",title:"Usage of AWS Cloud Services",sidebar_label:"AWS Cloud Services"},l=void 0,u={unversionedId:"deployment/reference/aws_services",id:"deployment/reference/aws_services",isDocsHomePage:!1,title:"Usage of AWS Cloud Services",description:"This section describes some of the AWS Cloud services used by Service Workbench. The resource names usually include the Namespace, including the  stage name used at deployment. You can deploy multiple instances of Service Workbench from the same account if you use a different stage name for each deployment.",source:"@site/docs/deployment/reference/aws_services.md",sourceDirName:"deployment/reference",slug:"/deployment/reference/aws_services",permalink:"/service-workbench-on-aws-cn/deployment/reference/aws_services",editUrl:"/edit/develop/docs/docs/deployment/reference/aws_services.md",tags:[],version:"current",frontMatter:{id:"aws_services",title:"Usage of AWS Cloud Services",sidebar_label:"AWS Cloud Services"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Add an AWS IAM role to an Amazon EC2 instance",permalink:"/service-workbench-on-aws-cn/deployment/reference/iam_role"},next:{title:"Prepare the organizational Account",permalink:"/service-workbench-on-aws-cn/deployment/reference/prepare_master_account"}},p=[{value:"Amazon EC2",id:"amazon-ec2",children:[],level:3},{value:"AWS IAM role",id:"aws-iam-role",children:[],level:3},{value:"AWS Organizations",id:"aws-organizations",children:[],level:3},{value:"Amazon S3",id:"amazon-s3",children:[],level:3},{value:"AWS Cost Explorer",id:"aws-cost-explorer",children:[],level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes some of the AWS Cloud services used by Service Workbench. The resource names usually include the ",(0,o.kt)("strong",{parentName:"p"},"Namespace"),", including the  ",(0,o.kt)("a",{parentName:"p",href:"/deployment/pre_deployment/configuration#Namespace"},(0,o.kt)("strong",{parentName:"a"},"stage name"))," used at deployment. You can deploy multiple instances of Service Workbench from the same account if you use a different stage name for each deployment."),(0,o.kt)("h3",{id:"amazon-ec2"},"Amazon EC2"),(0,o.kt)("p",null,"Amazon EC2 is used only as a platform from which to deploy Service Workbench. For more details see the ",(0,o.kt)("a",{parentName:"p",href:"/deployment/pre_deployment/deployment_instance"},"Deployment Instance")," section. "),(0,o.kt)("h3",{id:"aws-iam-role"},"AWS IAM role"),(0,o.kt)("p",null,"Service Workbench creates several roles in your account. The role ",(0,o.kt)("inlineCode",{parentName:"p"},"<namespace>-prep-raas-master-MasterRole-XXX")," is created when you run the  ",(0,o.kt)("a",{parentName:"p",href:"/deployment/post_deployment/index"},"post deployment")," SDC.  This role possesses a trust relationship with the Main account from which you deployed Service Workbench. There are two polices that allow the main account to assume a role in this management account. The ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/account_structure"},"account structure")," defines each type of account. ",(0,o.kt)("strong",{parentName:"p"},"Figure 32")," shows the AWS IAM \u2018",(0,o.kt)("strong",{parentName:"p"},"Trust Relationships"),"\u2019 tab. "),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/reference/iam_role_00.jpg"),width:"350"}),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/reference/iam_role_01.jpg"),width:"350"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Figure 32: AWS IAM Trust Relationships Tab"))),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html"},"external ID"),"is associated with the role. The External ID is an identifying string that is provided once a role is created. In order for the trusted entity (your Main account) to assume its role in the management account, it must supply this external ID. Providing the external ID of establishes a revocable relationship between the trusted entity and the management account."),(0,o.kt)("p",null,"In the current Service Workbench deployment, the External ID is configured as a default value in the following string workbench: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"main/solution/prepare-master-acc/config/settings/.defaults.yml\n")),(0,o.kt)("p",null,"To change this value, create a stage-named configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"mystagename.yml"),") in the same directory. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"/deployment/pre_deployment/configuration"},"Configuration")," section. The following figure displays a screenshot image of the conditions that define how ",(0,o.kt)("strong",{parentName:"p"},"Trusted Entities")," assume a role."),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/reference/iam_role_02.jpg"),width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Figure: Defining Conditions for Trusted Entities"))),(0,o.kt)("h3",{id:"aws-organizations"},"AWS Organizations"),(0,o.kt)("p",null,"An AWS Organization is created in the ",(0,o.kt)("strong",{parentName:"p"},"Master")," account. The management account is discussed in the ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/account_structure"},"Account Structure")," section in more detail. The AWS Organization use the management account to create a separate account for each deployment. The account\u2019s name is the stage name used. The following figure shows a screenshot image of the AWS Organizations \u2018",(0,o.kt)("strong",{parentName:"p"},"Accounts"),"\u2019 tab. "),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/reference/organizations_01.jpg"),width:"500"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Figure: AWS Organizations account page"))," "),(0,o.kt)("h3",{id:"amazon-s3"},"Amazon S3"),(0,o.kt)("p",null,"Multiple Amazon S3 buckets are created by Service Workbench. Filtering by ",(0,o.kt)("strong",{parentName:"p"},"Stage Name")," shows the Amazon S3 buckets for a deployment. The following figure shows the Amazon S3 buckets for the Service Workbench deployment. "),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/reference/s3_00.jpg"),width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Figure: Amazon S3 Buckets for a Service Workbench Deployment"))),(0,o.kt)("p",null,"The '",(0,o.kt)("strong",{parentName:"p"},"studydata"),"' bucket contains all the data for the various ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/sidebar/common/studies/introduction"},"Studies")," in this deployment at the individual and organization level. The following displays an image of the contents within the studydata bucket.  "),(0,o.kt)("img",{src:(0,i.Z)("img/deployment/reference/s3_01.jpg"),width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Figure: Amazon S3 StudyData Bucket"))),(0,o.kt)("h3",{id:"aws-cost-explorer"},"AWS Cost Explorer"),(0,o.kt)("p",null,"Service Workbench has the ability to show actual cost incurred by workspaces running under the management account. This is using the AWS Cost Explorer service in the AWS Management Console. AWS Cost Explorer must be manually set up for each management account once in order to allow requests for cost data to process. Setting this up requires background processes to complete in the management account, which can take up to 24 hours."))}d.isMDXComponent=!0}}]);