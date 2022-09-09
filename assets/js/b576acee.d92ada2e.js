"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1977],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"conf-settings",title:"Configuration settings",sidebar_label:"Configuration settings"},s=void 0,u={unversionedId:"installation_guide/installation/pre-installation/conf-settings",id:"installation_guide/installation/pre-installation/conf-settings",title:"Configuration settings",description:"Stage name",source:"@site/docs/installation_guide/installation/pre-installation/conf-settings.md",sourceDirName:"installation_guide/installation/pre-installation",slug:"/installation_guide/installation/pre-installation/conf-settings",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/conf-settings",draft:!1,editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/installation/pre-installation/conf-settings.md",tags:[],version:"current",frontMatter:{id:"conf-settings",title:"Configuration settings",sidebar_label:"Configuration settings"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Instance requirements",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/instance-req"},next:{title:"Accessing reference documentation",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/documentation"}},p={},c=[{value:"Stage name",id:"stage-name",level:3},{value:"Separately deployable components",id:"separately-deployable-components",level:3},{value:"Prepare the main configuration file",id:"prepare-the-main-configuration-file",level:3},{value:"Custom Identity Provider",id:"custom-identity-provider",level:3},{value:"Custom domain names",id:"custom-domain-names",level:3},{value:"Namespace",id:"namespace",level:3},{value:"Other configurations for Beijing/Ningxia regions",id:"other-configurations-for-beijingningxia-regions",level:3},{value:"Prepare SDC configuration files",id:"prepare-sdc-configuration-files",level:3},{value:"Accessing the Service Workbench source code",id:"accessing-the-service-workbench-source-code",level:3},{value:"Supported regions",id:"supported-regions",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"stage-name"},"Stage name"),(0,r.kt)("p",null,"A stage name is used to allow multiple Service Workbench deployments from the same account. It represents the name of the configuration files. For limitations in Amazon Simple Storage Service (",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),") deployment buckets, the stage name must not be longer than five characters. Buckets are the fundamental containers in Amazon S3 for data storage.\nYou can select your own stage name. If you are planning to deploy the solution only once, a common convention, is to use your own login. In the following sections of the guide, customized stage name is represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>"),"."),(0,r.kt)("h3",{id:"separately-deployable-components"},"Separately deployable components"),(0,r.kt)("p",null,"The Service Workbench code is divided into multiple (currently seven) separately deployable components (SDCs): backend, UI, post-deployment, pre-deployment, edge-lambda, infrastructure, machine-images, and prepare-aster-acc. Each SDC has a directory in the location, main/solution. You can run the script either from the root directory or also deploy each SDC separately using individual scripts.  For more information, see  ",(0,r.kt)("a",{parentName:"p",href:"/installation_guide/components"},"serverless framework and projects"),"."),(0,r.kt)("h3",{id:"prepare-the-main-configuration-file"},"Prepare the main configuration file"),(0,r.kt)("p",null,"You can make a copy of the sample global AWS Config file, name it for your stage, and modify it. The current default values for the main configuration are stored in the default file in the directory, ",(0,r.kt)("inlineCode",{parentName:"p"},"main/config/settings/.defaults.yml"),". If the stage-named settings file is not available, the values are read from this default file."),(0,r.kt)("p",null,"To create a custom (stage-named) settings file, in the directory, ",(0,r.kt)("inlineCode",{parentName:"p"},"main/config/settings"),", copy ",(0,r.kt)("inlineCode",{parentName:"p"},"example.yml")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml")," and edit this new file. Default values are read from ",(0,r.kt)("inlineCode",{parentName:"p"},".defaults.yml")," unless the values are overridden in this file. Following table describes the default values: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsRegion")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"us-east-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsProfile")),(0,r.kt)("td",{parentName:"tr",align:null},"No default; set this to your current AWS profile unless using a default or instance profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"solutionName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sw"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envName")),(0,r.kt)("td",{parentName:"tr",align:null},"Same as stage name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prod"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableExternalResearchers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"custom-identity-provider"},"Custom Identity Provider"),(0,r.kt)("p",null,"The Service Workbench built-in IdP is Cognito User Pool, if you don't want to use Cognito User Pool as IdP or the deployment region does not support Cognito User Pool, such as Beijing, Ningxia and Hongkong. You can use external OIDC IdPs, such as Keycloak, Authing and Okta to integrate with Service Workbench."),(0,r.kt)("p",null,"To use OIDC IdP, you need install or apply OIDC IdP at first, refer ",(0,r.kt)("a",{parentName:"p",href:"./oidc-providers"},"OIDC Providers Settings"),", and then add below configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"defaultIdpType: oidc\noidcIssuer: xxx\noidcClientId: xxx\nrootUserEmail: xxx\nrootUserFirstName: xxx\nrootUserLastName: xxx\n")),(0,r.kt)("h3",{id:"custom-domain-names"},"Custom domain names"),(0,r.kt)("p",null,"To use a custom domain name, enter the domain name and the ARN for the manually created TLS certificate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"domainName: host.domain.toplevel\ncertificateArn: <ARN>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": The current implementation assumes that DNS is handled elsewhere. A future improvement will automatically handle creation of the cert and Route 53 entries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": This is an optional step during Service Workbench installation. For Beijing/Ningxia regions, ",(0,r.kt)("inlineCode",{parentName:"li"},"domainName")," configuration is mandatory. please refer ",(0,r.kt)("a",{parentName:"li",href:"./china-prerequisites"},"China Regions Prerequisites")," to create ICP licensed domain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": If DNS resolution is not managed in current aws account Route 53, please set ",(0,r.kt)("inlineCode",{parentName:"li"},"customDomainInR53")," config as ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h3",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"The names of many deployed resources include a namespace string such as ",(0,r.kt)("inlineCode",{parentName:"p"},"mystage-va-sw"),". This string is made by concatenating the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Environment name"),(0,r.kt)("li",{parentName:"ul"},"Region short name (for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"va")," for US-East-1, or for US-West-2, defined in ",(0,r.kt)("inlineCode",{parentName:"li"},".defaults.yml"),")"),(0,r.kt)("li",{parentName:"ul"},"Solution name")),(0,r.kt)("h3",{id:"other-configurations-for-beijingningxia-regions"},"Other configurations for Beijing/Ningxia regions"),(0,r.kt)("p",null,"Please set below configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"<stage>.yml")," file if you deploy Service Workbench in Beijing/Ningxia region."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"awsPartition: aws-cn\nawsSuffix: amazonaws.com.cn\n")),(0,r.kt)("h3",{id:"prepare-sdc-configuration-files"},"Prepare SDC configuration files"),(0,r.kt)("p",null,"Each SDC has a ",(0,r.kt)("inlineCode",{parentName:"p"},"config/settings")," directory, where you can place customized settings. Settings files are named after the stage name ",(0,r.kt)("inlineCode",{parentName:"p"},"<mystagename.yml>"),". Some of the SDC settings directories contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"example.yml")," file that may be copied and renamed as a settings file for that SDC. Otherwise, a default file ",(0,r.kt)("inlineCode",{parentName:"p"},".defaults.yml")," in that directory is read and used regardless of the stage name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": This is an optional step during Service Workbench installation."),(0,r.kt)("h3",{id:"accessing-the-service-workbench-source-code"},"Accessing the Service Workbench source code"),(0,r.kt)("p",null,"Download the latest source code by using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/service-workbench-on-aws-cn/tags"},"this link"),", copy ",(0,r.kt)("inlineCode",{parentName:"p"},"Source code (zip)")," link address, and run the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"wget <URL>"),", then run ",(0,r.kt)("inlineCode",{parentName:"p"},"unzip")," to decompress code package"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Setting the configuration is required. If you are deploying an installation, you can use the default configuration."),(0,r.kt)("h3",{id:"supported-regions"},"Supported regions"),(0,r.kt)("p",null,"The following regions support all the AWS services and features needed to run Service Workbench:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"US East (Ohio)"),(0,r.kt)("li",{parentName:"ul"},"US East (N. Virginia)"),(0,r.kt)("li",{parentName:"ul"},"US West (N. California)"),(0,r.kt)("li",{parentName:"ul"},"US West (Oregon)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Mumbai)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Seoul)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Singapore)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Sydney)"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Tokyo)"),(0,r.kt)("li",{parentName:"ul"},"Canada (Central)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Frankfurt)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Ireland)"),(0,r.kt)("li",{parentName:"ul"},"Europe (London)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Paris)"),(0,r.kt)("li",{parentName:"ul"},"Europe (Stockholm)"),(0,r.kt)("li",{parentName:"ul"},"South America (S\xe3o Paulo)"),(0,r.kt)("li",{parentName:"ul"},"China (Beijing) Region Operated by Sinnet"),(0,r.kt)("li",{parentName:"ul"},"China (Ningxia) Region operated by NWCD"),(0,r.kt)("li",{parentName:"ul"},"Asia Pacific (Hong Kong)")))}m.isMDXComponent=!0}}]);