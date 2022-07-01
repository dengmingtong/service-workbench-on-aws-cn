"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[883],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1204:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={id:"accounts",title:"Prerequisites",sidebar_label:"Prerequisites"},u=void 0,s={unversionedId:"deployment/pre_deployment/accounts",id:"deployment/pre_deployment/accounts",isDocsHomePage:!1,title:"Prerequisites",description:"The initial prerequisites include creating a Main account in AWS and setting up the AWS Cost Explorer.",source:"@site/docs/deployment/pre_deployment/prerequisites.md",sourceDirName:"deployment/pre_deployment",slug:"/deployment/pre_deployment/accounts",permalink:"/service-workbench-on-aws-cn/deployment/pre_deployment/accounts",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/deployment/pre_deployment/prerequisites.md",tags:[],version:"current",frontMatter:{id:"accounts",title:"Prerequisites",sidebar_label:"Prerequisites"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The initial prerequisites include creating a ",(0,c.kt)("strong",{parentName:"p"},"Main")," account in AWS and setting up the ",(0,c.kt)("strong",{parentName:"p"},"AWS Cost Explorer"),"."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Main Account"),":\nMain account is the AWS account where Service Workbench will be deployed. This account is billed for all resources deployed by user accounts that are linked to it. ")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"AWS Cost Explorer"),":\nTo see the actual cost in dashboards and workspaces, you must set up a master account in AWS Cost Explorer. The master account holds the AWS Organization which creates member accounts.")))}d.isMDXComponent=!0}}]);