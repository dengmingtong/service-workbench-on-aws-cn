"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[4474],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8453:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={id:"cross_account_execution_role",title:"Cross Account Execution Role",sidebar_label:"Cross Account Execution Role"},s=void 0,l={unversionedId:"user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",id:"user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",isDocsHomePage:!1,title:"Cross Account Execution Role",description:"This Role resides in the Member AWS Account(s) and is assumed by the Main AWS Account.",source:"@site/docs/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role.md",sourceDirName:"user_guide/sidebar/admin/accounts/aws_accounts",slug:"/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",editUrl:"/edit/develop/docs/docs/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role.md",tags:[],version:"current",frontMatter:{id:"cross_account_execution_role",title:"Cross Account Execution Role",sidebar_label:"Cross Account Execution Role"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Master Account Role",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/master_role"},next:{title:"Introduction",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/workflows/introduction"}},u=[{value:"Trust Policy",id:"trust-policy",children:[],level:2},{value:"Permissions",id:"permissions",children:[{value:"CloudFormation",id:"cloudformation",children:[],level:3},{value:"Cost Explorer",id:"cost-explorer",children:[],level:3},{value:"EC2",id:"ec2",children:[],level:3},{value:"EMR",id:"emr",children:[],level:3},{value:"IAM",id:"iam",children:[],level:3},{value:"S3",id:"s3",children:[],level:3},{value:"SageMaker",id:"sagemaker",children:[],level:3},{value:"SSM",id:"ssm",children:[],level:3}],level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Role resides in the ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Member AWS Account(s)"))," and is assumed by the ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Main AWS Account")),"."),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"create_member_account"},(0,o.kt)("strong",{parentName:"a"},"Creating a Member AWS Account(s)"))," in the organization of the ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Master AWS Account(s)")),", this role is created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"solution/packages/cfn-templates/lib/templates/onboard-account.yaml")," template."),(0,o.kt)("h2",{id:"trust-policy"},"Trust Policy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": [\n          "arn:aws:iam::${MainAccount}:role/${ApiHandlerRole}",\n          "arn:aws:iam::${MainAccount}:role/${WorkflowLoopRunnerRole}",\n          "arn:aws:iam::${MemberAccount}:root"\n        ]\n      },\n      "Action": "sts:AssumeRole",\n      "Condition": {\n        "StringEquals": {\n          "sts:ExternalId": ${ExternalId}\n        }\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The principals listed above are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ApiHandlerRole: A role in the Main AWS account associated with the Service Workbench backend API execution."),(0,o.kt)("li",{parentName:"ul"},"WorkflowLoopRunnerRole: A role in the Main AWS account associated with background workflow execution as initiated by backend API calls."),(0,o.kt)("li",{parentName:"ul"},"The Member AWS account itself.")),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"These policies support running analytics."),(0,o.kt)("h3",{id:"cloudformation"},"CloudFormation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": [\n        "cloudformation:CreateStack",\n        "cloudformation:DeleteStack",\n        "cloudformation:DescribeStacks",\n        "cloudformation:DescribeStackEvents"\n      ],\n      "Resource": "*",\n      "Effect": "Allow"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"cost-explorer"},"Cost Explorer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["ce:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will need to ensure that ",(0,o.kt)("strong",{parentName:"p"},"Cost Explorer")," has been enabled in the member account. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-enable.html"},"See here for more information"),"."))),(0,o.kt)("h3",{id:"ec2"},"EC2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["ec2:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,o.kt)("h3",{id:"emr"},"EMR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["elasticmapreduce:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,o.kt)("h3",{id:"iam"},"IAM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["iam:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,o.kt)("h3",{id:"s3"},"S3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["s3:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,o.kt)("h3",{id:"sagemaker"},"SageMaker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["sagemaker:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,o.kt)("h3",{id:"ssm"},"SSM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["ssm:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')))}m.isMDXComponent=!0}}]);