var u=":A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD",p=u+"\\-\\.0-9\xB7\u0300-\u036F\u203F-\u2040",e="["+u+"]["+p+"]*",s=`\\s*(\\s+${e}\\s*(=\\s*([^"']\\S*|("|')(\\\\[^]|(?!\\4)[^])*\\4?)?)?\\s*)*`,t={match:RegExp(`<[/?!]?${e}${s}[/?!]?>`,"g"),sub:[{type:"var",match:/^<[\/?!]?[^\s>\/]+/g,sub:[{type:"oper",match:/^<[\/?!]?/g}]},{type:"str",match:/=\s*([^"']\S*|("|')(\\[^]|(?!\2)[^])*\2?)/g,sub:[{type:"oper",match:/^=/g}]},{type:"oper",match:/[\/?!]?>/g},{type:"class",match:RegExp(`${e}`,"gi")}]},a=[{match:/<!--((?!-->)[^])*-->/g,sub:"todo"},{type:"class",match:/<!\[CDATA\[[\s\S]*?\]\]>/gi},t,{type:"var",match:/&(#x?)?[\da-z]{1,8};/gi}];var g=[{type:"class",match:/<!DOCTYPE("[^"]*"|'[^']*'|[^"'>])*>/gi,sub:[{type:"str",match:/"[^"]*"|'[^']*'/g},{type:"oper",match:/^<!|>$/g},{type:"var",match:/DOCTYPE/gi}]},{match:RegExp(`<style${s}>((?!</style>)[^])*</style\\s*>`,"g"),sub:[{match:RegExp(`^<style${s}>`,"g"),sub:t.sub},{match:RegExp(`${t.match}|[^]*(?=</style\\s*>$)`,"g"),sub:"css"},t]},{match:RegExp(`<script${s}>((?!<\/script>)[^])*<\/script\\s*>`,"g"),sub:[{match:RegExp(`^<script${s}>`,"g"),sub:t.sub},{match:RegExp(`${t.match}|[^]*(?=<\/script\\s*>$)`,"g"),sub:"js"},t]},...a];export{g as default};
