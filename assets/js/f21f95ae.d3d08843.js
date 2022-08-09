"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7021],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1948:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"documentation",title:"Accessing reference documentation",sidebar_label:"Accessing reference documentation"},l=void 0,s={unversionedId:"installation_guide/installation/pre-installation/documentation",id:"installation_guide/installation/pre-installation/documentation",isDocsHomePage:!1,title:"Accessing reference documentation",description:"You can access the documentation on your local machine, via a local web server, once you\u2019ve completed the following steps:",source:"@site/docs/installation_guide/installation/pre-installation/documentation.md",sourceDirName:"installation_guide/installation/pre-installation",slug:"/installation_guide/installation/pre-installation/documentation",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/documentation",editUrl:"/edit/develop/docs/docs/installation_guide/installation/pre-installation/documentation.md",tags:[],version:"current",frontMatter:{id:"documentation",title:"Accessing reference documentation",sidebar_label:"Accessing reference documentation"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Configuration settings",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/conf-settings"},next:{title:"Installing AMIs",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/ami-install"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can access the documentation on your local machine, via a local web server, once you\u2019ve completed the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the source code for Service Workbench on AWS to your local computer. Note that this local copy is for documentation only."),(0,i.kt)("li",{parentName:"ol"},"Install docusaurus (requires node and yarn)"),(0,i.kt)("li",{parentName:"ol"},"From within source code directory on your local computer, run the following commands to host the platform reference documentation:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd docs \nyarn start\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"You can access the documentation ",(0,i.kt)("a",{parentName:"li",href:"/installation_guide/overview"},"here"),".")))}d.isMDXComponent=!0}}]);