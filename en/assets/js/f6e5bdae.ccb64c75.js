"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[716],{3383:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=r(5893),s=r(3905);const l={slug:"web-gl-open-gl",title:"WebGL & OpenGL",authors:"andrew",tags:[]},c="WebGL & OpenGL",t={permalink:"/wiki/en/blog/web-gl-open-gl",source:"@site/blog/2023-03-29-web-gl-open-gl.mdx",title:"WebGL & OpenGL",description:"WebGL: \uc6f9 \uadf8\ub798\ud53d \ub77c\uc774\ube0c\ub7ec\ub9ac(Web Graphics Library)",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[],readingTime:19.76,hasTruncateMarker:!1,authors:[{name:"Dongmin Yu",title:"Cross Platform Developer Android, iOS, macOS.",url:"https://gravatar.com/donminzzi",imageURL:"https://avatars.githubusercontent.com/u/82999715?v=4",key:"andrew"}],frontMatter:{slug:"web-gl-open-gl",title:"WebGL & OpenGL",authors:"andrew",tags:[]},unlisted:!1,prevItem:{title:"WebDriver Manager\uc640 MEIPASS",permalink:"/wiki/en/blog/web-driver-manager-and-meipass"},nextItem:{title:"Postman\uacfc NewMan Library\uc758 \uc0ac\uc6a9\ubc29\ubc95",permalink:"/wiki/en/blog/postman-and-newman"}},o={authorsImageUrls:[void 0]},d=[{value:"WebGL: \uc6f9 \uadf8\ub798\ud53d \ub77c\uc774\ube0c\ub7ec\ub9ac(Web Graphics Library)",id:"webgl-\uc6f9-\uadf8\ub798\ud53d-\ub77c\uc774\ube0c\ub7ec\ub9acweb-graphics-library",level:2},{value:"References",id:"references",level:3},{value:"WebGL\uacfc OpenGL",id:"webgl\uacfc-opengl",level:2},{value:"References",id:"references-1",level:3},{value:"OpenGL ES 2.0",id:"opengl-es-20",level:2},{value:"References",id:"references-2",level:3},{value:"OpenGL ES 2.0 API\uc758 \uc8fc\uc694 \ud568\uc218\uc640 \uba85\ub839",id:"opengl-es-20-api\uc758-\uc8fc\uc694-\ud568\uc218\uc640-\uba85\ub839",level:2},{value:"\uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8",id:"\uc170\uc774\ub354-\ud504\ub85c\uadf8\ub7a8",level:2},{value:"\uac04\ub2e8\ud55c \ubc84\ud14d\uc2a4 \uc170\uc774\ub354 \uc608\uc81c",id:"\uac04\ub2e8\ud55c-\ubc84\ud14d\uc2a4-\uc170\uc774\ub354-\uc608\uc81c",level:2},{value:"Node.js\uc5d0\uc11c OpenGL\uc744 \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95",id:"nodejs\uc5d0\uc11c-opengl\uc744-\ud65c\uc6a9\ud558\ub294-\ubc29\ubc95",level:2},{value:"References",id:"references-3",level:3},{value:"WebGL\uc744 \uae30\ubc18\uc73c\ub85c \ud48d\ubd80\ud55c \ubc18\uc751\ud615 UI\ub97c \uc81c\uacf5\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"webgl\uc744-\uae30\ubc18\uc73c\ub85c-\ud48d\ubd80\ud55c-\ubc18\uc751\ud615-ui\ub97c-\uc81c\uacf5\ud558\ub294-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:2},{value:"References",id:"references-4",level:3},{value:"Three.js",id:"threejs",level:2},{value:"References",id:"references-5",level:3},{value:"Expo Three JS \ubaa8\ub4c8",id:"expo-three-js-\ubaa8\ub4c8",level:2},{value:"Three.js\uc758 3D \ubaa8\ub378\uc744 \uacf5\uc720\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \ucee4\ubba4\ub2c8\ud2f0",id:"threejs\uc758-3d-\ubaa8\ub378\uc744-\uacf5\uc720\ud558\ub294-\uc624\ud508\uc18c\uc2a4-\ucee4\ubba4\ub2c8\ud2f0",level:2},{value:"References",id:"references-6",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"webgl-\uc6f9-\uadf8\ub798\ud53d-\ub77c\uc774\ube0c\ub7ec\ub9acweb-graphics-library",children:"WebGL: \uc6f9 \uadf8\ub798\ud53d \ub77c\uc774\ube0c\ub7ec\ub9ac(Web Graphics Library)"}),"\n",(0,i.jsx)(n.p,{children:"WebGL\uc740 \uc6f9 \uadf8\ub798\ud53d \ub77c\uc774\ube0c\ub7ec\ub9ac(Web Graphics Library)\uc758 \uc57d\uc790\ub85c, \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc0c1\ud638\uc791\uc6a9 \uac00\ub2a5\ud55c 3D\uc640 2D \uadf8\ub798\ud53d\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud55c JavaScript API\uc785\ub2c8\ub2e4. WebGL\uc740 HTML5 <canvas> \uc694\uc18c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294, OpenGL ES 2.0\uc744 \ub300\ubd80\ubd84 \ucda9\uc871\ud558\ub294 API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. WebGL\uc740 \ud50c\ub7ec\uadf8\uc778\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc0c1\ud638\uc791\uc6a9 \uac00\ub2a5\ud55c 3D\uc640 2D \uadf8\ub798\ud53d\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud55c JavaScript API\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",children:"WebGL: 2D and 3D graphics for the web - Web APIs | MDN - Mozilla"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/API/WebGL_API",children:"WebGL - Web API | MDN"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/WebGL",children:"WebGL - Wikipedia"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webgl\uacfc-opengl",children:"WebGL\uacfc OpenGL"}),"\n",(0,i.jsx)(n.p,{children:"WebGL 1.0\uc740 \ub300\ubd80\ubd84\uc758 \uc8fc\uc694 \ube0c\ub77c\uc6b0\uc800\uc758 \uc548\uc815\uc801\uc778 \ub9b4\ub9ac\uc988\uc5d0\uc11c \ub370\uc2a4\ud06c\ud0d1 \ubc0f \ubaa8\ubc14\uc77c \ud50c\ub7ab\ud3fc \ubaa8\ub450\uc5d0\uc11c \uc9c0\uc6d0\ub429\ub2c8\ub2e4. Chrome, Firefox, Internet Explorer, Opera \ubc0f Safari\ub294 \ubaa8\ub450 \ub370\uc2a4\ud06c\ud0d1 \ubc0f \ubaa8\ubc14\uc77c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c WebGL \uc9c0\uc6d0\uc774 \uc88b\uc740 \uac83\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc0ac\uc6a9\uc790\uc758 \uc7a5\uce58\ub3c4 WebGL \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"OpenGL ES\ub294 OpenGL for Embedded Systems\uc758 \uc57d\uc790\ub85c, OpenGL \ucef4\ud4e8\ud130 \uadf8\ub798\ud53d \ub80c\ub354\ub9c1 \uc751\uc6a9 \ud504\ub85c\uadf8\ub798\ubc0d \uc778\ud130\ud398\uc774\uc2a4(API)\uc758 \ud558\uc704 \uc9d1\ud569\uc785\ub2c8\ub2e4. \uc774 API\ub294 \ube44\ub514\uc624 \uac8c\uc784\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \uac19\uc740 2D \ubc0f 3D \ucef4\ud4e8\ud130 \uadf8\ub798\ud53d\uc744 \ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud574 \uc124\uacc4\ub418\uc5c8\uc73c\uba70 \uc77c\ubc18\uc801\uc73c\ub85c \uadf8\ub798\ud53d \ucc98\ub9ac \uc7a5\uce58(GPU)\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\ub429\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8\ud3f0, \ud0dc\ube14\ub9bf \ucef4\ud4e8\ud130, \ube44\ub514\uc624 \uac8c\uc784 \ucf58\uc194 \ubc0f PDA\uc640 \uac19\uc740 \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc6a9\uc73c\ub85c \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. OpenGL ES 2.0\uc740 OpenGL ES\uc758 \ubc84\uc804 \uc911 \ud558\ub098\ub85c, \uc774\uc804 \ubc84\uc804\uc778 OpenGL ES 1.X\uc640 \ub2ec\ub9ac \ud504\ub85c\uadf8\ub798\ubc0d \uac00\ub2a5\ud55c \uc170\uc774\ub529\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc774\ub294 \ubaa8\ubc14\uc77c \uadf8\ub798\ud53d \ud558\ub4dc\uc6e8\uc5b4\uc758 \ucd5c\uc2e0 \uc138\ub300\uc5d0\uc11c \ud504\ub85c\uadf8\ub798\ub9c9 \uac00\ub2a5\ud55c \uc170\uc774\ub354\ub97c \ub178\ucd9c\ud558\ub294 \ucd5c\ucd08\uc758 \uc774\uc2dd \uac00\ub2a5\ud55c \ubaa8\ubc14\uc77c \uadf8\ub798\ud53d API\uc600\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"references-1",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/OpenGL_ES",children:"OpenGL ES - Wikipedia"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.khronos.org/opengles/",children:"OpenGL ES Overview - The Khronos Group Inc"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://registry.khronos.org/OpenGL/index_es.php",children:"Khronos OpenGL ES Registry - The Khronos Group Inc"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"opengl-es-20",children:"OpenGL ES 2.0"}),"\n",(0,i.jsx)(n.p,{children:"OpenGL ES 2.0\uc740 OpenGL ES\uc758 \ubc84\uc804 \uc911 \ud558\ub098\ub85c, \uc774\uc804 \ubc84\uc804\uc778 OpenGL ES 1.X\uc640 \ub2ec\ub9ac \ud504\ub85c\uadf8\ub798\ubc0d \uac00\ub2a5\ud55c \uc170\uc774\ub529\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc774\ub294 \ubaa8\ubc14\uc77c \uadf8\ub798\ud53d \ud558\ub4dc\uc6e8\uc5b4\uc758 \ucd5c\uc2e0 \uc138\ub300\uc5d0\uc11c \ud504\ub85c\uadf8\ub798\ub9c9 \uac00\ub2a5\ud55c \uc170\uc774\ub354\ub97c \ub178\ucd9c\ud558\ub294 \ucd5c\ucd08\uc758 \uc774\uc2dd \uac00\ub2a5\ud55c \ubaa8\ubc14\uc77c \uadf8\ub798\ud53d API\uc600\uc2b5\ub2c8\ub2e4.\nOpenGL ES 2.0 API\uc5d0\ub294 \ub2e4\uc591\ud55c \ud568\uc218\uc640 \uba85\ub839\uc774 \uc815\uc758\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud568\uc218\uc640 \uba85\ub839\uc740 \ud504\ub85c\uadf8\ub798\uba38\uac00 \uace0\ud488\uc9c8\uc758 \uadf8\ub798\ud53d \uc774\ubbf8\uc9c0, \ud2b9\ud788 3\ucc28\uc6d0 \uac1d\uccb4\uc758 \uceec\ub7ec \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud558\ub294 \ub370 \ud544\uc694\ud55c \uac1d\uccb4\uc640 \uc791\uc5c5\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. OpenGL ES 2.0 API\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 Khronos Group\uc758 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"references-2",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.khronos.org/opengles/",children:"OpenGL ES Overview - The Khronos Group Inc"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf",children:"OpenGL ES 2.0 API Quick Reference Card - Khronos Group"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://registry.khronos.org/OpenGL/index_es.php",children:"Khronos OpenGL ES Registry - The Khronos Group Inc"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"opengl-es-20-api\uc758-\uc8fc\uc694-\ud568\uc218\uc640-\uba85\ub839",children:"OpenGL ES 2.0 API\uc758 \uc8fc\uc694 \ud568\uc218\uc640 \uba85\ub839"}),"\n",(0,i.jsx)(n.p,{children:"OpenGL ES 2.0 API\uc5d0\ub294 \ub2e4\uc591\ud55c \ud568\uc218\uc640 \uba85\ub839\uc774 \uc815\uc758\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud568\uc218\uc640 \uba85\ub839\uc740 \ud504\ub85c\uadf8\ub798\uba38\uac00 \uace0\ud488\uc9c8\uc758 \uadf8\ub798\ud53d \uc774\ubbf8\uc9c0, \ud2b9\ud788 3\ucc28\uc6d0 \uac1d\uccb4\uc758 \uceec\ub7ec \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud558\ub294 \ub370 \ud544\uc694\ud55c \uac1d\uccb4\uc640 \uc791\uc5c5\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. OpenGL ES 2.0 API\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 Khronos Group\uc758 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"glGenBuffers()"}),", ",(0,i.jsx)(n.code,{children:"glBindBuffer()"}),", ",(0,i.jsx)(n.code,{children:"glBufferData()"}),", ",(0,i.jsx)(n.code,{children:"glBufferSubData()"}),": \ubc84\ud37c \uac1d\uccb4 \uc0dd\uc131 \ubc0f \ub370\uc774\ud130 \uc800\uc7a5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"glCreateShader()"}),", ",(0,i.jsx)(n.code,{children:"glShaderSource()"}),", ",(0,i.jsx)(n.code,{children:"glCompileShader()"}),": \uc170\uc774\ub354 \uc0dd\uc131 \ubc0f \ucef4\ud30c\uc77c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"glCreateProgram()"}),", ",(0,i.jsx)(n.code,{children:"glAttachShader()"}),", ",(0,i.jsx)(n.code,{children:"glLinkProgram()"}),", ",(0,i.jsx)(n.code,{children:"glUseProgram()"}),": \uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8 \uc0dd\uc131 \ubc0f \uc0ac\uc6a9"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"glVertexAttribPointer()"}),", ",(0,i.jsx)(n.code,{children:"glEnableVertexAttribArray()"}),": \uc815\uc810 \uc18d\uc131 \uc9c0\uc815"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"glDrawArrays()"}),", ",(0,i.jsx)(n.code,{children:"glDrawElements()"}),": \uae30\ud558\ud559\uc801 \ub3c4\ud615 \ub80c\ub354\ub9c1"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc170\uc774\ub354-\ud504\ub85c\uadf8\ub7a8",children:"\uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8"}),"\n",(0,i.jsxs)(n.p,{children:["\uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8\uc740 \uadf8\ub798\ud53d \ud30c\uc774\ud504\ub77c\uc778\uc758 \ud2b9\uc815 \ubd80\ubd84\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc791\uc740 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4. OpenGL ES 2.0\uc5d0\uc11c\ub294 \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \uc170\uc774\ub354\uac00 \uc9c0\uc6d0\ub429\ub2c8\ub2e4: \ubc84\ud14d\uc2a4 \uc170\uc774\ub354\uc640 \ud504\ub798\uadf8\uba3c\ud2b8 \uc170\uc774\ub354.\n\ubc84\ud14d\uc2a4 \uc170\uc774\ub354\ub294 \ubaa8\ub4e0 \uc815\uc810\uc5d0 \ub300\ud574 \uc2e4\ud589\ub418\uba70, \uc815\uc810\uc758 \uc704\uce58\uc640 \ub2e4\ub978 \uc18d\uc131\uc744 \uacc4\uc0b0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud504\ub798\uadf8\uba3c\ud2b8 \uc170\uc774\ub354\ub294 \ud654\uba74\uc5d0 \uadf8\ub824\uc9c0\ub294 \uac01 \ud53d\uc140\uc5d0 \ub300\ud574 \uc2e4\ud589\ub418\uba70, \ud53d\uc140\uc758 \ucd5c\uc885 \uc0c9\uc0c1\uc744 \uacc4\uc0b0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8\uc740 \ubc84\ud14d\uc2a4 \uc170\uc774\ub354\uc640 \ud504\ub798\uadf8\uba3c\ud2b8 \uc170\uc774\ub354\ub97c \uacb0\ud569\ud558\uc5ec \uc0dd\uc131\ub429\ub2c8\ub2e4. \uba3c\uc800 ",(0,i.jsx)(n.code,{children:"glCreateShader()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 \uc170\uc774\ub354 \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c \ub2e4\uc74c, ",(0,i.jsx)(n.code,{children:"glShaderSource()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc170\uc774\ub354 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc9c0\uc815\ud558\uace0 ",(0,i.jsx)(n.code,{children:"glCompileShader()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc170\uc774\ub354\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,i.jsx)(n.code,{children:"glCreateProgram()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0, ",(0,i.jsx)(n.code,{children:"glAttachShader()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc84\ud14d\uc2a4 \uc170\uc774\ub354\uc640 \ud504\ub798\uadf8\uba3c\ud2b8 \uc170\uc774\ub354\ub97c \ud504\ub85c\uadf8\ub7a8\uc5d0 \ucca8\ubd80\ud55c \ub2e4\uc74c, ",(0,i.jsx)(n.code,{children:"glLinkProgram()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud504\ub85c\uadf8\ub7a8\uc744 \ub9c1\ud06c\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,i.jsx)(n.code,{children:"glUseProgram()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9c1\ud06c\ub41c \ud504\ub85c\uadf8\ub7a8\uc744 \ud604\uc7ac \ub80c\ub354\ub9c1 \uc0c1\ud0dc\uc758 \uc77c\ubd80\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n\uc170\uc774\ub354 \ud504\ub85c\uadf8\ub7a8\uc744 \uc0ac\uc6a9\ud558\uba74 \uac1c\ubc1c\uc790\uac00 \uadf8\ub798\ud53d \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc911\uc694\ud55c \ubd80\ubd84\uc744 \uc9c1\uc811 \uc81c\uc5b4\ud560 \uc218 \uc788\uc5b4 \ub354\uc6b1 \uc720\uc5f0\ud558\uace0 \uac15\ub825\ud55c \uadf8\ub798\ud53d \ud6a8\uacfc\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc170\uc774\ub354 \uc18c\uc2a4 \ucf54\ub4dc\ub294 OpenGL ES \uc170\uc774\ub529 \uc5b8\uc5b4(GLSL ES)\ub85c \uc791\uc131\ub429\ub2c8\ub2e4. GLSL ES\ub294 C \uc5b8\uc5b4\uc640 \uc720\uc0ac\ud55c \uad6c\ubb38\uc744 \uac00\uc9c4 \uace0\uc218\uc900 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c, \uadf8\ub798\ud53d \ucc98\ub9ac \uc7a5\uce58(GPU)\uc5d0\uc11c \uc2e4\ud589\ub418\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc170\uc774\ub354 \uc18c\uc2a4 \ucf54\ub4dc\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ubb38\uc790\uc5f4 \ud615\ud0dc\ub85c \uc791\uc131\ub418\uba70, ",(0,i.jsx)(n.code,{children:"glShaderSource()"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc170\uc774\ub354 \uac1d\uccb4\uc5d0 \uc804\ub2ec\ub429\ub2c8\ub2e4. \uac01 \uc170\uc774\ub354 \uc720\ud615(\ubc84\ud14d\uc2a4 \uc170\uc774\ub354 \ub610\ub294 \ud504\ub798\uadf8\uba3c\ud2b8 \uc170\uc774\ub354)\uc5d0 \ub300\ud574 \ub2e4\ub978 \uc18c\uc2a4 \ucf54\ub4dc\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\nGLSL ES\uc5d0\ub294 \ubca1\ud130, \ud589\ub82c, \ud14d\uc2a4\ucc98 \ub4f1\uacfc \uac19\uc740 \uadf8\ub798\ud53d \ucc98\ub9ac\uc5d0 \uc720\uc6a9\ud55c \ub370\uc774\ud130 \ud615\uc2dd\uacfc \ud568\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc870\uac74\ubb38, \ubc18\ubcf5\ubb38, \ud568\uc218 \uc815\uc758 \ub4f1\uacfc \uac19\uc740 \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uad6c\uc870\ub3c4 \uc9c0\uc6d0\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"\uac04\ub2e8\ud55c-\ubc84\ud14d\uc2a4-\uc170\uc774\ub354-\uc608\uc81c",children:"\uac04\ub2e8\ud55c \ubc84\ud14d\uc2a4 \uc170\uc774\ub354 \uc608\uc81c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-glsl",children:"attribute vec4 a_position;\nuniform mat4 u_mvpMatrix;\nvoid main() {\n\xa0 \xa0 gl_Position = u_mvpMatrix * a_position;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc774 \ubc84\ud14d\uc2a4 \uc170\uc774\ub354\ub294 \uc815\uc810 \uc704\uce58(",(0,i.jsx)(n.code,{children:"a_position"}),")\ub97c \ubaa8\ub378-\ubdf0-\ud22c\uc601 \ud589\ub82c(",(0,i.jsx)(n.code,{children:"u_mvpMatrix"}),")\ub85c \ubcc0\ud658\ud558\uc5ec \ucd5c\uc885 \uc815\uc810 \uc704\uce58(",(0,i.jsx)(n.code,{children:"gl_Position"}),")\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-glsl",children:"precision mediump float;\nuniform vec4 u_color;\nvoid main() {\n\xa0 \xa0 gl_FragColor = u_color;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc774 \ud504\ub798\uadf8\uba3c\ud2b8 \uc170\uc774\ub354\ub294 \ubaa8\ub4e0 \ud53d\uc140\uc758 \uc0c9\uc0c1\uc744 \ub3d9\uc77c\ud55c \uc0c9\uc0c1(",(0,i.jsx)(n.code,{children:"u_color"}),")\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"nodejs\uc5d0\uc11c-opengl\uc744-\ud65c\uc6a9\ud558\ub294-\ubc29\ubc95",children:"Node.js\uc5d0\uc11c OpenGL\uc744 \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95"}),"\n",(0,i.jsx)(n.p,{children:"\uc170\uc774\ub354 \uc18c\uc2a4 \ucf54\ub4dc \uc791\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 OpenGL ES \uc170\uc774\ub529 \uc5b8\uc5b4 \uc0ac\uc591\uc11c\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nNode.js\uc5d0\uc11c OpenGL\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc911 \uc77c\ubd80\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node-webgl"}),": \ub370\uc2a4\ud06c\ud1b1 OpenGL\uc5d0 \ub300\ud55c WebGL \ubc14\uc778\ub529"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headless-gl"}),": Node.js\uc5d0\uc11c windowless WebGL\uc744 \uc81c\uacf5\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node-glfw"}),": Node.js\uc5d0\uc11c GLFW \ubc14\uc778\ub529"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node-occ"}),": OpenCascade\uc640 NodeJS\ub85c BREP Solids\ub97c \uad6c\ucd95\ud558\ub294 3D \ubaa8\ub378\ub9c1 \ub77c\uc774\ube0c\ub7ec\ub9ac"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"references-3",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/mikeseven/node-webgl",children:"GitHub - mikeseven/node-webgl: WebGL bindings to desktop OpenGL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openbase.com/categories/js/best-nodejs-graphics-libraries",children:"10 Best Node.js Graphics Libraries in 2023 | Openbase"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/web/api/webgl_api/tutorial/getting_started_with_webgl",children:"Getting started with WebGL - Web APIs | MDN - Mozilla"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webgl\uc744-\uae30\ubc18\uc73c\ub85c-\ud48d\ubd80\ud55c-\ubc18\uc751\ud615-ui\ub97c-\uc81c\uacf5\ud558\ub294-\ub77c\uc774\ube0c\ub7ec\ub9ac",children:"WebGL\uc744 \uae30\ubc18\uc73c\ub85c \ud48d\ubd80\ud55c \ubc18\uc751\ud615 UI\ub97c \uc81c\uacf5\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Three.js"}),": WebGL\uc744 \uc0ac\uc6a9\ud558\uc5ec 3D \uadf8\ub798\ud53d\uc744 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 JavaScript \ub77c\uc774\ube0c\ub7ec\ub9ac"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Babylon.js"}),": \uac15\ub825\ud55c 3D \uc5d4\uc9c4\uc73c\ub85c, WebGL\uc744 \uc0ac\uc6a9\ud558\uc5ec 3D \uadf8\ub798\ud53d\uc744 \uc0dd\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"A-Frame"}),": \uc6f9\uc5d0\uc11c \uac00\uc0c1 \ud604\uc2e4(VR) \uacbd\ud5d8\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc6f9 \ud504\ub808\uc784\uc6cc\ud06c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PlayCanvas"}),": WebGL \uae30\ubc18\uc758 3D \uac8c\uc784 \uc5d4\uc9c4\uc73c\ub85c, \uac15\ub825\ud55c \ud234\uacfc API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"references-4",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_WebGL_frameworks",children:"List of WebGL frameworks - Wikipedia"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openbase.com/categories/js/best-javascript-webgl-libraries",children:"10 Best JavaScript WebGL Libraries in 2023 | Openbase"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/bradtraversy/design-resources-for-developers",children:"GitHub - bradtraversy/design-resources-for-developers: Curated list of design and UI ..."})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"threejs",children:"Three.js"}),"\n",(0,i.jsx)(n.p,{children:"Three.js\ub294 WebGL\uc744 \uc0ac\uc6a9\ud558\uc5ec 3D \uadf8\ub798\ud53d\uc744 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 JavaScript \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ub2e4\uc591\ud55c 3D \uac1d\uccb4, \uc7ac\uc9c8, \uc870\uba85, \uc560\ub2c8\uba54\uc774\uc158, \uce74\uba54\ub77c \ub4f1\uc744 \uc81c\uacf5\ud558\uc5ec \uac1c\ubc1c\uc790\uac00 \uc27d\uac8c 3D \uc52c\uc744 \uad6c\uc131\ud558\uace0 \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. Three.js\ub294 \ub2e4\uc591\ud55c \ud615\uc2dd\uc758 3D \ubaa8\ub378\uc744 \ub85c\ub4dc\ud558\uace0, \ubb3c\ub9ac \uc5d4\uc9c4\uacfc \ud1b5\ud569\ud558\uba70, \ub2e4\uc591\ud55c \ud6a8\uacfc\uc640 \ud3ec\uc2a4\ud2b8 \ud504\ub85c\uc138\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589\ub418\ubbc0\ub85c, \ud50c\ub7ec\uadf8\uc778\uc774\ub098 \ucd94\uac00 \uc124\uce58 \uc5c6\uc774\ub3c4 \uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Three.js\ub294 \uafb8\uc900\ud788 \uc5c5\ub370\uc774\ud2b8\ub418\uace0 \uc788\uc73c\uba70, \ud65c\ubc1c\ud55c \ucee4\ubba4\ub2c8\ud2f0\uc640 \ub9ce\uc740 \uc608\uc81c \ubc0f \ubb38\uc11c\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba74 \uac1c\ubc1c\uc790\uac00 WebGL\uc758 \ubcf5\uc7a1\ud55c \uc138\ubd80 \uc0ac\ud56d\uc744 \uac71\uc815\ud558\uc9c0 \uc54a\uace0\ub3c4 \uac15\ub825\ud55c 3D \uadf8\ub798\ud53d\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Three.js\uc758 \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8\uc5d0\ub294 \ub2e4\uc591\ud55c \uc608\uc81c\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub4e4\uc740 Three.js\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uba70, \uac1c\ubc1c\uc790\uac00 \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4.\n\ub2e4\uc74c\uc740 \uac04\ub2e8\ud55c Three.js \uc608\uc81c\uc785\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// \uc52c \uc0dd\uc131\nconst scene = new THREE.Scene();\n// \uce74\uba54\ub77c \uc0dd\uc131\nconst camera = new THREE.PerspectiveCamera(\n  75,\n  window.innerWidth / window.innerHeight,\n  0.1,\n  1000,\n);\n// \ub80c\ub354\ub7ec \uc0dd\uc131\n\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n// \ud050\ube0c \uc0dd\uc131\n\nconst geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n// \uce74\uba54\ub77c \uc704\uce58 \uc870\uc815\ncamera.position.z = 5;\n// \uc560\ub2c8\uba54\uc774\uc158 \ub8e8\ud504\nfunction animate() {\n  requestAnimationFrame(animate); // \ud050\ube0c \ud68c\uc804\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01; // \ub80c\ub354\ub9c1\n  renderer.render(scene, camera);\n}\nanimate();\n"})}),"\n",(0,i.jsx)(n.p,{children:"\uc774 \uc608\uc81c\ub294 Three.js\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c \ud050\ube0c\ub97c \uc0dd\uc131\ud558\uace0 \ud68c\uc804\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uba3c\uc800 \uc52c, \uce74\uba54\ub77c, \ub80c\ub354\ub7ec\ub97c \uc0dd\uc131\ud558\uace0, \ud050\ube0c\uc758 \uae30\ud558\ud559\uacfc \uc7ac\uc9c8\uc744 \uc815\uc758\ud558\uc5ec \ud050\ube0c \uba54\uc2dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ud050\ube0c\ub97c \uc52c\uc5d0 \ucd94\uac00\ud558\uace0, \uc560\ub2c8\uba54\uc774\uc158 \ub8e8\ud504\uc5d0\uc11c \ud050\ube0c\ub97c \ud68c\uc804\uc2dc\ud0a4\uba70 \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4.\nThree.js\uc758 \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \uc774\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ub2e4\uc591\ud558\uace0 \ubcf5\uc7a1\ud55c \uc608\uc81c\ub4e4\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nThree.js\ub97c React \ub610\ub294 React Native\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uba87 \uac00\uc9c0 \ub798\ud37c(wrapper) \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub798\ud37c \ucef4\ud3ec\ub10c\ud2b8\ub294 Three.js\uc758 \uae30\ub2a5\uc744 React \ucef4\ud3ec\ub10c\ud2b8\ub85c \ucea1\uc290\ud654\ud558\uc5ec \uac1c\ubc1c\uc790\uac00 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.\nReact\uc5d0\uc11c Three.js\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ub798\ud37c \ucef4\ud3ec\ub10c\ud2b8 \uc911 \uc77c\ubd80\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"react-three-fiber"}),": Three.js\uc758 \uc120\uc5b8\uc801 \ub9ac\uc561\ud2b8 \ub80c\ub354\ub7ec"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"threejs-react-wrapper"}),": Three.js \ucf54\ub4dc\ub97c React \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uac04\ub2e8\ud55c \ub798\ud37c"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"React Native\uc5d0\uc11c Three.js\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ub798\ud37c \ucef4\ud3ec\ub10c\ud2b8 \uc911 \ud558\ub098\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"expo-three"}),": Expo\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Three.js \ub798\ud37c"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"references-5",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/@colesayershapiro/using-three-js-in-react-6cb71e87bdf4",children:"Using Three.js in React - Medium"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/felixturner/threejs-react-wrapper",children:"GitHub - felixturner/threejs-react-wrapper"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/@akinncar/how-to-develop-3d-games-with-react-native-using-three-js-d01b8132758",children:"How to develop 3D games with React Native using Three.js"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"expo-three-js-\ubaa8\ub4c8",children:"Expo Three JS \ubaa8\ub4c8"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expo-three"}),"\ub294 Expo\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Three.js \ub798\ud37c\uc785\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 Expo \uc571\uc5d0\uc11c Three.js\uc758 \uae30\ub2a5\uc744 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4.\n",(0,i.jsx)(n.code,{children:"expo-three"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uac1c\ubc1c\uc790\uac00 Expo \uc571\uc5d0\uc11c Three.js\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec 3D \uadf8\ub798\ud53d\uc744 \uc0dd\uc131\ud558\uace0 \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 Three.js\uc758 \uae30\ubcf8 \uac1d\uccb4\uc640 \uba54\uc18c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uba70, \ucd94\uac00\uc801\uc73c\ub85c Expo\uc758 \uae30\ub2a5\uacfc \ud1b5\ud569\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,i.jsx)(n.code,{children:"expo-three"}),"\ub294 Expo \uc571\uc5d0\uc11c Three.js\ub97c \uc0ac\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd94\uac00 \uc124\uc815\uc774\ub098 \uc124\uce58 \uc5c6\uc774 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ubb38\uc11c\uc640 \uc608\uc81c\ub294 GitHub\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,i.jsx)(n.code,{children:"expo-three"}),"\uc758 GitHub \uc800\uc7a5\uc18c\uc5d0\ub294 \ub2e4\uc591\ud55c \uc608\uc81c\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub4e4\uc740 ",(0,i.jsx)(n.code,{children:"expo-three"}),"\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uba70, \uac1c\ubc1c\uc790\uac00 \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4.\n\ub2e4\uc74c\uc740 \uac04\ub2e8\ud55c ",(0,i.jsx)(n.code,{children:"expo-three"})," \uc608\uc81c\uc785\ub2c8\ub2e4:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'import React from "react";\nimport { View } from "react-native";\nimport { GLView } from "expo-gl";\nimport ExpoTHREE, { THREE } from "expo-three";\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      \xa0 \xa0 \xa0{" "}\n      <GLView\n        style={{ flex: 1 }}\n        onContextCreate={async (gl) => {\n          const scene = new THREE.Scene();\n          const camera = new THREE.PerspectiveCamera(\n            75,\n\n            gl.drawingBufferWidth / gl.drawingBufferHeight,\n\n            0.1,\n\n            1000,\n          );\n          const renderer = new ExpoTHREE.Renderer({ gl });\n          renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);\n          const geometry = new THREE.BoxGeometry(1, 1, 1);\n          const material = new THREE.MeshBasicMaterial({\n            color: 0x00ff00,\n          });\n          const cube = new THREE.Mesh(geometry, material);\n          scene.add(cube);\n          camera.position.z = 5;\n          const animate = () => {\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n            gl.endFrameEXP();\n          };\n          animate();\n        }}\n      />\n      \xa0 \xa0{" "}\n    </View>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\uc774 \uc608\uc81c\ub294 ",(0,i.jsx)(n.code,{children:"expo-three"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c \ud050\ube0c\ub97c \uc0dd\uc131\ud558\uace0 \ud68c\uc804\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uba3c\uc800 \uc52c, \uce74\uba54\ub77c, \ub80c\ub354\ub7ec\ub97c \uc0dd\uc131\ud558\uace0, \ud050\ube0c\uc758 \uae30\ud558\ud559\uacfc \uc7ac\uc9c8\uc744 \uc815\uc758\ud558\uc5ec \ud050\ube0c \uba54\uc2dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ud050\ube0c\ub97c \uc52c\uc5d0 \ucd94\uac00\ud558\uace0, \uc560\ub2c8\uba54\uc774\uc158 \ub8e8\ud504\uc5d0\uc11c \ud050\ube0c\ub97c \ud68c\uc804\uc2dc\ud0a4\uba70 \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4.\n",(0,i.jsx)(n.code,{children:"expo-three"}),"\uc758 GitHub \uc800\uc7a5\uc18c\uc5d0\uc11c\ub294 \uc774\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ub2e4\uc591\ud558\uace0 \ubcf5\uc7a1\ud55c \uc608\uc81c\ub4e4\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"threejs\uc758-3d-\ubaa8\ub378\uc744-\uacf5\uc720\ud558\ub294-\uc624\ud508\uc18c\uc2a4-\ucee4\ubba4\ub2c8\ud2f0",children:"Three.js\uc758 3D \ubaa8\ub378\uc744 \uacf5\uc720\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \ucee4\ubba4\ub2c8\ud2f0"}),"\n",(0,i.jsx)(n.p,{children:"Three.js\uc758 3D \ubaa8\ub378\uc744 \uacf5\uc720\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \ucee4\ubba4\ub2c8\ud2f0\uac00 \uba87 \uac00\uc9c0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\ub4e4\uc774 Three.js\ub85c \ub9cc\ub4e0 3D \ubaa8\ub378\uc744 \uacf5\uc720\ud558\uace0, \uc11c\ub85c\uc758 \uc791\uc5c5\uc744 \uac80\ud1a0\ud558\uace0 \ud53c\ub4dc\ubc31\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\nThree.js\uc758 \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \uc608\uc81c\uc640 \ubaa8\ub378\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub4e4\uc740 Three.js\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uba70, \uac1c\ubc1c\uc790\uac00 \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4.\n\ub610\ud55c GitHub\uc5d0\uc11c\ub3c4 Three.js\ub85c \ub9cc\ub4e0 3D \ubaa8\ub378\uc744 \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\ubc1c\uc790\ub4e4\uc774 \uc790\uc2e0\uc758 \uc791\uc5c5\ubb3c\uc744 GitHub \uc800\uc7a5\uc18c\uc5d0 \uacf5\uc720\ud558\uace0 \uc788\uc73c\uba70, \uc774\ub7ec\ud55c \uc800\uc7a5\uc18c\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \uc885\ub958\uc758 3D \ubaa8\ub378\uc744 \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"references-6",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://threejs.org/",children:"Three.js \u2013 JavaScript 3D Library"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/mrdoob/three.js/",children:"GitHub - mrdoob/three.js: JavaScript 3D Library."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://speckyboy.com/three-js-in-action/",children:"10 Stunning Open-Source Examples of Three.js In Action - Speckyboy Design Magazine"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Fasani/three-js-resources",children:"GitHub - Fasani/three-js-resources: A collection of resources for building 3D projects ..."})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Three.js\uc758 \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8\uc5d0\ub294 \ub2e4\uc591\ud55c \uc608\uc81c \ubaa8\ub378\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub4e4\uc740 Three.js\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uba70, \uac1c\ubc1c\uc790\uac00 \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, Three.js\uc758 \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc608\uc81c \ubaa8\ub378\ub4e4\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Interactive Cubes: \ub9c8\uc6b0\uc2a4\ub85c \uc0c1\ud638\uc791\uc6a9\ud558\ub294 \ud050\ube0c \ubaa8\ub378"}),"\n",(0,i.jsx)(n.li,{children:"Clipping with Cap: \ud074\ub9ac\ud551 \ud6a8\uacfc\uac00 \uc801\uc6a9\ub41c \ubaa8\ub378"}),"\n",(0,i.jsx)(n.li,{children:"Morph Targets: \ubaa8\ud551 \ud0c0\uac9f \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc801\uc6a9\ub41c \ubaa8\ub378"}),"\n",(0,i.jsx)(n.li,{children:"Lines: \ub2e4\uc591\ud55c \uc120 \uc2a4\ud0c0\uc77c\uc774 \uc801\uc6a9\ub41c \ubaa8\ub378"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Three.js\uc758 \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \uc774\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ub2e4\uc591\ud558\uace0 \ubcf5\uc7a1\ud55c \uc608\uc81c \ubaa8\ub378\ub4e4\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc608\uc81c\ub4e4\uc740 Three.js\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uacfc \uac00\ub2a5\uc131\uc744 \ubcf4\uc5ec\uc8fc\uba70, \uac1c\ubc1c\uc790\uac00 \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc790\uc2e0\ub9cc\uc758 3D \ubaa8\ub378\uc744 \ub9cc\ub4dc\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."})]})}function a(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>d});var i=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function t(e,n){if(null==e)return{};var r,i,s=function(e,n){if(null==e)return{};var r,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=i.createContext({}),d=function(e){var n=i.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},a=i.forwardRef((function(e,n){var r=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,a=t(e,["components","mdxType","originalType","parentName"]),p=d(r),j=s,x=p["".concat(o,".").concat(j)]||p[j]||h[j]||l;return r?i.createElement(x,c(c({ref:n},a),{},{components:r})):i.createElement(x,c({ref:n},a))}));a.displayName="MDXCreateElement"}}]);