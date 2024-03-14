"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[1270],{6955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var r=t(3274),a=t(3006),s=t(5435),o=t(6062);function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u70b9\u51fb\u6b64\u5904\u5728 ",(0,r.jsx)(n.a,{href:"https://goplay.tools/snippet/8J8kAq6t16o",children:"Go Better Playground"})," \u6216 ",(0,r.jsx)(n.a,{href:"https://go.dev/play/p/8J8kAq6t16o",children:"Go Playground"})," \u4e0a\u8fd0\u884c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'package main\n\nimport (\n\t"bytes"\n\t"crypto/aes"\n\t"crypto/cipher"\n\t"crypto/md5"\n\t"crypto/rand"\n\t"encoding/hex"\n\t"errors"\n\t"fmt"\n\t"io"\n)\n\ntype APITokenPayload struct {\n\tUID     string `json:"uid"`\n\tHost    string `json:"host"`\n\tExpired uint64 `json:"expired"`\n}\n\nfunc PadLength(slice_length, blocksize int) (padlen int) {\n\tpadlen = blocksize - slice_length%blocksize\n\tif padlen == 0 {\n\t\tpadlen = blocksize\n\t}\n\treturn padlen\n}\n\nfunc PKCS7Pad(message []byte, blockSize int) (padded []byte, err error) {\n\tif blockSize < 1<<1 {\n\t\terr = errors.New("block size is too small (minimum is 2 bytes)")\n\t\treturn\n\t}\n\tif blockSize < 1<<8 {\n\t\tpadLen := PadLength(len(message), blockSize)\n\n\t\tpadding := bytes.Repeat([]byte{byte(padLen)}, padLen)\n\n\t\tpadded = append(message, padding...)\n\t\treturn padded, nil\n\t}\n\n\terr = errors.New("unsupported block size")\n\treturn\n}\n\nfunc Encrypt(key string, value []byte) (result string, err error) {\n\tvar hash = md5.New()\n\n\t_, err = hash.Write([]byte(key))\n\tif err != nil {\n\t\treturn "", err\n\t}\n\n\tvar block cipher.Block\n\tblock, err = aes.NewCipher(hash.Sum(nil))\n\tif err != nil {\n\t\treturn "", err\n\t}\n\n\thash.Reset()\n\thash.Write(value)\n\tvalue = append(value, hash.Sum(nil)...)\n\tvalue, err = PKCS7Pad(value, aes.BlockSize)\n\tif err != nil {\n\t\treturn "", err\n\t}\n\n\tvar iv = make([]byte, aes.BlockSize)\n\tif _, err := io.ReadFull(rand.Reader, iv); err != nil {\n\t\treturn "", err\n\t}\n\n\tvar stream = cipher.NewCFBEncrypter(block, iv)\n\tvar ciphertext = make([]byte, len(value))\n\tstream.XORKeyStream(ciphertext, value)\n\n\treturn hex.EncodeToString(append(iv, ciphertext...)), nil\n}\n\nfunc main() {\n\tvar err error = nil\n\tvar accessKey = "1c67be15cb6a3be5a9b86dffca7f348f"\n\tvar secretKey = "500c33c5485e4d7eb5c89dd8f33084dc"\n\n\tvar payload = `{ "uid": "abc", "host": "www.example.com", expired:  }`\n\n\tvar token string\n\ttoken, err = Encrypt(secretKey, []byte(payload))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Printf("token: %s.%s\\n", accessKey, token)\n}\n\n'})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u70b9\u51fb\u6b64\u5904\u5728 ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/edit/vitejs-vite-gwahff?file=src%2Fmain.ts",children:"Stackblitz"})," \u4e0a\u8fd0\u884c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:"import AES from 'crypto-js/aes';\nimport Hex from 'crypto-js/enc-hex';\nimport Utf8 from 'crypto-js/enc-utf8';\nimport WordArray from 'crypto-js/lib-typedarrays';\nimport MD5 from 'crypto-js/md5';\nimport CFB from 'crypto-js/mode-cfb';\nimport Pkcs7 from 'crypto-js/pad-pkcs7';\n\nconst accessKey = '1c67be15cb6a3be5a9b86dffca7f348f';\nconst secretKey = '500c33c5485e4d7eb5c89dd8f33084dc';\n\nasync function encrypt(secretKey: string, payload: string) {\n  const iv = WordArray.random(16);\n  const key = MD5(secretKey);\n  const value = Utf8.parse(payload).clone().concat(MD5(payload));\n  const encrypted = AES.encrypt(value, key, {\n    iv: iv,\n    mode: CFB,\n    padding: Pkcs7,\n  });\n  return iv.clone().concat(encrypted.ciphertext).toString(Hex);\n}\n\nasync function main() {\n  const token = await encrypt(\n    secretKey,\n    JSON.stringify({ uid: 'abc', host: 'www.example.com', expired: 1710313863 })\n  );\n  console.log(`api-token: ${accessKey}.${token}`);\n}\n\nmain().catch((err) => console.error(err));\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}const u={tags:[],draft:!1,title:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_label:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_position:2,last_update:{date:new Date("2024-03-04T00:00:00.000Z"),author:"hungtcs"}},p=void 0,h={id:"overview/authentication/index",title:"\u8eab\u4efd\u8ba4\u8bc1",description:"Datadata API \u4f9d\u8d56 API-Token \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0cAPI-Token \u7531 AccessKey \u548c\u901a\u8fc7 SecretKey \u52a0\u5bc6\u7684 Payload \u7ec4\u6210\uff0c",source:"@site/development/overview/authentication/index.mdx",sourceDirName:"overview/authentication",slug:"/overview/authentication/",permalink:"/datadata-docs/en-US/development/overview/authentication/",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/development/overview/authentication/index.mdx",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1709510400,formattedLastUpdatedAt:"Mar 4, 2024",sidebarPosition:2,frontMatter:{tags:[],draft:!1,title:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_label:"\u8eab\u4efd\u8ba4\u8bc1",sidebar_position:2,last_update:{date:"2024-03-04T00:00:00.000Z",author:"hungtcs"}},sidebar:"development",previous:{title:"\u4ecb\u7ecd",permalink:"/datadata-docs/en-US/development/overview/introduction"},next:{title:"FAQ",permalink:"/datadata-docs/en-US/development/overview/faq"}},m={},y=[{value:"\u521b\u5efa\u60a8\u7684 API-Key",id:"\u521b\u5efa\u60a8\u7684-api-key",level:2},{value:"Payload",id:"payload",level:2},{value:"\u751f\u6210 API-Token",id:"\u751f\u6210-api-token",level:2},{value:"\u53d1\u8d77\u8bf7\u6c42",id:"\u53d1\u8d77\u8bf7\u6c42",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Datadata API \u4f9d\u8d56 API-Token \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0cAPI-Token \u7531 ",(0,r.jsx)(n.strong,{children:"AccessKey"})," \u548c\u901a\u8fc7 ",(0,r.jsx)(n.strong,{children:"SecretKey"})," \u52a0\u5bc6\u7684 Payload \u7ec4\u6210\uff0c\n\u672c\u7ae0\u5c06\u8be6\u7ec6\u4ecb\u7ecd SecretKey \u7684\u83b7\u53d6\u65b9\u5f0f\u548c\u5bf9 Payload \u7684\u52a0\u5bc6\u6b65\u9aa4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u60a8\u7684-api-key",children:"\u521b\u5efa\u60a8\u7684 API-Key"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"API-Key \u7531 AccessKey \u548c SecretKey \u4e24\u90e8\u5206\u7ec4\u6210\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u751f\u6210\u65b0\u7684 API-Key\uff0c\u8bf7\u767b\u5f55\u540e\u70b9\u51fb\u9876\u90e8\u5bfc\u822a\u7684\u7528\u6237\u5934\u50cf\uff0c\u9009\u62e9",(0,r.jsx)(n.code,{children:"\u7528\u6237\u8bbe\u7f6e"})," -> ",(0,r.jsx)(n.code,{children:"API"})," -> ",(0,r.jsx)(n.code,{children:"\u521b\u5efa API Key"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u8f93\u5165 API-Key \u540d\u79f0\uff0c\u540d\u79f0\u7528\u4e8e\u5e2e\u52a9\u60a8\u8bb0\u5fc6\u6b64 API-Key \u7684\u7528\u9014\uff0c\u70b9\u51fb\u786e\u5b9a\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u770b\u5230\u5f53\u524d API-Key \u5bf9\u5e94\u7684 AccessKey \u548c SecretKey \u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"API-Keys",src:t(8270).A+"",width:"1850",height:"450"})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["AccessKey \u662f\u516c\u5f00\u7684\uff0c\u7528\u6237\u533a\u5206\u7528\u6237\u8eab\u4efd\uff1bSecretKey \u662f\u79c1\u5bc6\u7684\uff0c\u7528\u4e8e\u52a0\u5bc6 Payload \u6570\u636e\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u60a8\u7684 ",(0,r.jsx)(n.strong,{children:"SecretKey"}),"\uff01"]})}),"\n",(0,r.jsx)(n.h2,{id:"payload",children:"Payload"}),"\n",(0,r.jsx)(n.p,{children:"Payload \u662f API-Token \u4e2d\u643a\u5e26\u7684\u4fe1\u606f\uff0c\u5176\u683c\u5f0f\u4e3a JSON\uff0c\u5305\u62ec 3 \u4e2a\u5b57\u6bb5\uff0c\u5982\u4e0b\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5b57\u6bb5"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expired"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"\u53ef\u9009\u3002Token \u8fc7\u671f\u65f6\u95f4\uff0c\u503c\u662f Unix \u65f6\u95f4\uff0c\u5373\u81ea 1970 \u5e74 1 \u6708 1 \u65e5\uff08\u4e16\u754c\u534f\u8c03\u65f6\uff09\u8d77\u7ecf\u8fc7\u7684\u79d2\u6570\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"host"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u53ef\u9009\u3002 \u7b7e\u53d1\u6b64 Token \u7684\u8eab\u4efd\uff0c\u503c\u662f Token \u7b7e\u53d1\u65b9\u7684\u57df\u540d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uid"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u53ef\u9009\u3002 \u5b50\u7528\u6237\u7684 UID\uff0c\u5982\u679c\u6709\u503c\uff0c\u5219\u8ba4\u4e3a\u662f\u5b50\u7528\u6237\u3002"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "uid": "007",\n  "host": "www.example.com",\n  "expired": 1741058185\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u751f\u6210-api-token",children:"\u751f\u6210 API-Token"}),"\n",(0,r.jsxs)(n.p,{children:["API-Token \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u7b2c\u4e00\u90e8\u5206\u662f AccessKey \uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u4f7f\u7528 SecretKey \u548c AES-CFB \u52a0\u5bc6\u7b97\u6cd5\u5bf9 Payload \u52a0\u5bc6\u540e\u7684\u5bc6\u6587\uff0c\u4e2d\u95f4\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"."})," \u8fde\u63a5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u52a0\u5bc6\u7b97\u6cd5\u7684\u793a\u4f8b\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4f7f\u7528\u6211\u4eec\u7684SDK\uff0c\u4ee5\u4fbf\u5feb\u901f\u96c6\u6210\u800c\u4e0d\u7528\u7f16\u5199\u592a\u591a\u4ee3\u7801\uff0c\u8bbf\u95ee\n",(0,r.jsx)(n.a,{href:"https://github.com/orgs/datadata-team/repositories?q=sdk",children:"https://github.com/orgs/datadata-team/repositories?q=sdk"})," \u67e5\u627e\u9002\u5408\u60a8\u8bed\u8a00\u7684SDK\u3002"]})}),"\n",(0,r.jsxs)(o.A,{groupId:"programming-language",className:"unique-tabs",queryString:!0,children:[(0,r.jsx)(s.A,{value:"go",label:"Go",default:!0,children:(0,r.jsx)(c,{})}),(0,r.jsx)(s.A,{value:"node",label:"Node",children:(0,r.jsx)(d,{})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u53d1\u8d77\u8bf7\u6c42",children:"\u53d1\u8d77\u8bf7\u6c42"}),"\n",(0,r.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u4e00\u6b65\u4e4b\u540e\uff0c\u6211\u4eec\u62ff\u5230\u4e86 API-Token \uff0c\u73b0\u5728\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u53d1\u8d77 API \u8bf7\u6c42\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53d1\u8d77\u4efb\u4f55 API \u8bf7\u6c42\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5c06\u4e0a\u4e00\u6b65\u83b7\u53d6\u5230\u7684 API-Token \u9644\u52a0\u5230\u8bf7\u6c42\u4e2d\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5c06 Token \u6dfb\u52a0\u5230 Request Header \u4e2d\uff0c\u8fd9\u662f\u6211\u4eec\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u5c5e\u6027\u540d\u79f0\u662f ",(0,r.jsx)(n.code,{children:"x-datadata-api-token"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5c06 Token \u6dfb\u52a0\u5230 Query \u4e2d\uff0c\u9002\u7528\u4e8e\u60a8\u65e0\u6cd5\u4fee\u6539 Request Header \u7684\u60c5\u51b5\uff0c\u901a\u5e38\u662f\u4e0d\u63a8\u8350\u7684\u3002\u5c5e\u6027\u540d\u79f0\u662f ",(0,r.jsx)(n.code,{children:"api_token"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u4f7f\u7528 Curl \u53d1\u8d77\u8bf7\u6c42\uff0c\u5206\u9875\u83b7\u53d6\u5f53\u524d\u5f53\u524d\u7528\u6237\u6240\u6709\u7684 Charts \u5217\u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl https://www.datadata.cn/api/v1/charts \\\n  -H 'x-datadata-api-token: <your-token>'\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u66f4\u591a API \u7aef\u70b9\u8bf7\u67e5\u770b API-Endpoints \u7ae0\u8282\u3002"})})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},5435:(e,n,t)=>{t.d(n,{A:()=>o});t(9474);var r=t(8923);const a={tabItem:"tabItem_lDsT"};var s=t(3274);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},6062:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(9474),a=t(8923),s=t(8866),o=t(241),i=t(2052),c=t(9127),l=t(7948),d=t(6952);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:t,groupId:a}),[y,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=l??y;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(6032);const b={tabList:"tabList_GwQS",tabItem:"tabItem_fTkB"};var x=t(3274);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(l(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=y(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(n))}},8270:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/api-keys-d1285aefcbaafd274f0fb40fced15b99.png"},3006:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(9474);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);