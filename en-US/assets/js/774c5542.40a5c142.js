(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[9998],{5487:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(3274),s=a(625),n=a(1063);const d={url:"/api/v1/charts/by-uid",method:"get",headers:[{name:"x-datadata-api-token",type:"string",required:!0,description:"API Token for the service"}],queryParams:[{name:"limit",type:"number",required:!1,description:"\u8bbe\u7f6e\u67e5\u8be2\u7ed3\u679c\u6570\u91cf\u9650\u5236\uff0c\u7528\u4e8e\u5206\u9875"},{name:"offset",type:"number",required:!1,description:"\u8bbe\u7f6e\u67e5\u8be2\u7ed3\u679c\u504f\u79fb\uff0c\u7528\u4e8e\u5206\u9875"},{name:"sort",type:"string",required:!1,description:"\u6307\u5b9a\u7ed3\u679c\u6392\u5e8f\u65b9\u5f0f\uff0c\u53ef\u9009\u7684\u503c\u6709 name\u3001created_at\u3001updated_at\uff0c\u683c\u5f0f\u662f <\u5b57\u6bb5\u540d:(asc|desc)>\uff0c\u5982 name:asc\u3001name:desc\u7b49\u3002"},{name:"keyword",type:"string",required:!1,description:"\u7528\u4e8e\u8fc7\u6ee4\u7ed3\u679c\u96c6\uff0c\u5bf9 Chart \u540d\u79f0\u8fdb\u884c\u8fc7\u6ee4"},{name:"tag",type:"Array<string>",description:"\u901a\u8fc7\u6807\u7b7e\u8fc7\u6ee4\uff0c\u6570\u7ec4\u7c7b\u578b\uff0c\u8fc7\u6ee4\u5305\u542b\u6307\u5b9a\u6240\u6709\u6807\u7b7e\u7684\u6570\u636e"},{name:"archived",type:"boolean",required:!1,description:"\u662f\u5426\u5305\u62ec\u5df2\u5f52\u6863\u7684\u6570\u636e",defaultValue:!1}],description:"\u6839\u636e UID \u83b7\u53d6 Charts\uff0cUID \u4ece Token \u4e2d\u83b7\u53d6\uff0c\u5982\u679c Token \u4e2d\u6ca1\u6709 UID \uff0c\u5219\u8fd4\u56de 400 missing_uid_in_token \u9519\u8bef"},i={tags:[],draft:!1,title:"Get Charts By UID",sidebar_label:"Get Charts By UID",sidebar_position:2,last_update:{date:new Date("2024-03-06T00:00:00.000Z"),author:"Author"}},c=void 0,o={id:"endpoints/charts_get_by_uid/index",title:"Get Charts By UID",description:"{endpoint.description}",source:"@site/api/endpoints/charts_get_by_uid/index.mdx",sourceDirName:"endpoints/charts_get_by_uid",slug:"/endpoints/charts_get_by_uid/",permalink:"/datadata-docs/en-US/api/endpoints/charts_get_by_uid/",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/api/endpoints/charts_get_by_uid/index.mdx",tags:[],version:"current",lastUpdatedBy:"Author",lastUpdatedAt:1709683200,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:2,frontMatter:{tags:[],draft:!1,title:"Get Charts By UID",sidebar_label:"Get Charts By UID",sidebar_position:2,last_update:{date:"2024-03-06T00:00:00.000Z",author:"Author"}},sidebar:"api",previous:{title:"Get Charts",permalink:"/datadata-docs/en-US/api/endpoints/charts_get/"},next:{title:"Get Chart By ID",permalink:"/datadata-docs/en-US/api/endpoints/chart_get_by_id/"}},l={},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}];function _(e){const t={h2:"h2",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:d.description}),"\n",(0,r.jsx)(n.AU,{url:d.url,method:d.method}),"\n",(0,r.jsx)(n.xK,{title:"Headers",params:d.headers}),"\n",(0,r.jsx)(n.xK,{title:"Path Parameters",params:d.params}),"\n",(0,r.jsx)(n.xK,{title:"Query Parameters",params:d.queryParams}),"\n",(0,r.jsx)(t.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.zI,{request:{url:d.url,method:d.method}})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},1673:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>DatadataEmbeddedViewer});var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4570),_site_src_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9874),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9474),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3274);const DatadataEmbeddedViewer=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((e,t)=>{const{region:a,queryId:r,children:s,...n}=e,{i18n:{currentLocale:d}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__.A)(),[i,c]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>"global"===a?_site_src_constants__WEBPACK_IMPORTED_MODULE_3__.iH:_site_src_constants__WEBPACK_IMPORTED_MODULE_3__.Ow),[a]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((()=>{loadDatadataComponents(a)}),[a]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{"function"==typeof t?t(i):t&&(t.current=i)}),[i]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("datadata-embedded-viewer",{...n,ref:c,language:d,"api-token":o,"query-id":r,children:s})}));async function loadDatadataComponents(region){const url="global"===region?_site_src_constants__WEBPACK_IMPORTED_MODULE_3__.l9:_site_src_constants__WEBPACK_IMPORTED_MODULE_3__.l5;await eval(`import("${url}");`)}},62:(e,t,a)=>{"use strict";a.d(t,{z:()=>u});var r=a(9874);const s=!0;var n=a(6927),d=a(8241),i=a(8164),c=a(1727),o=a(9474),l=a(3274);function u(e){const{token:t,request:a}=e,u=(0,o.useMemo)((()=>s?r.re:r.lc),[]),_=(0,o.useMemo)((()=>(/^https?:\/\//.test(a.url)||(a.url=`${u}${a.url}`),a.method=a.method.toUpperCase(),a.headers=[...a.headers??[],{name:"x-datadata-api-token",value:t??"<your-token>",comment:"datadata api token"}],new c.HTTPSnippet(a))),[t,a,u]);return(0,l.jsxs)(i.A,{groupId:"http-snippet",queryString:!0,children:[(0,l.jsx)(d.A,{value:"curl",label:"Curl",children:(0,l.jsx)(n.A,{language:"shell",showLineNumbers:!0,children:_.convert("shell")})}),(0,l.jsx)(d.A,{value:"go",label:"Go",children:(0,l.jsx)(n.A,{language:"go",showLineNumbers:!0,children:_.convert("go")})}),(0,l.jsx)(d.A,{value:"node",label:"Node",children:(0,l.jsx)(n.A,{language:"javascript",showLineNumbers:!0,children:_.convert("node","fetch")})}),(0,l.jsx)(d.A,{value:"python",label:"Python",children:(0,l.jsx)(n.A,{language:"python",showLineNumbers:!0,children:_.convert("python")})}),(0,l.jsx)(d.A,{value:"java",label:"Java",children:(0,l.jsx)(n.A,{language:"java",showLineNumbers:!0,children:_.convert("java","okhttp")})}),(0,l.jsx)(d.A,{value:"php",label:"Php",children:(0,l.jsx)(n.A,{language:"php",showLineNumbers:!0,children:_.convert("php")})}),(0,l.jsx)(d.A,{value:"http",label:"Http",children:(0,l.jsx)(n.A,{language:"http",showLineNumbers:!0,children:_.convert("http","http1.1")})})]})}},1063:(e,t,a)=>{"use strict";a.d(t,{AU:()=>i,tE:()=>l,xK:()=>h,zI:()=>x.z});var r=a(8923),s=a(9474),n=a(9524),d=a(3274);function i(e){const{url:t,method:a}=e,[i,c]=(0,s.useState)(!1),o=(0,s.useMemo)((()=>{const e=t.split("/");return e.map(((t,a)=>{const n=a===e.length-1,i=t.startsWith(":");return i&&(t=`{${t.slice(1)}}`),(0,d.jsxs)(s.Fragment,{children:[(0,d.jsx)("span",{className:(0,r.A)({"text-blue-500":i}),children:t}),!n&&(0,d.jsx)("span",{className:"text-gray-500",children:"/"})]},a)}))}),[t]),l=(0,s.useCallback)((()=>{!async function(e){try{if(window.navigator.clipboard)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("input");return t.value=e,t.style.position="fixed",t.style.top="0px",t.style.zIndex="100000",document.body.appendChild(t),t.getBoundingClientRect(),t.select(),Promise.resolve(document.execCommand("copy")).finally((()=>{t.remove()}))}catch(t){return console.error(t),!1}}(t),c(!0)}),[t]);return(0,s.useEffect)((()=>{if(!i)return;const e=setTimeout((()=>{c(!1)}),3e3);return()=>{clearTimeout(e)}}),[i]),(0,d.jsxs)("div",{className:"flex gap-2 font-mono items-center border border-solid p-2 rounded-md mb-4",children:[(0,d.jsx)("div",{className:(0,r.A)(" px-2 leading-[32px] rounded-md uppercase font-bold",{"text-blue-500":"get"===a,"text-green-500":"put"===a,"text-yellow-500":"post"===a,"text-red-500":"delete"===a}),children:a??"get"}),(0,d.jsx)("div",{className:"flex-1 flex items-center gap-0.5 font-medium",children:o}),(0,d.jsx)("button",{onClick:l,className:(0,r.A)("flex items-center justify-center cursor-pointer border-none bg-transparent text-[24px] p-1",{"text-green-500":i}),children:i?(0,d.jsx)(n.iBF,{}):(0,d.jsx)(n.As9,{})})]})}var c=a(5167);function o(e){const{panels:t,className:a,defaultExpandedKeys:n,...i}=e,[c,o]=(0,s.useState)(n??[]),l=(0,s.useCallback)((e=>{o((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e]))}),[]);return(0,d.jsx)("div",{...i,className:(0,r.A)(a),children:t.map(((e,a)=>{const s=a===t.length-1,n=c.includes(e.key);return(0,d.jsxs)("section",{className:(0,r.A)("border border-solid rounded-md",{"mb-4":!s}),children:[(0,d.jsxs)("header",{className:(0,r.A)("flex h-[42px] items-center px-4 cursor-pointer bg-[#0000001a] rounded-t-md",{"rounded-b-md":!n}),onClick:()=>l(e.key),children:[(0,d.jsx)("h4",{className:"m-0",children:e.name}),e.extra&&(0,d.jsx)("div",{children:e.extra})]}),(0,d.jsx)("main",{className:(0,r.A)("p-4",{hidden:!n}),children:e.content})]},e.key)}))})}function l(e){const{define:{headers:t}}=e,a=(0,c.mN)(),r=(0,s.useCallback)((e=>{console.log("submit: ",e)}),[]);return(0,d.jsx)(c.Op,{...a,children:(0,d.jsx)("form",{noValidate:!0,className:"mb-4",onSubmit:a.handleSubmit(r),children:(0,d.jsx)(o,{panels:[{key:"headers",name:"Headers",content:(0,d.jsx)("div",{children:"Headers"})},{key:"params",name:"Params",content:(0,d.jsx)("div",{children:"Params"})},{key:"query-params",name:"Query Params",content:(0,d.jsx)("div",{children:"Query Params"})}],defaultExpandedKeys:["headers","params","query-params"]})})})}var u=a(6927),_=a(5076),p=a(5937);function m(e){const{name:t,type:a,required:r,description:s,defaultValue:n}=e;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("h3",{className:"flex gap-2 items-center",children:[(0,d.jsx)("span",{children:t}),(0,d.jsx)("span",{className:"text-xs bg-lime-500 text-white font-normal rounded-md px-1.5 py-0.5",children:a}),r&&(0,d.jsx)("span",{className:"text-xs bg-orange-400 text-white font-normal rounded-md px-1.5 py-0.5",children:"required"}),!(0,_.A)(n)&&(0,d.jsxs)("span",{className:"text-xs bg-blue-400 text-white font-normal rounded-md px-1.5 py-0.5",children:["default: ",(0,p.A)(n)]})]}),s&&(0,d.jsx)("p",{className:"text-gray-600",children:s})]})}function h(e){const{type:t,title:a,extra:r,code:n,params:i}=e,c=(0,s.useMemo)((()=>i&&i.length>0?i.map((e=>(0,d.jsx)(m,{...e},e.name))):n?(0,d.jsx)(u.A,{language:"typescript",showLineNumbers:!0,children:n}):null),[n,i]);return c?(0,d.jsxs)("div",{children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("h2",{className:"flex gap-1 items-center",children:[a,t&&(0,d.jsx)("span",{className:"text-xs bg-lime-500 text-white font-normal rounded-md px-1.5 py-0.5",children:t})]}),r&&(0,d.jsx)("div",{children:r})]}),(0,d.jsx)("main",{children:c})]}):null}a(8029).A.div`
  bg-white border border-solid rounded-md p-4 shadow-md
`;a(1673);var x=a(62)},9874:(e,t,a)=>{"use strict";a.d(t,{Ow:()=>r,iH:()=>s,l5:()=>n,l9:()=>d,lc:()=>c,re:()=>i});const r="4eca924e75873b3aa27905f681db108a.04e22cadb6742e20bfe2d7f010407f9457efcc1bd5533886acdffe60331ae1c19b827b20aed2dd7459027ee378636d03ac4a3b68e64a8ed3688dfdf2a4b26cbbd068be1ebc8e142b906836696bf404ee",s="4eca924e75873b3aa27905f681db108a.04e22cadb6742e20bfe2d7f010407f9457efcc1bd5533886acdffe60331ae1c19b827b20aed2dd7459027ee378636d03ac4a3b68e64a8ed3688dfdf2a4b26cbbd068be1ebc8e142b906836696bf404ee",n="https://www.datadata.cn/web-components/embedded-editor/index.mjs",d="https://www.datadata.com/web-components/embedded-editor/index.mjs",i="https://www.datadata.cn",c="http://127.0.0.1:6430"},4600:()=>{}}]);