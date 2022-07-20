"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9760],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"postupgrade",title:"\u7cfb\u7edf\u5347\u7ea7\u540e\u5904\u7406",sidebar_label:"\u7cfb\u7edf\u5347\u7ea7\u540e\u5904\u7406"},l=void 0,s={unversionedId:"zh/installation_guide/postupgrade",id:"zh/installation_guide/postupgrade",isDocsHomePage:!1,title:"\u7cfb\u7edf\u5347\u7ea7\u540e\u5904\u7406",description:"\u66f4\u65b0\u8d26\u6237",source:"@site/docs/zh/installation_guide/postupgrade.md",sourceDirName:"zh/installation_guide",slug:"/zh/installation_guide/postupgrade",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/postupgrade",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/postupgrade.md",tags:[],version:"current",frontMatter:{id:"postupgrade",title:"\u7cfb\u7edf\u5347\u7ea7\u540e\u5904\u7406",sidebar_label:"\u7cfb\u7edf\u5347\u7ea7\u540e\u5904\u7406"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Upgrading to deprecated internal authentication",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/upgrading/authentication"},next:{title:"\u5378\u8f7d Service Workbench",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/uninstall"}},u=[{value:"\u66f4\u65b0\u8d26\u6237",id:"\u66f4\u65b0\u8d26\u6237",children:[],level:3},{value:"\u6d4b\u8bd5\u64cd\u4f5c",id:"\u6d4b\u8bd5\u64cd\u4f5c",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u66f4\u65b0\u8d26\u6237"},"\u66f4\u65b0\u8d26\u6237"),(0,o.kt)("p",null,"\u6dfb\u52a0\u5230 Service Workbench \u7684\u4efb\u4f55\u65b0\u6258\u7ba1\u5e10\u6237\u90fd\u5fc5\u987b\u4f7f\u7528\u65b0\u6743\u9650\u8fdb\u884c\u66f4\u65b0\u3002\u5bf9\u4e8e\u6b64\u8fc7\u7a0b\uff0c\u60a8\u9700\u8981 onboard-account.cfn.yml\uff0c\u5b83\u662f\u6e90\u4ee3\u7801\u5206\u53d1\u7684\u4e00\u90e8\u5206\u3002\n\u5bf9\u4e8e\u6bcf\u4e2a\u6258\u7ba1\u5e10\u6237:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u767b\u5f55\u6258\u7ba1\u8d26\u6237\u7684 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u8be5\u8d26\u6237\u7684 CloudFormation \u63a7\u5236\u53f0\u4e2d\uff0c\u9009\u62e9\u7528\u4e8e\u52a0\u5165\u6210\u5458\u8d26\u6237\u7684\u5806\u6808\uff08\u901a\u5e38\u5806\u6808\u540d\u79f0\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"li"},"initial-stack-")," \u5f00\u5934\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9Update stack\u5e76\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"li"},"addons/addon-base-raas/packages/base-raas-cfn-templates/src/templates/onboard-account.cfn.yml"),"\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd9\u91cc\u4e0b\u8f7d:",(0,o.kt)("a",{parentName:"li",href:"https://github.com/awslabs/service-workbench-on-aws/blob/mainline/addons/addon-base-raas/packages/base-raas-cfn-templates/src/%E6%A8%A1%E6%9D%BF/onboard-account.cfn.yml"},"onboard -account.cfn.yml"),"\u3002 \u8be5\u5806\u6808\u4e0a\u7684\u6240\u6709\u73b0\u6709\u53c2\u6570\u5e94\u8be5\u4ecd\u7136\u6709\u6548\u3002")),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u64cd\u4f5c"},"\u6d4b\u8bd5\u64cd\u4f5c"),(0,o.kt)("p",null,"\u90e8\u7f72\u811a\u672c\u5b8c\u6210\u4e14\u6ca1\u6709\u9519\u8bef\u540e\uff0c\u767b\u5f55\u5230 Service Workbench UI \u5e76\u6d4b\u8bd5\u5176\u529f\u80fd\u3002\u8981\u663e\u793a URL \u548c root \u5bc6\u7801\uff0c\u8bf7\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/get-info.sh ${STAGE_NAME}"),"\u3002"))}d.isMDXComponent=!0}}]);