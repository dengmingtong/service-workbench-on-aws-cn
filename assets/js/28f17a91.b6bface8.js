"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7308],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},4996:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return l}});var r=n(2263),a=n(3919);function i(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return c?t+u:u}(i,n,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},49:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(4996),o=["components"],s={id:"instance-req",title:"\u901a\u8fc7ec2 instance\u5b89\u88c5",sidebar_label:"\u901a\u8fc7ec2 instance\u5b89\u88c5"},c=void 0,u={unversionedId:"zh/installation_guide/installation/pre-installation/instance-req",id:"zh/installation_guide/installation/pre-installation/instance-req",isDocsHomePage:!1,title:"\u901a\u8fc7ec2 instance\u5b89\u88c5",description:"|\u90e8\u5206 |\u8bf4\u660e |",source:"@site/docs/zh/installation_guide/installation/pre-installation/instance-req.md",sourceDirName:"zh/installation_guide/installation/pre-installation",slug:"/zh/installation_guide/installation/pre-installation/instance-req",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/instance-req",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/installation/pre-installation/instance-req.md",tags:[],version:"current",frontMatter:{id:"instance-req",title:"\u901a\u8fc7ec2 instance\u5b89\u88c5",sidebar_label:"\u901a\u8fc7ec2 instance\u5b89\u88c5"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u8f6f\u4ef6\u8981\u6c42",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/software-req"},next:{title:"\u914d\u7f6e\u8bbe\u7f6e",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/conf-settings"}},p=[{value:"\u521b\u5efa\u4e00\u4e2a EC2 \u5b9e\u4f8b",id:"\u521b\u5efa\u4e00\u4e2a-ec2-\u5b9e\u4f8b",children:[],level:3},{value:"\u914d\u7f6e EC2 \u5b9e\u4f8b",id:"\u914d\u7f6e-ec2-\u5b9e\u4f8b",children:[{value:"\u521b\u5efa\u65b0\u7684 IAM \u89d2\u8272",id:"\u521b\u5efa\u65b0\u7684-iam-\u89d2\u8272",children:[],level:4},{value:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b",id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b",children:[],level:4}],level:3},{value:"\u5728 EC2 \u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6",id:"\u5728-ec2-\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6",children:[],level:3}],m={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u90e8\u5206"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#createinst"},"\u521b\u5efa EC2 \u5b9e\u4f8b")),(0,i.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6709\u5173\u4e3a Service Workbench \u5b89\u88c5\u9009\u62e9 EC2 \u5b9e\u4f8b\u5927\u5c0f\u7684\u4fe1\u606f\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#confinst"},"\u914d\u7f6e EC2 \u5b9e\u4f8b")),(0,i.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u914d\u7f6e EC2 \u5b9e\u4f8b\u3001\u521b\u5efa IAM \u89d2\u8272\u4ee5\u53ca\u5c06\u7ba1\u7406\u5458\u89d2\u8272\u5206\u914d\u7ed9 EC2 \u5b9e\u4f8b\u7684\u8fc7\u7a0b\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#install"},"\u5728EC2\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u8f6f\u4ef6")),(0,i.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u514b\u9686\u5305\u542b Service Workbench \u5b89\u88c5\u7684 Git \u76ee\u5f55\u7684\u547d\u4ee4\u3002")))),(0,i.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-ec2-\u5b9e\u4f8b"},"\u521b\u5efa\u4e00\u4e2a EC2 \u5b9e\u4f8b"),(0,i.kt)("a",{name:"createinst"}),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u5177\u6709\u4ee5\u4e0b\u89c4\u683c\u7684 EC2 \u5b9e\u4f8b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Amazon EC2 \u5b9e\u4f8b\u7c7b\u578b:\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"T2.medium")," Amazon EC2 \u5b9e\u4f8b\u6216\u66f4\u5927\u3002\u66f4\u5927\u7684\u673a\u5668\u6709\u66f4\u5feb\u7684\u7f51\u7edc\uff0c\u66f4\u5927\u7684\u78c1\u76d8\u6709\u66f4\u9ad8\u7684\u6027\u80fd\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),":\u5efa\u8bae\u5b89\u88c5\u6240\u9700\u7684\u78c1\u76d8\u9a71\u52a8\u5668\u5927\u5c0f\u4e3a 40 GB\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VPC \u548c\u5b50\u7f51:\u4f7f\u7528\u9ed8\u8ba4\u7684 VPC \u548c\u5b50\u7f51\u3002"),(0,i.kt)("li",{parentName:"ul"},"AWS IAM \u89d2\u8272:\u5c06\u5177\u6709\u8db3\u591f\u6743\u9650\u7684 AWS IAM \u89d2\u8272\u9644\u52a0\u5230\u60a8\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982\u7ba1\u7406\u5458\u8bbf\u95ee\u6743\u9650\u3002")),(0,i.kt)("h3",{id:"\u914d\u7f6e-ec2-\u5b9e\u4f8b"},"\u914d\u7f6e EC2 \u5b9e\u4f8b"),(0,i.kt)("a",{name:"confinst"}),(0,i.kt)("p",null,"\u53ef\u4ee5\u4e3a Amazon EC2 \u5b9e\u4f8b\u5206\u914d\u4e00\u4e2a\u5305\u542b AWS IAM \u89d2\u8272\u7684\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u3002 AWS IAM \u89d2\u8272\u4e3a Amazon EC2 \u5b9e\u4f8b\u63d0\u4f9b\u4e00\u7ec4\u6743\u9650\u3002 Amazon EC2 \u5b9e\u4f8b\u6267\u884c\u7531\u5176 AWS IAM \u89d2\u8272\u5b9a\u4e49\u7684\u64cd\u4f5c\u3002\u5411 Amazon EC2 \u5b9e\u4f8b\u6dfb\u52a0 AWS IAM \u89d2\u8272\u53ef\u8ba9\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u5730\u8fdb\u884c API \u8c03\u7528\uff0c\u4ece\u800c\u51cf\u5c11\u7ba1\u7406\u5b89\u5168\u51ed\u8bc1\u7684\u9700\u8981\u3002\nService Workbench \u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u80fd\u591f\u521b\u5efa AWS \u8d44\u6e90\u3002\u6ee1\u8db3\u6b64\u8981\u6c42\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u4e3a Amazon EC2 \u5b9e\u4f8b\u63d0\u4f9b\u7ba1\u7406\u5458\u89d2\u8272\u3002"),(0,i.kt)("h4",{id:"\u521b\u5efa\u65b0\u7684-iam-\u89d2\u8272"},"\u521b\u5efa\u65b0\u7684 IAM \u89d2\u8272"),(0,i.kt)("p",null,"\u5728\u521b\u5efa\u65b0\u7684 Amazon EC2 \u5b9e\u4f8b\u65f6\uff0c\u53ef\u4ee5\u5c06\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u5206\u914d\u7ed9 Amazon EC2 \u5b9e\u4f8b\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f4d\u4e8e AWS IAM \u89d2\u8272\u4e0b\u62c9\u5217\u8868\u65c1\u8fb9\u7684",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa\u65b0\u7684 IAM \u89d2\u8272"),"\u3002\u8981\u7ee7\u7eed\u8be5\u8fc7\u7a0b\uff0c\u8bf7\u7a81\u51fa\u663e\u793a Amazon EC2 \u5e76\u7ee7\u7eed\u8bbf\u95ee\u6743\u9650\u3002")),(0,i.kt)("img",{src:(0,l.Z)("img/deployment/installation/iam1.png")}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e ",(0,i.kt)("strong",{parentName:"li"},"Permissions"),"\uff0c\u4ece\u8fc7\u6ee4\u5668\u4e2d\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"li"},"AdministratorAccess")," \u5e76\u7ee7\u7eed\u6267\u884c ",(0,i.kt)("strong",{parentName:"li"},"tags"),"\u3002")),(0,i.kt)("img",{src:(0,l.Z)("img/deployment/installation/iam2.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("strong",{parentName:"li"},"Review")," \u9875\u9762\u4e2d\uff0c\u8f93\u5165\u89d2\u8272\u540d\u79f0\u3002")),(0,i.kt)("img",{src:(0,l.Z)("img/deployment/installation/iam3.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u8fd4\u56de ",(0,i.kt)("strong",{parentName:"li"},"Amazon EC2")," \u9009\u9879\u5361\uff0c\u5237\u65b0 ",(0,i.kt)("strong",{parentName:"li"},"IAM \u89d2\u8272")," \u4e0b\u62c9\u83dc\u5355\uff0c\u7136\u540e\u9009\u62e9\u60a8\u7684\u7ba1\u7406\u5458\u89d2\u8272\u4ee5\u9644\u52a0\u5230\u65b0\u7684 Amazon EC2 \u5b9e\u4f8b\u3002")),(0,i.kt)("img",{src:(0,l.Z)("img/deployment/installation/iam4.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa Amazon EC2 \u5b9e\u4f8b\u3002")),(0,i.kt)("h4",{id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b"},"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u8981\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u5df2\u5728\u8fd0\u884c\u7684 Amazon EC2 \u5b9e\u4f8b:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728 EC2 \u63a7\u5236\u53f0\u4e2d\u9009\u62e9 Amazon EC2 \u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("strong",{parentName:"li"},"Actions")," \u83dc\u5355\u4e0a\uff0c\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"li"},"Security, Modify IAM role"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("strong",{parentName:"li"},"Modify IAM role")," \u5c4f\u5e55\u4e2d\uff0c\u9009\u62e9\u60a8\u521b\u5efa\u7684\u89d2\u8272\u5e76\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"li"},"Update IAM role"),"\u3002")),(0,i.kt)("h3",{id:"\u5728-ec2-\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6"},"\u5728 EC2 \u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6"),(0,i.kt)("a",{name:"\u5b89\u88c5"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728 EC2 \u5b9e\u4f8b\u4e0a\u5b89\u88c5\u7528\u4e8e\u5728 AWS \u4e0a\u5b89\u88c5 Service Workbench \u7684\u5fc5\u5907\u8f6f\u4ef6\uff08\u65e0\u670d\u52a1\u5668\u548c pnpm\uff09:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash\nsource ~/.bashrc\nnvm install 14\nnpm install -g pnpm@5.18.9\nnpm install -g serverless hygen\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u663e\u793a\u65e0\u670d\u52a1\u5668\u5305\u7684\u7248\u672c:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"serverless -v")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u5728Service Workbench \u4e2d\u90e8\u7f72Windows \u5de5\u4f5c\u533a\uff0c\u5fc5\u987b\u5728\u90e8\u7f72\u524d\u5b89\u88c5Go lang\u3002\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo yum install golang"),"\n\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8bf7\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"go version"),"\u67e5\u770b\u7248\u672c\uff0c\u7248\u672c\u5e94\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"1.13.7"),"\u6216\u66f4\u9ad8\u7248\u672c\u3002")))}d.isMDXComponent=!0}}]);