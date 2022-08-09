"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9982],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"adfs",title:"Configuring Service Workbench using Microsoft Active Directory Federation Services",sidebar_label:"Configuring Service Workbench using Microsoft Active Directory Federation Services"},s=void 0,p={unversionedId:"configuration_guide/adfs",id:"configuration_guide/adfs",isDocsHomePage:!1,title:"Configuring Service Workbench using Microsoft Active Directory Federation Services",description:"Microsoft ADFS is another IdP and it uses SAML 2.0 standard. For SAML federation, the Amazon Cognito user pool is the Service Provider (SP). Mutual trust between the SP and the IdP must be established. Service Workbench on AWS uses Amazon Cognito user pools to federate identities from Microsoft Active Directory using ADFS and SAML 2.0.",source:"@site/docs/configuration_guide/adfs.md",sourceDirName:"configuration_guide",slug:"/configuration_guide/adfs",permalink:"/service-workbench-on-aws-cn/configuration_guide/adfs",editUrl:"/edit/develop/docs/docs/configuration_guide/adfs.md",tags:[],version:"current",frontMatter:{id:"adfs",title:"Configuring Service Workbench using Microsoft Active Directory Federation Services",sidebar_label:"Configuring Service Workbench using Microsoft Active Directory Federation Services"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Configuring Service Workbench using Microsoft Azure AD",permalink:"/service-workbench-on-aws-cn/configuration_guide/activedirectory"},next:{title:"Configuring Service Workbench using Auth0",permalink:"/service-workbench-on-aws-cn/configuration_guide/auth0"}},c=[{value:"Creating a Relying Party in Microsoft ADFS",id:"creating-a-relying-party-in-microsoft-adfs",children:[{value:"Establishing trust between Microsoft ADFS (IdP) and Amazon Cognito user pool",id:"establishing-trust-between-microsoft-adfs-idp-and-amazon-cognito-user-pool",children:[],level:4},{value:"Configuring IdP attributes",id:"configuring-idp-attributes",children:[],level:4}],level:3},{value:"Configuring relying party information in Service Workbench",id:"configuring-relying-party-information-in-service-workbench",children:[],level:3},{value:"Adding relying party trust for the Amazon Cognito user pool in Microsoft ADFS",id:"adding-relying-party-trust-for-the-amazon-cognito-user-pool-in-microsoft-adfs",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Microsoft ADFS is another IdP and it uses SAML 2.0 standard. For SAML federation, the Amazon Cognito user pool is the Service Provider (SP). Mutual trust between the SP and the IdP must be established. Service Workbench on AWS uses Amazon Cognito user pools to federate identities from Microsoft Active Directory using ADFS and SAML 2.0. "),(0,i.kt)("h3",{id:"creating-a-relying-party-in-microsoft-adfs"},"Creating a Relying Party in Microsoft ADFS"),(0,i.kt)("p",null,"Follow these steps to establish trust from the IdP (Microsoft ADFS) to Service Provider (Amazon Cognito user pool) and create a relying party in Microsoft ADFS. See ",(0,i.kt)("a",{parentName:"p",href:"/configuration_guide/workflow"},"Service Workbench and IdP workflow"),"."),(0,i.kt)("h4",{id:"establishing-trust-between-microsoft-adfs-idp-and-amazon-cognito-user-pool"},"Establishing trust between Microsoft ADFS (IdP) and Amazon Cognito user pool"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to your Active Directory domain controller. Type ",(0,i.kt)("inlineCode",{parentName:"li"},"AD FS")," in the ",(0,i.kt)("strong",{parentName:"li"},"Run")," window and open ",(0,i.kt)("strong",{parentName:"li"},"AD FS 2.0 Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Add Relying Party Trust"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Start")," on the ",(0,i.kt)("strong",{parentName:"li"},"Welcome")," screen."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Select Data Source"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Enter Data About the Relying Party Manually"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Specify Display Name")," pane, enter a display name and relevant notes about the relying party. For example, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"Amazon Cognito User Pool Relying Party"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Choose Profile"),", choose ",(0,i.kt)("strong",{parentName:"li"},"AD FS 2.0 Profile"),"."),(0,i.kt)("li",{parentName:"ol"},"Do not configure any certificate in the ",(0,i.kt)("strong",{parentName:"li"},"Configure Certificate")," pane. Configuring certificates is for encrypting SAML claims. The SP (that is, the Amazon Cognito user pool) needs a private key to decrypt the claims if you configure a certificate. The Amazon Cognito user pool does not currently support encrypted SAML assertions."),(0,i.kt)("li",{parentName:"ol"},"Do not select any option in the ",(0,i.kt)("strong",{parentName:"li"},"Configure URL")," pane. Choose ",(0,i.kt)("strong",{parentName:"li"},"Next"),"."),(0,i.kt)("li",{parentName:"ol"},"At this point, there is no need to configure anything in the ",(0,i.kt)("strong",{parentName:"li"},"Configure Identifiers")," pane."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Choose Issuance Authorization Rules")," pane, choose ",(0,i.kt)("strong",{parentName:"li"},"Permit All Users to Access this Relying Party"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Ready to Add Trust"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Next"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Finish"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Close"),".")),(0,i.kt)("h4",{id:"configuring-idp-attributes"},"Configuring IdP attributes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure the attributes that you want for the SAML assertion. The attributes are read by the Amazon Cognito user pool and aligned to the standard Amazon Cognito attributes from the mapping configuration in Amazon Cognito."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"Edit Claims")," window may already be open from the last wizard. If not, you can open it by choosing the ",(0,i.kt)("strong",{parentName:"li"},"Edit Claim Rules")," link and configure the claims. Add the following claims:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name ID")," (Optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Surname")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Given Name")))),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Name ID")," claim, choose ",(0,i.kt)("strong",{parentName:"li"},"Add Rule"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Transform an Incoming Claim"),", then choose ",(0,i.kt)("strong",{parentName:"li"},"Next")," and configure the claim."),(0,i.kt)("li",{parentName:"ol"},"Follow the same actions from to add the ",(0,i.kt)("strong",{parentName:"li"},"Name")," claim."),(0,i.kt)("li",{parentName:"ol"},"To add the ",(0,i.kt)("strong",{parentName:"li"},"Email")," claim, choose ",(0,i.kt)("strong",{parentName:"li"},"Add Rule"),". "),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Send LDAP Attributes as Claims"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Next")," and then configure the claim."),(0,i.kt)("li",{parentName:"ol"},"Similarly, add the ",(0,i.kt)("strong",{parentName:"li"},"Surname")," and ",(0,i.kt)("strong",{parentName:"li"},"Given Name")," claims.")),(0,i.kt)("h3",{id:"configuring-relying-party-information-in-service-workbench"},"Configuring relying party information in Service Workbench"),(0,i.kt)("p",null,"After creating a relying party in Microsoft ADFS, you can configure it within the Service Workbench. Follow these steps to configure the relying party."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Extract the SAML metadata file from Microsoft ADFS. The location of the metadata file might be different depending upon your version of Microsoft AD/ADFS. By default, it is located at:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://<DomainControllerDNSName>/FederationMetadata/2007-06/FederationMetadata.xml")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Copy the metadata file and place it at the following location: ")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/solution/post-deployment/config/saml-metadata/metadata.xml")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Modify the component-specific settings file for post-deployment.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/solution/post-deployment/config/settings/<your-environment-name>.yml")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Enter the following ",(0,i.kt)("inlineCode",{parentName:"li"},"fedIdpMetadatas")," settings:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fedIdpMetadatas: '[\"s3://${self:custom.settings.namespace}-artifacts/saml-metadata/metadata.xml\"]'")),(0,i.kt)("h3",{id:"adding-relying-party-trust-for-the-amazon-cognito-user-pool-in-microsoft-adfs"},"Adding relying party trust for the Amazon Cognito user pool in Microsoft ADFS"),(0,i.kt)("p",null,"After you have deployed the solution, an Amazon Cognito user pool is created. Follow these steps to add relying party trust for the Amazon Cognito user pool:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign in to the AWS Management Console and navigate to Amazon Cognito.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose User Pool to see a user pool for your environment. The Amazon Cognito user pool is specified in the following format:\n",(0,i.kt)("inlineCode",{parentName:"p"},"envName-solutionName-userpool"),"\nwhere, ",(0,i.kt)("inlineCode",{parentName:"p"},"envName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"solutionName")," denote the values specified in your settings file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose the user pool for your environment and note the following values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Pool ID"),": Copy the value for ",(0,i.kt)("strong",{parentName:"li"},"Pool ID"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Domain Prefix"),": Navigate to ",(0,i.kt)("strong",{parentName:"li"},"App Integration domain Name")," for your user pool and copy the value of the ",(0,i.kt)("strong",{parentName:"li"},"Prefix")," domain."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to Microsoft ADFS domain controller and add the Amazon Cognito user pool-related information."),(0,i.kt)("ol",{type:"a"},(0,i.kt)("li",null,"Open the Microsoft ADFS Management application."),(0,i.kt)("li",null," Navigate to ",(0,i.kt)("b",null,"Relying Party Trusts"),"."),(0,i.kt)("li",null," To add trust, choose the appropriate relying party."),(0,i.kt)("li",null," Open the ",(0,i.kt)("b",null,"Identifiers")," tab. "),(0,i.kt)("li",null," Enter the URN of the Amazon Cognito User Pool and choose ",(0,i.kt)("b",null,"Add"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"userPoolId")," with the value of the user pool ID you obtained earlier. The URN has the following format:\n",(0,i.kt)("inlineCode",{parentName:"p"},"urn:amazon:cognito:sp:userPoolId"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("strong",{parentName:"p"},"Endpoints")," tab and add the SP URL that receives the SAML assertion from the IdP. The SP is the consumer of the Amazon Cognito SAML assertion. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"userPoolDomain")," with the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefix")," domain. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"region")," with the region in which you deployed the solution. The URL is in the following format: "),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<userPoolDomain>.auth.<region>.amazoncognito.com/saml2/idpresponse")))),(0,i.kt)("p",null,"You should now be able to log in to Service Workbench using Microsoft Active Directory credentials."))}m.isMDXComponent=!0}}]);