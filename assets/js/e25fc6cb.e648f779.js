"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[4192],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),k=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=k(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=k(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var k=2;k<r;k++)o[k]=n[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=(n(4996),["components"]),p={id:"oidc-providers",title:"OIDC \u63d0\u4f9b\u5546\u8bbe\u7f6e",sidebar_label:"OIDC \u63d0\u4f9b\u5546\u8bbe\u7f6e"},l=void 0,k={unversionedId:"zh/installation_guide/installation/pre-installation/oidc-providers",id:"zh/installation_guide/installation/pre-installation/oidc-providers",title:"OIDC \u63d0\u4f9b\u5546\u8bbe\u7f6e",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa OIDC IdP \u5ba2\u6237\u7aef\u548c\u5728 OIDC IdP \u4e2d\u521b\u5efa Service Workbench \u6839\u7528\u6237\u3002",source:"@site/docs/zh/installation_guide/installation/pre-installation/oidc-providers.md",sourceDirName:"zh/installation_guide/installation/pre-installation",slug:"/zh/installation_guide/installation/pre-installation/oidc-providers",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/oidc-providers",draft:!1,tags:[],version:"current",frontMatter:{id:"oidc-providers",title:"OIDC \u63d0\u4f9b\u5546\u8bbe\u7f6e",sidebar_label:"OIDC \u63d0\u4f9b\u5546\u8bbe\u7f6e"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u9884\u5b89\u88c5\u8981\u6c42",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/tool-req"},next:{title:"\u90e8\u7f72\u5230\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\u4e2d\u56fd\u533a\u7684\u5148\u51b3\u6761\u4ef6",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/china-prerequisites"}},s={},c=[{value:"\u521b\u5efa OIDC IdP \u5ba2\u6237\u7aef\u548c\u7528\u6237",id:"\u521b\u5efa-oidc-idp-\u5ba2\u6237\u7aef\u548c\u7528\u6237",level:2},{value:"Authing",id:"authing",level:3},{value:"\u521b\u5efa Authing.cn OIDC \u5ba2\u6237\u7aef",id:"\u521b\u5efa-authingcn-oidc-\u5ba2\u6237\u7aef",level:4},{value:"\u5728Authing.cn\u521b\u5efa\u7528\u6237",id:"\u5728authingcn\u521b\u5efa\u7528\u6237",level:4},{value:"Keycloak on AWS",id:"keycloak-on-aws",level:3},{value:"\u521b\u5efa Keycloak OIDC \u5ba2\u6237\u7aef",id:"\u521b\u5efa-keycloak-oidc-\u5ba2\u6237\u7aef",level:4},{value:"\u5728 Keycloak \u4e2d\u521b\u5efa\u7528\u6237",id:"\u5728-keycloak-\u4e2d\u521b\u5efa\u7528\u6237",level:4},{value:"Okta",id:"okta",level:3},{value:"\u521b\u5efa Okta OIDC \u5ba2\u6237\u7aef",id:"\u521b\u5efa-okta-oidc-\u5ba2\u6237\u7aef",level:4},{value:"\u5728 Okta \u4e2d\u521b\u5efa\u7528\u6237",id:"\u5728-okta-\u4e2d\u521b\u5efa\u7528\u6237",level:4}],m={toc:c};function d(e){var t=e.components,p=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa OIDC IdP \u5ba2\u6237\u7aef\u548c\u5728 OIDC IdP \u4e2d\u521b\u5efa Service Workbench \u6839\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8eOIDC\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC")," \u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-oidc-idp-\u5ba2\u6237\u7aef\u548c\u7528\u6237"},"\u521b\u5efa OIDC IdP \u5ba2\u6237\u7aef\u548c\u7528\u6237"),(0,r.kt)("p",null,"OpenID Connect (OIDC) IdP \u662f ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"},"Cognito User Pool")," \u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u7528\u4e8e\u5bf9 Service Workbench \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u5728\u4f7f\u7528 OIDC IdP \u90e8\u7f72 Service Workbench \u4e4b\u524d\uff0c\u60a8\u5fc5\u987b\u5728\u5916\u90e8 OIDC \u670d\u52a1\u4e2d\u521b\u5efa\u60a8\u7684 OIDC \u63d0\u4f9b\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728 Authing\u3001Keycloak \u548c Okta \u4e2d\u521b\u5efa OIDC \u63d0\u4f9b\u7a0b\u5e8f\u7684\u793a\u4f8b\u8fc7\u7a0b\uff0c\u4ee5\u4f9b\u53c2\u8003\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6 OIDC \u63d0\u4f9b\u7a0b\u5e8f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(\u9009\u98791: Authing) ",(0,r.kt)("a",{parentName:"li",href:"https://www.authing.cn/"},"Authing")," \u662f\u7b2c\u4e09\u65b9\u8ba4\u8bc1\u63d0\u4f9b\u8005\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,r.kt)("li",{parentName:"ul"},"(\u9009\u98792: Keycloak on AWS) ",(0,r.kt)("a",{parentName:"li",href:"https://www.amazonaws.cn/en/solutions/keycloak-on-aws/"},"Keycloak on AWS")," \u662f AWS \u7ef4\u62a4\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},"(\u9009\u98793: Okta\uff09",(0,r.kt)("a",{parentName:"li",href:"https://www.okta.com/sg/"},"Okta")," \u662f\u4e00\u4e2a\u503c\u5f97\u4fe1\u8d56\u7684\u5e73\u53f0\uff0c\u53ef\u4ee5\u4fdd\u62a4\u4ece\u5ba2\u6237\u5230\u60a8\u7684\u5458\u5de5\u7684\u6240\u6709\u8eab\u4efd\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa OIDC \u5ba2\u6237\u7aef\uff0c\u5e76\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"first_name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"last_name")),(0,r.kt)("h3",{id:"authing"},"Authing"),(0,r.kt)("h4",{id:"\u521b\u5efa-authingcn-oidc-\u5ba2\u6237\u7aef"},"\u521b\u5efa Authing.cn OIDC \u5ba2\u6237\u7aef"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u767b\u5f55",(0,r.kt)("a",{parentName:"p",href:"https://console.authing.cn/console"},"\u8ba4\u8bc1\u63a7\u5236\u53f0"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u6ca1\u6709\u7528\u6237\u6c60\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u7528\u6237\u6c60\u3002\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"User Pool Name"),"\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"User pool type"),"\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," \u521b\u5efa\u7528\u6237\u6c60\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(6153).Z},(0,r.kt)("img",{src:n(6997).Z,width:"1622",height:"1094"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u7528\u6237\u6c60\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Applications"),"\u4e0b\u7684",(0,r.kt)("strong",{parentName:"p"},"Self-built App"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"Create"),"\u6309\u94ae\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"Application Name"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"Subdomain"),"\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Regular Web APP"),"\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"Create")," \u521b\u5efa\u5e94\u7528.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"App ID"),"\uff08\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"client_id"),"\uff09\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Issuer"),"\u4fdd\u5b58\u5230Endpoint Information\u4e2d\u7684\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\u4e2d\uff0c\u540e\u9762\u4f1a\u7528\u5230\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(1383).Z},(0,r.kt)("img",{src:n(8525).Z,width:"2306",height:"1116"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Login Callback URL"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Logout Callback URL"),"\u66f4\u65b0\u4e3a\u60a8\u7684ICP\u8bb0\u5f55\u7684\u57df\u540d\u3002\n\u4f8b\u5982\uff0c\u5047\u8bbe Service Workbench \u57df\u540d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"www.swb-example.com"),"\uff0c\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Login Callback URL")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Logout Callback URL")," \u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.swb-example.com/"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u8bf7\u786e\u4fdd\u586b\u5165\u7684URL\u4ee5 "/" \u7ed3\u5c3e\u3002')),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("a",{target:"_blank",href:n(5724).Z},(0,r.kt)("img",{src:n(3831).Z,width:"2304",height:"1002"}))),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4e3a Service Workbench \u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\uff0cService Workbench \u4f1a\u63d0\u4f9bCloudFront\u57df\u540d\u6765\u8bbf\u95ee\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u90e8\u7f72\u7684Service Workbench CloudFront\u57df\u540d\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Login Callback URL"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Logout Callback URL"),"\u3002\u5728\u90e8\u7f72Service Workbench\u4e4b\u524d\uff0c\u53ef\u4ee5\u4fdd\u7559",(0,r.kt)("inlineCode",{parentName:"p"},"Login Callback URL"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Logout Callback URL"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\u3002 Service Workbench\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u9700\u8981\u83b7\u53d6cloudfront domain\u5e76\u518d\u6b21\u5c06\u5176\u8f93\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Login Callback URL"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Logout Callback URL"),"\u4e2d\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6CloudFront\u57df\u540d\n",(0,r.kt)("strong",{parentName:"li"},"CloudFormation"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Stacks"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"xxx-infrastructure"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Outputs"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"WebsiteUrl"),"\uff0c\u5982\u4e0b\u6240\u793a:\n",(0,r.kt)("a",{target:"_blank",href:n(5706).Z},(0,r.kt)("img",{src:n(9401).Z,width:"2552",height:"1316"})))))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u6388\u6743\u914d\u7f6e\u3002\u8bf7\u5728",(0,r.kt)("strong",{parentName:"li"},"Other configuration"),"\u7684\u914d\u7f6e\u9009\u9879\u4e2d\u6309\u4e0b\u56fe\u6240\u793a\u8fdb\u884c\u914d\u7f6e\n",(0,r.kt)("a",{target:"_blank",href:n(8576).Z},(0,r.kt)("img",{src:n(5012).Z,width:"2322",height:"1348"})))),(0,r.kt)("p",null,"\u60a8\u5df2\u7ecf\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u8eab\u4efd\u9a8c\u8bc1\u81ea\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002\n\u66f4\u591a\u4fe1\u606f\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"https://docs.authing.cn/v2/en/"},"authing\u6587\u6863"),"\u3002"),(0,r.kt)("h4",{id:"\u5728authingcn\u521b\u5efa\u7528\u6237"},"\u5728Authing.cn\u521b\u5efa\u7528\u6237"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u767b\u5f55",(0,r.kt)("a",{parentName:"p",href:"https://console.authing.cn/console"},"\u8ba4\u8bc1\u63a7\u5236\u53f0"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Users & Roles"),", ",(0,r.kt)("strong",{parentName:"p"},"Users"),"\u4e2d\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"Create User"),"\uff0c\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Email"),"\uff0c\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Password"),"\uff0c\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"Confirm"),"\u521b\u5efa\u7528\u6237\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{target:"_blank",href:n(6551).Z},(0,r.kt)("img",{src:n(830).Z,width:"1316",height:"1242"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u8fdb\u5165\u521b\u5efa\u7684\u7528\u6237\uff0c\u5c55\u5f00",(0,r.kt)("strong",{parentName:"p"},"Personal Info"),"\uff0c\u586b\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Given Name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Family Name"),"\u540e\u4fdd\u5b58\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{target:"_blank",href:n(7520).Z},(0,r.kt)("img",{src:n(265).Z,width:"2456",height:"1334"}))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728",(0,r.kt)("strong",{parentName:"p"},"Personal Info")," \u4e2d\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"Given Name"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Family Name"),"\uff0c\u8bf7\u9009\u62e9\u8fb9\u680f\u7684",(0,r.kt)("strong",{parentName:"p"},"Setting"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"Field Management"),"\uff0c\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"Given Name")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"Family Name")," \u8bbe\u5b9a ",(0,r.kt)("strong",{parentName:"p"},"Visible from Console")," \u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Yes"),"\uff0c\u4e4b\u540e\u518d\u6b21\u8fdb\u5165",(0,r.kt)("strong",{parentName:"p"},"Personal Info"),"\u8fdb\u884c\u7f16\u8f91")))),(0,r.kt)("h3",{id:"keycloak-on-aws"},"Keycloak on AWS"),(0,r.kt)("h4",{id:"\u521b\u5efa-keycloak-oidc-\u5ba2\u6237\u7aef"},"\u521b\u5efa Keycloak OIDC \u5ba2\u6237\u7aef"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"https://www.amazonaws.cn/en/solutions/keycloak-on-aws/"},"\u672c\u6307\u5357"),"\u5728AWS\u4e2d\u56fd\u533a\u57df\u90e8\u7f72Keycloak\u89e3\u51b3\u65b9\u6848\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u4fdd\u60a8\u53ef\u4ee5\u767b\u5f55 Keycloak \u63a7\u5236\u53f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u9886\u57df"),"\u3002\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u4e00\u4e2a\u9886\u57df\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u5165\u9886\u57df\u8bbe\u7f6e\u9875\u9762\u3002\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Endpoints"),"\uff0c\u7136\u540e\u4ece\u5217\u8868\u4e2d\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"OpenID Endpoint Configuration"),"\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{target:"_blank",href:n(8008).Z},(0,r.kt)("img",{src:n(358).Z,width:"998",height:"530"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u7684 JSON \u6587\u4ef6\u4e2d\uff0c\u8bb0\u5f55 ",(0,r.kt)("strong",{parentName:"p"},"issuer")," \u503c\uff0c\u7a0d\u540e\u5c06\u4f7f\u7528\u8be5\u503c\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{target:"_blank",href:n(1411).Z},(0,r.kt)("img",{src:n(421).Z,width:"919",height:"62"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u56de\u5230Keycloak\u63a7\u5236\u53f0\uff0c\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Clients"),"\uff0c\u7136\u540e\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Create"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165\u5ba2\u6237 ID\uff0c\u5fc5\u987b\u5305\u542b 24 \u4e2a\u5b57\u6bcd\uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u6216\u6570\u5b57\u3002\u8bb0\u5f55\u540e\u9762\u4f1a\u7528\u5230\u7684",(0,r.kt)("strong",{parentName:"p"},"Client ID"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u6539\u5ba2\u6237\u7aef\u8bbe\u7f6e\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Origins")," \u4e2d\u8f93\u5165\u60a8\u7684ICP\u8bb0\u5f55\u7684\u57df\u540d\u3002\n\u4f8b\u5982\uff0c\u5047\u8bbe Service Workbench \u57df\u540d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"www.swb-example.com"),"\uff0c\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Origins")," \u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.swb-example.com/"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u8bf7\u786e\u4fdd\u586b\u5165\u7684URL\u4ee5 "/" \u7ed3\u5c3e\u3002')),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("a",{target:"_blank",href:n(9807).Z},(0,r.kt)("img",{src:n(1633).Z,width:"2184",height:"2038"}))),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4e3a Service Workbench \u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\uff0cService Workbench \u4f1a\u63d0\u4f9bCloudFront\u6765\u8bbf\u95ee\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u90e8\u7f72\u7684Service WorkbenchCloudFront\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Web Origins"),"\u3002\u5728\u90e8\u7f72Service Workbench\u4e4b\u524d\uff0c\u53ef\u4ee5\u4fdd\u7559",(0,r.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Web Origins"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\u3002\u90e8\u7f72 Service Workbench \u540e\uff0c\u9700\u8981\u83b7\u53d6 cloudfront \u57df\u5e76\u518d\u6b21\u5c06\u5176\u8f93\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Origins")," \u4e2d\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6CloudFront\u57df\u540d\n",(0,r.kt)("strong",{parentName:"li"},"CloudFormation"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Stacks"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"xxx-infrastructure"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Outputs"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"WebsiteUrl"),"\uff0c\u5982\u4e0b\u6240\u793a:\n",(0,r.kt)("a",{target:"_blank",href:n(5706).Z},(0,r.kt)("img",{src:n(9401).Z,width:"2552",height:"1316"})))))),(0,r.kt)("p",null,"\u9881\u53d1\u8005\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"https://<KEYCLOAK_DOMAIN_NAME>/auth/realms/<REALM_NAME>"),"\u3002"),(0,r.kt)("h4",{id:"\u5728-keycloak-\u4e2d\u521b\u5efa\u7528\u6237"},"\u5728 Keycloak \u4e2d\u521b\u5efa\u7528\u6237"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u767b\u5f55\u60a8\u90e8\u7f72\u7684 Keycloak \u7ba1\u7406\u63a7\u5236\u53f0\u5e76\u9009\u62e9\u60a8\u4e4b\u524d\u521b\u5efa\u7684 ",(0,r.kt)("strong",{parentName:"p"},"realm"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"User"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"Add user"),"\uff0c\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Username"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"First Name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Last Name"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"Save"),"\u521b\u5efa\u7528\u6237\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(126).Z},(0,r.kt)("img",{src:n(1154).Z,width:"2046",height:"1004"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u7528\u6237\u540e\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Credentials")," \u8bbe\u7f6e\u5bc6\u7801\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(6354).Z},(0,r.kt)("img",{src:n(4510).Z,width:"1952",height:"1256"}))))),(0,r.kt)("p",null,"\u60a8\u5df2\u6210\u529f\u5728 keycloak \u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a\u7528\u6237\u3002"),(0,r.kt)("h3",{id:"okta"},"Okta"),(0,r.kt)("h4",{id:"\u521b\u5efa-okta-oidc-\u5ba2\u6237\u7aef"},"\u521b\u5efa Okta OIDC \u5ba2\u6237\u7aef"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u767b\u5f55",(0,r.kt)("a",{parentName:"p",href:"https://www.okta.com/"},"Okta \u63a7\u5236\u53f0"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u6ca1\u6709\u8d26\u6237\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u8d26\u6237\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u5f00\u53d1\u8005\u7ba1\u7406\u63a7\u5236\u53f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u5e94\u7528\uff0c\u521b\u5efa\u5e94\u7528\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Applications")," -> ",(0,r.kt)("strong",{parentName:"p"},"Application")," -> ",(0,r.kt)("strong",{parentName:"p"},"Create App Integration")," -> ",(0,r.kt)("strong",{parentName:"p"},"OIDC - OpenID Connect"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u5355\u9875\u5e94\u7528\u7a0b\u5e8f"),"->\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u6309\u94ae\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u6309\u94ae\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"App\u96c6\u6210\u540d\u79f0"),"\uff0c\u8bbe\u7f6e",(0,r.kt)("strong",{parentName:"p"},"Grant type"),"\u4e3a",(0,r.kt)("strong",{parentName:"p"},"Authorization Code"),"\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(7373).Z},(0,r.kt)("img",{src:n(6059).Z,width:"1856",height:"1024"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u201c\u767b\u5f55\u91cd\u5b9a\u5411 URI\u201d\u548c\u201c\u9000\u51fa\u91cd\u5b9a\u5411 URI\u201d\u66f4\u65b0\u4e3a\u60a8\u7684 ICP \u8bb0\u5f55\u7684\u57df\u540d\u3002\n\u4f8b\u5982\uff0c\u5047\u8bbe Service Workbench \u57df\u540d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"www.swb-example.com"),"\uff0c\u8bf7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-in redirect URIs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-out redirect")," \u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.swb-example.com/")," URI\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u8bf7\u786e\u4fdd\u586b\u5165\u7684URL\u4ee5 "/" \u7ed3\u5c3e\u3002')),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("a",{target:"_blank",href:n(2118).Z},(0,r.kt)("img",{src:n(1214).Z,width:"1808",height:"778"}))),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4e3a Service Workbench \u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\uff0cService Workbench \u4f1a\u63d0\u4f9bCloudFront\u57df\u540d\u6765\u8bbf\u95ee\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u90e8\u7f72\u7684Service Workbench CloudFront\u57df\u540d\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-in redirect URIs"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-out redirect URIs"),"\u3002\u5728\u90e8\u7f72Service Workbench\u4e4b\u524d\uff0c\u53ef\u4ee5\u4fdd\u7559",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-in redirect URIs"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-out redirect URIs"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\u3002\u90e8\u7f72 Service Workbench \u540e\uff0c\u9700\u8981\u83b7\u53d6 cloudfront \u57df\u5e76\u518d\u6b21\u5c06\u5176\u8f93\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-in redirect URIs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign-out redirect URIs")," \u4e2d\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6Cloudfront\u57df\u540d\n",(0,r.kt)("strong",{parentName:"li"},"CloudFormation"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Stacks"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"xxx-infrastructure"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Outputs"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"WebsiteUrl"),"\uff0c\u5982\u4e0b\u6240\u793a:\n",(0,r.kt)("a",{target:"_blank",href:n(5706).Z},(0,r.kt)("img",{src:n(9401).Z,width:"2552",height:"1316"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u60a8\u53ef\u4ee5\u83b7\u5f97",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID"),"\uff08\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"client_id"),"\u6587\u672c\uff09\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Issuer"),"\uff08\u5373\u60a8\u7684Okta URL\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"https://xxx.okta.com"),"\uff09\u3002\u8bf7\u4fdd\u5b58\u5b83\u4eec\u4ee5\u4f9b\u4ee5\u540e\u4f7f\u7528\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(1191).Z},(0,r.kt)("img",{src:n(1522).Z,width:"1476",height:"826"}))))),(0,r.kt)("h4",{id:"\u5728-okta-\u4e2d\u521b\u5efa\u7528\u6237"},"\u5728 Okta \u4e2d\u521b\u5efa\u7528\u6237"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u767b\u5f55 ",(0,r.kt)("a",{parentName:"li",href:"https://www.okta.com/"},"Okta \u63a7\u5236\u53f0")," \u7ba1\u7406\u63a7\u5236\u53f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"Directory"),", ",(0,r.kt)("strong",{parentName:"li"},"People")," and ",(0,r.kt)("strong",{parentName:"li"},"Add person"),", \u7136\u540e\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"First name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Last name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Username")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Primary email"),", \u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"li"},"I will set password"),"\u8bbe\u7f6e\u5bc6\u7801\uff0c\u7136\u540e\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002\n",(0,r.kt)("a",{target:"_blank",href:n(126).Z},(0,r.kt)("img",{src:n(1154).Z,width:"2046",height:"1004"})))),(0,r.kt)("p",null,"\u60a8\u5df2\u5728 Okta \u4e2d\u6210\u529f\u521b\u5efa\u7528\u6237\u3002"))}d.isMDXComponent=!0},1411:function(e,t,n){t.Z=n.p+"assets/files/OIDC-config-c99d73ada1c66c0a1c35bc948f3fa07b.jpg"},5724:function(e,t,n){t.Z=n.p+"assets/files/authentication-configuration-861f430b250533423bf92b35b9933591.png"},6551:function(e,t,n){t.Z=n.p+"assets/files/authing-create-user-42ee8055fc6dcc39622dacbce13f49b5.png"},7520:function(e,t,n){t.Z=n.p+"assets/files/authing-user-config-bc4db21c1bf13586477037aac58288c3.png"},8576:function(e,t,n){t.Z=n.p+"assets/files/authorization-configuration-76b08493cca8861bc11e50db6eeaf384.png"},6153:function(e,t,n){t.Z=n.p+"assets/files/create-authing-userpool-e61d3e074db582f81fbbcdeedd18f82f.png"},1383:function(e,t,n){t.Z=n.p+"assets/files/endpoint-info-e7ed55fcbd502c490c8ad7087bf41fb7.png"},5706:function(e,t,n){t.Z=n.p+"assets/files/get-cloudfront-domain-972b3eb749b34a459230eb3626b129b9.png"},9807:function(e,t,n){t.Z=n.p+"assets/files/keycloak-client-setting-a56de635ad4b870e49ccb867bc4af691.png"},8008:function(e,t,n){t.Z=n.p+"assets/files/keycloak-example-realm-f9263f2b2d98396583d1ec2b3372268e.jpg"},126:function(e,t,n){t.Z=n.p+"assets/files/keycloak-user-create-94ebba1a1b92f4682fc75ac5e34fac21.png"},6354:function(e,t,n){t.Z=n.p+"assets/files/keycloak-user-password-00d09a5b098d41a2ca966786d5d62868.png"},7373:function(e,t,n){t.Z=n.p+"assets/files/okta-application-create-6b17d506b699be36f5820f73b3f69f12.png"},2118:function(e,t,n){t.Z=n.p+"assets/files/okta-application-url-29231e991dcfc3eaa286303a1a4e07ee.png"},1191:function(e,t,n){t.Z=n.p+"assets/files/okta-client-id-68507283cf40ec1ae1a4245f8adc49bf.png"},421:function(e,t,n){t.Z=n.p+"assets/images/OIDC-config-c99d73ada1c66c0a1c35bc948f3fa07b.jpg"},3831:function(e,t,n){t.Z=n.p+"assets/images/authentication-configuration-861f430b250533423bf92b35b9933591.png"},830:function(e,t,n){t.Z=n.p+"assets/images/authing-create-user-42ee8055fc6dcc39622dacbce13f49b5.png"},265:function(e,t,n){t.Z=n.p+"assets/images/authing-user-config-bc4db21c1bf13586477037aac58288c3.png"},5012:function(e,t,n){t.Z=n.p+"assets/images/authorization-configuration-76b08493cca8861bc11e50db6eeaf384.png"},6997:function(e,t,n){t.Z=n.p+"assets/images/create-authing-userpool-e61d3e074db582f81fbbcdeedd18f82f.png"},8525:function(e,t,n){t.Z=n.p+"assets/images/endpoint-info-e7ed55fcbd502c490c8ad7087bf41fb7.png"},9401:function(e,t,n){t.Z=n.p+"assets/images/get-cloudfront-domain-972b3eb749b34a459230eb3626b129b9.png"},1633:function(e,t,n){t.Z=n.p+"assets/images/keycloak-client-setting-a56de635ad4b870e49ccb867bc4af691.png"},358:function(e,t,n){t.Z=n.p+"assets/images/keycloak-example-realm-f9263f2b2d98396583d1ec2b3372268e.jpg"},1154:function(e,t,n){t.Z=n.p+"assets/images/keycloak-user-create-94ebba1a1b92f4682fc75ac5e34fac21.png"},4510:function(e,t,n){t.Z=n.p+"assets/images/keycloak-user-password-00d09a5b098d41a2ca966786d5d62868.png"},6059:function(e,t,n){t.Z=n.p+"assets/images/okta-application-create-6b17d506b699be36f5820f73b3f69f12.png"},1214:function(e,t,n){t.Z=n.p+"assets/images/okta-application-url-29231e991dcfc3eaa286303a1a4e07ee.png"},1522:function(e,t,n){t.Z=n.p+"assets/images/okta-client-id-68507283cf40ec1ae1a4245f8adc49bf.png"}}]);