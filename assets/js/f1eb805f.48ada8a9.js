"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9442],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||c;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={id:"account_structure",title:"\u8d26\u6237\u7ed3\u6784",sidebar_label:"\u8d26\u6237\u7ed3\u6784"},u=void 0,l={unversionedId:"zh/post_deployment/account_structure",id:"zh/post_deployment/account_structure",isDocsHomePage:!1,title:"\u8d26\u6237\u7ed3\u6784",description:"Service Workbench \u4f7f\u7528\u4e09\u79cd\u7c7b\u578b\u7684\u5e10\u6237\u3002\u60a8\u5c06\u5728\u6574\u4e2a\u6587\u6863\u4e2d\u770b\u5230\u8fd9\u4e9b\u5e10\u6237\u540d\u79f0\u3002",source:"@site/docs/zh/post_deployment/account_structure.md",sourceDirName:"zh/post_deployment",slug:"/zh/post_deployment/account_structure",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/account_structure",editUrl:"/edit/develop/docs/docs/zh/post_deployment/account_structure.md",tags:[],version:"current",frontMatter:{id:"account_structure",title:"\u8d26\u6237\u7ed3\u6784",sidebar_label:"\u8d26\u6237\u7ed3\u6784"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u5b89\u88c5\u540e\u6982\u89c8",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/index"},next:{title:"\u521b\u5efa\u6216\u6dfb\u52a0\u8d26\u6237",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/aws_accounts"}},p=[],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Service Workbench \u4f7f\u7528",(0,c.kt)("em",{parentName:"p"},"\u4e09\u79cd"),"\u7c7b\u578b\u7684\u5e10\u6237\u3002\u60a8\u5c06\u5728\u6574\u4e2a\u6587\u6863\u4e2d\u770b\u5230\u8fd9\u4e9b\u5e10\u6237\u540d\u79f0\u3002"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Organizational")," \uff1a\u6301\u6709\u521b\u5efa\u6258\u7ba1\u8d26\u6237\u7684AWS Organizatio\u670d\u52a1\u7684\u8d26\u6237\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u53ef\u80fd\u5df2\u7ecf\u6709\u4e86\u83b7\u53d6\u7ec4\u7ec7\u652f\u6301\u7684 AWS \u8d26\u6237\u7684\u65b9\u6cd5\u3002\u5982\u679c\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u60a8\u5c06\u4e0d\u4f1a\u5728\u52a0\u5165\u4e3b\u673a\u5e10\u6237\u65f6\u521b\u5efa\u7ec4\u7ec7\u5e10\u6237\u6216\u4f7f\u7528 Service Workbench \u4e2d\u7684\u521b\u5efa\u5e10\u6237\u529f\u80fd\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Main"),"\uff1a\u90e8\u7f72 Service Workbench \u7684\u5e10\u6237\u3002\u5c06\u4e3a\u6b64\u90e8\u7f72\u4e2d\u7684\u6240\u6709 AWS \u4f7f\u7528\u8d39\u7528\u4ed8\u8d39\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Master"),"\uff1a\u6301\u6709\u521b\u5efa\u6210\u5458\u8d26\u6237\u7684 AWS Organization\u670d\u52a1\u7684\u8d26\u6237\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u6258\u7ba1\u8d26\u6237"),"\uff1a\u901a\u8fc7\u8d26\u53f7\u52a0\u5165\u6d41\u7a0b\u5efa\u7acb\u7684\u4e0e Service Workbench \u4e3b\u8d26\u6237\u5173\u8054\u7684\u8d26\u6237\uff0c\u7528\u4e8e\u6258\u7ba1\u4e0e Service Workbench \u5de5\u4f5c\u533a\u5173\u8054\u7684\u8ba1\u7b97\u8d44\u6e90\uff08Amazon SageMaker \u7b14\u8bb0\u672c\u5b9e\u4f8b\u3001Amazon EC2 Windows \u548c Linux \u5b9e\u4f8b\u3001Amazon EMR \u96c6\u7fa4\uff09\u3002")),(0,c.kt)("p",null,"\u9605\u8bfb\u6e90\u4ee3\u7801\u6587\u6863\u4e2d\u7684\u4ee5\u4e0b\u6587\u4ef6\uff0c\u4e86\u89e3\u6709\u5173 Service Workbench \u4e2d\u4e0d\u540c\u7c7b\u578b\u7684 AWS \u8d26\u6237\u7684\u66f4\u591a\u4fe1\u606f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"README.md")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"))))}m.isMDXComponent=!0}}]);