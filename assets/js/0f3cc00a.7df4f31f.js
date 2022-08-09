"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[3046],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"logs",title:"\u67e5\u770bService Workbench \u65e5\u5fd7",sidebar_label:"\u67e5\u770bService Workbench \u65e5\u5fd7"},l=void 0,u={unversionedId:"zh/post_deployment/logs",id:"zh/post_deployment/logs",isDocsHomePage:!1,title:"\u67e5\u770bService Workbench \u65e5\u5fd7",description:"\u5728 Amazon CloudWatch \u4e2d\u67e5\u770b Service Workbench \u65e5\u5fd7",source:"@site/docs/zh/post_deployment/logs.md",sourceDirName:"zh/post_deployment",slug:"/zh/post_deployment/logs",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/logs",editUrl:"/edit/develop/docs/docs/zh/post_deployment/logs.md",tags:[],version:"current",frontMatter:{id:"logs",title:"\u67e5\u770bService Workbench \u65e5\u5fd7",sidebar_label:"\u67e5\u770bService Workbench \u65e5\u5fd7"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/import_service_catalog_products"},next:{title:"\u8d26\u6237\u7ed3\u6784",permalink:"/service-workbench-on-aws-cn/zh/user_guide/account_structure"}},s=[{value:"\u5728 Amazon CloudWatch \u4e2d\u67e5\u770b Service Workbench \u65e5\u5fd7",id:"\u5728-amazon-cloudwatch-\u4e2d\u67e5\u770b-service-workbench-\u65e5\u5fd7",children:[],level:3},{value:"\u53ef\u7528\u6307\u6807",id:"\u53ef\u7528\u6307\u6807",children:[],level:3}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5728-amazon-cloudwatch-\u4e2d\u67e5\u770b-service-workbench-\u65e5\u5fd7"},"\u5728 Amazon CloudWatch \u4e2d\u67e5\u770b Service Workbench \u65e5\u5fd7"),(0,a.kt)("p",null,"Service Workbench \u5df2\u542f\u7528 API Gateway \u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\u3002\u65e5\u5fd7\u5728 CloudWatch \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/aws/api-gateway/<name of your API>")," \u65e5\u5fd7\u7ec4\u4e2d\u53ef\u7528\uff1a"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u8bbf\u95ee\u65e5\u5fd7\u7684\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    \u201cauthorizer.principalId\u201d\uff1a\u201cu-000000000000\u201d\uff0c\n    \u201c\u9519\u8bef\u4fe1\u606f\u201d\uff1a \u201d-\u201d\uff0c\n    "extendedRequestId": "ZuT4rGDNoAMFxXw=",\n    "httpMethod": "GET",\n    \u201cidentity.sourceIp\u201d\uff1a\u201c22.22.222.22\u201d\uff0c\n    \u201cintegration.error\u201d\uff1a\u201c-\u201d\uff0c\n    \u201cintegration.integrationStatus\u201d\uff1a\u201c200\u201d\uff0c\n    \u201cintegration.latency\u201d\uff1a\u201c79\u201d\uff0c\n    "integration.requestId": "67394741-90ae-4c6c-94fb-df8bf7be33ec",\n    \u201cintegration.status\u201d\uff1a\u201c200\u201d\uff0c\n    "\u8def\u5f84": "/dev/api/user-roles",\n    "requestId": "468a1b4d-3015-4901-b749-37e4e0551029",\n    \u201c\u54cd\u5e94\u5ef6\u8fdf\u201d\uff1a\u201c83\u201d\uff0c\n    \u201c\u54cd\u5e94\u957f\u5ea6\u201d\uff1a\u201c819\u201d\uff0c\n    \u201c\u9636\u6bb5\u201d\uff1a\u201c\u5f00\u53d1\u201d\uff0c\n    \u201c\u72b6\u6001\u201d\uff1a\u201c200\u201d\n}\n')),(0,a.kt)("p",null,"Lambda \u65e5\u5fd7\u4e5f\u53ef\u5728 CloudWatch \u4e2d\u4f7f\u7528\uff0c\u9ed8\u8ba4\u65e5\u5fd7\u7ec4\u540d\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"/aws/lambda/<lambda function name>"),"\u3002"),(0,a.kt)("h3",{id:"\u53ef\u7528\u6307\u6807"},"\u53ef\u7528\u6307\u6807"),(0,a.kt)("p",null,"CloudWatch \u4e2d\u63d0\u4f9b\u4e86 Lambda \u548c API Gateway \u7684\u9ed8\u8ba4\u6307\u6807\u3002\u6709\u5173\u53ef\u7528\u6307\u6807\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html"},"\u4f7f\u7528 AWS Lambda \u51fd\u6570\u6307\u6807 - AWS Lambda")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-metrics-and-dimensions.html"},"Amazon API Gateway \u7ef4\u5ea6\u548c\u6307\u6807 - Amazon API Gateway"))),(0,a.kt)("p",null,"Service Workbench \u4e0d\u4f1a\u53d1\u51fa\u4efb\u4f55\u81ea\u5b9a\u4e49\u6307\u6807\u3002"))}d.isMDXComponent=!0}}]);