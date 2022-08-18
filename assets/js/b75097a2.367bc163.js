"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[984],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return c}});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,c=a.forcePrependBaseUrl,i=void 0!==c&&c,u=a.absolute,p=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(i)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+s:s}(a,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},241:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=r(4996),i=["components"],u={id:"create_admin_user",title:"\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237",sidebar_label:"\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237"},p=void 0,s={unversionedId:"zh/post_deployment/create_admin_user",id:"zh/post_deployment/create_admin_user",isDocsHomePage:!1,title:"\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237",description:"\u521b\u5efa Account \u548c Index and Project \u540e\uff0c\u60a8\u5fc5\u987b\u5728\u201cUsers\u201d\u9009\u9879\u5361\u4e2d\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237\u3002 \u53c2\u89c1\u56fe 7\u3002",source:"@site/docs/zh/post_deployment/create_admin_user.md",sourceDirName:"zh/post_deployment",slug:"/zh/post_deployment/create_admin_user",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/create_admin_user",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/post_deployment/create_admin_user.md",tags:[],version:"current",frontMatter:{id:"create_admin_user",title:"\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237",sidebar_label:"\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u521b\u5efa\u7d22\u5f15\u548c\u9879\u76ee",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/create_index_project"},next:{title:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/import_service_catalog_products"}},l=[],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa ",(0,a.kt)("a",{parentName:"p",href:"/deployment/post_deployment/link_aws_account"},"Account")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/deployment/post_deployment/create_index_project"},"Index and Project")," \u540e\uff0c\u60a8\u5fc5\u987b\u5728\u201c",(0,a.kt)("strong",{parentName:"p"},"Users"),"\u201d\u9009\u9879\u5361\u4e2d\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237\u3002 \u53c2\u89c1",(0,a.kt)("strong",{parentName:"p"},"\u56fe 7"),"\u3002"),(0,a.kt)("img",{src:(0,c.Z)("img/deployment/post_deployment/create_user_00.jpg")}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\u56fe\uff1a\u521b\u5efa\u7ba1\u7406\u5458"))),(0,a.kt)("p",null,"_",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2aroot\u7528\u6237\u5e10\u6237\uff0c\u4f46\u662f\uff0c\u60a8\u4e0d\u80fd\u7ecf\u5e38\u4f7f\u7528root\u7528\u6237\u5e10\u6237\u3002"))}f.isMDXComponent=!0}}]);