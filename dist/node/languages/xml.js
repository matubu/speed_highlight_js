var F=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var o=(e,t)=>{for(var p in t)F(e,p,{get:t[p],enumerable:!0})},x=(e,t,p,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of h(t))!y.call(e,a)&&a!==p&&F(e,a,{get:()=>t[a],enumerable:!(s=c(t,a))||s.enumerable});return e};var D=e=>x(F({},"__esModule",{value:!0}),e);var C={};o(C,{default:()=>l,name:()=>u,properties:()=>m,xmlElement:()=>r});module.exports=D(C);var g=":A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD",$=g+"\\-\\.0-9\xB7\u0300-\u036F\u203F-\u2040",u=`[${g}][${$}]*`,m=`\\s*(\\s+${u}\\s*(=\\s*([^"']\\S*|("|')(\\\\[^]|(?!\\4)[^])*\\4?)?)?\\s*)*`,r={match:RegExp(`<[/!?]?${u}${m}[/!?]?>`,"g"),sub:[{type:"var",match:RegExp(`^<[/!?]?${u}`,"g"),sub:[{type:"oper",match:/^<[\/!?]?/g}]},{type:"str",match:/=\s*([^"']\S*|("|')(\\[^]|(?!\2)[^])*\2?)/g,sub:[{type:"oper",match:/^=/g}]},{type:"oper",match:/[\/!?]?>/g},{type:"class",match:RegExp(u,"g")}]},l=[{match:/<!--((?!-->)[^])*-->/g,sub:"todo"},{type:"class",match:/<!\[CDATA\[[\s\S]*?\]\]>/gi},r,{type:"str",match:RegExp(`<\\?${u}([^?]|\\?[^?>])*\\?+>`,"g"),sub:[{type:"var",match:RegExp(`^<\\?${u}`,"g"),sub:[{type:"oper",match:/^<\?/g}]},{type:"oper",match:/\?+>$/g}]},{type:"var",match:/&(#x?)?[\da-z]{1,8};/gi}];0&&(module.exports={name,properties,xmlElement});
