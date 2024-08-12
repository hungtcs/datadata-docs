"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[8173],{1267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>x});var i=t(6070),a=t(5710);const s={title:"Math Module",sidebar_position:4},r=void 0,l={id:"query/dql/math",title:"Math Module",description:"The math module provides math-related functions. This is a global module that can be used directly in DQL.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/query/dql/math.md",sourceDirName:"query/dql",slug:"/query/dql/math",permalink:"/datadata-docs/en-US/docs/query/dql/math",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/dql/math.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1723446646e3,sidebarPosition:4,frontMatter:{title:"Math Module",sidebar_position:4},sidebar:"docs",previous:{title:"DataFrame",permalink:"/datadata-docs/en-US/docs/query/dql/dataframe"},next:{title:"Timestamp",permalink:"/datadata-docs/en-US/docs/query/dql/timestamp"}},d={},x=[{value:"ceil(x)",id:"ceilx",level:2},{value:"copysign(x, y)",id:"copysignx-y",level:2},{value:"fabs(x)",id:"fabsx",level:2},{value:"floor(x)",id:"floorx",level:2},{value:"mod(x, y)",id:"modx-y",level:2},{value:"pow(x, y)",id:"powx-y",level:2},{value:"remainder(x, y)",id:"remainderx-y",level:2},{value:"round(x)",id:"roundx",level:2},{value:"exp(x)",id:"expx",level:2},{value:"sqrt(x)",id:"sqrtx",level:2},{value:"acos(x)",id:"acosx",level:2},{value:"asin(x)",id:"asinx",level:2},{value:"atan(x)",id:"atanx",level:2},{value:"atan2(y, x)",id:"atan2y-x",level:2},{value:"cos(x)",id:"cosx",level:2},{value:"hypot(x, y)",id:"hypotx-y",level:2},{value:"sin(x)",id:"sinx",level:2},{value:"tan(x)",id:"tanx",level:2},{value:"degrees(x)",id:"degreesx",level:2},{value:"radians(x)",id:"radiansx",level:2},{value:"acosh(x)",id:"acoshx",level:2},{value:"asinh(x)",id:"asinhx",level:2},{value:"atanh(x)",id:"atanhx",level:2},{value:"cosh(x)",id:"coshx",level:2},{value:"sinh(x)",id:"sinhx",level:2},{value:"tanh(x)",id:"tanhx",level:2},{value:"log(x, base)",id:"logx-base",level:2},{value:"gamma(x)",id:"gammax",level:2}];function o(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"math"})," module provides math-related functions. This is a global module that can be used directly in DQL."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"a = 3.1415\nb = math.floor(a)\nprint(b) # 3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ceilx",children:"ceil(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the ceiling of x, the smallest integer greater than or equal to x."}),"\n",(0,i.jsx)(n.h2,{id:"copysignx-y",children:"copysign(x, y)"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value with the magnitude of x and the sign of y."}),"\n",(0,i.jsx)(n.h2,{id:"fabsx",children:"fabs(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the absolute value of x as float."}),"\n",(0,i.jsx)(n.h2,{id:"floorx",children:"floor(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the floor of x, the largest integer less than or equal to x."}),"\n",(0,i.jsx)(n.h2,{id:"modx-y",children:"mod(x, y)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the floating-point remainder of x/y. The magnitude of the result is less than y and its sign agrees with that of x."}),"\n",(0,i.jsx)(n.h2,{id:"powx-y",children:"pow(x, y)"}),"\n",(0,i.jsx)(n.p,{children:"Returns x**y, the base-x exponential of y."}),"\n",(0,i.jsx)(n.h2,{id:"remainderx-y",children:"remainder(x, y)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the IEEE 754 floating-point remainder of x/y."}),"\n",(0,i.jsx)(n.h2,{id:"roundx",children:"round(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the nearest integer, rounding half away from zero."}),"\n",(0,i.jsx)(n.h2,{id:"expx",children:"exp(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns e raised to the power x, where e = 2.718281\u2026 is the base of natural logarithms."}),"\n",(0,i.jsx)(n.h2,{id:"sqrtx",children:"sqrt(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the square root of x."}),"\n",(0,i.jsx)(n.h2,{id:"acosx",children:"acos(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the arc cosine of x, in radians."}),"\n",(0,i.jsx)(n.h2,{id:"asinx",children:"asin(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the arc sine of x, in radians."}),"\n",(0,i.jsx)(n.h2,{id:"atanx",children:"atan(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the arc tangent of x, in radians."}),"\n",(0,i.jsx)(n.h2,{id:"atan2y-x",children:"atan2(y, x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns atan(y / x), in radians."}),"\n",(0,i.jsx)(n.p,{children:"The result is between -pi and pi.\nThe vector in the plane from the origin to point (x, y) makes this angle with the positive X axis.\nThe point of atan2() is that the signs of both inputs are known to it, so it can compute the correct\nquadrant for the angle.\nFor example, atan(1) and atan2(1, 1) are both pi/4, but atan2(-1, -1) is -3*pi/4."}),"\n",(0,i.jsx)(n.h2,{id:"cosx",children:"cos(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the cosine of x, in radians."}),"\n",(0,i.jsx)(n.h2,{id:"hypotx-y",children:"hypot(x, y)"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the Euclidean norm, sqrt(x",(0,i.jsx)(n.em,{children:"x + y"}),"y). This is the length of the vector from the origin to point (x, y)."]}),"\n",(0,i.jsx)(n.h2,{id:"sinx",children:"sin(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the sine of x, in radians."}),"\n",(0,i.jsx)(n.h2,{id:"tanx",children:"tan(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the tangent of x, in radians."}),"\n",(0,i.jsx)(n.h2,{id:"degreesx",children:"degrees(x)"}),"\n",(0,i.jsx)(n.p,{children:"Converts angle x from radians to degrees."}),"\n",(0,i.jsx)(n.h2,{id:"radiansx",children:"radians(x)"}),"\n",(0,i.jsx)(n.p,{children:"Converts angle x from degrees to radians."}),"\n",(0,i.jsx)(n.h2,{id:"acoshx",children:"acosh(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the inverse hyperbolic cosine of x."}),"\n",(0,i.jsx)(n.h2,{id:"asinhx",children:"asinh(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the inverse hyperbolic sine of x."}),"\n",(0,i.jsx)(n.h2,{id:"atanhx",children:"atanh(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the inverse hyperbolic tangent of x."}),"\n",(0,i.jsx)(n.h2,{id:"coshx",children:"cosh(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the hyperbolic cosine of x."}),"\n",(0,i.jsx)(n.h2,{id:"sinhx",children:"sinh(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the hyperbolic sine of x."}),"\n",(0,i.jsx)(n.h2,{id:"tanhx",children:"tanh(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the hyperbolic tangent of x."}),"\n",(0,i.jsx)(n.h2,{id:"logx-base",children:"log(x, base)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the logarithm of x in the given base, or natural logarithm by default."}),"\n",(0,i.jsx)(n.h2,{id:"gammax",children:"gamma(x)"}),"\n",(0,i.jsx)(n.p,{children:"Returns the Gamma function of x."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(758);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);