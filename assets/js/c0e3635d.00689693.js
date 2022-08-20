"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[2848],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2846:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=(n(4996),["components"]),i={id:"import_service_catalog_products",title:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1",sidebar_label:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1"},c=void 0,p={unversionedId:"zh/post_deployment/import_service_catalog_products",id:"zh/post_deployment/import_service_catalog_products",isDocsHomePage:!1,title:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1",description:"Service Workbench \u4f7f\u7528 AWS \u670d\u52a1\u76ee\u5f55 - AWS Service Catalog",source:"@site/docs/zh/post_deployment/import_service_catalog_products.md",sourceDirName:"zh/post_deployment",slug:"/zh/post_deployment/import_service_catalog_products",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/import_service_catalog_products",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/post_deployment/import_service_catalog_products.md",tags:[],version:"current",frontMatter:{id:"import_service_catalog_products",title:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1",sidebar_label:"\u5bfc\u5165 AWS Service Catalog \u4ea7\u54c1"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/create_admin_user"},next:{title:"\u67e5\u770bService Workbench \u65e5\u5fd7",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/logs"}},s=[{value:"\u5bfc\u5165\u4ea7\u54c1",id:"\u5bfc\u5165\u4ea7\u54c1",children:[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",children:[{value:"\u521b\u5efa AMI",id:"\u521b\u5efa-ami",children:[],level:4},{value:"\u67e5\u770b\u670d\u52a1\u76ee\u5f55\u7ec4\u5408",id:"\u67e5\u770b\u670d\u52a1\u76ee\u5f55\u7ec4\u5408",children:[],level:4}],level:3},{value:"\u5bfc\u5165\u5de5\u4f5c\u533a",id:"\u5bfc\u5165\u5de5\u4f5c\u533a",children:[],level:3},{value:"\u914d\u7f6e\u5de5\u4f5c\u533a",id:"\u914d\u7f6e\u5de5\u4f5c\u533a",children:[],level:3},{value:"EC2 Linux \u7684\u914d\u200b\u200b\u7f6e",id:"ec2-linux-\u7684\u914d\u7f6e",children:[],level:3},{value:"Amazon EC2 Windows \u7684\u914d\u7f6e",id:"amazon-ec2-windows-\u7684\u914d\u7f6e",children:[],level:3},{value:"Amazon SageMaker \u7684\u914d\u7f6e",id:"amazon-sagemaker-\u7684\u914d\u7f6e",children:[],level:3},{value:"Amazon EMR \u7684\u914d\u7f6e",id:"amazon-emr-\u7684\u914d\u7f6e",children:[],level:3}],level:2},{value:"\u6279\u51c6\u5de5\u4f5c\u533a",id:"\u6279\u51c6\u5de5\u4f5c\u533a",children:[],level:2}],m={toc:s};function u(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Service Workbench \u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc"},"AWS \u670d\u52a1\u76ee\u5f55 - AWS Service Catalog"),"\n\u7ba1\u7406\u53ef\u4f9b\u7814\u7a76\u4eba\u5458\u901a\u8fc7\u8be5\u5e73\u53f0\u4f7f\u7528\u7684\u4e0d\u540c\u7c7b\u578b\u7684\u8ba1\u7b97\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u96c6\u6210 AWS Service Catalog\uff0cService Workbench \u5141\u8bb8\u7ba1\u7406\u5458\u7528\u6237\u521b\u5efa\u548c\u7ba1\u7406\u83b7\u51c6\u5728 AWS \u4e0a\u4f7f\u7528\u7684 IT \u670d\u52a1\u3002\u8fd9\u4e9b IT \u670d\u52a1\u53ef\u4ee5\u5305\u62ec\u4ece\u865a\u62df\u673a\u6620\u50cf\u3001\u670d\u52a1\u5668\u3001\u8f6f\u4ef6\u548c\u6570\u636e\u5e93\u5230\u5b8c\u6574\u7684\u591a\u5c42\u5e94\u7528\u67b6\u6784\u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u96c6\u6210\uff0cService Workbench \u53ef\u5e2e\u52a9\u7ec4\u7ec7\u96c6\u4e2d\u7ba1\u7406\u7ecf\u5e38\u90e8\u7f72\u7684 IT \u670d\u52a1\uff0c\u5e76\u5e2e\u52a9\u5b9e\u73b0\u7edf\u4e00\u7684\u6cbb\u7406\u548c\u6ee1\u8db3\u5408\u89c4\u6027\u8981\u6c42\uff0c\u540c\u65f6\u4f7f\u7528\u6237\u80fd\u591f\u5feb\u901f\u90e8\u7f72\u6240\u9700\u7684\u7ecf\u8fc7\u6279\u51c6\u7684 IT \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u90e8\u7f72 Service Workbench \u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u521b\u5efa\u4e00\u4e2a AWS Service Catalog \u4ea7\u54c1\u7ec4\u5408\uff0c\u5176\u4e2d\u5305\u542b\u56db\u79cd\u5e38\u7528\u4ea7\u54c1\uff1aAmazon SageMaker\u3001\u9002\u7528\u4e8e Windows \u7684 Amazon EC2\u3001\u9002\u7528\u4e8e Linux \u7684 Amazon EC2 \u548c Amazon EMR\u3002\u7ba1\u7406\u5458\u9700\u8981\u4f7f\u7528 Service Workbench \u7528\u6237\u754c\u9762\u5bfc\u5165\u548c\u914d\u7f6e\u8fd9\u4e9b\u4ea7\u54c1\uff0c\u7136\u540e\u7528\u6237\u624d\u80fd\u90e8\u7f72\u5b83\u4eec\u3002\u5982\u679c\u60a8\u60f3\u5728 AWS Service Catalog \u4ea7\u54c1\u7ec4\u5408\u4e2d\u5305\u542b\u5176\u4ed6\u81ea\u5b9a\u4e49\u4ea7\u54c1\uff0c\u8bf7\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u4ee5\u4e0b\u76ee\u5f55\u4e2d\u6dfb\u52a0 AWS CloudFormation \u6a21\u677f\uff1a\n",(0,o.kt)("inlineCode",{parentName:"li"},"addons/addon-base-raas/packages/base-raas-cfn-templates/src/templates/service-catalog")),(0,o.kt)("li",{parentName:"ol"},"\u5728\u4ee5\u4e0b\u4f4d\u7f6e\u7684 productsToCreate \u5217\u8868\u4e2d\u6dfb\u52a0 AWS CloudFormation \u6a21\u677f\u6587\u4ef6\u540d\uff1a\n",(0,o.kt)("inlineCode",{parentName:"li"},"addons/addon-base-raas/packages/base-raas-post-deployment/lib/steps/create-service-catalog-portfolio.js")),(0,o.kt)("li",{parentName:"ol"},"\u90e8\u7f72Service Workbench\u3002")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4ea7\u54c1\u76f4\u63a5\u5728 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u7684 Service Catalog \u4e2d\u66f4\u65b0\uff0c\u5219\u65e0\u6cd5\u4fdd\u8bc1\u901a\u8fc7 Service Workbench \u81ea\u52a8\u66f4\u65b0\u5b83\u4eec\u7684\u7248\u672c\u3002"),(0,o.kt)("h2",{id:"\u5bfc\u5165\u4ea7\u54c1"},"\u5bfc\u5165\u4ea7\u54c1"),(0,o.kt)("p",null,"\u5728\u6b64\u6b65\u9aa4\u4e2d\uff0c\u60a8\u5bfc\u5165\u9884\u5b9a\u4e49\u7684\u4ea7\u54c1\uff0c\u914d\u7f6e\u8981\u7528\u4e8e\u4ea7\u54c1\u53d1\u5e03\u7684\u53c2\u6570\uff0c\u5e76\u6279\u51c6\u8981\u4f7f\u7528\u7684\u914d\u7f6e\u4ea7\u54c1\u3002\u4ee5\u4e0b\u90e8\u5206\u4ee5 Amazon EC2 Linux \u4e3a\u4f8b\uff0c\u7136\u540e\u8bbe\u7f6e Amazon EC2 Windows\u3001Amazon SageMaker \u548c Amazon EMR \u6240\u9700\u7684\u4e0d\u540c\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u786e\u4fdd\u6ee1\u8db3\u4ee5\u4e0b\u5148\u51b3\u6761\u4ef6\u624d\u80fd\u5bfc\u5165\u4ea7\u54c1\u3002"),(0,o.kt)("h4",{id:"\u521b\u5efa-ami"},"\u521b\u5efa AMI"),(0,o.kt)("p",null,"\u786e\u4fdd\u60a8\u5728\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u5b8c\u6210\u4e86\u6b65\u9aa4",(0,o.kt)("a",{parentName:"p",href:"/zh/installation_guide/installation/ami-install"},"\u5b89\u88c5 AMIs"),"\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u68c0\u67e5 AMI \u662f\u5426\u5df2\u6210\u529f\u521b\u5efa\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230 Amazon EC2\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 AMI \u9009\u9879\u5361\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8bb0\u4e0b\u4e3a Amazon EC2 Linux\u3001Amazon EC2 Windows\u3001Amazon EMR \u548c Amazon EC2 RStudio \u521b\u5efa\u7684\u56db\u4e2a AMI\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u590d\u5236 AMI ID \u5e76\u7528\u4e8e\u5de5\u4f5c\u533a\u5bfc\u5165\u548c\u914d\u7f6e\u3002\u6216\u8005\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u90e8\u7f72\u673a\u5668\u6620\u50cf SDC \u65f6\u4ece\u7ec8\u7aef\u590d\u5236\u8fd9\u4e9b AMI ID\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u60a8\u591a\u6b21\u8fd0\u884c\u673a\u5668\u6620\u50cf SDC\uff0c\u5219\u4f1a\u521b\u5efa\u91cd\u590d\u7684 AMI\u3002\u8fd9\u6ca1\u5173\u7cfb\uff0c\u4e0d\u4f1a\u5f71\u54cd\u4efb\u4f55 Service Workbench \u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u5220\u9664\u91cd\u590d\u9879\u4ee5\u907f\u514d\u6df7\u6dc6\u6216\u4fdd\u7559\u5b83\u4eec\u3002"),(0,o.kt)("h4",{id:"\u67e5\u770b\u670d\u52a1\u76ee\u5f55\u7ec4\u5408"},"\u67e5\u770b\u670d\u52a1\u76ee\u5f55\u7ec4\u5408"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4ee5",(0,o.kt)("strong",{parentName:"li"},"\u7ba1\u7406\u5458"),"\u8eab\u4efd\u767b\u5f55 Service Workbench UI\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230\u201c",(0,o.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u533a\u7c7b\u578b"),"\u201d\u9009\u9879\u5361\u3002\u56db\u4e2a AWS Service Catalog \u4ea7\u54c1\u663e\u793a\u5982\u4e0b\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9089).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u56fe\uff1aAWS Service Catalog \u4ea7\u54c1"))),(0,o.kt)("p",null,"\u8fd9\u56db\u79cd\u4ea7\u54c1\u6765\u81ea\u7cfb\u7edf\u5728\u90e8\u7f72\u671f\u95f4\u521b\u5efa\u7684 AWS Service Catalog \u4ea7\u54c1\u7ec4\u5408\u3002\u4e00\u65e6\u5bfc\u5165\u548c\u914d\u7f6e\uff0c\u5b83\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u6765\u5305\u542b\u5176\u4ed6 AWS \u8ba1\u7b97\u8d44\u6e90\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u65b0\u4ea7\u54c1\u6dfb\u52a0\u5230 AWS Service Catalog \u4e2d\u7684\u73b0\u6709 Service Workbench \u4ea7\u54c1\u7ec4\u5408\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u66f4\u65b0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/awslabs/service-workbench-on-aws/blob/mainline/main/solution/post-deployment/config/infra/cloudformation.yml#L204"},"cloudformation.yml"),"\u4e2d\u7684\u89d2\u8272",(0,o.kt)("inlineCode",{parentName:"li"},"ServiceCatalogLaunchConstraintRole"),"\uff0c\u4ece\u800c\u6dfb\u52a0\u542f\u52a8\u548c\u7ec8\u6b62\u4ea7\u54c1\u6240\u9700\u7684\u6743\u9650\u3002")),(0,o.kt)("h3",{id:"\u5bfc\u5165\u5de5\u4f5c\u533a"},"\u5bfc\u5165\u5de5\u4f5c\u533a"),(0,o.kt)("p",null,"\u672c\u8282\u4ee5 Amazon EC2 Linux \u4e3a\u4f8b\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u201cec2-linux-instance\u201d\u4e0b\u9009\u62e9\u201c",(0,o.kt)("strong",{parentName:"li"},"Import"),"\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,o.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u548c",(0,o.kt)("strong",{parentName:"li"},"\u63cf\u8ff0"),"\uff0c\u4ee5\u4fbf\u60a8\u8f7b\u677e\u8bc6\u522b\u5de5\u4f5c\u533a\u3002")),(0,o.kt)("h3",{id:"\u914d\u7f6e\u5de5\u4f5c\u533a"},"\u914d\u7f6e\u5de5\u4f5c\u533a"),(0,o.kt)("p",null,"\u5bfc\u5165\u5de5\u4f5c\u533a\u7c7b\u578b\u540e\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u201c",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u914d\u7f6e"),"\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u914d\u7f6e\u7684",(0,o.kt)("strong",{parentName:"li"},"ID"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"Name"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"Description")," \u548c",(0,o.kt)("strong",{parentName:"li"},"Estimated Costs"),"\u3002\u8fd9\u91cc\u7684\u4e00\u4e2a\u5e38\u89c1\u547d\u540d\u89c4\u8303\u662f\u5728\u4ea7\u54c1\u540d\u79f0\u4e4b\u540e\u9644\u52a0\u5b9e\u4f8b\u5927\u5c0f\u3002\u4f8b\u5982\uff0c\u5bf9\u5c0f\u578b Linux Amazon EC2 \u5b9e\u4f8b\u4f7f\u7528\u201cec2-linux-instance-V1-small\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u201c",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65"),"\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5de5\u4f5c\u533a\u914d\u7f6e\u7684\u8bbf\u95ee\u63a7\u5236\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u201c",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65"),"\u201d\u3002")),(0,o.kt)("p",null,"\u8f93\u5165\u53c2\u6570\u662f\u7528\u4e8e\u4ea7\u54c1 AWS CloudFormation \u6a21\u677f\u7684\u53c2\u6570\u3002\u4e0d\u540c\u4ea7\u54c1\u7684\u53c2\u6570\u6570\u91cf\u548c\u7c7b\u578b\u4e0d\u540c\u3002\u7528\u4e8e\u56db\u4e2a\u7cfb\u7edf\u521b\u5efa\u4ea7\u54c1\u7684\u5927\u591a\u6570\u53c2\u6570\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u81ea\u52a8\u8bc4\u4f30\u3002\u8fd9\u4e9b\u53c2\u6570\u53ef\u5728\u586b\u5199\u8f93\u5165\u53c2\u6570\u9875\u9762\u65f6\u5728\u4e0b\u62c9\u5217\u8868\u4e2d\u8fdb\u884c\u9009\u62e9\u3002"),(0,o.kt)("h3",{id:"ec2-linux-\u7684\u914d\u7f6e"},"EC2 Linux \u7684\u914d\u200b\u200b\u7f6e"),(0,o.kt)("p",null,"\u5bf9\u4e8e Amazon EC2 Linux\uff0c\u4e0b\u62c9\u5217\u8868\u4e2d\u4ec5\u6709\u7684\u4e24\u4e2a\u6ca1\u6709\u9884\u7f6e\u503c\u7684\u5b57\u6bb5\u662f ",(0,o.kt)("strong",{parentName:"p"},"InstanceType")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"AmiId"),"\u3002"),(0,o.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u793a\u4f8b Amazon EC2 Linux \u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7321).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u56fe\uff1aAmazon EC2 Linux \u7684\u914d\u200b\u200b\u7f6e"))),(0,o.kt)("h3",{id:"amazon-ec2-windows-\u7684\u914d\u7f6e"},"Amazon EC2 Windows \u7684\u914d\u7f6e"),(0,o.kt)("p",null,"\u5bf9\u4e8e Amazon EC2 Windows\uff0c\u4e0b\u62c9\u5217\u8868\u4e2d\u4ec5\u6709\u7684\u4e24\u4e2a\u6ca1\u6709\u9884\u7f6e\u503c\u7684\u5b57\u6bb5\u662f\u201c",(0,o.kt)("strong",{parentName:"p"},"InstanceType"),"\u201d\u548c\u201c",(0,o.kt)("strong",{parentName:"p"},"AmiId"),"\u201d\u3002 \uff08\u4f7f\u7528\u60a8\u5728\u5148\u51b3\u6761\u4ef6 - AMI \u4e2d\u590d\u5236\u7684 AMI ID\uff09"),(0,o.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u793a\u4f8b Amazon EC2 Windows \u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(889).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u56fe\uff1aEC2 Windows \u7684\u914d\u7f6e"))),(0,o.kt)("h3",{id:"amazon-sagemaker-\u7684\u914d\u7f6e"},"Amazon SageMaker \u7684\u914d\u7f6e"),(0,o.kt)("p",null,"\u5bf9\u4e8e Amazon SageMaker\uff0c\u4e0b\u62c9\u5217\u8868\u4e2d\u552f\u4e00\u6ca1\u6709\u9884\u7f6e\u503c\u7684\u7684\u5b57\u6bb5\u662f\u201c",(0,o.kt)("strong",{parentName:"p"},"InstanceType"),"\u201d\u3002"),(0,o.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u793a\u4f8b Amazon SageMaker \u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(887).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u56fe\uff1aAmazon SageMaker \u7684\u914d\u7f6e"))),(0,o.kt)("h3",{id:"amazon-emr-\u7684\u914d\u7f6e"},"Amazon EMR \u7684\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u4e3a\u90e8\u7f72\u542f\u7528\u4e86 AppStream\uff0c\u5219 EMR \u5de5\u4f5c\u533a\u4e0d\u53ef\u7528\u3002\u56e0\u6b64\uff0c\u65e0\u9700\u4e3a\u6b64\u5de5\u4f5c\u533a\u5bfc\u5165\u6216\u6dfb\u52a0\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"Amazon EMR \u8fd8\u9700\u8981\u989d\u5916\u4e00\u4e9b\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u6ca1\u6709\u9884\u7f6e\u503c\u7684\u5b57\u6bb5\uff0c\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u78c1\u76d8\u5927\u5c0fGB (>=10)"),(0,o.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u8282\u70b9\u6570\uff081-80\uff09"),(0,o.kt)("li",{parentName:"ul"},"MasterInstanceType"),(0,o.kt)("li",{parentName:"ul"},"\u5e02\u573a\uff08ON_DEMAND / SPOT\uff09"),(0,o.kt)("li",{parentName:"ul"},"WorkerBidPrice\uff08\u4ec5\u5728 Market = SPOT \u65f6\u9002\u7528\u3002\u4e3a Market = ON_DEMAND \u6307\u5b9a 0\uff09"),(0,o.kt)("li",{parentName:"ul"},"WorkerInstanceType"),(0,o.kt)("li",{parentName:"ul"},"AmiId\uff08\u4f7f\u7528\u6211\u4eec\u5728 AMI \u5148\u51b3\u6761\u4ef6\u4e2d\u590d\u5236\u7684 AMI id\uff09")),(0,o.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u793a\u4f8b Amazon EMR \u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5341).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u56fe\uff1aAmazon EMR \u7684\u914d\u7f6e"))),(0,o.kt)("h2",{id:"\u6279\u51c6\u5de5\u4f5c\u533a"},"\u6279\u51c6\u5de5\u4f5c\u533a"),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"Approve")," \u6309\u94ae\u3002\u65b0\u521b\u5efa\u7684\u5de5\u4f5c\u533a\u7c7b\u578b\u5c06\u53ef\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Study and Workspace")," \u9009\u9879\u5361\u4e2d\u542f\u52a8\u3002"))}u.isMDXComponent=!0},7321:function(e,t,n){t.Z=n.p+"assets/images/sc_ec2_linux-29dc1a6944c28811c02c4710fdbf0adb.png"},5341:function(e,t,n){t.Z=n.p+"assets/images/sc_emr-64821d97bddd921c46df80dfc0d37759.png"},887:function(e,t,n){t.Z=n.p+"assets/images/sc_sagemaker-c14a2f6a5a7d91b4c5737c0d9acbfe3d.png"},9089:function(e,t,n){t.Z=n.p+"assets/images/service_catalog_import_00-f4599362c0200dbe1b5c83b688e59b94.png"},889:function(e,t,n){t.Z=n.p+"assets/images/swb_param-27aaa2e4753ca835add4e0bdfb6523cf.png"}}]);