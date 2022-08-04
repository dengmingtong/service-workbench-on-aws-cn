"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1363],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return o}})},4996:function(t,e,n){n.d(e,{C:function(){return r},Z:function(){return i}});var a=n(2263),o=n(3919);function r(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,l=void 0!==i&&i,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return c?t+u:u}(r,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},5708:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"tool-req",title:"Tool requirements",sidebar_label:"Tool requirements"},c=void 0,u={unversionedId:"installation_guide/installation/pre-installation/tool-req",id:"installation_guide/installation/pre-installation/tool-req",isDocsHomePage:!1,title:"Tool requirements",description:"The initial prerequisites include creating a main account in AWS, enabling the AWS Cost Explorer and activating the cost allocation tags.",source:"@site/docs/installation_guide/installation/pre-installation/tool-req.md",sourceDirName:"installation_guide/installation/pre-installation",slug:"/installation_guide/installation/pre-installation/tool-req",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/tool-req",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/installation/pre-installation/tool-req.md",tags:[],version:"current",frontMatter:{id:"tool-req",title:"Tool requirements",sidebar_label:"Tool requirements"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Overview",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/overview"},next:{title:"OIDC Providers Settings",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/oidc-providers"}},p=[{value:"Setting up the main account",id:"setting-up-the-main-account",children:[],level:3},{value:"Enabling AWS Cost Explorer",id:"enabling-aws-cost-explorer",children:[],level:3},{value:"Activating the cost allocation tags",id:"activating-the-cost-allocation-tags",children:[],level:3}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The initial prerequisites include creating a main account in AWS, enabling the AWS Cost Explorer and activating the cost allocation tags."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),": Before installing Service Workbench, ensure that you have practical knowledge of core AWS services. "),(0,r.kt)("h3",{id:"setting-up-the-main-account"},"Setting up the main account"),(0,r.kt)("p",null,"Main account is the AWS account where Service Workbench is deployed."),(0,r.kt)("h3",{id:"enabling-aws-cost-explorer"},"Enabling AWS Cost Explorer"),(0,r.kt)("p",null,"In order to see the actual cost in dashboards and Workspaces, you must set up a master account in AWS Cost Explorer. The master account holds the AWS Organization that creates member accounts. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": You can enable AWS Cost Explorer even after installing Service Workbench. "),(0,r.kt)("p",null,"To enable AWS Cost Explorer in the account into which you will be deploying Service Workbench on AWS, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the account drop-down, choose ",(0,r.kt)("strong",{parentName:"li"},"My Billing Dashboard"),".")),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/installation/billing_dashboard.png")}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Cost Explorer")," from the sidebar.")),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/installation/cost_explorer1.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Launch Cost Explorer"),".")),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/installation/cost_explorer2.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The initialization can take up 24 hours; however, it does not have to be completed before starting the installation process."),(0,r.kt)("h3",{id:"activating-the-cost-allocation-tags"},"Activating the cost allocation tags"),(0,r.kt)("p",null,"Activate the necessary cost allocation tags in the ",(0,r.kt)("strong",{parentName:"p"},"AWS Billing & Cost Management Dashboard"),":"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tags are automatically created during the solution deployment, but manual activation is still required."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to the AWS Management Console and open the ",(0,r.kt)("strong",{parentName:"p"},"Billing & Cost Management Dashboard")," ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/billing/"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the navigation pane, choose ",(0,r.kt)("strong",{parentName:"p"},"Cost allocation tags"),"."))),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/installation/cost_atags1.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Under User-defined cost allocation tags, choose ",(0,r.kt)("strong",{parentName:"li"},"createdBy"),", ",(0,r.kt)("strong",{parentName:"li"},"Env"),", and ",(0,r.kt)("strong",{parentName:"li"},"Proj")," tags.")),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/installation/cost_atags2.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": There might be a delay after enabling the AWS Cost Explorer before these tags are visible. "),(0,r.kt)("p",null,"If you have enabled Cost Explorer, but you do not see these tags through the AWS Console, you can still proceed with the installation.  Check later (it could be up to 24 hours after enabling Cost Explorer) and enable the tags for cost reporting to function correctly in Service Workbench."),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html"},"Billing and Cost Management"),"."))}m.isMDXComponent=!0}}]);