"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[6067],{4369:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=r(5893),i=r(3905);const l={slug:"git-cheat-sheet",title:"GIT CHEAT SHEET",authors:"andrew",tags:["version control","git"]},c="GIT CHEAT SHEET",a={permalink:"/wiki/en/blog/git-cheat-sheet",source:"@site/blog/2023-04-25-git-cheat-sheet.mdx",title:"GIT CHEAT SHEET",description:"VERSION CONTROL TIPS",date:"2023-04-25T00:00:00.000Z",formattedDate:"April 25, 2023",tags:[{label:"version control",permalink:"/wiki/en/blog/tags/version-control"},{label:"git",permalink:"/wiki/en/blog/tags/git"}],readingTime:10.69,hasTruncateMarker:!1,authors:[{name:"Dongmin Yu",title:"Cross Platform Developer Android, iOS, macOS.",url:"https://gravatar.com/donminzzi",imageURL:"https://avatars.githubusercontent.com/u/82999715?v=4",key:"andrew"}],frontMatter:{slug:"git-cheat-sheet",title:"GIT CHEAT SHEET",authors:"andrew",tags:["version control","git"]},unlisted:!1,prevItem:{title:"MacOS Notes \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc775\uc2a4\ud3ec\ud2b8",permalink:"/wiki/en/blog/mac-os-application-notes-export"},nextItem:{title:"CHATGPT-3.5\uc758 API \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud55c \ud398\ub974\uc18c\ub098 GUI \uc18c\uc2a4",permalink:"/wiki/en/blog/persona-gui-source-using-the-api-engine-of-chatgpt-3-5"}},t={authorsImageUrls:[void 0]},d=[{value:"VERSION CONTROL TIPS",id:"version-control-tips",level:2},{value:"COMMIT RELATED CHANGES",id:"commit-related-changes",level:3},{value:"COMMIT OFTEN",id:"commit-often",level:3},{value:"DO NOT COMMIT HALF-DONE WORK",id:"do-not-commit-half-done-work",level:3},{value:"BEST PRACTICES",id:"best-practices",level:2},{value:"TEST CODE BEFORE YOU COMMIT",id:"test-code-before-you-commit",level:3},{value:"WRITE GOOD COMMIT MESSAGES",id:"write-good-commit-messages",level:3},{value:"VERSION CONTROL IS NOT A BACKUP SYSTEM",id:"version-control-is-not-a-backup-system",level:3},{value:"USE BRANCHES",id:"use-branches",level:3},{value:"AGREE ON A WORKFLOW",id:"agree-on-a-workflow",level:3},{value:"BASIC COMMANDS",id:"basic-commands",level:2},{value:"CREATE",id:"create",level:3},{value:"LOCAL CHANGES",id:"local-changes",level:3},{value:"COMMIT HISTORY",id:"commit-history",level:3},{value:"BRANCHES &amp; TAGS",id:"branches--tags",level:3},{value:"UPDATE &amp; PUBLISH",id:"update--publish",level:3},{value:"MERGE &amp; REBASE",id:"merge--rebase",level:3},{value:"UNDO",id:"undo",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"version-control-tips",children:"VERSION CONTROL TIPS"}),"\n",(0,s.jsx)(n.h3,{id:"commit-related-changes",children:"COMMIT RELATED CHANGES"}),"\n",(0,s.jsx)(n.p,{children:"\ucee4\ubc0b\uc740 \uad00\ub828 \ubcc0\uacbd\uc0ac\ud56d\uc5d0 \ub300\ud55c \ub798\ud37c\uc5ec\uc57c \ud55c\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc11c\ub85c \ub2e4\ub978 \ub450 \uac00\uc9c0 \ubc84\uadf8\ub97c \uc218\uc815\ud558\ub824\uba74 \ub450 \uac1c\uc758 \ucee4\ubc0b\uc744 \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4. \uc791\uc740 \ucee4\ubc0b\uc744 \uc0ac\uc6a9\ud558\uba74 \ub2e4\ub978 \uac1c\ubc1c\uc790\uac00 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \uc27d\uac8c \uc774\ud574\ud558\uace0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ub864\ubc31\ud560 \uc218 \uc788\ub2e4. \uc2a4\ud14c\uc774\uc9d5 \uc601\uc5ed\uacfc \ud30c\uc77c\uc758 \uc77c\ubd80\ub9cc \uc2a4\ud14c\uc774\uc9d5\ud558\ub294 \uae30\ub2a5\uacfc \uac19\uc740 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uba74 Git\uc744 \ud1b5\ud574 \ub9e4\uc6b0 \uc138\ubd84\ud654\ub41c \ucee4\ubc0b\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"commit-often",children:"COMMIT OFTEN"}),"\n",(0,s.jsx)(n.p,{children:"\ucee4\ubc0b\uc744 \uc790\uc8fc \ud558\uba74 \ucee4\ubc0b\uc744 \uc791\uac8c \uc720\uc9c0\ud560 \uc218 \uc788\uace0, \uad00\ub828 \ubcc0\uacbd \uc0ac\ud56d\ub9cc \ucee4\ubc0b\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub41c\ub2e4. \ub610\ud55c \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \ucf54\ub4dc\ub97c \ub354 \uc790\uc8fc \uacf5\uc720\ud560 \uc218 \uc788\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc815\uae30\uc801\uc73c\ub85c \ubcc0\uacbd \uc0ac\ud56d\uc744 \ud1b5\ud569\ud558\uace0 \ubcd1\ud569 \ucda9\ub3cc\uc744 \ud53c\ud558\uae30\uac00 \ub354 \uc26c\uc6cc\uc9c4\ub2e4. \ubc18\ub300\ub85c \ud070 \ucee4\ubc0b\uc744 \uac70\uc758 \ud558\uc9c0 \uc54a\uace0 \uacf5\uc720\ub97c \uac70\uc758 \ud558\uc9c0 \uc54a\uc73c\uba74 \ucda9\ub3cc\uc744 \ud574\uacb0\ud558\uae30\uac00 \uc5b4\ub824\uc6cc\uc9c4\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"do-not-commit-half-done-work",children:"DO NOT COMMIT HALF-DONE WORK"}),"\n",(0,s.jsx)(n.p,{children:"\ucf54\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc744 \ub54c\ub9cc \ucee4\ubc0b\ud574\uc57c \ud55c\ub2e4. \uadf8\ub807\ub2e4\uace0 \ud574\uc11c \ucee4\ubc0b\ud558\uae30 \uc804\uc5d0 \uc804\uccb4 \ub300\uaddc\ubaa8 \uae30\ub2a5\uc744 \uc644\ub8cc\ud574\uc57c \ud55c\ub2e4\ub294 \ub73b\uc740 \uc544\ub2c8\ub2e4. \uc624\ud788\ub824 \uae30\ub2a5 \uad6c\ud604\uc744 \ub17c\ub9ac\uc801\uc778 \ub369\uc5b4\ub9ac\ub85c \ub098\ub204\uace0 '\uc77c\ucc0d \uadf8\ub9ac\uace0 \uc790\uc8fc' \ucee4\ubc0b\ud558\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9d0\uc544\uc57c \ud55c\ub2e4. \ud558\uc9c0\ub9cc \ud558\ub8e8 \uc77c\uacfc\ub97c \ub9c8\uce58\uace0 \ud1f4\uadfc\ud558\uae30 \uc804\uc5d0 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \ubb34\uc5b8\uac00\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ucee4\ubc0b\ud558\uc9c0 \ub9d0 \uac83."}),"\n",(0,s.jsx)(n.admonition,{title:"Git Stash",type:"danger",children:(0,s.jsx)(n.p,{children:'\ube0c\ub79c\uce58\ub97c \uccb4\ud06c\uc544\uc6c3\ud558\uac70\ub098 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 \uae68\ub057\ud55c \uc791\uc5c5 \ubcf5\uc0ac\ubcf8\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uc774\uc720\ub9cc\uc73c\ub85c \ucee4\ubc0b\ud558\uace0 \uc2f6\uc740 \uc720\ud639\uc744 \ubc1b\ub294\ub2e4\uba74, \ub300\uc2e0 Git\uc758 "Stash" \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.'})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"BEST PRACTICES"}),"\n",(0,s.jsx)(n.h3,{id:"test-code-before-you-commit",children:"TEST CODE BEFORE YOU COMMIT"}),"\n",(0,s.jsx)(n.p,{children:'\uc644\ub8cc\ub418\uc5c8\ub2e4\uace0 "\uc0dd\uac01\ub418\ub294" \ub0b4\uc6a9\uc744 \ucee4\ubc0b\ud558\ub824\ub294 \uc720\ud639\uc744 \ubfcc\ub9ac\uccd0\uc57c \ud55c\ub2e4. \uc815\ub9d0 \uc644\ub8cc\ub418\uc5c8\ub294\uc9c0, \ubd80\uc791\uc6a9\uc740 \uc5c6\ub294\uc9c0 \ucca0\uc800\ud788 \ud14c\uc2a4\ud2b8\ud55c\ub2e4(\uac00\ub2a5\ud55c \ud55c). \ub85c\uceec \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 WIP \ucee4\ubc0b\uc744 \ud558\ub294 \uac83\uc740 \uc2a4\uc2a4\ub85c\ub97c \uc6a9\uc11c\ud558\ub294 \uac83\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud558\uc9c0\ub9cc, \ub2e4\ub978 \uc0ac\ub78c\uacfc \ucf54\ub4dc\ub97c \ud478\uc2dc/\uacf5\uc720\ud560 \ub54c\ub294 \ucf54\ub4dc \ud14c\uc2a4\ud2b8\ub97c \ud558\ub294 \uac83\uc774 \ud6e8\uc52c \ub354 \uc911\uc694\ud55c\ub2e4.'}),"\n",(0,s.jsx)(n.h3,{id:"write-good-commit-messages",children:"WRITE GOOD COMMIT MESSAGES"}),"\n",(0,s.jsx)(n.p,{children:"\ubcc0\uacbd \uc0ac\ud56d\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc694\uc57d\uc73c\ub85c \uba54\uc2dc\uc9c0\ub97c \uc2dc\uc791\ud55c\ub2e4(\uac00\uc774\ub4dc\ub77c\uc778\uc740 50\uc790 \uc774\ub0b4). \ube48 \uc904\uc744 \ud3ec\ud568\ud558\uc5ec \ub2e4\uc74c \ubcf8\ubb38\uacfc \uad6c\ubd84\ud55c\ub2e4. \uba54\uc2dc\uc9c0 \ubcf8\ubb38\uc5d0\ub294 \ub2e4\uc74c \uc9c8\ubb38\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub2f5\ubcc0\uc774 \ud3ec\ud568\ub418\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ubcc0\uacbd\uc758 \ub3d9\uae30\ub294 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,s.jsx)(n.li,{children:"\uc774\uc804 \uad6c\ud604\uacfc \uc5b4\ub5bb\uac8c \ub2e4\ub978\uac00\uc694?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uba85\ub839\ud615 \ud604\uc7ac \uc2dc\uc81c\ub97c \uc0ac\uc6a9\ud558\uc5ec git merge\uc640 \uac19\uc740 \uba85\ub839\uc5d0\uc11c \uc0dd\uc131\ub41c \uba54\uc2dc\uc9c0\uc640 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"version-control-is-not-a-backup-system",children:"VERSION CONTROL IS NOT A BACKUP SYSTEM"}),"\n",(0,s.jsx)(n.p,{children:'\uc6d0\uaca9 \uc11c\ubc84\uc5d0 \ud30c\uc77c\uc744 \ubc31\uc5c5\ud558\ub294 \uac83\uc740 \ubc84\uc804 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc758 \uc88b\uc740 \uce21\uba74\uc774\ub2e4. \ud558\uc9c0\ub9cc VCS\ub97c \ubc31\uc5c5 \uc2dc\uc2a4\ud15c\ucc98\ub7fc \uc0ac\uc6a9\ud574\uc11c\ub294 \uc548 \ub41c\ub2e4. \ubc84\uc804 \uad00\ub9ac\ub97c \ud560 \ub54c\ub294 \uc758\ubbf8\ub860\uc801\uc73c\ub85c \ucee4\ubc0b\ud558\ub294 \ub370 \uc8fc\uc758\ub97c \uae30\uc6b8\uc5ec\uc57c \ud558\uba70("\uad00\ub828 \ubcc0\uacbd \uc0ac\ud56d" \ucc38\uc870), \ud30c\uc77c\uc744 \ubb34\uc791\uc815 \ubc00\uc5b4\ub123\uc5b4\uc11c\ub294 \uc548 \ub41c\ub2e4.'}),"\n",(0,s.jsx)(n.h3,{id:"use-branches",children:"USE BRANCHES"}),"\n",(0,s.jsx)(n.p,{children:"\ube0c\ub79c\uce58\ub294 Git\uc758 \uac00\uc7a5 \uac15\ub825\ud55c \uae30\ub2a5 \uc911 \ud558\ub098\uc774\uba70, \uc774\ub294 \uc6b0\uc5f0\uc774 \uc544\ub2c8\ub77c \ucc98\uc74c\ubd80\ud130 \ube60\ub974\uace0 \uc26c\uc6b4 \ube0c\ub79c\uce58 \uc0dd\uc131/\uc0ad\uc81c/\ubcc0\uacbd\uc774 \ud575\uc2ec \uc694\uad6c \uc0ac\ud56d\uc774\uc5c8\uae30 \ub54c\ubb38\uc774\ub2e4. \ube0c\ub79c\uce58\ub294 \uc11c\ub85c \ub2e4\ub978 \uc904\uae30\ub4e4\uc774 \uc11e\uc774\uc9c0 \uc54a\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uc644\ubcbd\ud55c \ub3c4\uad6c\uc774\uba70 \ubd84\uc0b0\ud615 \ubc84\uc804\uad00\ub9ac \uac1c\ubc1c\uc758 \ud575\uc2ec\uc774\ub2e4. \uc0c8\ub85c\uc6b4 \uae30\ub2a5, \ubc84\uadf8 \uc218\uc815, \uc544\uc774\ub514\uc5b4 \ub4f1 \uac1c\ubc1c \uc6cc\ud06c\ud50c\ub85c\uc5d0\uc11c \ube0c\ub79c\uce58\ub97c \uad11\ubc94\uc704\ud558\uac8c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"agree-on-a-workflow",children:"AGREE ON A WORKFLOW"}),"\n",(0,s.jsx)(n.p,{children:"Git\uc744 \uc0ac\uc6a9\ud558\uba74 \uc7a5\uae30 \uc2e4\ud589 \ube0c\ub79c\uce58, \ud1a0\ud53d \ube0c\ub79c\uce58, \ubcd1\ud569 \ub610\ub294 \ub9ac\ubca0\uc774\uc2a4, \uae43 \ud50c\ub85c\uc6b0 \ub4f1 \ub2e4\uc591\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc911\uc5d0\uc11c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4. \uc5b4\ub5a4 \uac83\uc744 \uc120\ud0dd\ud560\uc9c0\ub294 \ud504\ub85c\uc81d\ud2b8, \uc804\ubc18\uc801\uc778 \uac1c\ubc1c \ubc0f \ubc30\ud3ec \uc6cc\ud06c\ud50c\ub85c, \uadf8\ub9ac\uace0 \uac00\uc7a5 \uc911\uc694\ud55c \uac83\uc740 \uc5ec\ub7ec\ubd84\uacfc \ud300\uc6d0\ub4e4\uc758 \uac1c\uc778\uc801 \uc120\ud638\ub3c4\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\ub2e4. \uc5b4\ub5a4 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud558\ub4e0 \ubaa8\ub450\uac00 \ub530\ub97c \uc218 \uc788\ub294 \uacf5\ud1b5 \uc6cc\ud06c\ud50c\ub85c\uc5d0 \ub3d9\uc758\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"basic-commands",children:"BASIC COMMANDS"}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"CREATE"}),"\n",(0,s.jsx)(n.p,{children:"\uae30\uc874 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone ssh://AndrewDongminYoo@github.com/repo.git\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc0c8 \ub85c\uceec \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ub9cc\ub4e0\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git init\n"})}),"\n",(0,s.jsx)(n.h3,{id:"local-changes",children:"LOCAL CHANGES"}),"\n",(0,s.jsx)(n.p,{children:"\uc791\uc5c5 \ub514\ub809\ud130\ub9ac\uc758 \ubcc0\uacbd\ub41c \ud30c\uc77c."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git status\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ucd94\uc801\ub41c \ud30c\uc77c\uc5d0 \ub300\ud55c \ubcc0\uacbd \uc0ac\ud56d."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git diff\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud604\uc7ac \ubaa8\ub4e0 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ub2e4\uc74c \ucee4\ubc0b\uc5d0 \ucd94\uac00\ud55c\ub2e4. (glob \ud328\ud134\uc744 \uc0ac\uc6a9\ud574 \ud2b9\uc815 \ud30c\uc77c\ub9cc \ucd94\uac00\ud560 \uc218 \uc788\ub2e4.)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git add .\ngit add **/*.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"<\ud30c\uc77c>\uc758 \uc77c\ubd80 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ub2e4\uc74c \ucee4\ubc0b\uc5d0 \ucd94\uac00\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git add -p <file>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ucd94\uc801\ub41c \ud30c\uc77c\uc758 \ubaa8\ub4e0 \ub85c\uceec \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ucee4\ubc0b\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git commit -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc774\uc804 \ub2e8\uacc4\uc758 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ucee4\ubc0b\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git commit\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ub9c8\uc9c0\ub9c9 \ucee4\ubc0b\uc744 \ubcc0\uacbd\ud55c\ub2e4. (\ub36e\uc5b4\uc4f4\ub2e4. \ubcf4\ud1b5 \ucee4\ubc0b \uba54\uc138\uc9c0 \ub4f1\uc758 \uc791\uc740 \uc2e4\uc218\ub97c \ubcf4\uc815\ud558\uae30 \uc704\ud568)"}),"\n",(0,s.jsx)(n.p,{children:"\ub9ac\ubaa8\ud2b8\uc5d0 \uac8c\uc2dc\ub41c \ucee4\ubc0b\uc740 \uc218\uc815\ud558\uc9c0 \uc54a\uae30!! (\ubcf4\uc548\uc801\uc778 \uc911\uc694\ud55c \uc774\uc288\ub77c\uba74 \ud300\uc5d0 \ubcf4\uace0\ud574\uc57c \ud55c\ub2e4. \ud63c\ub780\uc744 \uc57c\uae30\ud560 \uc218 \uc788\ub2e4.)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git commit --amend\n"})}),"\n",(0,s.jsx)(n.h3,{id:"commit-history",children:"COMMIT HISTORY"}),"\n",(0,s.jsx)(n.p,{children:"\ucd5c\uc2e0 \ucee4\ubc0b\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec \ubaa8\ub4e0 \ucee4\ubc0b\uc744 \ud45c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git log\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud2b9\uc815 \ud30c\uc77c\uc5d0 \ub300\ud55c \uc2dc\uac04 \uacbd\uacfc\uc5d0 \ub530\ub978 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ud45c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git log -p <file>\n"})}),"\n",(0,s.jsx)(n.p,{children:"<\ud30c\uc77c>\uc5d0\uc11c \ub204\uac00 \uc5b8\uc81c \ubb34\uc5c7\uc744 \ubcc0\uacbd\ud588\ub294\uc9c0 \ubcf4\uc5ec\uc900\ub2e4. (\ud300 \ubb38\ud654\uc5d0\uc11c \uc9c0\uc591\ud558\ub294 \uacbd\uc6b0\ub3c4 \ub9ce\ub2e4.)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git blame <file>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"branches--tags",children:"BRANCHES & TAGS"}),"\n",(0,s.jsx)(n.p,{children:"\ubaa8\ub4e0 \uae30\uc874 \ube0c\ub79c\uce58\ub97c \ub098\uc5f4\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git branch -av\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HEAD"})," \ube0c\ub79c\uce58 \uc804\ud658."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git checkout <branch>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud604\uc7ac ",(0,s.jsx)(n.code,{children:"HEAD"}),"\ub97c \uae30\uc900\uc73c\ub85c \uc0c8 \ube0c\ub79c\uce58\ub97c \ub9cc\ub4e0\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git branch <new-branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc6d0\uaca9 \ube0c\ub79c\uce58\ub97c \uae30\ubc18\uc73c\ub85c \uc0c8 \ucd94\uc801 \ube0c\ub79c\uce58\ub97c \ub9cc\ub4e0\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git checkout --track <remote/branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ub85c\uceec \ube0c\ub79c\uce58\ub97c \uc0ad\uc81c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git branch -d <branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud604\uc7ac \ucee4\ubc0b\uc744 \ud0dc\uadf8\ub85c \ud45c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git tag <tag-name>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update--publish",children:"UPDATE & PUBLISH"}),"\n",(0,s.jsx)(n.p,{children:"\ud604\uc7ac \uad6c\uc131\ub41c \ubaa8\ub4e0 \ub9ac\ubaa8\ud2b8\ub97c \ub098\uc5f4\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git remote -v\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ub9ac\ubaa8\ud2b8\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git remote show <remote>\n"})}),"\n",(0,s.jsx)(n.p,{children:"remote\ub77c\ub294 \uc774\ub984\uc758 \uc0c8 \uc6d0\uaca9 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ucd94\uac00\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git remote add <shortname> <url>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["remote\uc5d0\uc11c \ubaa8\ub4e0 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub418 ",(0,s.jsx)(n.code,{children:"HEAD"}),"\uc5d0 \ud1b5\ud569\ud558\uc9c0 \uc54a\ub294\ub2e4. (\ubcc0\uacbd \uc0ac\ud56d\ub9cc \uac00\uc838\uc628\ub2e4.)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git fetch <remote>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ubcc0\uacbd \ub0b4\uc6a9\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \ube0c\ub79c\uce58\uc758 ",(0,s.jsx)(n.code,{children:"HEAD"}),"\uc5d0 \uc9c1\uc811 \ubcd1\ud569/\ud1b5\ud569\ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git pull <remote> <branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc6d0\uaca9\uc5d0 \ub85c\uceec \ubcc0\uacbd \ub0b4\uc6a9\uc744 \uac8c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git push <remote> <branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ub9ac\ubaa8\ud2b8\uc5d0\uc11c \ube0c\ub79c\uce58\ub97c \uc0ad\uc81c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git branch -dr <remote/branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud0dc\uadf8\ub97c \uac8c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git push --tags\n"})}),"\n",(0,s.jsx)(n.h3,{id:"merge--rebase",children:"MERGE & REBASE"}),"\n",(0,s.jsxs)(n.p,{children:["branch\ub97c \ud604\uc7ac ",(0,s.jsx)(n.code,{children:"HEAD"}),"\uc5d0 \ubcd1\ud569\ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git merge <branch>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud604\uc7ac ",(0,s.jsx)(n.code,{children:"HEAD"}),"\ub97c <branch>\ub85c \ub9ac\ubca0\uc774\uc2a4\ud55c\ub2e4. \ud37c\ube14\ub9ac\uc2dc\ub41c \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ub9ac\ubca0\uc774\uc2a4\ud558\uc9c0 \ud558\uba74 \uc548\ub41c\ub2e4!!!"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git rebase <branch>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ub9ac\ubca0\uc774\uc2a4 \uc911\ub2e8."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git rebase --abort\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ucda9\ub3cc\uc744 \ud574\uacb0\ud55c \ud6c4 \ub9ac\ubca0\uc774\uc2a4 \uc791\uc5c5\uc744 \uacc4\uc18d\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git rebase --continue\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uad6c\uc131\ub41c \ubcd1\ud569 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucda9\ub3cc\uc744 \ud574\uacb0\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git mergetool\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud3b8\uc9d1\uae30\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc218\ub3d9\uc73c\ub85c \ucda9\ub3cc\uc744 \ud574\uacb0\ud558\uace0 (\ud574\uacb0 \ud6c4) \ud30c\uc77c\uc744 \ud574\uacb0\ub41c \uac83\uc73c\ub85c \ud45c\uc2dc\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git add <resolved-file>\ngit rm <resolved-file>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"undo",children:"UNDO"}),"\n",(0,s.jsx)(n.p,{children:"\uc791\uc5c5 \ub514\ub809\ud130\ub9ac\uc758 \ubaa8\ub4e0 \ub85c\uceec \ubcc0\uacbd \ub0b4\uc6a9\uc744 \uc0ad\uc81c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git reset --hard HEAD\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud2b9\uc815 \ud30c\uc77c\uc758 \ub85c\uceec \ubcc0\uacbd \ub0b4\uc6a9\uc744 \uc0ad\uc81c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git checkout HEAD <file>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ucee4\ubc0b\uc744 \ub418\ub3cc\ub9ac\uae30(\ubc18\ub300\ub418\ub294 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc788\ub294 \uc0c8 \ucee4\ubc0b\uc744 \uc0dd\uc131\ud558\uc5ec)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git revert <commit>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\uc804 \ucee4\ubc0b\uc5d0 \ub300\ud55c ",(0,s.jsx)(n.code,{children:"HEAD"})," \ud3ec\uc778\ud130\ub97c \uc7ac\uc124\uc815\ud558\uace0 ...\uadf8 \uc774\ud6c4\uc758 \ubaa8\ub4e0 \ubcc0\uacbd\uc0ac\ud56d\uc744 \uc0ad\uc81c\ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git reset --hard <commit>\n"})}),"\n",(0,s.jsx)(n.p,{children:"...\uadf8\ub9ac\uace0 \ubaa8\ub4e0 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc2a4\ud14c\uc774\uc9d5\ub418\uc9c0 \uc54a\uc740 \ubcc0\uacbd \uc0ac\ud56d\uc73c\ub85c \ubcf4\uc874\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git reset <commit>\n"})}),"\n",(0,s.jsx)(n.p,{children:"...\uadf8\ub9ac\uace0 \ucee4\ubc0b\ub418\uc9c0 \uc54a\uc740 \ub85c\uceec \ubcc0\uacbd \uc0ac\ud56d\uc744 \ubcf4\uc874\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git reset --keep <commit>\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>d});var s=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,s,i=function(e,n){if(null==e)return{};var r,s,i={},l=Object.keys(e);for(s=0;s<l.length;s++)r=l[s],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var t=s.createContext({}),d=function(e){var n=s.useContext(t),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},o=s.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,t=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),g=d(r),j=i,p=g["".concat(t,".").concat(j)]||g[j]||h[j]||l;return r?s.createElement(p,c(c({ref:n},o),{},{components:r})):s.createElement(p,c({ref:n},o))}));o.displayName="MDXCreateElement"}}]);