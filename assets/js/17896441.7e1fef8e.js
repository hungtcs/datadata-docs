"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[8401],{5492:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var a=n(9474),s=n(6097),i=n(978),l=n(3274);const o=a.createContext(null);function r(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(8923),m=n(2491),h=n(2532),x=n(7002);function v(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(x.A,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(x.A,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function p(){const{metadata:e}=c();return(0,l.jsx)(v,{previous:e.previous,next:e.next})}var b=n(301),g=n(3201),f=n(1319),j=n(9769),A=n(1095),L=n(634);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(g.A,{to:n,onClick:a,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,b.A)(),{pluginId:s}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(s),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.HW)(s),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:a,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,L.r)();return n.banner?(0,l.jsx)(k,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,L.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,l.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,l.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var M=n(6995),B=n(2435);const I={lastUpdated:"lastUpdated_TbGn"};function E(e){return(0,l.jsx)("div",{className:(0,u.A)(j.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(B.A,{...e})})})}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s}=e;return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(M.A,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",I.lastUpdated),children:(n||a)&&(0,l.jsx)(w,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function P(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s,tags:i}=e,o=i.length>0,r=!!(t||n||s);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(E,{tags:i}),r&&(0,l.jsx)(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var S=n(1124),G=n(7069);const R={tocCollapsibleButton:"tocCollapsibleButton_F3NW",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_WHqT"};function V(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const D={tocCollapsible:"tocCollapsible_ZIFc",tocCollapsibleContent:"tocCollapsibleContent_uOff",tocCollapsibleExpanded:"tocCollapsibleExpanded_WBu5"};function F(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,S.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(D.tocCollapsible,!i&&D.tocCollapsibleExpanded,n),children:[(0,l.jsx)(V,{collapsed:i,onClick:o}),(0,l.jsx)(S.N,{lazy:!0,className:D.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(G.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const q={tocMobile:"tocMobile__3yl"};function W(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,q.tocMobile)})}var z=n(1049);function Z(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(z.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var X=n(9449),$=n(30);function J(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(X.A,{as:"h1",children:n})}),(0,l.jsx)($.A,{children:t})]})}var K=n(116),Q=n(1255),Y=n(1894);function ee(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_hW0X"};function ne(){const e=(0,Y.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ee,{className:te.breadcrumbHomeIcon})})})}const ae={breadcrumbsContainer:"breadcrumbsContainer_Pb_X"};function se(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,l.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,l.jsx)(g.A,{className:s,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:s,children:t})}function ie(e){let{children:t,active:n,index:a,addMicrodata:s}=e;return(0,l.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function le(){const e=(0,K.OF)(),t=(0,Q.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ne,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ie,{active:a,index:n,addMicrodata:!!s,children:(0,l.jsx)(se,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var oe=n(6839);const re={docItemContainer:"docItemContainer_aKI6",docItemCol:"docItemCol_Owxk"};function ce(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,l.jsx)(W,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(Z,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&re.docItemCol),children:[a&&(0,l.jsx)(oe.A,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:re.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(le,{}),(0,l.jsx)(H,{}),n.mobile,(0,l.jsx)(J,{children:t}),(0,l.jsx)(P,{})]}),(0,l.jsx)(p,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function de(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(s.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(ce,{children:(0,l.jsx)(n,{})})]})})}},6995:(e,t,n)=>{n.d(t,{A:()=>d});n(9474);var a=n(2532),s=n(9769),i=n(3201),l=n(8923);const o={iconEdit:"iconEdit_qu79"};var r=n(3274);function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(i.A,{to:t,className:s.G.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},7002:(e,t,n)=>{n.d(t,{A:()=>l});n(9474);var a=n(8923),s=n(3201),i=n(3274);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},1049:(e,t,n)=>{n.d(t,{A:()=>c});n(9474);var a=n(8923),s=n(7069);const i={tableOfContents:"tableOfContents_hZFD",docItemContainer:"docItemContainer_OXMP"};var l=n(3274);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.A,{...n,linkClassName:o,linkActiveClassName:r})})}},7069:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(9474),s=n(6944);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(3201),m=n(3274);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const x=a.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,s.p)(),p=c??v.tableOfContents.minHeadingLevel,b=u??v.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:p,maxHeadingLevel:b});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:b}}),[o,r,p,b])),(0,m.jsx)(x,{toc:g,className:n,linkClassName:o,...h})}},8443:(e,t,n)=>{n.d(t,{A:()=>o});n(9474);var a=n(8923),s=n(3201);const i={tag:"tag_UxlP",tagRegular:"tagRegular_q_Zk",tagWithCount:"tagWithCount_AHc3"};var l=n(3274);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(s.A,{href:t,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},2435:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(8923),s=n(2532),i=n(8443);const l={tags:"tags_hq8Z",tag:"tag_R3OJ"};var o=n(3274);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},6839:(e,t,n)=>{n.d(t,{A:()=>h});n(9474);var a=n(8923),s=n(2532),i=n(7511),l=n(3274);function o(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(9769),u=n(1902);function m(e){let{className:t}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);