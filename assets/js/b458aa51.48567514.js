"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[3714],{3362:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(3274),a=r(625),i=r(8241),s=r(8164);const l={tags:[],draft:!1,title:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_label:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_position:2,last_update:{date:new Date("2024-03-04T00:00:00.000Z"),author:"hungtcs"}},o=void 0,c={id:"overview/authentication/index",title:"\u8eab\u4efd\u8ba4\u8bc1",description:"Datadata API \u4f9d\u8d56 API-Token \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0cAPI-Token \u7531 AccessKey \u548c\u901a\u8fc7 SecretKey \u52a0\u5bc6\u7684 Payload \u7ec4\u6210\uff0c",source:"@site/api/overview/authentication/index.mdx",sourceDirName:"overview/authentication",slug:"/overview/authentication/",permalink:"/datadata-docs/api/overview/authentication/",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/api/overview/authentication/index.mdx",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1709510400,formattedLastUpdatedAt:"2024\u5e743\u67084\u65e5",sidebarPosition:2,frontMatter:{tags:[],draft:!1,title:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_label:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_position:2,last_update:{date:"2024-03-04T00:00:00.000Z",author:"hungtcs"}},sidebar:"api",previous:{title:"\u4ecb\u7ecd",permalink:"/datadata-docs/api/overview/introduction"},next:{title:"FAQ",permalink:"/datadata-docs/api/overview/faq"}},d={},u=[{value:"\u521b\u5efa\u60a8\u7684 API-Key",id:"\u521b\u5efa\u60a8\u7684-api-key",level:2},{value:"Payload",id:"payload",level:2},{value:"\u751f\u6210 API-Token",id:"\u751f\u6210-api-token",level:2},{value:"\u53d1\u8d77\u8bf7\u6c42",id:"\u53d1\u8d77\u8bf7\u6c42",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Datadata API \u4f9d\u8d56 API-Token \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0cAPI-Token \u7531 ",(0,t.jsx)(n.strong,{children:"AccessKey"})," \u548c\u901a\u8fc7 ",(0,t.jsx)(n.strong,{children:"SecretKey"})," \u52a0\u5bc6\u7684 Payload \u7ec4\u6210\uff0c\n\u672c\u7ae0\u5c06\u8be6\u7ec6\u4ecb\u7ecd SecretKey \u7684\u83b7\u53d6\u65b9\u5f0f\u548c\u5bf9 Payload \u7684\u52a0\u5bc6\u6b65\u9aa4\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa\u60a8\u7684-api-key",children:"\u521b\u5efa\u60a8\u7684 API-Key"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"API-Key \u7531 AccessKey \u548c SecretKey \u4e24\u90e8\u5206\u7ec4\u6210\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u751f\u6210\u65b0\u7684 API-Key\uff0c\u8bf7\u767b\u5f55\u540e\u70b9\u51fb\u9876\u90e8\u5bfc\u822a\u7684\u7528\u6237\u5934\u50cf\uff0c\u9009\u62e9",(0,t.jsx)(n.code,{children:"\u7528\u6237\u8bbe\u7f6e"})," -> ",(0,t.jsx)(n.code,{children:"API"})," -> ",(0,t.jsx)(n.code,{children:"\u521b\u5efa API Key"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u8f93\u5165 API-Key \u540d\u79f0\uff0c\u540d\u79f0\u7528\u4e8e\u5e2e\u52a9\u60a8\u8bb0\u5fc6\u6b64 API-Key \u7684\u7528\u9014\uff0c\u70b9\u51fb\u786e\u5b9a\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u770b\u5230\u5f53\u524d API-Key \u5bf9\u5e94\u7684 AccessKey \u548c SecretKey \u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"API-Keys",src:r(4343).A+"",width:"1850",height:"450"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["AccessKey \u662f\u516c\u5f00\u7684\uff0c\u7528\u6237\u533a\u5206\u7528\u6237\u8eab\u4efd\uff1bSecretKey \u662f\u79c1\u5bc6\u7684\uff0c\u7528\u4e8e\u52a0\u5bc6 Payload \u6570\u636e\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u60a8\u7684 ",(0,t.jsx)(n.strong,{children:"SecretKey"}),"\uff01"]})}),"\n",(0,t.jsx)(n.h2,{id:"payload",children:"Payload"}),"\n",(0,t.jsx)(n.p,{children:"Payload \u662f API-Token \u4e2d\u643a\u5e26\u7684\u4fe1\u606f\uff0c\u5176\u683c\u5f0f\u4e3a JSON\uff0c\u5305\u62ec 3 \u4e2a\u5b57\u6bb5\uff0c\u5982\u4e0b\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5b57\u6bb5"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expired"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"\u53ef\u9009\u3002Token \u8fc7\u671f\u65f6\u95f4\uff0c\u503c\u662f Unix \u65f6\u95f4\uff0c\u5373\u81ea 1970 \u5e74 1 \u6708 1 \u65e5\uff08\u4e16\u754c\u534f\u8c03\u65f6\uff09\u8d77\u7ecf\u8fc7\u7684\u79d2\u6570\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"host"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"\u53ef\u9009\u3002 \u7b7e\u53d1\u6b64 Token \u7684\u8eab\u4efd\uff0c\u503c\u662f Token \u7b7e\u53d1\u65b9\u7684\u57df\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uid"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"\u53ef\u9009\u3002 \u5b50\u7528\u6237\u7684 UID\uff0c\u5982\u679c\u6709\u503c\uff0c\u5219\u8ba4\u4e3a\u662f\u5b50\u7528\u6237\u3002"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "uid": "007",\n  "host": "www.example.com",\n  "expired": 1741058185\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u751f\u6210-api-token",children:"\u751f\u6210 API-Token"}),"\n",(0,t.jsxs)(n.p,{children:["API-Token \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u7b2c\u4e00\u90e8\u5206\u662f AccessKey \uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u4f7f\u7528 SecretKey \u548c AES-CFB \u52a0\u5bc6\u7b97\u6cd5\u5bf9 Payload \u52a0\u5bc6\u540e\u7684\u5bc6\u6587\uff0c\u4e2d\u95f4\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"."})," \u8fde\u63a5\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u52a0\u5bc6\u7b97\u6cd5\u7684\u793a\u4f8b\u4ee3\u7801\u3002"}),"\n",(0,t.jsxs)(s.A,{groupId:"programming-language",className:"unique-tabs",queryString:!0,children:[(0,t.jsxs)(i.A,{value:"go",label:"Go",default:!0,children:[(0,t.jsxs)(n.p,{children:["\u70b9\u51fb\u6b64\u5904\u5728 ",(0,t.jsx)(n.a,{href:"https://goplay.tools/snippet/NuHPy8AwF0S",children:"Go Better Playground"})," \u6216 ",(0,t.jsx)(n.a,{href:"https://go.dev/play/p/5SvNGV5C_ac",children:"Go Playground"})," \u4e0a\u8fd0\u884c\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'package main\n\nimport (\n  "crypto/aes"\n  "crypto/cipher"\n  "crypto/rand"\n  "encoding/hex"\n  "encoding/json"\n  "fmt"\n  "io"\n  "strings"\n  "time"\n)\n\ntype TokenPayload struct {\n  UID     string `json:"uid"`\n  Host    string `json:"host"`\n  Expired int64  `json:"int64"`\n}\n\ntype APIKey struct {\n  AccessKey string\n  SecretKey string\n}\n\nfunc (apiKey *APIKey) generateAPIToken(payload TokenPayload) (token string, err error) {\n  var value []byte\n  value, err = json.Marshal(payload)\n  if err != nil {\n    return "", err\n  }\n\n  var ciphertext string\n  ciphertext, err = apiKey.encrypt(value)\n  if err != nil {\n    return "", err\n  }\n\n  return fmt.Sprintf("%s.%s", apiKey.AccessKey, ciphertext), nil\n}\n\nfunc (apiKey *APIKey) decryptAPIToken(token string) (payload *TokenPayload, err error) {\n  var tokenParts = strings.Split(token, ".")\n  if len(tokenParts) != 2 {\n    return nil, fmt.Errorf("invalid api token")\n  }\n  var ciphertext = tokenParts[1]\n\n  var value []byte\n  value, err = apiKey.decrypt(ciphertext)\n  if err != nil {\n    return nil, err\n  }\n\n  payload = new(TokenPayload)\n  err = json.Unmarshal(value, payload)\n  if err != nil {\n    return nil, err\n  }\n\n  return payload, nil\n}\n\nfunc (apiKey *APIKey) encrypt(value []byte) (string, error) {\n  block, err := aes.NewCipher([]byte(apiKey.SecretKey))\n  if err != nil {\n    return "", err\n  }\n\n  ciphertext := make([]byte, aes.BlockSize+len(value))\n\n  iv := ciphertext[:aes.BlockSize]\n  if _, err := io.ReadFull(rand.Reader, iv); err != nil {\n    return "", err\n  }\n\n  cipher.NewCFBEncrypter(block, iv).XORKeyStream(ciphertext[aes.BlockSize:], value)\n\n  return hex.EncodeToString(ciphertext), nil\n}\n\nfunc (apiKey *APIKey) decrypt(ciphertext string) ([]byte, error) {\n  block, err := aes.NewCipher([]byte(apiKey.SecretKey))\n  if err != nil {\n    return nil, err\n  }\n\n  cipherData, err := hex.DecodeString(ciphertext)\n  if err != nil {\n    return nil, err\n  }\n\n  iv := cipherData[:aes.BlockSize]\n  cipherData = cipherData[aes.BlockSize:]\n\n  cipher.NewCFBDecrypter(block, iv).XORKeyStream(cipherData, cipherData)\n\n  return cipherData, nil\n}\n\nfunc main() {\n  var err error = nil\n\n  var apiKey = &APIKey{\n    AccessKey: "xxxxxxxxxx",\n    SecretKey: "xxxxxxxxxx",\n  }\n\n  var payload = TokenPayload{\n    Expired: time.Now().AddDate(1, 0, 0).Unix(),\n  }\n\n  var token string\n  token, err = apiKey.generateAPIToken(payload)\n  if err != nil {\n    panic(err)\n  }\n\n  fmt.Printf("token: %v\\n", token)\n\n  var decodedPayload *TokenPayload\n  decodedPayload, err = apiKey.decryptAPIToken(token)\n  if err != nil {\n    panic(err)\n  }\n\n  fmt.Printf("decodedPayload: %#v\\n", decodedPayload)\n}\n'})})]}),(0,t.jsx)(i.A,{value:"node",label:"Node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// TODO\n"})})}),(0,t.jsx)(i.A,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// TODO\n"})})}),(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// TODO\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u8d77\u8bf7\u6c42",children:"\u53d1\u8d77\u8bf7\u6c42"}),"\n",(0,t.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u4e00\u6b65\u4e4b\u540e\uff0c\u6211\u4eec\u62ff\u5230\u4e86 API-Token \uff0c\u73b0\u5728\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u53d1\u8d77 API \u8bf7\u6c42\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53d1\u8d77\u4efb\u4f55 API \u8bf7\u6c42\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5c06\u4e0a\u4e00\u6b65\u83b7\u53d6\u5230\u7684 API-Token \u9644\u52a0\u5230\u8bf7\u6c42\u4e2d\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5c06 Token \u6dfb\u52a0\u5230 Request Header \u4e2d\uff0c\u8fd9\u662f\u6211\u4eec\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u5c5e\u6027\u540d\u79f0\u662f ",(0,t.jsx)(n.code,{children:"x-datadata-api-token"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5c06 Token \u6dfb\u52a0\u5230 Query \u4e2d\uff0c\u9002\u7528\u4e8e\u60a8\u65e0\u6cd5\u4fee\u6539 Request Header \u7684\u60c5\u51b5\uff0c\u901a\u5e38\u662f\u4e0d\u63a8\u8350\u7684\u3002\u5c5e\u6027\u540d\u79f0\u662f ",(0,t.jsx)(n.code,{children:"api_token"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u4f7f\u7528 Curl \u53d1\u8d77\u8bf7\u6c42\uff0c\u5206\u9875\u83b7\u53d6\u5f53\u524d\u5f53\u524d\u7528\u6237\u6240\u6709\u7684 Charts \u5217\u8868\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"curl https://www.datadata.cn/api/v1/charts \\\n  -H 'x-datadata-api-token: <your-token>'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u66f4\u591a API \u7aef\u70b9\u8bf7\u67e5\u770b API-Endpoints \u7ae0\u8282\u3002"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8241:(e,n,r)=>{r.d(n,{A:()=>s});r(9474);var t=r(8923);const a={tabItem:"tabItem_lDsT"};var i=r(3274);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},8164:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(9474),a=r(8923),i=r(357),s=r(241),l=r(9517),o=r(206),c=r(6511),d=r(37);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function y(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=x({queryString:r,groupId:a}),[y,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),v=(()=>{const e=c??y;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=r(7439);const v={tabList:"tabList_GwQS",tabItem:"tabItem_fTkB"};var m=r(3274);function b(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=y(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,m.jsx)(b,{...e,...n}),(0,m.jsx)(g,{...e,...n})]})}function k(e){const n=(0,f.A)();return(0,m.jsx)(j,{...e,children:u(e.children)},String(n))}},4343:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/api-keys-d1285aefcbaafd274f0fb40fced15b99.png"},625:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(9474);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);