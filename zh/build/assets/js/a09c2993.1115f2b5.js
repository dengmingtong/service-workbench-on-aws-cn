"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[4128],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=u(r),p=o,m=h["".concat(i,".").concat(p)]||h[p]||l[p]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8495:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},i=void 0,u={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Service Workbench on AWS is a self-service cloud-based open source platform using which IT teams can provide a collaborative research solution to the researchers. It integrates the existing AWS services, such as Amazon CloudFront, AWS Lambda, AWS Step Functions, and so on. Service Workbench enables you to create your own custom templates and share those templates with other organizations. To control the research cost, Service Workbench has been integrated with AWS Cost Explorer, AWS Budgets, and AWS Organizations. This provides a quick access to dashboard that shows the current use of AWS services against your budgets.  Service Workbench is also integrated with third-party service providers to enable custom integrations whenever required. Service Workbench can also mimic concepts known to users from on-premises environments to make a switch to cloud technology easier. Researchers in an organization can access a portal, quickly find data that they are interested in, with a few clicks, analyze data using machine learning service such as the Amazon SageMaker notebooks, or even manage and facilitate virtual classrooms.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/service-workbench-on-aws-cn/introduction",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"}},d=[],l={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Service Workbench on AWS is a self-service cloud-based open source platform using which IT teams can provide a collaborative research solution to the researchers. It integrates the existing AWS services, such as Amazon CloudFront, AWS Lambda, AWS Step Functions, and so on. Service Workbench enables you to create your own custom templates and share those templates with other organizations. To control the research cost, Service Workbench has been integrated with AWS Cost Explorer, AWS Budgets, and AWS Organizations. This provides a quick access to dashboard that shows the current use of AWS services against your budgets.  Service Workbench is also integrated with third-party service providers to enable custom integrations whenever required. Service Workbench can also mimic concepts known to users from on-premises environments to make a switch to cloud technology easier. Researchers in an organization can access a portal, quickly find data that they are interested in, with a few clicks, analyze data using machine learning service such as the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/sagemaker/"},"Amazon SageMaker")," notebooks, or even manage and facilitate virtual classrooms."),(0,a.kt)("p",null,"For cost control, a dashboard provides an overview of the cost workspaces or projects that have accumulated. This can help you to stay on budget and track down workspaces that possibly use up more resources than necessary. The dashboard displays the index and workspace\u2019s costs for the past 30 days and yesterday\u2019s workspace\u2019s cost. Service Workbench uses AWS accounts to manage where compute workspaces are launched and managed. This way, you can use different accounts for different projects, cost centers, or another purpose, and manage cost in detail. "),(0,a.kt)("p",null,"There are three types of Studies available in Service Workbench: My Studies, Organizational Studies and Open Data. Once you have created a Study you can upload files to it. Organizational Studies can be shared with other members in the organization. Owners of a study can amend the permissions of the study to grant access to other users. Once you have found the study or studies in which you are interested to perform research, you can deploy a workspace to attach the data to and conduct your research."))}h.isMDXComponent=!0}}]);