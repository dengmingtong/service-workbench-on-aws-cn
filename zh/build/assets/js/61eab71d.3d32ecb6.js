"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[5651],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={id:"uninstall",title:"Uninstalling Service Workbench",sidebar_label:"Uninstalling Service Workbench"},s=void 0,u={unversionedId:"installation_guide/uninstall",id:"installation_guide/uninstall",isDocsHomePage:!1,title:"Uninstalling Service Workbench",description:"Follow these guidelines to delete the following for uninstalling Service Workbench:",source:"@site/docs/installation_guide/uninstall.md",sourceDirName:"installation_guide",slug:"/installation_guide/uninstall",permalink:"/service-workbench-on-aws-cn/installation_guide/uninstall",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/uninstall.md",tags:[],version:"current",frontMatter:{id:"uninstall",title:"Uninstalling Service Workbench",sidebar_label:"Uninstalling Service Workbench"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Post upgrade",permalink:"/service-workbench-on-aws-cn/installation_guide/postupgrade"},next:{title:"Troubleshooting",permalink:"/service-workbench-on-aws-cn/installation_guide/troubleshooting"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Follow these guidelines to delete the following for uninstalling Service Workbench:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CloudFormation stack")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For Workspaces that are running, manually delete the PVRE role additions before the stack is successfully deleted."),(0,l.kt)("li",{parentName:"ul"},"Empty every bucket before deleting the stack."),(0,l.kt)("li",{parentName:"ul"},"The artifacts bucket has to be deleted manually.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Products from AWS Service Catalog")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the portfolio, remove each product, delete the entries in groups, roles and users, and then delete the portfolio."),(0,l.kt)("li",{parentName:"ul"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Products")," and delete the products from the list.\nAMIs and snapshots"),(0,l.kt)("li",{parentName:"ul"},"Go to EC2 console, select AMIs in the left-hand menu, choose all AMIs (from SWB) and then choose ",(0,l.kt)("strong",{parentName:"li"},"Deregister"),"."),(0,l.kt)("li",{parentName:"ul"},"Select all snapshots and choose ",(0,l.kt)("strong",{parentName:"li"},"Delete"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lambda functions")),(0,l.kt)("p",null,"Delete Service Workbench-related Lambda functions."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CloudWatch log groups")),(0,l.kt)("p",null,"Go to CloudWatch console, then select and delete the log groups. Alternatively, set the retention and the log groups will be deleted automatically."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AWS Cloud9 IDE")),(0,l.kt)("p",null,"If you used AWS Cloud9 to deploy Service Workbench, you can delete this environment."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Using the uninstall script")),(0,l.kt)("p",null,"Use the following script to uninstall Service Workbench:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://github.com/awslabs/service-workbench-on-aws/blob/mainline/scripts/environment-delete.sh \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Regional code mapping")),(0,l.kt)("p",null,"Region code mapping is defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"main/config/settings/.defaults.yml")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-'us-east-2':",metastring:"'oh'","'oh'":!0},"'us-east-1': 'va'\n'us-west-1': 'ca'\n'us-west-2': 'or'\n'ap-east-1': 'hk'\n'ap-south-1': 'mum'\n'ap-northeast-3': 'osa'\n'ap-northeast-2': 'sel'\n'ap-southeast-1': 'sg'\n'ap-southeast-2': 'syd'\n'ap-northeast-1': 'ty'\n'ca-central-1': 'ca'\n'cn-north-1': 'cn'\n'cn-northwest-1': 'nx'\n'eu-central-1': 'fr'\n'eu-west-1': 'irl'\n'eu-west-2': 'ldn'\n'eu-west-3': 'par'\n'eu-north-1': 'sth'\n'me-south-1': 'bhr'\n'sa-east-1': 'sao'\n'us-gov-east-1': 'gce'\n'us-gov-west-1': 'gcw'\n")))}d.isMDXComponent=!0}}]);