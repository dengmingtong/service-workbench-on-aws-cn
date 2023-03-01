"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7266],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=l,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"conf-settings",title:"\u914d\u7f6e\u8bbe\u7f6e",sidebar_label:"\u914d\u7f6e\u8bbe\u7f6e"},p=void 0,m={unversionedId:"zh/installation_guide/installation/pre-installation/conf-settings",id:"zh/installation_guide/installation/pre-installation/conf-settings",title:"\u914d\u7f6e\u8bbe\u7f6e",description:"Stage name",source:"@site/docs/zh/installation_guide/installation/pre-installation/conf-settings.md",sourceDirName:"zh/installation_guide/installation/pre-installation",slug:"/zh/installation_guide/installation/pre-installation/conf-settings",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/conf-settings",draft:!1,tags:[],version:"current",frontMatter:{id:"conf-settings",title:"\u914d\u7f6e\u8bbe\u7f6e",sidebar_label:"\u914d\u7f6e\u8bbe\u7f6e"},sidebar:"serviceWorkbenchSidebar",previous:{title:"EC2 \u5b9e\u4f8b\u8981\u6c42",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/instance-req"},next:{title:"\u5b89\u88c5 AMIs",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/ami-install"}},s={},u=[{value:"Stage name",id:"stage-name",level:3},{value:"\u53ef\u5355\u72ec\u90e8\u7f72\u7684\u7ec4\u4ef6",id:"\u53ef\u5355\u72ec\u90e8\u7f72\u7684\u7ec4\u4ef6",level:3},{value:"\u51c6\u5907\u4e3b\u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907\u4e3b\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u81ea\u5b9a\u4e49\u8eab\u4efd\u63d0\u4f9b\u8005",id:"\u81ea\u5b9a\u4e49\u8eab\u4efd\u63d0\u4f9b\u8005",level:3},{value:"\u81ea\u5b9a\u4e49\u57df\u540d",id:"\u81ea\u5b9a\u4e49\u57df\u540d",level:3},{value:"\u4f7f\u7528Application Load Balancer \u63a5\u5165\u8be5\u65b9\u6848",id:"\u4f7f\u7528application-load-balancer-\u63a5\u5165\u8be5\u65b9\u6848",level:3},{value:"\u7981\u7528 Lambda@Edge",id:"\u7981\u7528-lambdaedge",level:3},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u90e8\u7f72\u5230\u4e2d\u56fd\u533a\u57df\u65f6\u7684\u989d\u5916\u914d\u7f6e",id:"\u90e8\u7f72\u5230\u4e2d\u56fd\u533a\u57df\u65f6\u7684\u989d\u5916\u914d\u7f6e",level:3},{value:"\u51c6\u5907SDC\u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907sdc\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u652f\u6301\u7684\u533a\u57df",id:"\u652f\u6301\u7684\u533a\u57df",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"stage-name"},"Stage name"),(0,r.kt)("p",null,"Stage name \u7528\u4e8e\u5141\u8bb8\u6765\u81ea\u540c\u4e00\u8d26\u6237\u7684\u591a\u4e2a Service Workbench \u90e8\u7f72\u3002\u5b83\u4ee3\u8868\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u3002\u5bf9\u4e8e Amazon Simple Storage Service (",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),") \u90e8\u7f72\u5b58\u50a8\u6876\u4e2d\u7684\u9650\u5236\uff0cStage name\u4e0d\u5f97\u8d85\u8fc7\u4e94\u4e2a\u5b57\u7b26\u3002\u5b58\u50a8\u6876\u662f Amazon S3 \u4e2d\u7528\u4e8e\u6570\u636e\u5b58\u50a8\u7684\u57fa\u672c\u5bb9\u5668\u3002\n\u60a8\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u7684stage\u540d\u79f0\u3002\u5982\u679c\u60a8\u8ba1\u5212\u53ea\u90e8\u7f72\u4e00\u6b21\u89e3\u51b3\u65b9\u6848\uff0c\u4e00\u4e2a\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u4f7f\u7528\u60a8\u81ea\u5df1\u7684\u767b\u5f55\u540d\u3002\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u81ea\u5b9a\u4e49Stage name\u8868\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>"),"\u3002"),(0,r.kt)("h3",{id:"\u53ef\u5355\u72ec\u90e8\u7f72\u7684\u7ec4\u4ef6"},"\u53ef\u5355\u72ec\u90e8\u7f72\u7684\u7ec4\u4ef6"),(0,r.kt)("p",null,"Service Workbench \u4ee3\u7801\u5206\u4e3a\u591a\u4e2a\uff08\u76ee\u524d\u662f\u4e03\u4e2a\uff09\u53ef\u5355\u72ec\u90e8\u7f72\u7684\u7ec4\u4ef6 (SDC)\uff1a\u540e\u7aef\u3001\u7528\u6237\u754c\u9762\u3001\u90e8\u7f72\u540e\u3001\u90e8\u7f72\u524d\u3001edge-lambda\u3001\u57fa\u7840\u8bbe\u65bd\u3001\u673a\u5668\u955c\u50cf\u548c prepare-aster-acc\u3002\u6bcf\u4e2a SDC \u5728\u4f4d\u7f6e main/solution \u4e2d\u90fd\u6709\u4e00\u4e2a\u76ee\u5f55\u3002\u60a8\u53ef\u4ee5\u4ece\u6839\u76ee\u5f55\u8fd0\u884c\u811a\u672c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5355\u72ec\u7684\u811a\u672c\u5355\u72ec\u90e8\u7f72\u6bcf\u4e2a SDC\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/service-workbench-on-aws-cn/zh/installation_guide/components"},"\u65e0\u670d\u52a1\u5668\u6846\u67b6\u548c\u9879\u76ee"),"\u3002"),(0,r.kt)("h3",{id:"\u51c6\u5907\u4e3b\u914d\u7f6e\u6587\u4ef6"},"\u51c6\u5907\u4e3b\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u590d\u5236\u793a\u4f8b\u5168\u5c40 AWS Config \u6587\u4ef6\uff0c\u547d\u540d\u4e3a\u60a8\u7684Stage name\u5e76\u4fee\u6539\u5b83\u3002\u4e3b\u914d\u7f6e\u7684\u5f53\u524d\u9ed8\u8ba4\u503c\u5b58\u50a8\u5728\u76ee\u5f55\u7684\u9ed8\u8ba4\u6587\u4ef6\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"main/config/settings/.defaults.yml"),"\u3002\u5982\u679cStage name\u7684\u8bbe\u7f6e\u6587\u4ef6\u4e0d\u53ef\u7528\uff0c\u5219\u4ece\u6b64\u9ed8\u8ba4\u6587\u4ef6\u4e2d\u8bfb\u53d6\u503c\u3002"),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u81ea\u5b9a\u4e49\uff08\u4ee5Stage name\u7684\uff09\u8bbe\u7f6e\u6587\u4ef6\uff0c\u8bf7\u5728\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"main/config/settings")," \u4e2d\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"example.yml")," \u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml")," \u5e76\u7f16\u8f91\u6b64\u65b0\u6587\u4ef6\u3002\u9ed8\u8ba4\u503c\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},".defaults.yml")," \u4e2d\u8bfb\u53d6\uff0c\u9664\u975e\u8fd9\u4e9b\u503c\u5728\u6b64\u6587\u4ef6\u4e2d\u88ab\u8986\u76d6\u3002\u4e0b\u8868\u63cf\u8ff0\u4e86\u9ed8\u8ba4\u503c:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsRegion")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"us-east-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsProfile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u9ed8\u8ba4\u503c\uff1b\u5c06\u6b64\u8bbe\u7f6e\u4e3a\u60a8\u5f53\u524d\u7684 AWS \u914d\u7f6e\u6587\u4ef6\uff0c\u9664\u975e\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u6216\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"solutionName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sw"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envName")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0eStage name\u76f8\u540c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prod"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableExternalResearchers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8eab\u4efd\u63d0\u4f9b\u8005"},"\u81ea\u5b9a\u4e49\u8eab\u4efd\u63d0\u4f9b\u8005"),(0,r.kt)("p",null,"Service Workbench \u5185\u7f6e\u7684 IdP \u662f Cognito \u7528\u6237\u6c60\uff0c\u5982\u679c\u4e0d\u60f3\u4f7f\u7528 Cognito \u7528\u6237\u6c60\u4f5c\u4e3a IdP \u6216\u8005\u90e8\u7f72\u533a\u57df\u4e0d\u652f\u6301 Cognito \u7528\u6237\u6c60\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5916\u90e8 OIDC IdP\uff0c\u4f8b\u5982 Keycloak\u3001Authing \u548c Okta \u6765\u4e0e Service Workbench \u96c6\u6210\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528OIDC IdP\uff0c\u9996\u5148\u9700\u8981\u5b89\u88c5\u6216\u5e94\u7528OIDC IdP\uff0c\u8be6\u60c5\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./oidc-providers"},"OIDC Providers Settings"),"\uff0c\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"defaultIdpType: oidc\noidcIssuer: xxx\noidcClientId: xxx\nrootUserEmail: xxx\nrootUserFirstName: xxx\nrootUserLastName: xxx\n")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u57df\u540d"},"\u81ea\u5b9a\u4e49\u57df\u540d"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u8bf7\u8f93\u5165\u624b\u52a8\u521b\u5efa\u7684 TLS \u8bc1\u4e66\u7684\u57df\u540d\u548c ARN\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"domainName: host.domain.toplevel\ncertificateArn: <ARN>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),"\uff1a\u5f53\u524d\u7684\u5b9e\u73b0\u5047\u5b9a DNS \u5728\u5176\u4ed6\u5730\u65b9\u5904\u7406\u3002\u672a\u6765\u6539\u8fdb\u540e\u5c06\u81ea\u52a8\u5904\u7406\u8bc1\u4e66\u548c Route 53 \u6761\u76ee\u7684\u521b\u5efa\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),"\uff1a\u5b89\u88c5 Service Workbench \u65f6\uff0c\u8be5\u6b65\u9aa4\u662f\u53ef\u9009\u7684\u3002\u5bf9\u4e8e\u7531\u897f\u4e91\u6570\u636e\u8fd0\u8425\u7684\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\u4e2d\u56fd\uff08\u5b81\u590f\uff09\u533a\u57df\uff08cn-northwest-1\uff09\u6216\u7531\u5149\u73af\u65b0\u7f51\u8fd0\u8425\u7684\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\u4e2d\u56fd\uff08\u5317\u4eac\uff09\u533a\u57df\uff08cn-north-1\uff09\uff0c\u5fc5\u987b\u914d\u7f6e\u201c\u57df\u540d\u201d\u3002\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"./china-prerequisites"},"\u90e8\u7f72\u5230\u4e2d\u56fd\u533a\u57df\u7684\u5148\u51b3\u6761\u4ef6"),"\u521b\u5efaICP\u8bb8\u53ef\u57df\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),"\uff1a\u5982\u679c\u5f53\u524d AWS \u8d26\u6237 Route 53 \u4e2d\u672a\u7ba1\u7406 DNS \u89e3\u6790\uff0c\u8bf7\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"customDomainInR53")," \u914d\u7f6e\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528application-load-balancer-\u63a5\u5165\u8be5\u65b9\u6848"},"\u4f7f\u7528Application Load Balancer \u63a5\u5165\u8be5\u65b9\u6848"),(0,r.kt)("p",null,"Service Workbench \u5141\u8bb8\u5ba2\u6237\u5728\u6ca1\u6709\u81ea\u5b9a\u4e49\u57df\u540d\u7684\u60c5\u51b5\u4e0b\u90e8\u7f72\u8be5\u65b9\u6848\uff0c\u901a\u8fc7Amazon Application Load Balancer(ALB) \u8bbf\u95ee\u672c\u65b9\u6848\u7684\u9875\u9762.\n\u60a8\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml"),"\u6587\u4ef6\u4e2d\u8bbe\u5b9a\u5982\u4e0b\u914d\u7f6e\u6765\u5f00\u542fALB\u7684\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enableAlb: true\nalbSubnetIdList: 'subnet-xxx,subnet-xxx'\nalbVpcId: 'vpc-xxx'\nalbPort: 8000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enableAlb"),": \u7528\u4e8e\u6807\u8bb0ALB\u7684\u529f\u80fd\u662f\u5426\u5f00\u542f\uff0c",(0,r.kt)("strong",{parentName:"li"},"true"),"\u4e3a\u5f00\u542f\u6b64\u529f\u80fd\uff0c",(0,r.kt)("strong",{parentName:"li"},"false"),"\u4e3a\u5173\u95ed\u6b64\u529f\u80fd\u3002\u5982\u679c\u60a8\u4e0d\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"<stage>.yml"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u6b64\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("strong",{parentName:"li"},"false"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"albSubnetIdList"),": \u6b64\u914d\u7f6e\u9009\u9879\u53ea\u6709\u5728",(0,r.kt)("strong",{parentName:"li"},"enableAlb"),"\u914d\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"li"},"true"),"\u65f6\u624d\u751f\u6548\uff0c\u6307\u5b9aALB\u88ab\u521b\u5efa\u5728\u8fd9\u4e9b\u5b50\u7f51\u91cc\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"albVpcId"),": \u6b64\u914d\u7f6e\u9009\u9879\u53ea\u6709\u5728",(0,r.kt)("strong",{parentName:"li"},"enableAlb"),"\u914d\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"li"},"true"),"\u65f6\u624d\u751f\u6548\uff0c\u6307\u5b9aALB\u88ab\u521b\u5efa\u5728\u8fd9\u6b64VPC\u91cc\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"albPort"),": \u6307\u5b9aALB\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u503c\u4e3a8000\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5f00\u542f\u4e86ALB\u529f\u80fd\uff0c\u5f53\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u80fd\u5728\u7ec8\u7aef\u7684\u8f93\u51fa\u4fe1\u606f\u91cc\u83b7\u5f97",(0,r.kt)("strong",{parentName:"p"},"Alb URL"),"\u7684\u4fe1\u606f\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7scripts/get-info.sh\u811a\u672c\u83b7\u5f97\u6b64",(0,r.kt)("strong",{parentName:"p"},"Alb URL"),"\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"\u7981\u7528-lambdaedge"},"\u7981\u7528 Lambda@Edge"),(0,r.kt)("p",null,"Service Workbench \u5141\u8bb8\u5ba2\u6237\u7981\u7528lambda@edge\u6765\u51cf\u5c11\u8c03\u7528lambda function\u7684\u6b21\u6570\u3002\n\u60a8\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml"),"\u6587\u4ef6\u4e2d\u8bbe\u5b9a\u5982\u4e0b\u914d\u7f6e\u6765\u7981\u7528lambda@edge\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enableLambdaEdge: false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enableLambdaEdge"),": \u7528\u4e8e\u6807\u8bb0lambda@edge\u662f\u5426\u542f\u7528\uff0c",(0,r.kt)("strong",{parentName:"li"},"false"),"\u4e3a\u7981\u7528lambda@edge. \u5982\u679c\u60a8\u4e0d\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"<stage>.yml"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u6b64\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("strong",{parentName:"li"},"true"),"\u3002")),(0,r.kt)("p",null,"lambda@edge \u8d1f\u8d23\u5f80cloudfront\u7684http response\u4e2d\u6dfb\u52a0\u4e00\u4e9bsecurity header\u3002\u60f3\u8981\u4e86\u89e3security headers\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/service-workbench-on-aws-cn/blob/mainline/main/solution/edge-lambda/config/infra/cloudformation.yml#L52-L94"},"code"),"\u3002"),(0,r.kt)("h3",{id:"\u547d\u540d\u7a7a\u95f4"},"\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("p",null,"\u8bb8\u591a\u5df2\u90e8\u7f72\u8d44\u6e90\u7684\u540d\u79f0\u90fd\u5305\u542b\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\u201cmystage-va-sw\u201d\u3002\u8be5\u5b57\u7b26\u4e32\u662f\u901a\u8fc7\u8fde\u63a5\u4ee5\u4e0b\u5185\u5bb9\u7ec4\u6210\u7684:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"\u533a\u57df\u7b80\u79f0\uff08\u4f8b\u5982\uff0cUS-East-1 \u6216 US-West-2 \u7b80\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"va"),"\uff0c\u53ef\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},".defaults.yml")," \u4e2d\u5b9a\u4e49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6848\u540d\u79f0")),(0,r.kt)("h3",{id:"\u90e8\u7f72\u5230\u4e2d\u56fd\u533a\u57df\u65f6\u7684\u989d\u5916\u914d\u7f6e"},"\u90e8\u7f72\u5230\u4e2d\u56fd\u533a\u57df\u65f6\u7684\u989d\u5916\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5728\u5317\u4eac/\u5b81\u590f\u5730\u533a\u90e8\u7f72 Service Workbench\uff0c\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"awsPartition: aws-cn\nawsSuffix: amazonaws.com.cn\n")),(0,r.kt)("h3",{id:"\u51c6\u5907sdc\u914d\u7f6e\u6587\u4ef6"},"\u51c6\u5907SDC\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u6bcf\u4e2a SDC \u90fd\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"config/settings")," \u76ee\u5f55\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u7f6e\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002\u8bbe\u7f6e\u6587\u4ef6\u4ee5Stage name ",(0,r.kt)("inlineCode",{parentName:"p"},"<mystagename.yml>")," \u547d\u540d\u3002\u4e00\u4e9b SDC \u8bbe\u7f6e\u76ee\u5f55\u5305\u542b\u4e00\u4e2a\u201cexample.yml\u201d\u6587\u4ef6\uff0c\u53ef\u4ee5\u5c06\u5176\u590d\u5236\u5e76\u91cd\u547d\u540d\u4e3a\u8be5 SDC \u7684\u8bbe\u7f6e\u6587\u4ef6\u3002\u5426\u5219\uff0c\u65e0\u8bbaStage name\u662f\u4ec0\u4e48\uff0c\u90fd\u4f1a\u8bfb\u53d6\u5e76\u4f7f\u7528\u8be5\u76ee\u5f55\u4e2d\u7684\u9ed8\u8ba4\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},".defaults.yml"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5b89\u88c5 Service Workbench \u65f6\uff0c\u8be5\u6b65\u9aa4\u662f\u53ef\u9009\u7684\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301\u7684\u533a\u57df"},"\u652f\u6301\u7684\u533a\u57df"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u533a\u57df\u652f\u6301\u8fd0\u884c Service Workbench \u6240\u9700\u7684\u6240\u6709 AWS \u670d\u52a1\u548c\u529f\u80fd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"US East (Ohio)"),(0,r.kt)("li",{parentName:"ul"},"US East (N. Virginia)"),(0,r.kt)("li",{parentName:"ul"},"US West (N. California)"),(0,r.kt)("li",{parentName:"ul"},"US West (Oregon)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Mumbai)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Seoul)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Singapore)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Sydney)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Tokyo)"),(0,r.kt)("li",{parentName:"ul"},"Canada (Central)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Frankfurt)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Ireland)"),(0,r.kt)("li",{parentName:"ul"},"Europe (London)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Paris)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Stockholm)"),(0,r.kt)("li",{parentName:"ul"},"South America (S\xe3o Paulo)"),(0,r.kt)("li",{parentName:"ul"},"China (Beijing) Region Operated by Sinnet"),(0,r.kt)("li",{parentName:"ul"},"China (Ningxia) Region operated by NWCD"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Hong Kong)")))}c.isMDXComponent=!0}}]);