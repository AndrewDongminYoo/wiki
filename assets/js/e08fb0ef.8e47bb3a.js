"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[3701],{7792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(5893),o=r(3905);const a={slug:"bluetooth-packet-trail",title:"Bluetooth Packet trail",authors:"andrew",tags:[]},i="Bluetooth Packet trail",l={permalink:"/wiki/blog/bluetooth-packet-trail",source:"@site/blog/2023-04-22-bluetooth-packet-trail.mdx",title:"Bluetooth Packet trail",description:"Summary",date:"2023-04-22T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 22\uc77c",tags:[],readingTime:1.375,hasTruncateMarker:!1,authors:[{name:"Dongmin Yu",title:"Cross Platform Developer Android, iOS, macOS.",url:"https://gravatar.com/donminzzi",imageURL:"https://avatars.githubusercontent.com/u/82999715?v=4",key:"andrew"}],frontMatter:{slug:"bluetooth-packet-trail",title:"Bluetooth Packet trail",authors:"andrew",tags:[]},unlisted:!1,prevItem:{title:"CHATGPT-3.5\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4",permalink:"/wiki/blog/persona-gui-source-using-the-api-engine-of-chatgpt-3-5"},nextItem:{title:"\uad6c\uae00 \ud50c\ub808\uc774\uc2a4\ud1a0\uc5b4 \uc548\ub4dc\ub85c\uc774\ub4dc \ubc84\uc804 \uc0c1\ud5a5\uc5d0 \ub300\ud55c \ucd5c\uc18c \ub808\ubca8 \uac00\uc774\ub4dc",permalink:"/wiki/blog/android-minimun-sdk"}},c={authorsImageUrls:[void 0]},u=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2}];function s(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Bluetooth packet trail\uc740 Bluetooth \ud1b5\uc2e0\uc5d0\uc11c \uc804\uc1a1\ub418\ub294 \ub370\uc774\ud130 \ud328\ud0b7\uc758 \uc77c\ub828\uc758 \uc21c\uc11c\ub97c \ub9d0\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud328\ud0b7 \ud2b8\ub808\uc77c\uc740 Bluetooth \uc5f0\uacb0\uc5d0\uc11c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ubb38\uc81c\ub97c \uc9c4\ub2e8\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud328\ud0b7 \ud2b8\ub808\uc77c\uc744 \ubd84\uc11d\ud558\uba74 \ud328\ud0b7\uc774 \uc7ac\uc804\uc1a1\ub418\ub294\uc9c0, \uc9c0\uc5f0\uc774 \uc788\ub294\uc9c0, \ub610\ub294 \uc190\uc2e4\uc774 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"\uc544\ub798\ub294 Python \ucf54\ub4dc \uc608\uc2dc\uc785\ub2c8\ub2e4. Bluetooth \ud328\ud0b7\uc744 \uc218\uc2e0\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 PyBluez \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import bluetooth\n # Bluetooth \uc18c\ucf13 \uc0dd\uc131\nsock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)\nsock.connect(("00:11:22:33:44:55", 1))\xa0 # \uc5f0\uacb0\ud560 Bluetooth \uc7a5\uce58\uc758 MAC \uc8fc\uc18c\uc640 \ud3ec\ud2b8 \uc9c0\uc815\n # \ud328\ud0b7 \uc218\uc2e0 \ubc0f \ucd9c\ub825\nwhile True:\n\xa0 \xa0 data = sock.recv(1024)\n\xa0 \xa0 if not data:\n\xa0 \xa0 \xa0 \xa0 break\n\xa0 \xa0 print("Received: {}".format(data))\n # \uc18c\ucf13 \uc885\ub8cc\nsock.close()\n'})}),"\n",(0,n.jsx)(t.p,{children:"\uc704\uc758 \ucf54\ub4dc\ub294 Bluetooth \uc7a5\uce58\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc218\uc2e0\ud558\uace0, \uc218\uc2e0\ub41c \ub370\uc774\ud130\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. \uc774\ub97c \uc0ac\uc6a9\ud558\uc5ec Bluetooth \ud328\ud0b7\uc758 \ud2b8\ub808\uc77c\uc744 \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function p(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,d=m["".concat(c,".").concat(h)]||m[h]||s[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));p.displayName="MDXCreateElement"}}]);