"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[2244],{2423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(5893),r=t(3905);const s={slug:"truthy-falsy-concept-and-introduction",title:"Truthy & Falsy \uac1c\ub150 \ubc0f \uc0ac\uc6a9\ubc29\ubc95 \uc18c\uac1c",authors:"andrew",tags:[]},l="Truthy & Falsy \uac1c\ub150 \ubc0f \uc0ac\uc6a9\ubc29\ubc95 \uc18c\uac1c",o={permalink:"/wiki/blog/truthy-falsy-concept-and-introduction",source:"@site/blog/2023-04-04-truthy-falsy-concept-and-introduction.mdx",title:"Truthy & Falsy \uac1c\ub150 \ubc0f \uc0ac\uc6a9\ubc29\ubc95 \uc18c\uac1c",description:"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c Truthy\uc640 Falsy \uac12",date:"2023-04-04T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 4\uc77c",tags:[],readingTime:7.775,hasTruncateMarker:!1,authors:[{name:"Dongmin Yu",title:"Cross Platform Developer Android, iOS, macOS.",url:"https://gravatar.com/donminzzi",imageURL:"https://avatars.githubusercontent.com/u/82999715?v=4",key:"andrew"}],frontMatter:{slug:"truthy-falsy-concept-and-introduction",title:"Truthy & Falsy \uac1c\ub150 \ubc0f \uc0ac\uc6a9\ubc29\ubc95 \uc18c\uac1c",authors:"andrew",tags:[]},unlisted:!1,prevItem:{title:"\uc544\uc774\ud3f0\uc5d0\uc11c \ub9ac\ub205\uc2a4 \uc178 \uc0ac\uc6a9\ud558\uae30",permalink:"/wiki/blog/using-linux-shell-on-the-i-phone"},nextItem:{title:"Turbo Native Modules \xb7 React Native",permalink:"/wiki/blog/turbo-native-modules-react-native"}},i={authorsImageUrls:[void 0]},c=[{value:"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c Truthy\uc640 Falsy \uac12",id:"\ud504\ub85c\uadf8\ub798\ubc0d-\uc5b8\uc5b4\uc5d0\uc11c-truthy\uc640-falsy-\uac12",level:2},{value:"References",id:"references",level:3},{value:"References",id:"references-1",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\ud504\ub85c\uadf8\ub798\ubc0d-\uc5b8\uc5b4\uc5d0\uc11c-truthy\uc640-falsy-\uac12",children:"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c Truthy\uc640 Falsy \uac12"}),"\n",(0,a.jsxs)(n.p,{children:['Truthy\uc640 Falsy \uac12\uc740 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c Boolean \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c true \ub610\ub294 false\ub85c \ud3c9\uac00\ub418\ub294 \uac12\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, 0\uc740 false\ub85c \ud3c9\uac00\ub418\uae30 \ub54c\ubb38\uc5d0 falsy \uac12\uc774\uc9c0\ub9cc \u201c0\u201d\uc740 \uc815\uc758\ub41c \ubb38\uc790\uc5f4\ub85c truthy \uac12\uc785\ub2c8\ub2e4.\nJavaScript\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \uac12\uc774 falsy\ub85c \uc815\uc758\ub418\uc9c0 \uc54a\ub294 \ud55c truthy\uc785\ub2c8\ub2e4. \uc989, false, 0, -0, 0n, "", null, undefined \ubc0f NaN\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \uac12\uc774 truthy\uc785\ub2c8\ub2e4.\nPython\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uac12\ub4e4\uc774 falsy\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4: None, False, 0\uacfc \uac19\uc740 \uc22b\uc790\ub4e4(0.0, 0j), \ube48 \uc2dc\ud000\uc2a4\uc640 \uceec\ub809\uc158([]-\ube48 \ub9ac\uc2a4\ud2b8, ',"-\ube48 \ub515\uc154\ub108\ub9ac, ()-\ube48 \ud29c\ud50c, set()-\ube48 \uc138\ud2b8), ''-\ube48 str, b''-\ube48 bytes \ub4f1.\n\ub2e4\ub978 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub4e4\ub3c4 \ube44\uc2b7\ud55c \ubc29\uc2dd\uc73c\ub85c truthy\uc640 falsy \uac12\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac12\ub4e4\uc740 \ucf54\ub4dc\ub97c \ub354 \uac04\uacb0\ud558\uac8c \ub9cc\ub4dc\ub294 \ub370 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.p,{children:["(1) ",(0,a.jsx)(n.a,{href:"https://www.sitepoint.com/boolean-data-type/",children:"What Is a Boolean Data Type, and What Are Some Uses? \u2014 SitePoint"}),"\n(2) ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Truthy",children:"Truthy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN - Mozilla"}),"\n(3) ",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/questions/39983695/what-is-truthy-and-falsy-how-is-it-different-from-true-and-false",children:"What is Truthy and Falsy? How is it different from True and False?"}),"\n(4) ",(0,a.jsx)(n.a,{href:"https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",children:"Truthy and Falsy Values in Python: A Detailed Introduction"})]}),"\n",(0,a.jsx)(n.p,{children:'\ub2e4\ub978 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub4e4\ub3c4 \ube44\uc2b7\ud55c \ubc29\uc2dd\uc73c\ub85c truthy\uc640 falsy \uac12\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, PHP\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uac12\ub4e4\uc774 falsy\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4: false, 0, 0.0, "", "0", null, array().\nTruthy\uc640 Falsy \uac12\uc740 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub4e4 \uac04\uc758 \ube44\uad50\uc5d0\uc11c \ub110\ub9ac \uc0ac\uc6a9\ub429\ub2c8\ub2e4 (\uc608: PHP vs PERL vs Python vs JS). \uc774\ub7ec\ud55c \uac12\ub4e4\uc740 \ucf54\ub4dc\ub97c \ub354 \uac04\uacb0\ud558\uac8c \ub9cc\ub4dc\ub294 \ub370 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,a.jsx)(n.h3,{id:"references-1",children:"References"}),"\n",(0,a.jsxs)(n.p,{children:["(1) ",(0,a.jsx)(n.a,{href:"https://www.sitepoint.com/boolean-data-type/",children:"What Is a Boolean Data Type, and What Are Some Uses? \u2014 SitePoint"}),"\n(2) ",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/questions/39983695/what-is-truthy-and-falsy-how-is-it-different-from-true-and-false",children:"What is Truthy and Falsy? How is it different from True and False?"}),"\n(3) ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Truthy",children:"Truthy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN - Mozilla"}),"\n(4) ",(0,a.jsx)(n.a,{href:"https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",children:"Truthy and Falsy Values in Python: A Detailed Introduction"})]}),"\n",(0,a.jsx)(n.p,{children:"Java\ub294 C\uc640 \ub2ec\ub9ac \uc22b\uc790 \uc870\uac74\ubb38\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub294 Java\uc5d0\uc11c \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'if (5) {\n\xa0 \xa0 System.out.println("true");\n} else {\n\xa0 \xa0 System.out.println("false");\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\uc774 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958 \uba54\uc2dc\uc9c0\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4:\n",(0,a.jsx)(n.code,{children:"incompatible types: int cannot be converted to boolean"}),"\nJava\uc5d0\uc11c\ub294 boolean \ud0c0\uc785\uc758 \uac12\ub9cc if\ubb38\uc758 \uc870\uac74\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Java\uc5d0\uc11c\ub294 truthy\uc640 falsy \uac12\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nGo \uc5b8\uc5b4\uc5d0\uc11c\ub3c4 Java\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c boolean \ud0c0\uc785\uc758 \uac12\ub9cc if\ubb38\uc758 \uc870\uac74\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Go \uc5b8\uc5b4\uc5d0\uc11c\ub3c4 truthy\uc640 falsy \uac12\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nJava\uc640 Go \uc5b8\uc5b4 \ubaa8\ub450 toBoolean()\uc774\ub77c\ub294 \ub0b4\uc7a5 \uba54\uc18c\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \uc0ac\uc6a9\uc790 \uc815\uc758 \ud074\ub798\uc2a4\uc5d0\uc11c boolean \uac12\uc744 \ubc18\ud658\ud558\ub294 \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4, Java\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'class MyClass {\n\xa0 \xa0 private int value;\n\xa0 \xa0 public MyClass(int value) {\n\xa0 \xa0 \xa0 \xa0 this.value = value;\n\xa0 \xa0 }\n\xa0 \xa0 public boolean toBoolean() {\n\xa0 \xa0 \xa0 \xa0 return value != 0;\n\xa0 \xa0 }\n}\nMyClass myObject = new MyClass(5);\nif (myObject.toBoolean()) {\n\xa0 \xa0 System.out.println("true");\n} else {\n\xa0 \xa0 System.out.println("false");\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:'\uc774 \ucf54\ub4dc\ub294 "true"\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4.\nGo \uc5b8\uc5b4\uc5d0\uc11c\ub3c4 \ube44\uc2b7\ud55c \ubc29\uc2dd\uc73c\ub85c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'type MyClass struct {\n\xa0 \xa0 value int\n}\nfunc (m MyClass) toBoolean() bool {\n\xa0 \xa0 return m.value != 0\n}\nfunc main() {\n\xa0 \xa0 myObject := MyClass{5}\n\xa0 \xa0 if myObject.toBoolean() {\n\xa0 \xa0 \xa0 \xa0 fmt.Println("true")\n\xa0 \xa0 } else {\n\xa0 \xa0 \xa0 \xa0 fmt.Println("false")\n\xa0 \xa0 }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:'\uc774 \ucf54\ub4dc\ub3c4 "true"\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4.'}),"\n",(0,a.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790 \uc815\uc758 \ud074\ub798\uc2a4\uc5d0\uc11c boolean \uac12\uc744 \ubc18\ud658\ud558\ub294 \uba54\uc18c\ub4dc\uc758 \ub3d9\uc791 \ubc29\uc2dd\uc740 \uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud55c\ub300\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c false\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \uac15\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nJava\uc5d0\uc11c \ubaa8\ub4e0 \ud074\ub798\uc2a4\ub294 Object \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4. Object \ud074\ub798\uc2a4\uc5d0\ub294 \uba87 \uac00\uc9c0 \uba54\uc18c\ub4dc\uac00 \uc815\uc758\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc911 \uc77c\ubd80 \uba54\uc18c\ub4dc\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \ud074\ub798\uc2a4\uc5d0\uc11c \uc624\ubc84\ub77c\uc774\ub529\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"equals(Object obj)"}),': \uac1d\uccb4\uac00 \ub2e4\ub978 \uac1d\uccb4\uc640 "\ub3d9\uc77c"\ud55c\uc9c0 \uc5ec\ubd80\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc624\ubc84\ub77c\uc774\ub529\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"hashCode()"}),": \uac1d\uccb4\uc758 \ud574\uc2dc \ucf54\ub4dc \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. equals \uba54\uc18c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub529\ud558\ub294 \uacbd\uc6b0, hashCode \uba54\uc18c\ub4dc\ub3c4 \ud568\uaed8 \uc624\ubc84\ub77c\uc774\ub529\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"toString()"}),": \uac1d\uccb4\ub97c \ubb38\uc790\uc5f4\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc624\ubc84\ub77c\uc774\ub529\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'\ud558\uc9c0\ub9cc, \uc774\ub7ec\ud55c \uba54\uc18c\ub4dc\ub4e4\uc744 \ubc18\ub4dc\uc2dc \uc624\ubc84\ub77c\uc774\ub529\ud574\uc57c \ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\uc18c\ub4dc\ub4e4\uc744 \uc624\ubc84\ub77c\uc774\ub529\ud558\uc9c0 \uc54a\uc73c\uba74 Object \ud074\ub798\uc2a4\uc5d0 \uc815\uc758\ub41c \uae30\ubcf8 \uad6c\ud604\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\nJava\uc5d0\uc11c hashCode() \uba54\uc18c\ub4dc\ub294 \uac1d\uccb4\uc758 \ud574\uc2dc \ucf54\ub4dc \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 equals \uba54\uc18c\ub4dc\uc640 \ud568\uaed8 \uc624\ubc84\ub77c\uc774\ub529\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. equals \uba54\uc18c\ub4dc\uac00 \ub450 \uac1d\uccb4\ub97c "\ub3d9\uc77c"\ud558\ub2e4\uace0 \ud310\ub2e8\ud558\uba74, \ub450 \uac1d\uccb4\uc758 hashCode \uba54\uc18c\ub4dc\ub294 \uac19\uc740 \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4.\n\ub2e4\uc74c\uc740 hashCode \uba54\uc18c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub529\ud558\ub294 \uc608\uc2dc \ucf54\ub4dc\uc785\ub2c8\ub2e4:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class MyClass {\n\xa0 \xa0 private int value;\n\xa0 \xa0 public MyClass(int value) {\n\xa0 \xa0 \xa0 \xa0 this.value = value;\n\xa0 \xa0 }\n\xa0 \xa0 @Override\n\xa0 \xa0 public boolean equals(Object obj) {\n\xa0 \xa0 \xa0 \xa0 if (this == obj) {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 return true;\n\xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 \xa0 \xa0 if (obj == null || getClass() != obj.getClass()) {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 return false;\n\xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 \xa0 \xa0 MyClass other = (MyClass) obj;\n\xa0 \xa0 \xa0 \xa0 return value == other.value;\n\xa0 \xa0 }\n\xa0 \xa0 @Override\n\xa0 \xa0 public int hashCode() {\n\xa0 \xa0 \xa0 \xa0 return value;\n\xa0 \xa0 }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:'\uc774 \ucf54\ub4dc\uc5d0\uc11c MyClass \ud074\ub798\uc2a4\ub294 value \ud544\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. equals \uba54\uc18c\ub4dc\ub294 \ub450 \uac1d\uccb4\uc758 value \ud544\ub4dc\uac00 \uac19\uc740 \uacbd\uc6b0\uc5d0\ub9cc true\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c hashCode \uba54\uc18c\ub4dc\ub3c4 value \ud544\ub4dc\uc758 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc774\ub807\uac8c \ud568\uc73c\ub85c\uc368, equals \uba54\uc18c\ub4dc\uac00 \ub450 \uac1d\uccb4\ub97c "\ub3d9\uc77c"\ud558\ub2e4\uace0 \ud310\ub2e8\ud558\uba74, \ub450 \uac1d\uccb4\uc758 hashCode \uba54\uc18c\ub4dc\ub294 \uac19\uc740 \uac12\uc744 \ubc18\ud658\ud558\uac8c \ub429\ub2c8\ub2e4.'})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(t),y=r,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||s;return t?a.createElement(f,l(l({ref:n},h),{},{components:t})):a.createElement(f,l({ref:n},h))}));h.displayName="MDXCreateElement"}}]);