"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1238],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return r}})},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return o}});var a=t(2263),r=t(3919);function i(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+u:u}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},5886:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(4996),l=["components"],s={id:"instance-req",title:"Instance requirements",sidebar_label:"Instance requirements"},c=void 0,u={unversionedId:"installation_guide/installation/pre-installation/instance-req",id:"installation_guide/installation/pre-installation/instance-req",isDocsHomePage:!1,title:"Instance requirements",description:"| Section      | Description |",source:"@site/docs/installation_guide/installation/pre-installation/instance-req.md",sourceDirName:"installation_guide/installation/pre-installation",slug:"/installation_guide/installation/pre-installation/instance-req",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/instance-req",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/installation/pre-installation/instance-req.md",tags:[],version:"current",frontMatter:{id:"instance-req",title:"Instance requirements",sidebar_label:"Instance requirements"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Software requirements",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/software-req"},next:{title:"Configuration settings",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/conf-settings"}},p=[{value:"Creating an EC2 instance",id:"creating-an-ec2-instance",children:[],level:3},{value:"Configuring an EC2 instance",id:"configuring-an-ec2-instance",children:[{value:"Creating a new IAM role",id:"creating-a-new-iam-role",children:[],level:4},{value:"Adding a role to an existing instance",id:"adding-a-role-to-an-existing-instance",children:[],level:4}],level:3},{value:"Installing the required software on EC2 instance",id:"installing-the-required-software-on-ec2-instance",children:[],level:3}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Section"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#createinst"},"Creating an EC2 instance")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides information on selecting the EC2 instance size for Service Workbench installation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#confinst"},"Configuring an EC2 instance")),(0,i.kt)("td",{parentName:"tr",align:null},"Describes the procedure of configuring an EC2 instance, creating an IAM role, and assigning the administrator role to the EC2 instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#install"},"Installing the required software on EC2 instance")),(0,i.kt)("td",{parentName:"tr",align:null},"Describes the commands to clone Git directory that contains Service Workbench installation.")))),(0,i.kt)("h3",{id:"creating-an-ec2-instance"},"Creating an EC2 instance"),(0,i.kt)("a",{name:"createinst"}),(0,i.kt)("p",null,"You can create an EC2 instance with the following specifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Amazon EC2 instance type: Use a ",(0,i.kt)("inlineCode",{parentName:"li"},"T2.medium")," Amazon EC2 instance or larger. Larger machines have faster networking and larger disks have higher performance. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important"),": 40 GB is the suggested disk drive size needed for installation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VPC and subnets: Use the default VPC and subnet."),(0,i.kt)("li",{parentName:"ul"},"AWS IAM role: Attach it to your instance an AWS IAM role with sufficient permission, such as the administrator access. ")),(0,i.kt)("h3",{id:"configuring-an-ec2-instance"},"Configuring an EC2 instance"),(0,i.kt)("a",{name:"confinst"}),(0,i.kt)("p",null,"An Amazon EC2 instance can be assigned an instance profile that contains an AWS IAM role. The AWS IAM role gives the Amazon EC2 instance a set of permissions. The Amazon EC2 instance performs the actions defined by its AWS IAM role. Adding an AWS IAM role to the Amazon EC2 instance allows your application to make API calls securely\u2014reducing the need to manage security credentials.\nThe Service Workbench deployment application must be able to create AWS resources. The easiest way to meet this requirement is to give the Amazon EC2 instance an administrator role."),(0,i.kt)("h4",{id:"creating-a-new-iam-role"},"Creating a new IAM role"),(0,i.kt)("p",null,"When creating a new Amazon EC2 instance, an instance profile may be assigned to the Amazon EC2 instance. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Create a new IAM role")," located next to the AWS IAM role drop-down.  To continue the process, highlight Amazon EC2 and proceed to permissions.")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/iam1.png")}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Permissions"),", choose ",(0,i.kt)("strong",{parentName:"li"},"AdministratorAccess")," from the filter and proceed through ",(0,i.kt)("strong",{parentName:"li"},"tags"),".")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/iam2.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Review")," page, enter the role name.")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/iam3.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Return to the ",(0,i.kt)("strong",{parentName:"li"},"Amazon EC2")," tab, refresh the ",(0,i.kt)("strong",{parentName:"li"},"IAM role")," drop-down, and choose your administrator role to attach to the new Amazon EC2 instance. ")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/iam4.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Create the Amazon EC2 instance.")),(0,i.kt)("h4",{id:"adding-a-role-to-an-existing-instance"},"Adding a role to an existing instance"),(0,i.kt)("p",null,"To add a role to an Amazon EC2 instance that is already running:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the Amazon EC2 instance in the EC2 console. "),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Actions")," menu, choose ",(0,i.kt)("strong",{parentName:"li"},"Instance Settings, Attach/Replace IAM Role"),". "),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Attach/Replace IAM Role")," screen, select the role you created and choose ",(0,i.kt)("strong",{parentName:"li"},"Apply"),".")),(0,i.kt)("h3",{id:"installing-the-required-software-on-ec2-instance"},"Installing the required software on EC2 instance"),(0,i.kt)("a",{name:"install"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install prerequisite software (serverless and pnpm) for installing Service Workbench on AWS on the EC2 instance:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash\nsource ~/.bashrc\nnvm install 12\nnpm install -g serverless pnpm hygen\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run the following command to display the version of the serverless package:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"serverless \u2013v")))}d.isMDXComponent=!0}}]);