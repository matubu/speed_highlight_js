var T=Object.create;var m=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var y=(t,e)=>()=>(t&&(e=t(t=0)),e);var b=(t,e)=>{for(var n in e)m(t,n,{get:e[n],enumerable:!0})},g=(t,e,n,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of D(e))!L.call(t,a)&&a!==n&&m(t,a,{get:()=>e[a],enumerable:!(c=z(e,a))||c.enumerable});return t};var d=(t,e,n)=>(n=t!=null?T(E(t)):{},g(e||!t||!t.__esModule?m(n,"default",{value:t,enumerable:!0}):n,t)),N=t=>g(m({},"__esModule",{value:!0}),t);var r,$=y(()=>{r={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",gray:"\x1B[90m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"}});var j={};b(j,{default:()=>C});var C,v=y(()=>{$();C={deleted:r.red,var:r.red,err:r.red,kwd:r.red,num:r.yellow,class:r.yellow,cmnt:r.gray,insert:r.green,str:r.green,bool:r.cyan,type:r.blue,oper:r.blue,section:r.magenta,func:r.magenta}});var S={};b(S,{highlightText:()=>I,printHighlight:()=>H,setTheme:()=>M});module.exports=N(S);var w={num:{type:"num",match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g},str:{type:"str",match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g},strDouble:{type:"str",match:/"((?!")[^\r\n\\]|\\[^])*"?/g}};var u={};async function f(t,e,n){var c;try{let a,s,i={},o,l=[],h=0,x=typeof e=="string"?await((c=u[e])!=null?c:u[e]=Promise.resolve().then(()=>d(require(`./languages/${e}.js`)))):e,p=[...typeof e=="string"?x.default:e.sub];for(;h<t.length;){for(i.index=null,a=p.length;a-- >0;){if(s=p[a].expand?w[p[a].expand]:p[a],l[a]===void 0||l[a].match.index<h){if(s.match.lastIndex=h,o=s.match.exec(t),o===null){p.splice(a,1),l.splice(a,1);continue}l[a]={match:o,lastIndex:s.match.lastIndex}}l[a].match[0]&&(l[a].match.index<=i.index||i.index===null)&&(i={part:s,index:l[a].match.index,match:l[a].match[0],end:l[a].lastIndex})}if(i.index===null)break;n(t.slice(h,i.index),x.type),h=i.end,i.part.sub?await f(i.match,typeof i.part.sub=="string"?i.part.sub:typeof i.part.sub=="function"?i.part.sub(i.match):i.part,n):n(i.match,i.part.type)}n(t.slice(h,t.length),x.type)}catch{n(t)}}var A=Promise.resolve().then(()=>(v(),j)),I=async(t,e)=>{let n="",c=(await A).default;return await f(t,e,(a,s)=>{var i;return n+=s?`${(i=c[s])!=null?i:""}${a}\x1B[0m`:a}),n},H=async(t,e)=>console.log(await I(t,e)),M=async t=>A=Promise.resolve().then(()=>d(require(`./themes/${t}.js`)));0&&(module.exports={highlightText,printHighlight,setTheme});
