"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[4978],{81303:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>i,frontMatter:()=>s,metadata:()=>t,toc:()=>m});var r=n(86070),d=n(11100);const s={title:"DataFrameGroupBy",sidebar_position:8},o=void 0,t={id:"query/dql/dataframe_group_by",title:"DataFrameGroupBy",description:"\u65b9\u6cd5",source:"@site/docs/03_query/02_dql/dataframe_group_by.md",sourceDirName:"03_query/02_dql",slug:"/query/dql/dataframe_group_by",permalink:"/datadata-docs/en-US/docs/query/dql/dataframe_group_by",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/03_query/02_dql/dataframe_group_by.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1734575053e3,sidebarPosition:8,frontMatter:{title:"DataFrameGroupBy",sidebar_position:8},sidebar:"docs",previous:{title:"SeriesGroupBy",permalink:"/datadata-docs/en-US/docs/query/dql/series_group_by"},next:{title:"Merge",permalink:"/datadata-docs/en-US/docs/query/dql/merge"}},c={},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>sum</code>",id:"sum",level:3},{value:"<code>std</code>",id:"std",level:3},{value:"<code>var</code>",id:"var",level:3},{value:"<code>mean</code>",id:"mean",level:3},{value:"<code>diff</code>",id:"diff",level:3},{value:"<code>cumprod</code>",id:"cumprod",level:3},{value:"<code>pct_change</code>",id:"pct_change",level:3},{value:"<code>agg</code>",id:"agg",level:3},{value:"<code>apply</code>",id:"apply",level:3},{value:"<code>transform</code>",id:"transform",level:3}];function l(e){const a={code:"code",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h3,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,r.jsx)(a.h3,{id:"min",children:(0,r.jsx)(a.code,{children:"min"})}),"\n",(0,r.jsx)(a.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u6700\u5c0f\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.min(skipna=True, numeric_only=False) #\u5305\u542b\u53c2\u6570"skipna"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b\u53c2\u6570"numeric_only"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a"False"\u3002\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.min() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6700\u5c0f\u503c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"max",children:(0,r.jsx)(a.code,{children:"max"})}),"\n",(0,r.jsx)(a.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u6700\u5c0f\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.max(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.max() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6700\u5927\u503c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"sum",children:(0,r.jsx)(a.code,{children:"sum"})}),"\n",(0,r.jsx)(a.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u503c\u7684\u603b\u548c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.sum(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.sum() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u603b\u548c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"std",children:(0,r.jsx)(a.code,{children:"std"})}),"\n",(0,r.jsx)(a.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u503c\u7684\u6807\u51c6\u5dee\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570ddof\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.std() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6807\u51c6\u5dee\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"var",children:(0,r.jsx)(a.code,{children:"var"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u65b9\u5dee\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.var(skipna=True, numeric_only=False, ddof=n)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.var() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u65b9\u5dee\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"mean",children:(0,r.jsx)(a.code,{children:"mean"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u5747\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.mean(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.mean() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u5747\u503c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"diff",children:(0,r.jsx)(a.code,{children:"diff"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u8bbe\u5b9a\u9636\u6570\u5dee\u5206\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.diff(periods = n) # "n"\u4ee3\u8868\u5dee\u5206\u7ea7\u6570\uff0c\u9ed8\u8ba4\u4e3a1\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.diff(1) #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u4e8c\u9636\u5dee\u5206\u540e\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"cumprod",children:(0,r.jsx)(a.code,{children:"cumprod"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u7d2f\u79ef\u4e58\u79ef\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.cumprod(skipna=True)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.cumprod(skipna=True) #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u7d2f\u79ef\u4e58\u79ef\u540e\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"pct_change",children:(0,r.jsx)(a.code,{children:"pct_change"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u767e\u5206\u6bd4\u53d8\u5316\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.pct_change(periods=1) #\u5305\u542b\u53c2\u6570"periods"\uff0c\u4ee3\u8868\u504f\u79fb\u5468\u671f\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.pct_change(1) #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u767e\u5206\u6bd4\u53d8\u5316\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"agg",children:(0,r.jsx)(a.code,{children:"agg"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u5bf9\u6bcf\u4e2a\u5206\u7ec4\u5e94\u7528\u591a\u4e2a\u805a\u5408\u51fd\u6570\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.agg()\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\ndef my_sum(s):\n  return s.sum()\nd2 = g1.agg(my_sum)\nreturn d2  #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6c47\u603b\u8ba1\u7b97\u540e\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"apply",children:(0,r.jsx)(a.code,{children:"apply"})}),"\n",(0,r.jsx)(a.p,{children:"\u7528\u4e8e\u5bf9\u6bcf\u4e2a\u5206\u7ec4\u5e94\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.apply()\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\ndef my_mean(x):\n  res = x[0]\n  res["age"] = x["age"].mean()\n  res["count"] = x["count"].mean()\n  return res\nd2 = g1.apply(my_mean)\nreturn d2 #\u8fd4\u56de\u5206\u7ec4\u540e\u8bbe\u5b9a\u51fd\u6570\uff08"my_mean"\uff09\u8f6c\u6362\u540e\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(a.h3,{id:"transform",children:(0,r.jsx)(a.code,{children:"transform"})}),"\n",(0,r.jsx)(a.p,{children:"\u5bf9\u5206\u7ec4\u540e\u7684\u6570\u636e\u8fdb\u884c\u8bbe\u5b9a\u51fd\u6570\u8f6c\u6362\uff0c\u8fd4\u56de DataFrame \u5927\u5c0f\u548c\u539f\u59cb\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'DataFrameGroupBy.transform()\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.transform("mean") #\u8fd4\u56de\u5206\u7ec4\u540e\u8bbe\u5b9a\u51fd\u6570\uff08\u5747\u503c\uff09\u8f6c\u6362\u540e\u7684 DataFrame\n'})})]})}function i(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11100:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>t});var r=n(30758);const d={},s=r.createContext(d);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);