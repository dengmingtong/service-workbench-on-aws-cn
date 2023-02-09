"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[6410],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8406:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"prereq_commands",title:"Prerequisite Software",sidebar_label:"Prerequisite Software"},c=void 0,s={unversionedId:"deployment/pre_deployment/prereq_commands",id:"deployment/pre_deployment/prereq_commands",title:"Prerequisite Software",description:"The prerequisite software installation includes installing the required tools and creating an AWS account to deploy the solution.",source:"@site/docs/deployment/pre_deployment/prereq_commands.md",sourceDirName:"deployment/pre_deployment",slug:"/deployment/pre_deployment/prereq_commands",permalink:"/service-workbench-on-aws-cn/deployment/pre_deployment/prereq_commands",draft:!1,tags:[],version:"current",frontMatter:{id:"prereq_commands",title:"Prerequisite Software",sidebar_label:"Prerequisite Software"}},u={},p=[{value:"Install the Required Tools",id:"install-the-required-tools",level:2},{value:"AWS Account and Access",id:"aws-account-and-access",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The prerequisite software installation includes installing the required tools and creating an AWS account to deploy the solution."),(0,a.kt)("h2",{id:"install-the-required-tools"},"Install the Required Tools"),(0,a.kt)("p",null,"Before building this solution, you must install the tools that are listed below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (14.x or later)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS Command Line Interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pnpm.js.org/"},"PNPM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.serverless.com"},"Serverless Framework")," (v3)")),(0,a.kt)("h2",{id:"aws-account-and-access"},"AWS Account and Access"),(0,a.kt)("p",null,"To deploy the solution into an account, perform the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new AWS account or use an existing AWS account."),(0,a.kt)("li",{parentName:"ol"},"Using this account, create an AWS ",(0,a.kt)("strong",{parentName:"li"},"IAM User")," and set up a named profile on your development machine with appropriate access keys and permissions to deploy resources into the account."),(0,a.kt)("li",{parentName:"ol"},"Save the credentials in ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.aws/credentials"),", the location where the framework will look in order to deploy.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more information on configuring the AWS Command Line Interface (CLI) profiles, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"Named Profiles")," in the ",(0,a.kt)("em",{parentName:"p"},"AWS Command Line Interface User Guide"),".")))}d.isMDXComponent=!0}}]);