"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[9428],{76736:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var d=a(86070),n=a(11100);const s={title:"\u521b\u5efa\u9762\u677f"},r=void 0,o={id:"dashboard/create-dashboard/index",title:"\u521b\u5efa\u9762\u677f",description:"\u5728\u5b8c\u6210\u6570\u636e\u67e5\u8be2\u7684\u57fa\u7840\u4e0a\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7efc\u5408\u5206\u6790\u9762\u677f\uff0c\u8be5\u9762\u677f\u80fd\u591f\u5c06\u76f8\u5173\u56fe\u8868\u3001\u6570\u636e\u548c\u6587\u672c\u5185\u5bb9\u6709\u673a\u7ed3\u5408\uff0c\u4ece\u800c\u5168\u9762\u5c55\u793a\u60a8\u7684\u5206\u6790\u7cfb\u7edf\u3002\u5206\u6790\u9762\u677f\u4f7f\u60a8\u80fd\u591f\u4ece\u591a\u4e2a\u89d2\u5ea6\u6df1\u5165\u5c55\u793a\u60a8\u7684\u6570\u636e\u5206\u6790\u7ed3\u679c\u3002\u5728\u5206\u6790\u9762\u677f\u7684\u521b\u5efa\u9875\u9762\u4e0a\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a",source:"@site/docs/05_dashboard/00_create-dashboard/index.md",sourceDirName:"05_dashboard/00_create-dashboard",slug:"/dashboard/create-dashboard/",permalink:"/datadata-docs/docs/dashboard/create-dashboard/",draft:!1,unlisted:!1,editUrl:"https://github.com/datadata-team/datadata-docs/tree/master/docs/05_dashboard/00_create-dashboard/index.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1734662844e3,frontMatter:{title:"\u521b\u5efa\u9762\u677f"},sidebar:"docs",previous:{title:"\u76d8\u53e3\u5b9e\u65f6\u56de\u653e",permalink:"/datadata-docs/docs/visualizations/6-2-tick/"},next:{title:"\u53c2\u6570\u8054\u52a8",permalink:"/datadata-docs/docs/dashboard/parameter_linking/"}},c={},i=[];function l(t){const e={img:"img",li:"li",ol:"ol",p:"p",...(0,n.R)(),...t.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"\u5728\u5b8c\u6210\u6570\u636e\u67e5\u8be2\u7684\u57fa\u7840\u4e0a\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7efc\u5408\u5206\u6790\u9762\u677f\uff0c\u8be5\u9762\u677f\u80fd\u591f\u5c06\u76f8\u5173\u56fe\u8868\u3001\u6570\u636e\u548c\u6587\u672c\u5185\u5bb9\u6709\u673a\u7ed3\u5408\uff0c\u4ece\u800c\u5168\u9762\u5c55\u793a\u60a8\u7684\u5206\u6790\u7cfb\u7edf\u3002\u5206\u6790\u9762\u677f\u4f7f\u60a8\u80fd\u591f\u4ece\u591a\u4e2a\u89d2\u5ea6\u6df1\u5165\u5c55\u793a\u60a8\u7684\u6570\u636e\u5206\u6790\u7ed3\u679c\u3002\u5728\u5206\u6790\u9762\u677f\u7684\u521b\u5efa\u9875\u9762\u4e0a\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u96c6\u6210\u591a\u79cd\u56fe\u8868\uff1a\u9009\u62e9\u5e76\u6dfb\u52a0\u6240\u9700\u7684\u56fe\u8868\u7c7b\u578b\uff0c\u5982\u6298\u7ebf\u56fe\u3001\u67f1\u72b6\u56fe\u3001\u997c\u56fe\u7b49\uff0c\u4ee5\u76f4\u89c2\u5c55\u793a\u4e0d\u540c\u6570\u636e\u96c6\u7684\u6bd4\u8f83\u548c\u8d8b\u52bf\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u63d2\u5165\u5206\u5272\u7ebf\u548c\u6587\u672c\uff1a\u901a\u8fc7\u5206\u5272\u7ebf\u6765\u7ec4\u7ec7\u548c\u533a\u5206\u9762\u677f\u4e2d\u7684\u4e0d\u540c\u90e8\u5206\uff0c\u6dfb\u52a0\u6587\u672c\u5185\u5bb9\u4ee5\u63d0\u4f9b\u5206\u6790\u8bf4\u660e\u3001\u6570\u636e\u89e3\u8bfb\u6216\u7ed3\u8bba\u6458\u8981\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u4e3b\u9898\u8bbe\u7f6e\uff1a\u901a\u8fc7\u5404\u4e2a\u7ec4\u4ef6\u7684\u4e3b\u9898\u8bbe\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u66f4\u7cbe\u7ec6\u5730\u5b9a\u5236\u548c\u4f18\u5316\u9762\u677f\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u66f4\u52a0\u4e2a\u6027\u5316\u7684\u5c55\u793a\u548c\u4ea4\u4e92\u4f53\u9a8c\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49\u5e03\u5c40\uff1a\u7075\u6d3b\u5730\u8c03\u6574\u754c\u9762\u5e03\u5c40\uff0c\u4ee5\u5b9e\u73b0\u6700\u4f73\u7684\u89c6\u89c9\u6548\u679c\u548c\u4fe1\u606f\u4f20\u9012\uff0c\u786e\u4fdd\u5206\u6790\u9762\u677f\u65e2\u7f8e\u89c2\u53c8\u5b9e\u7528\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u3001\u4fe1\u606f\u4e30\u5bcc\u7684\u5206\u6790\u9762\u677f\uff0c\u6709\u6548\u5730\u652f\u6301\u60a8\u7684\u51b3\u7b56\u548c\u5206\u6790\u8fc7\u7a0b\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"Image panel",src:a(55370).A+"",width:"1817",height:"926"})})]})}function h(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,d.jsx)(e,{...t,children:(0,d.jsx)(l,{...t})}):l(t)}},55370:(t,e,a)=>{a.d(e,{A:()=>d});const d=a.p+"assets/images/panel-0191f4f009fca7e2574a0b36a3cbab30.png"},11100:(t,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var d=a(30758);const n={},s=d.createContext(n);function r(t){const e=d.useContext(s);return d.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),d.createElement(s.Provider,{value:e},t.children)}}}]);