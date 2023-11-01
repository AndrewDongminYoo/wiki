"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[1004],{66:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=a(5893),t=a(3905);const s={slug:"postman-and-newman",title:"Postman\uacfc NewMan Library\uc758 \uc0ac\uc6a9\ubc29\ubc95",authors:"andrew",tags:["API","Open API","Postman","Newman","Swagger"]},i="Postman\uacfc NewMan Library\uc758 \uc0ac\uc6a9\ubc29\ubc95",o={permalink:"/wiki/blog/postman-and-newman",source:"@site/blog/2023-03-28-postman-and-newman.mdx",title:"Postman\uacfc NewMan Library\uc758 \uc0ac\uc6a9\ubc29\ubc95",description:"Postman\uacfc Newman \ub77c\uc774\ube0c\ub7ec\ub9ac",date:"2023-03-28T00:00:00.000Z",formattedDate:"2023\ub144 3\uc6d4 28\uc77c",tags:[{label:"API",permalink:"/wiki/blog/tags/api"},{label:"Open API",permalink:"/wiki/blog/tags/open-api"},{label:"Postman",permalink:"/wiki/blog/tags/postman"},{label:"Newman",permalink:"/wiki/blog/tags/newman"},{label:"Swagger",permalink:"/wiki/blog/tags/swagger"}],readingTime:18.48,hasTruncateMarker:!1,authors:[{name:"Dongmin Yu",title:"Cross Platform Developer Android, iOS, macOS.",url:"https://gravatar.com/donminzzi",imageURL:"https://avatars.githubusercontent.com/u/82999715?v=4",key:"andrew"}],frontMatter:{slug:"postman-and-newman",title:"Postman\uacfc NewMan Library\uc758 \uc0ac\uc6a9\ubc29\ubc95",authors:"andrew",tags:["API","Open API","Postman","Newman","Swagger"]},unlisted:!1,prevItem:{title:"WebGL & OpenGL",permalink:"/wiki/blog/web-gl-open-gl"},nextItem:{title:"\uc778\uacf5\uc9c0\ub2a5\uc774 \uc0ac\uc774\ubc84 \ubcf4\uc548\uc5d0 \ub07c\uce58\ub294 \uc601\ud5a5",permalink:"/wiki/blog/the-effect-of-ai-on-cyber-security"}},l={authorsImageUrls:[void 0]},m=[{value:"Postman\uacfc Newman \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"postman\uacfc-newman-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:2},{value:"References",id:"references",level:3},{value:"Newman\uc5d0 \ub300\ud55c \uc124\uba85\uacfc \uc0ac\uc6a9 \uc608\uc81c",id:"newman\uc5d0-\ub300\ud55c-\uc124\uba85\uacfc-\uc0ac\uc6a9-\uc608\uc81c",level:2},{value:"References",id:"references-1",level:3},{value:"Swagger UI\uc640 Postman",id:"swagger-ui\uc640-postman",level:2},{value:"Newman\uacfc pm\uc740 Postman",id:"newman\uacfc-pm\uc740-postman",level:2},{value:"Postman\uc5d0\uc11c API \ubb38\uc11c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95",id:"postman\uc5d0\uc11c-api-\ubb38\uc11c-\uc0dd\uc131\ud558\ub294-\ubc29\ubc95",level:2},{value:"Swagger\uc640 Open API 3.0",id:"swagger\uc640-open-api-30",level:2},{value:"References",id:"references-2",level:3},{value:"Open API\uc758 \uad00\ub9ac \uc8fc\uccb4",id:"open-api\uc758-\uad00\ub9ac-\uc8fc\uccb4",level:2},{value:"RAML",id:"raml",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"postman\uacfc-newman-\ub77c\uc774\ube0c\ub7ec\ub9ac",children:"Postman\uacfc Newman \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,r.jsx)(n.p,{children:"Postman\uc740 Node.js \uae30\ubc18\uc758 \ub7f0\ud0c0\uc784\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc5b4, Request\uc640 Collection\uc5d0 \ub3d9\uc801\uc73c\ub85c \ub3d9\uc791\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub3d9\uc801 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 \uc694\uccad \uac04\uc5d0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub7f0 \ub3d9\uc801 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ub2e4\uc74c 2\uac00\uc9c0 \uc774\ubca4\ud2b8 \ud750\ub984\uc5d0 \ub300\ud574 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Pre-request Script : Request \ud5e4\ub354\uc5d0 key\ub97c \ucd94\uac00\uc2dc\ud0a4\uac70\ub098, URL \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ubb38\uc790\uc5f4\uc744 \ucd94\uac00\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9 (\uc694\uccad\uc774 \uc11c\ubc84\ub85c \uac00\uae30 \uc804\uc5d0 \uc2e4\ud589) Test Script : .test \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uace0, .response, .expect \uac1d\uccb4 \ub4f1\uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5\ud568 (\uc694\uccad\uc774 \uc11c\ubc84\ub85c \uac04 \uc774\ud6c4 \uc751\ub2f5\uc774 \ubc18\ud658\ub41c \ud6c4\uc5d0 \uc2e4\ud589).\nPostman\uc5d0\uc11c \uc791\uc131\ud55c \uc2a4\ud06c\ub9bd\ud2b8\ub098 API \ud14c\uc2a4\ud2b8\ub97c Node.js \ud504\ub85c\uc81d\ud2b8\uc5d0 \ubc18\uc601\ud558\ub294 \ubc29\ubc95\uc73c\ub85c\ub294 Newman \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. Newman\uc740 Postman\uc758 CLI \ubc84\uc804\uc73c\ub85c Postman Collection\uc744 Node.js \ubaa8\ub4c8\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.p,{children:["(1) ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=FiOTfaJaEHk",children:"POSTMAN - Run Postman Collection Using JavaScript Project | As Node.js module | Newman ..."}),"\n(2) ",(0,r.jsx)(n.a,{href:"https://learning.postman.com/docs/writing-scripts/intro-to-scripts/",children:"Scripting in Postman | Postman Learning Center"}),"\n(3) ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/ko-kr/visualstudio/javascript/tutorial-nodejs-with-react-and-jsx?view=vs-2022",children:"Node.js \ubc0f React \uc571 \ub9cc\ub4e4\uae30 - Visual Studio (Windows)"}),"\n(4) ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=hVFZtO5SCVk",children:"Create API with node JS and test with postman | Node Js Tutorial | Learning Points ..."})]}),"\n",(0,r.jsx)(n.h2,{id:"newman\uc5d0-\ub300\ud55c-\uc124\uba85\uacfc-\uc0ac\uc6a9-\uc608\uc81c",children:"Newman\uc5d0 \ub300\ud55c \uc124\uba85\uacfc \uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,r.jsx)(n.p,{children:"Newman\uc740 Postman\uc758 CLI \ubc84\uc804\uc73c\ub85c Postman Collection\uc744 Node.js \ubaa8\ub4c8\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 Postman\uc5d0\uc11c \uc791\uc131\ud55c \uc2a4\ud06c\ub9bd\ud2b8\ub098 API \ud14c\uc2a4\ud2b8\ub97c Node.js \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Newman\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \uba3c\uc800 Node.js\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8 \ub2e4\uc74c npm\uc744 \ud1b5\ud574 Newman\uc744 \uc804\uc5ed\uc73c\ub85c \uc124\uce58\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 Newman \uc790\uccb4\ub294 Axios \ub9ac\ud018\uc2a4\ud2b8\ub97c \ubcf4\ub0b4\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Express\uc640 \uac19\uc740 \ud658\uacbd\uc744 \uad6c\ucd95\ud558\uc9c0 \uc54a\uace0 Axios \ub9ac\ud018\uc2a4\ud2b8\ub97c \ubcf4\ub0b4\ub824\uba74 Node.js\uc758 \ub0b4\uc7a5 \ubaa8\ub4c8\uc778 http \ub610\ub294 https \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 Axios\uc640 \uac19\uc740 \uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm install -g newman\n"})}),"\n",(0,r.jsx)(n.p,{children:"Newman\uc744 \uc2e4\ud589\ud558\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 Collection\uacfc \ud568\uaed8 \uc2e4\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c Collection \ud30c\uc77c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c Collection\uc744 \uacf5\uc720\ud558\uc5ec URL\ub85c \uc804\ub2ec\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"newman run mycollection.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Collection\uc774 \ud658\uacbd \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, Postman\uc5d0\uc11c \ud15c\ud50c\ub9bf\uc744 \ub0b4\ubcf4\ub0b4\uace0 -e \ud50c\ub798\uadf8\uc640 \ud568\uaed8 \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"newman run https://www.postman.com/collections/cb208e7e64056f5294e5 -e dev_environment.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Newman\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uad6c\ucd95\ub418\uc5b4 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ud655\uc7a5 \ubc0f \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Node.js \ucf54\ub4dc\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'var newman = require("newman");\n// `options` \uac1d\uccb4\ub97c \uc804\ub2ec\ud558\uace0 \ucf5c\ubc31\uc744 \uae30\ub2e4\ub9ac\uba74\uc11c newman.run \ud638\ucd9c\nnewman.run(\n  {\n    collection: require("./sample-collection.json"),\n    reporters: "cli",\n  },\n  function (err) {\n    if (err) {\n      throw err;\n    }\n    console.log("collection run complete!");\n  },\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"references-1",children:"References"}),"\n",(0,r.jsxs)(n.p,{children:["(1) ",(0,r.jsx)(n.a,{href:"https://learning.postman.com/docs/collections/using-newman-cli/installing-running-newman/",children:"Installing and running Newman | Postman Learning Center"}),"\n(2) ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/newman",children:"newman - npm"}),"\n(3) ",(0,r.jsx)(n.a,{href:"https://libguides.newman.ac.uk/",children:"Newman University Library: Library Homepage: Home"})]}),"\n",(0,r.jsx)(n.h2,{id:"swagger-ui\uc640-postman",children:"Swagger UI\uc640 Postman"}),"\n",(0,r.jsx)(n.p,{children:"Swagger UI\ub294 OpenAPI (\uc774\uc804\uc5d0\ub294 Swagger) \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \ud55c \uc624\ud508 \uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8\ub85c, RESTful API\ub97c \uc124\uacc4, \ube4c\ub4dc, \ubb38\uc11c\ud654 \ubc0f \uc0ac\uc6a9\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \ub3c4\uad6c \ubaa8\uc74c\uc785\ub2c8\ub2e4. Swagger UI\ub97c \uc0ac\uc6a9\ud558\uba74 API\ub97c \uc2dc\uac01\uc801\uc73c\ub85c \ud0d0\uc0c9\ud558\uace0 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, API \ubb38\uc11c\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nPostman\uc740 API \uac1c\ubc1c \ud658\uacbd\uc73c\ub85c, API\ub97c \uac1c\ubc1c\ud558\uace0 \ud14c\uc2a4\ud2b8\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. Postman\uc744 \uc0ac\uc6a9\ud558\uba74 API \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \uc751\ub2f5\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud558\uace0 \uc790\ub3d9\ud654\ub41c \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c Postman\uc740 API \ubb38\uc11c\ud654, \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uacf5\uc720 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ub450 \ub3c4\uad6c \ubaa8\ub450 API \uac1c\ubc1c\uc5d0 \uc720\uc6a9\ud558\uc9c0\ub9cc, Swagger UI\ub294 API \ubb38\uc11c\ud654\uc640 \uc2dc\uac01\ud654\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc73c\uba70, Postman\uc740 API \uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nSwagger UI\uc640 Postman\uc740 \ubaa8\ub450 API \uac1c\ubc1c\uc5d0 \uc720\uc6a9\ud55c \ub3c4\uad6c\uc774\uc9c0\ub9cc, \uac01\uac01\uc758 \ubaa9\uc801\uacfc \uae30\ub2a5\uc774 \ub2e4\ub985\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc5b4\ub5a4 \uac83\uc774 \ub354 \ub098\uc740\uc9c0\ub294 \uc0ac\uc6a9\uc790\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4.\nSwagger UI\ub294 API \ubb38\uc11c\ud654\uc640 \uc2dc\uac01\ud654\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c API\ub97c \uc124\uacc4\ud558\uace0 \ubb38\uc11c\ud654\ud558\ub294 \ub370 \uc911\uc810\uc744 \ub450\ub294 \uacbd\uc6b0 Swagger UI\uac00 \ub354 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nPostman\uc740 API \uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c API\ub97c \uac1c\ubc1c\ud558\uace0 \ud14c\uc2a4\ud2b8\ud558\ub294 \ub370 \uc911\uc810\uc744 \ub450\ub294 \uacbd\uc6b0 Postman\uc774 \ub354 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c Swagger UI\uc640 Postman\uc740 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Swagger UI\ub97c \uc0ac\uc6a9\ud558\uc5ec API\ub97c \uc124\uacc4\ud558\uace0 \ubb38\uc11c\ud654\ud558\uace0, Postman\uc744 \uc0ac\uc6a9\ud558\uc5ec API\ub97c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.\nSwagger UI\uc640 Postman\uc740 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec API \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\ub97c \uac15\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4, Swagger UI\ub97c \uc0ac\uc6a9\ud558\uc5ec API\ub97c \uc124\uacc4\ud558\uace0 \ubb38\uc11c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Swagger UI\ub294 OpenAPI \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \ud558\uba70, \uc774 \uc0ac\uc591\uc744 \uc0ac\uc6a9\ud558\uc5ec API\uc758 \uad6c\uc870\uc640 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c Swagger UI\ub294 \uc774 \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \uc790\ub3d9\uc73c\ub85c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub807\uac8c \uc0dd\uc131\ub41c API \ubb38\uc11c\ub294 Postman\uc5d0\uc11c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. Postman\uc5d0\uc11c\ub294 \uac00\uc838\uc628 API \ubb38\uc11c\ub97c \uae30\ubc18\uc73c\ub85c API \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \uc751\ub2f5\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c Postman\uc5d0\uc11c\ub294 \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud558\uc5ec \uc790\ub3d9\ud654\ub41c \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub807\uac8c Swagger UI\uc640 Postman\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74 API \uc124\uacc4 \ubc0f \ubb38\uc11c\ud654\uc640 API \uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8\ub97c \uc6d0\ud65c\ud558\uac8c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"newman\uacfc-pm\uc740-postman",children:"Newman\uacfc pm\uc740 Postman"}),"\n",(0,r.jsx)(n.p,{children:"Newman\uc740 Postman\uc758 \ucee4\ub9e8\ub4dc \ub77c\uc778 \ub3c4\uad6c\ub85c, Postman \uceec\ub809\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. Newman\uc744 \uc0ac\uc6a9\ud558\uba74 Postman \uceec\ub809\uc158\uc744 \uc9c0\uc815\ub41c \ud658\uacbd\uc5d0\uc11c \uc2e4\ud589\ud558\uace0 \ud14c\uc2a4\ud2b8 \uacb0\uacfc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Newman\uc740 \uc9c0\uc18d\uc801\uc778 \ud1b5\ud569 \ubc0f \uc9c0\uc18d\uc801\uc778 \uc804\ub2ec (CI/CD) \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \ud1b5\ud569\ud558\uc5ec API \ud14c\uc2a4\ud2b8\ub97c \uc790\ub3d9\ud654\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4.\npm\uc740 Postman \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub0b4\uc7a5 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. pm\uc744 \uc0ac\uc6a9\ud558\uba74 \uc694\uccad \ubc0f \uc751\ub2f5 \ub370\uc774\ud130\uc5d0 \uc561\uc138\uc2a4\ud558\uace0 \uc870\uc791\ud560 \uc218 \uc788\uc73c\uba70, \ud658\uacbd \ubc0f \uc804\uc5ed \ubcc0\uc218\ub97c \uc124\uc815\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c pm\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud558\uace0 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c Newman\uacfc pm\uc740 \uc11c\ub85c \ub2e4\ub978 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. Newman\uc740 Postman \uceec\ub809\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\uba70, pm\uc740 Postman \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:'Newman\uc744 \uc0ac\uc6a9\ud558\uc5ec Postman \uceec\ub809\uc158\uc744 "\uc2e4\ud589"\ud55c\ub2e4\ub294 \uac83\uc740 Postman \uceec\ub809\uc158\uc5d0 \ud3ec\ud568\ub41c \ubaa8\ub4e0 \uc694\uccad\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ud558\uace0 \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.\nPostman \uceec\ub809\uc158\uc740 \uc5ec\ub7ec \uac1c\uc758 API \uc694\uccad\uacfc \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. Newman\uc744 \uc0ac\uc6a9\ud558\uc5ec Postman \uceec\ub809\uc158\uc744 \uc2e4\ud589\ud558\uba74 Newman\uc740 \uceec\ub809\uc158\uc5d0 \ud3ec\ud568\ub41c \uac01 \uc694\uccad\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ud558\uace0 \uc751\ub2f5\uc744 \ud655\uc778\ud569\ub2c8\ub2e4. \ub610\ud55c Newman\uc740 \uceec\ub809\uc158\uc5d0 \ud3ec\ud568\ub41c \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\uc5ec API\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\nNewman\uc740 Postman\uc758 Publish \uae30\ub2a5\uacfc\ub294 \ub2e4\ub985\ub2c8\ub2e4. Publish \uae30\ub2a5\uc740 Postman \uceec\ub809\uc158\uc758 \ubb38\uc11c\ud654\ub41c \ubc84\uc804\uc744 \uc6f9\uc5d0\uc11c \uacf5\uc720\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ubc18\uba74 Newman\uc740 Postman \uceec\ub809\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\uba70, API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uac04\ud3b8\ud558\uac8c \ub9ac\uc2a4\ud305\ud558\uac70\ub098 \uad00\ub9ac\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c API \ud14c\uc2a4\ud2b8\ub97c \uc790\ub3d9\ud654\ud558\ub294 \ub370 \ubaa9\uc801\uc774 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:"Newman\uc740 \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubaa8\ub450\uc5d0\uac8c \uc720\uc6a9\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4. Newman\uc740 Postman \uceec\ub809\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ucee4\ub9e8\ub4dc \ub77c\uc778 \ub3c4\uad6c\ub85c, API \ud14c\uc2a4\ud2b8\ub97c \uc790\ub3d9\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub294 Newman\uc744 \uc0ac\uc6a9\ud558\uc5ec API\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Newman\uc744 \uc0ac\uc6a9\ud558\uba74 API \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \uc751\ub2f5\uc744 \ud655\uc778\ud558\uba70, \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\uc5ec API\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c Newman\uc740 \uc9c0\uc18d\uc801\uc778 \ud1b5\ud569 \ubc0f \uc9c0\uc18d\uc801\uc778 \uc804\ub2ec (CI/CD) \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \ud1b5\ud569\ud558\uc5ec API \ud14c\uc2a4\ud2b8\ub97c \uc790\ub3d9\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub3c4 Newman\uc744 \uc0ac\uc6a9\ud558\uc5ec API\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub294 Newman\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc31\uc5d4\ub4dc API\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\uace0, \ud504\ub860\ud2b8\uc5d4\ub4dc \ucf54\ub4dc\uac00 \ubc31\uc5d4\ub4dc API\uc640 \uc62c\ubc14\ub974\uac8c \uc0c1\ud638 \uc791\uc6a9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Newman\uc740 \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubaa8\ub450\uc5d0\uac8c \uc720\uc6a9\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"postman\uc5d0\uc11c-api-\ubb38\uc11c-\uc0dd\uc131\ud558\ub294-\ubc29\ubc95",children:"Postman\uc5d0\uc11c API \ubb38\uc11c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95"}),"\n",(0,r.jsx)(n.p,{children:"Postman\uc740 OpenAPI \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \ud55c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. Postman \uceec\ub809\uc158\uc5d0\uc11c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud558\ub824\uba74 \ub2e4\uc74c \ub2e8\uacc4\ub97c \ub530\ub974\uc2ed\uc2dc\uc624."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Postman\uc5d0\uc11c \uceec\ub809\uc158\uc744 \uc120\ud0dd\ud558\uace0 "..." \ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c \ub2e4\uc74c "Export"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.li,{children:'"Collection v2.1"\uc744 \uc120\ud0dd\ud558\uace0 "Export" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.li,{children:"\ud30c\uc77c\uc744 \uc800\uc7a5\ud558\uace0 Postman API Builder\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:'"APIs" \ud0ed\uc5d0\uc11c "+" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uace0 "Import an API"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.li,{children:'"Choose Files" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uace0 \uc55e\uc11c \uc800\uc7a5\ud55c \ud30c\uc77c\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774\uc81c Postman API Builder\uc5d0\uc11c OpenAPI \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \ud55c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0dd\uc131\ub41c API \ubb38\uc11c\ub294 Swagger\uc640 \uac19\uc740 \ub2e4\ub978 \ub3c4\uad6c\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"swagger\uc640-open-api-30",children:"Swagger\uc640 Open API 3.0"}),"\n",(0,r.jsx)(n.p,{children:"\ub610\ud55c \uc77c\ubd80 \ubc31\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c (\uc608: Node.js\uc758 Express)\uc5d0\uc11c\ub294 Swagger\uc640 \uac19\uc740 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucf54\ub4dc \uc8fc\uc11d\uc744 \uae30\ubc18\uc73c\ub85c \uc790\ub3d9\uc73c\ub85c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 \ucf54\ub4dc \uc8fc\uc11d\uc5d0 \uae30\ubc18\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. OpenAPI 2.0 (\uc774\uc804\uc5d0\ub294 Swagger\ub85c \uc54c\ub824\uc84c\uc74c)\uc740 OpenAPI 3.0\uacfc \uba87 \uac00\uc9c0 \uc911\uc694\ud55c \ucc28\uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. OpenAPI 3.0\uc740 2017\ub144\uc5d0 \ucd9c\uc2dc\ub418\uc5c8\uc73c\uba70, \uba87 \uac00\uc9c0 \uc8fc\uc694\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ubb38\uc11c \uad6c\uc870\uac00 \uc7ac\uad6c\uc131\ub418\uc5b4 API \uc7ac\uc0ac\uc6a9\uc131\uc774 \uc99d\uac00\ud558\ub3c4\ub85d \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"JSON \uc2a4\ud0a4\ub9c8 \uc9c0\uc6d0\uc774 \ud655\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc0c8\ub85c\uc6b4 \ucf5c\ubc31 \ubc0f \ub9c1\ud06c \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc11c\ubc84 \ubcc0\uc218 \ubc0f \ub2e4\uc911 \uc11c\ubc84 \uc9c0\uc6d0\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"OpenAPI 3.1\uc740 OpenAPI 3.0\uc758 \ub9c8\uc774\ub108 \uc5c5\ub370\uc774\ud2b8\ub85c, JSON \uc2a4\ud0a4\ub9c8\uc640\uc758 \ud638\ud658\uc131\uc744 \uac1c\uc120\ud558\ub294 \ub370 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. OpenAPI 3.1\uc740 JSON \uc2a4\ud0a4\ub9c8\uc758 \ucd5c\uc2e0 \ucd08\uc548\uacfc 100% \ud638\ud658\ub429\ub2c8\ub2e4.\nOpenAPI 2.x\uc5d0\uc11c \uc0dd\uc131\ub41c \ubb38\uc11c\ub294 OpenAPI 3.x\uc640 \uc644\ubcbd\ud558\uac8c \ud638\ud658\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 OpenAPI 2.x \ubb38\uc11c\ub97c OpenAPI 3.x\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \uac83\uc740 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 \uc77c\ubd80 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc218\ub3d9\uc73c\ub85c \uc801\uc6a9\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"references-2",children:"References"}),"\n",(0,r.jsxs)(n.p,{children:["(1) ",(0,r.jsx)(n.a,{href:"https://gruuuuu.github.io/programming/openapi/",children:"OpenAPI \ub780? (feat. Swagger) - \ud638\ub864\ub9ac\ud55c \ud558\ub8e8"}),"\n(2) ",(0,r.jsx)(n.a,{href:"https://blog.stoplight.io/difference-between-open-v2-v3-v31",children:"What's the Difference Between OpenAPI Types 2.0, 3.0, and 3.1? - Stoplight"}),"\n(3) ",(0,r.jsx)(n.a,{href:"https://www.openapis.org/blog/2021/02/16/migrating-from-openapi-3-0-to-3-1-0",children:"Migrating from OpenAPI 3.0 to 3.1.0 - OpenAPI Initiative"}),"\n(4) ",(0,r.jsx)(n.a,{href:"https://www.openapis.org/blog/2021/02/18/openapi-specification-3-1-released",children:"OpenAPI Specification 3.1.0 Released - OpenAPI Initiative"})]}),"\n",(0,r.jsx)(n.h2,{id:"open-api\uc758-\uad00\ub9ac-\uc8fc\uccb4",children:"Open API\uc758 \uad00\ub9ac \uc8fc\uccb4"}),"\n",(0,r.jsx)(n.p,{children:"OpenAPI \uc0ac\uc591\uc740 OpenAPI Initiative (OAI)\uc774\ub77c\ub294 \ube44\uc601\ub9ac \uc870\uc9c1\uc5d0 \uc758\ud574 \uad00\ub9ac\ub429\ub2c8\ub2e4. OAI\ub294 API \uac1c\ubc1c \ubc0f \uc0ac\uc6a9\uc744 \uc9c0\uc6d0\ud558\ub294 \ubaa9\uc801\uc73c\ub85c \uc124\ub9bd\ub41c \ucee4\ubba4\ub2c8\ud2f0 \uc8fc\ub3c4 \uc870\uc9c1\uc73c\ub85c, \uc5ec\ub7ec \uae30\uc5c5\uacfc \uac1c\uc778\uc774 \ucc38\uc5ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nSwaggerHub\ub294 SmartBear\ub77c\ub294 \ud68c\uc0ac\uc5d0\uc11c \uac1c\ubc1c\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. SmartBear\ub294 Swagger UI\ub97c \uac1c\ubc1c\ud55c \ud68c\uc0ac\ub85c, OpenAPI Initiative\uc758 \ucc3d\ub9bd \ud68c\uc6d0 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. SwaggerHub\ub294 OpenAPI \uc0ac\uc591\uc744 \uc9c0\uc6d0\ud558\ub294 API \ub514\uc790\uc778 \ubc0f \ubb38\uc11c\ud654 \ud50c\ub7ab\ud3fc\uc73c\ub85c, Swagger UI\uc640 \uac19\uc740 \ub3c4\uad6c\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nOpenAPI \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub3c4\uad6c\ub294 \ub2e4\uc591\ud55c \ubc31\uc5d4\ub4dc \uc5b8\uc5b4\uc640 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uba74 OpenAPI \ubb38\uc11c\uc5d0\uc11c API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \ub370\uc774\ud130 \ubaa8\ub378\uc744 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4, Swagger Codegen\uc740 OpenAPI \uc0ac\uc591\uc744 \uae30\ubc18\uc73c\ub85c \uc11c\ubc84 \uc2a4\ud141 \ubc0f \ud074\ub77c\uc774\uc5b8\ud2b8 SDK\ub97c \uc0dd\uc131\ud558\ub294 \uc624\ud508 \uc18c\uc2a4 \ub3c4\uad6c\uc785\ub2c8\ub2e4. Swagger Codegen\uc740 \ub2e4\uc591\ud55c \uc5b8\uc5b4\uc640 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc9c0\uc6d0\ud558\uba70, Java, Python, Ruby, Node.js, Go \ub4f1\uc758 \uc5b8\uc5b4\ub85c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c \uc77c\ubd80 \ubc31\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c (\uc608: Node.js\uc758 Express)\uc5d0\uc11c\ub294 Swagger\uc640 \uac19\uc740 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucf54\ub4dc \uc8fc\uc11d\uc744 \uae30\ubc18\uc73c\ub85c \uc790\ub3d9\uc73c\ub85c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 \ucf54\ub4dc \uc8fc\uc11d\uc5d0 \uae30\ubc18\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c API \ubb38\uc11c\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uc678\uc5d0\ub3c4 OpenAPI Generator, NSwag \ub4f1\uc758 \ub3c4\uad6c\uac00 \uc788\uc73c\uba70, \uac01\uac01\uc758 \ub3c4\uad6c\ub294 \ub2e4\uc591\ud55c \uc5b8\uc5b4\uc640 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"raml",children:"RAML"}),"\n",(0,r.jsx)(n.p,{children:"OpenAPI\uc640 \uc720\uc0ac\ud55c \ubaa9\uc801\uc744 \uac00\uc9c4 \ub2e4\ub978 API \uc124\uba85 \uc5b8\uc5b4\ub85c\ub294 RAML (RESTful API Modeling Language)\uacfc API Blueprint\uac00 \uc788\uc2b5\ub2c8\ub2e4.\nRAML\uc740 YAML\uc744 \uae30\ubc18\uc73c\ub85c \ud55c API \uc124\uba85 \uc5b8\uc5b4\ub85c, RESTful API\ub97c \ubaa8\ub378\ub9c1\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. RAML\uc740 API\uc758 \ub9ac\uc18c\uc2a4, \uba54\uc11c\ub4dc, \ub9e4\uac1c \ubcc0\uc218, \uc751\ub2f5 \ub4f1\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc73c\uba70, API \ubb38\uc11c\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nAPI Blueprint\ub294 Markdown\uc744 \uae30\ubc18\uc73c\ub85c \ud55c API \uc124\uba85 \uc5b8\uc5b4\ub85c, RESTful API\ub97c \ubb38\uc11c\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. API Blueprint\ub294 API\uc758 \ub9ac\uc18c\uc2a4, \uba54\uc11c\ub4dc, \ub9e4\uac1c \ubcc0\uc218, \uc751\ub2f5 \ub4f1\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc73c\uba70, API \ubb38\uc11c\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub3c4\uad6c\ub4e4\uc740 OpenAPI\uc640 \uc720\uc0ac\ud55c \ubaa9\uc801\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, \uac01\uac01\uc758 \ub3c4\uad6c\ub294 \uace0\uc720\ud55c \ubb38\ubc95\uacfc \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc0ac\uc6a9\uc790\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \uc801\uc808\ud55c \ub3c4\uad6c\ub97c \uc120\ud0dd\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function c(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3905:(e,n,a)=>{a.d(n,{ah:()=>m});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),m=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),P=m(a),g=t,w=P["".concat(l,".").concat(g)]||P[g]||p[g]||s;return a?r.createElement(w,i(i({ref:n},c),{},{components:a})):r.createElement(w,i({ref:n},c))}));c.displayName="MDXCreateElement"}}]);