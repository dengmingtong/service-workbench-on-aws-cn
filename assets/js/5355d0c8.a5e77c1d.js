"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[5635],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1923:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={id:"account_structure",title:"Account Structure",sidebar_label:"Account Structure"},u=void 0,s={unversionedId:"user_guide/account_structure",id:"user_guide/account_structure",isDocsHomePage:!1,title:"Account Structure",description:"Account Structure",source:"@site/docs/user_guide/account_structure.md",sourceDirName:"user_guide",slug:"/user_guide/account_structure",permalink:"/service-workbench-on-aws-cn/user_guide/account_structure",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/user_guide/account_structure.md",tags:[],version:"current",frontMatter:{id:"account_structure",title:"Account Structure",sidebar_label:"Account Structure"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Exporting data from AppStream-enabled workspaces",permalink:"/service-workbench-on-aws-cn/deployment/reference/egress_store_approval_process"},next:{title:"Sidebar Introduction",permalink:"/service-workbench-on-aws-cn/user_guide/introduction"}},l=[{value:"Account Structure",id:"account-structure",children:[{value:"Local Users",id:"local-users",children:[],level:3}],level:2}],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"account-structure"},"Account Structure"),(0,o.kt)("p",null,"Service Catalog uses three kinds of accounts, whose names are used in this guide. ",(0,o.kt)("em",{parentName:"p"},"Master")," and ",(0,o.kt)("em",{parentName:"p"},"Member")," accounts are terms referring to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html"},"AWS Organizations"),", while ",(0,o.kt)("em",{parentName:"p"},"Main")," account is a Service Catalog term."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Main"),": The account within which Service Catalog is deployed. The main account will be billed for all AWS usage charges for the Service Catalog deployment itself: the S3 bucket holding the website, and other resources not created by a user. Service Catalog may be deployed in a master account (the account holding the Organization), or a member account (within the Organization). In either case, this account is called the Service Catalog ",(0,o.kt)("em",{parentName:"li"},"Main")," account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Master"),": The account hosting the AWS Organization. The master account is responsible for the billing of the member accounts within the Organization."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Member"),": An account within an AWS Organization. When you create an account using ",(0,o.kt)("a",{parentName:"li",href:"/deployment/post_deployment/aws_accounts#Create_AWS_Account"},"Create AWS Account"),", that account is created as a member of the Organization.")),(0,o.kt)("p",null,"See also in the source code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"README.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"))),(0,o.kt)("h3",{id:"local-users"},"Local Users"),(0,o.kt)("p",null,"Local users are created only within the solution and their credentials stored in DynamoDB. This is a fast way to get an installation working since the alternative is to integrate with an AD."))}d.isMDXComponent=!0}}]);