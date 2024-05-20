"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[4147],{1e3:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=d(3274),n=d(3006);const r={title:"Global",sidebar_position:1},l=void 0,i={id:"query/dql/global",title:"Global",description:"\u5168\u5c40\u51fd\u6570",source:"@site/docs/query/dql/global.md",sourceDirName:"query/dql",slug:"/query/dql/global",permalink:"/datadata-docs/docs/query/dql/global",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/dql/global.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1715395671,formattedLastUpdatedAt:"2024\u5e745\u670811\u65e5",sidebarPosition:1,frontMatter:{title:"Global",sidebar_position:1},sidebar:"docs",previous:{title:"DQL \u67e5\u8be2\u811a\u672c",permalink:"/datadata-docs/docs/query/dql/"},next:{title:"Timestamp",permalink:"/datadata-docs/docs/query/dql/timestamp"}},a={},c=[{value:"\u5168\u5c40\u51fd\u6570",id:"\u5168\u5c40\u51fd\u6570",level:2},{value:"<code>query</code>",id:"query",level:3},{value:"<code>Series</code>",id:"series",level:3},{value:"<code>DataFrame</code> (alias <code>table</code>)",id:"dataframe-alias-table",level:3},{value:"<code>Timestamp</code>",id:"timestamp",level:3},{value:"\u5168\u5c40\u6a21\u5757",id:"\u5168\u5c40\u6a21\u5757",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u5168\u5c40\u51fd\u6570",children:"\u5168\u5c40\u51fd\u6570"}),"\n",(0,s.jsx)(t.h3,{id:"query",children:(0,s.jsx)(t.code,{children:"query"})}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884c SQL \u67e5\u8be2"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"query(sql, *args)\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"type"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sql"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"SQL \u5b57\u7b26\u4e32"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"args"}),(0,s.jsx)(t.td,{children:"...args"}),(0,s.jsx)(t.td,{children:"SQL \u53c2\u6570\uff0c\u7528\u4e8e SQL \u63d2\u503c"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"series",children:(0,s.jsx)(t.code,{children:"Series"})}),"\n",(0,s.jsx)(t.p,{children:"\u521b\u5efa\u4e00\u4e2a Series\uff0cSeries \u8868\u793a\u4e00\u4e2a\u6570\u636e\u5217"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"Series([], dtype='string', name='string')\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"type"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"\u6570\u636e\u5217\u8868"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dtype"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u6570\u636e\u7c7b\u578b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u6570\u636e\u5217\u540d\u79f0"})]})]})]}),"\n",(0,s.jsxs)(t.h3,{id:"dataframe-alias-table",children:[(0,s.jsx)(t.code,{children:"DataFrame"})," (alias ",(0,s.jsx)(t.code,{children:"table"}),")"]}),"\n",(0,s.jsx)(t.p,{children:"\u521b\u5efa DataFrame \uff0cDataFrame \u8868\u793a\u4e00\u4e2a\u6570\u636e\u8868\u683c\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'DataFrame([\n  { "name": "a" },\n  { "name": "b" },\n  { "name": "c" },\n])\nDataFrame({"name": ["a", "b", "c"]})\n\n# use alias name\ntable({"name": ["a", "b", "c"]})\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"type"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"list|dict"}),(0,s.jsx)(t.td,{children:"\u6570\u636e"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"columns"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"\u6267\u884c\u5217\u540d\u79f0"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"timestamp",children:(0,s.jsx)(t.code,{children:"Timestamp"})}),"\n",(0,s.jsx)(t.p,{children:"Timestamp \u7528\u4e8e\u8868\u793a\u65f6\u95f4\u3001\u65e5\u671f\u3001\u65f6\u95f4\u6233\u7b49\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"Timestamp('11:12:13')\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5168\u5c40\u6a21\u5757",children:"\u5168\u5c40\u6a21\u5757"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"math"}),"\n",(0,s.jsx)(t.li,{children:"time"}),"\n",(0,s.jsx)(t.li,{children:"json"}),"\n",(0,s.jsx)(t.li,{children:"assert"}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3006:(e,t,d)=>{d.d(t,{R:()=>l,x:()=>i});var s=d(9474);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);