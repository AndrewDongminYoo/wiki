"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[8610],{9703:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var o=t(5999),s=t(2244),a=t(5893);function c(e){const{metadata:n}=e,{previousPage:t,nextPage:c}=n;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,a.jsx)(s.Z,{permalink:t,title:(0,a.jsx)(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),c&&(0,a.jsx)(s.Z,{permalink:c,title:(0,a.jsx)(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var o=t(9460),s=t(390),a=t(5893);function c(e){let{items:n,component:t=s.Z}=e;return(0,a.jsx)(a.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,a.jsx)(o.n,{content:n,children:(0,a.jsx)(t,{children:(0,a.jsx)(n,{})})},n.metadata.permalink)}))})}},1714:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});t(7294);var o=t(6010),s=t(5999),a=t(8824),c=t(833),l=t(5281),i=t(9960),r=t(1460),d=t(9703),u=t(197),p=t(9985),g=t(2212),m=t(2503),h=t(5893);function b(e){const n=function(){const{selectMessage:e}=(0,a.c)();return n=>e(n,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:n}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function x(e){let{tag:n}=e;const t=b(n);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.d,{title:t}),(0,h.jsx)(u.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:n,items:t,sidebar:o,listMetadata:a}=e;const c=b(n);return(0,h.jsxs)(r.Z,{sidebar:o,children:[n.unlisted&&(0,h.jsx)(g.Z,{}),(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(m.Z,{as:"h1",children:c}),(0,h.jsx)(i.Z,{href:n.allTagsPath,children:(0,h.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,h.jsx)(p.Z,{items:t}),(0,h.jsx)(d.Z,{metadata:a})]})}function k(e){return(0,h.jsxs)(c.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,h.jsx)(x,{...e}),(0,h.jsx)(j,{...e})]})}},2212:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var o=t(6010),s=t(5999),a=t(5742),c=t(5893);function l(){return(0,c.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,c.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,c.jsx)(a.Z,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function p(e){let{className:n}=e;return(0,c.jsx)(u.Z,{type:"caution",title:(0,c.jsx)(l,{}),className:(0,o.Z)(n,d.k.common.unlistedBanner),children:(0,c.jsx)(i,{})})}function g(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{}),(0,c.jsx)(p,{...e})]})}},3690:(e,n,t)=>{t.d(n,{Z:()=>v});var o=t(7294),s=t(2389),a=t(6010),c=t(6412),l=t(5281),i=t(7016);const r={codeBlockContainer:"codeBlockContainer_APcc"};var d=t(5893);function u(e){let{as:n,...t}=e;const o=(0,c.p)(),s=(0,i.QC)(o);return(0,d.jsx)(n,{...t,style:s,className:(0,a.Z)(t.className,r.codeBlockContainer,l.k.common.codeBlock)})}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function g(e){let{children:n,className:t}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,a.Z)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,d.jsx)("code",{className:p.codeBlockLines,children:n})})}var m=t(6668),h=t(5448),b=t(7087);const x={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function j(e){let{line:n,classNames:t,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const l=s({line:n,className:(0,a.Z)(t,o&&x.codeLine)}),i=n.map(((e,n)=>(0,d.jsx)("span",{...c({token:e,key:n})},n)));return(0,d.jsxs)("span",{...l,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:x.codeLineNumber}),(0,d.jsx)("span",{className:x.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var k=t(195),B=t(5999),N=t(345),f=t(7666);const y={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){let{code:n,className:t}=e;const[s,c]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,k.Z)(n),c(!0),l.current=window.setTimeout((()=>{c(!1)}),1e3)}),[n]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,B.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,B.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,B.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",t,y.copyButton,s&&y.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:y.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(N.Z,{className:y.copyButtonIcon}),(0,d.jsx)(f.Z,{className:y.copyButtonSuccessIcon})]})})}var Z=t(670);const w={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function L(e){let{className:n,onClick:t,isEnabled:o}=e;const s=(0,B.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,a.Z)("clean-btn",n,o&&w.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(Z.Z,{className:w.wordWrapButtonIcon,"aria-hidden":"true"})})}function T(e){let{children:n,className:t="",metastring:o,title:s,showLineNumbers:l,language:r}=e;const{prism:{defaultLanguage:g,magicComments:x}}=(0,m.L)(),k=function(e){return e?.toLowerCase()}(r??(0,i.Vo)(t)??g),B=(0,c.p)(),N=(0,h.F)(),f=(0,i.bc)(o)||s,{lineClassNames:y,code:Z}=(0,i.nZ)(n,{metastring:o,language:k,magicComments:x}),w=l??(0,i.nt)(o);return(0,d.jsxs)(u,{as:"div",className:(0,a.Z)(t,k&&!t.includes(`language-${k}`)&&`language-${k}`),children:[f&&(0,d.jsx)("div",{className:p.codeBlockTitle,children:f}),(0,d.jsxs)("div",{className:p.codeBlockContent,children:[(0,d.jsx)(b.Highlight,{theme:B,code:Z,language:k??"text",children:e=>{let{className:n,style:t,tokens:o,getLineProps:s,getTokenProps:c}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,a.Z)(n,p.codeBlock,"thin-scrollbar"),style:t,children:(0,d.jsx)("code",{className:(0,a.Z)(p.codeBlockLines,w&&p.codeBlockLinesWithNumbering),children:o.map(((e,n)=>(0,d.jsx)(j,{line:e,getLineProps:s,getTokenProps:c,classNames:y[n],showLineNumbers:w},n)))})})}}),(0,d.jsxs)("div",{className:p.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,d.jsx)(L,{className:p.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),(0,d.jsx)(C,{className:p.codeButton,code:Z})]})]})]})}function _(e){let{children:n,...t}=e;const a=(0,s.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),l="string"==typeof c?T:g;return(0,d.jsx)(l,{...t,children:c},String(a))}function v(e){return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,d.jsx)("code",{...e}):(0,d.jsx)(_,{...e})}}}]);