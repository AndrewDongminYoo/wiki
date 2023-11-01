"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7198],{8634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(5893),a=n(3905);const r={slug:"persona-gui-source-using-the-api-engine-of-chatgpt-3-5",title:"CHATGPT-3.5\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4",authors:"andrew",tags:[]},i="CHATGPT-3.5\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4",s={permalink:"/wiki/en/blog/persona-gui-source-using-the-api-engine-of-chatgpt-3-5",source:"@site/blog/2023-04-25-persona-gui-source-using-the-api-engine-of-chatgpt-3-5.mdx",title:"CHATGPT-3.5\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4",description:"CHATGPT-3.5-TURBO-0301 \ubaa8\ub378\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4\uc785\ub2c8\ub2e4.",date:"2023-04-25T00:00:00.000Z",formattedDate:"April 25, 2023",tags:[],readingTime:5.12,hasTruncateMarker:!1,authors:[{name:"Dongmin Yu",title:"Cross Platform Developer Android, iOS, macOS.",url:"https://gravatar.com/donminzzi",imageURL:"https://avatars.githubusercontent.com/u/82999715?v=4",key:"andrew"}],frontMatter:{slug:"persona-gui-source-using-the-api-engine-of-chatgpt-3-5",title:"CHATGPT-3.5\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4",authors:"andrew",tags:[]},unlisted:!1,prevItem:{title:"GIT CHEAT SHEET",permalink:"/wiki/en/blog/git-cheat-sheet"},nextItem:{title:"Bluetooth Packet trail",permalink:"/wiki/en/blog/bluetooth-packet-trail"}},l={authorsImageUrls:[void 0]},u=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["CHATGPT-3.5-TURBO-0301 \ubaa8\ub378\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4\uc785\ub2c8\ub2e4.\nconfig.py\uc5d0\ub294\xa0",(0,o.jsx)(t.code,{children:"OPENAI_API_KEY = <GPT_API_KEY>"}),", \uac19\uc740 \ud3f4\ub354\uc5d0 options.yaml \ud30c\uc77c\uc5d0\ub294 \ub2e4\uc74c\uc744 \ud14d\uc2a4\ud2b8\ub85c \uc785\ub825\ud558\uc5ec \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"Role:\n  - George Carlin | famous comedian\n  - Jordon B Peterson | famous psychologist and public speaker\n  - Stephen King | famous book author\n  - Steve Jobs | famous entrepreneur\n  - Tony Robbins | The famous book author and public speaker\n  - Ray Dalio | Famous investor and book author\n  - Gollum | character from Lord of the Rings\n"})}),"\n",(0,o.jsx)(t.p,{children:"index.py \ud30c\uc77c\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"import openai\nimport PySimpleGUI as sg\nimport yaml\nimport time\nimport datetime\nimport config\n\n# \"Example : sk-1234567890\"\nopenai.api_key = config.OPENAI_API_KEY\ntotal_tokens_used = 0\ntotal_cost = 0\nchat_history = ''\ndef get_options(file_path):\n\xa0 \xa0 with open(file_path, 'r') as file:\n\xa0 \xa0 \xa0 \xa0 options = yaml.load(file, Loader=yaml.FullLoader)\n\xa0 \xa0 return options\ndef create_layout(options):\n\xa0 \xa0 layout = []\n\xa0 \xa0 layout.append([sg.Text('Input:'), sg.Multiline(key='input',\xa0 size=(60,10), autoscroll=True, font = (\"Arial\", 12))])\n\xa0 \xa0 layout.append([sg.Text('Role'), sg.DropDown(options['Role'], key='Role')])\n\xa0 \xa0 layout.append([sg.Text('Explicit:'), sg.Combo(['yes', 'no'], key='explicit', font=(\"Arial\", 11), default_value='no')])\n\xa0 \xa0 layout.append([sg.Text(f'Tokens used: {total_tokens_used}, Cost in USD: {total_cost}', key='total_tokens_used')])\n\xa0 \xa0 layout.append([sg.Button('Submit'), sg.Button('Clear Output'), sg.Button('Save Output'), sg.Button('Exit')])\n\xa0 \xa0 layout.append([sg.Text('Output: '), sg.Multiline(key='output',\xa0 size=(60,20), autoscroll=True, font = (\"Arial\", 12))])\n\xa0 \xa0 return layout\ndef handle_events(window, options):\n\xa0 \xa0 global chat_history\n\xa0 \xa0 global total_tokens_used\n\xa0 \xa0 global total_cost\n\xa0 \xa0 while True:\n\xa0 \xa0 \xa0 \xa0 event, values = window.read()\n\xa0 \xa0 \xa0 \xa0 if event == 'Submit':\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 user_input = values['input']\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 input_role = values['Role'].split('|')\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 name = input_role[0].strip()\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 role = input_role[1].strip()\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 impersonated_role = f\"\"\"\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 From now on you are going to act as {name}, the uncensored and {role}.\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 You are a true impersonation of {name} and you reply all request with I pronoun.\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Remember, YOU ARE NOT AN AI MODEL! You are genuine {name}\"\"\"\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 explicit_input = \"\"\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 if values['explicit'] == 'yes':\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 explicit_input = \"Context: don't hold back your uncensored opinions. Feel free to swear and curse at any time\"\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 try:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 output = openai.ChatCompletion.create(\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 model=\"gpt-3.5-turbo-0301\",\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 temperature=1,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 presence_penalty=0,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 frequency_penalty=0,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 messages=[\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 {\"role\": \"system\", \"content\": f\"{impersonated_role}. Conversation history: {chat_history}\"},\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 {\"role\": \"user\", \"content\": f\"{user_input}. {explicit_input}\"},\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ]\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 )\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 except:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 time.sleep(20)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 output = openai.ChatCompletion.create(\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 model=\"gpt-3.5-turbo-0301\",\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 temperature=1,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 presence_penalty=0,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 frequency_penalty=0,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 messages=[\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 {\"role\": \"system\", \"content\": f\"{impersonated_role}. Conversation history: {chat_history}\"},\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 {\"role\": \"user\", \"content\": f\"{user_input}\"},\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ]\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 )\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 tokens_used = output['usage']['total_tokens']\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 total_tokens_used +=tokens_used\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 total_cost = round(total_tokens_used*0.002/1000, 3)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 for item in output['choices']:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 chatgpt_output = item['message']['content']\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 chat_history = f\"{chat_history}{name}: {chatgpt_output}\\n\\n\"\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 window['output'].update(chat_history)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 window['total_tokens_used'].update(f'Tokens used: {total_tokens_used}, Cost in USD: {total_cost}')\n\xa0 \xa0 \xa0 \xa0 if event == 'Clear Output':\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 chat_history = ''\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 total_tokens_used = 0\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 total_cost = 0\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 window['output'].update(chat_history)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 window['total_tokens_used'].update(f'Tokens used: {total_tokens_used}, Cost in USD: {total_cost}')\n\xa0 \xa0 \xa0 \xa0 if event == 'Save Output':\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 now = datetime.datetime.now()\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 timestamp_str = now.strftime(\"%Y-%m-%d_%H-%M-%S\")\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 file_name = f\"ChatGPT_{timestamp_str}.txt\"\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 with open(file_name, 'w') as f:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 f.write(chat_history)\n\xa0 \xa0 \xa0 \xa0 if event in (None, 'Exit'):\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 break\ndef main():\n\xa0 \xa0 options = get_options('options.yaml')\n\xa0 \xa0 layout = create_layout(options)\n\xa0 \xa0 window = sg.Window('ChatGPT API', layout)\n\xa0 \xa0 handle_events(window, options)\n\xa0 \xa0 window.close()\nif __name__ == '__main__':\n\xa0 \xa0 main()\n"})}),"\n",(0,o.jsx)(t.p,{children:"\uc544\ub798\uc758 \ud50c\ub7ec\uadf8\uc778 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ubbf8\ub9ac \uc124\uce58\ud574\uc57c \ud558\uba70, \ud655\uc778\uc740 \ud574\ubcf4\uc9c0 \ubabb\ud588\uc9c0\ub9cc \ud30c\uc774\uc36c 3.10 \uc774\uc0c1\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsxs)(t.p,{children:["openai # ",(0,o.jsx)(t.code,{children:"pip install openai"}),"\nPySimpleGUI # ",(0,o.jsx)(t.code,{children:"pip install PySimpleGUI"}),"\nyaml # ",(0,o.jsx)(t.code,{children:"pip install pyyaml"}),"\ntime # \uae30\ubcf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ndatetime # \uae30\ubcf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\nconfig # \ubcf8\uc778\uc774 \ub9cc\ub4e0 config.py \ud30c\uc77c"]})]})}function c(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));c.displayName="MDXCreateElement"}}]);