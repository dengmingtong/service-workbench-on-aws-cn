"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[699],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4202:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],s={id:"cross_account_execution_role",title:"Cross Account Execution Role",sidebar_label:"Cross Account Execution Role"},i=void 0,l={unversionedId:"zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",id:"zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",isDocsHomePage:!1,title:"Cross Account Execution Role",description:"\u6b64\u89d2\u8272\u9a7b\u7559\u5728 [Member AWS Account(s)]\u4e2d\uff0c\u7531 [Main AWS Account]\u62c5\u4efb\u3002",source:"@site/docs/zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role.md",sourceDirName:"zh/user_guide/sidebar/admin/accounts/aws_accounts",slug:"/zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",permalink:"/service-workbench-on-aws-cn/zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role.md",tags:[],version:"current",frontMatter:{id:"cross_account_execution_role",title:"Cross Account Execution Role",sidebar_label:"Cross Account Execution Role"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Master Account Role",permalink:"/service-workbench-on-aws-cn/zh/user_guide/sidebar/admin/accounts/aws_accounts/master_role"},next:{title:"Introduction",permalink:"/service-workbench-on-aws-cn/zh/user_guide/sidebar/admin/workflows/introduction"}},u=[{value:"Trust Policy",id:"trust-policy",children:[],level:2},{value:"Permissions",id:"permissions",children:[{value:"CloudFormation",id:"cloudformation",children:[],level:3},{value:"Cost Explorer",id:"cost-explorer",children:[],level:3},{value:"EC2",id:"ec2",children:[],level:3},{value:"EMR",id:"emr",children:[],level:3},{value:"IAM",id:"iam",children:[],level:3},{value:"S3",id:"s3",children:[],level:3},{value:"SageMaker",id:"sagemaker",children:[],level:3},{value:"SSM",id:"ssm",children:[],level:3}],level:2}],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b64\u89d2\u8272\u9a7b\u7559\u5728 ","[",(0,a.kt)("strong",{parentName:"p"},"Member AWS Account(s)"),"]","\u4e2d\uff0c\u7531 ","[",(0,a.kt)("strong",{parentName:"p"},"Main AWS Account"),"]","\u62c5\u4efb\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"introduction"},(0,a.kt)("strong",{parentName:"a"},"Master AWS Account(s)"))," \u7684\u7ec4\u7ec7\u4e2d ",(0,a.kt)("a",{parentName:"p",href:"create_member_account"},(0,a.kt)("strong",{parentName:"a"},"Creating a Member AWS Account(s)"))," \u65f6\uff0c\u6b64\u89d2\u8272\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"solution/packages/ cfn-templates/lib/templates/onboard-account.yaml")," \u6a21\u677f\u3002"),(0,a.kt)("h2",{id:"trust-policy"},"Trust Policy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": [\n          "arn:aws:iam::${MainAccount}:role/${ApiHandlerRole}",\n          "arn:aws:iam::${MainAccount}:role/${WorkflowLoopRunnerRole}",\n          "arn:aws:iam::${MemberAccount}:root"\n        ]\n      },\n      "Action": "sts:AssumeRole",\n      "Condition": {\n        "StringEquals": {\n          "sts:ExternalId": ${ExternalId}\n        }\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u5217\u51fa\u7684\u4e3b\u8981\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ApiHandlerRole\uff1a\u4e3b AWS \u8d26\u6237\u4e2d\u4e0e Service Workbench \u540e\u7aef API \u6267\u884c\u5173\u8054\u7684\u89d2\u8272\u3002"),(0,a.kt)("li",{parentName:"ul"},"WorkflowLoopRunnerRole\uff1a\u4e3b AWS \u8d26\u6237\u4e2d\u7684\u4e00\u4e2a\u89d2\u8272\uff0c\u4e0e\u540e\u7aef API \u8c03\u7528\u542f\u52a8\u7684\u540e\u53f0\u5de5\u4f5c\u6d41\u6267\u884c\u76f8\u5173\u8054\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u5458 AWS \u8d26\u6237\u672c\u8eab\u3002")),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7b56\u7565\u652f\u6301\u8fd0\u884c\u5206\u6790\u3002"),(0,a.kt)("h3",{id:"cloudformation"},"CloudFormation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": [\n        "cloudformation:CreateStack",\n        "cloudformation:DeleteStack",\n        "cloudformation:DescribeStacks",\n        "cloudformation:DescribeStackEvents"\n      ],\n      "Resource": "*",\n      "Effect": "Allow"\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"cost-explorer"},"Cost Explorer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["ce:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You will need to ensure that ",(0,a.kt)("strong",{parentName:"p"},"Cost Explorer")," has been enabled in the member account. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-enable.html"},"See here for more information"),"."))),(0,a.kt)("h3",{id:"ec2"},"EC2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["ec2:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,a.kt)("h3",{id:"emr"},"EMR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["elasticmapreduce:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,a.kt)("h3",{id:"iam"},"IAM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["iam:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,a.kt)("h3",{id:"s3"},"S3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["s3:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,a.kt)("h3",{id:"sagemaker"},"SageMaker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["sagemaker:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')),(0,a.kt)("h3",{id:"ssm"},"SSM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": {\n    "Action": ["ssm:*"],\n    "Resource": "*",\n    "Effect": "Allow"\n  }\n}\n')))}p.isMDXComponent=!0}}]);