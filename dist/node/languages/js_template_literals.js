var h=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var f=(l,e)=>{for(var t in e)h(l,t,{get:e[t],enumerable:!0})},x=(l,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of u(e))!c.call(l,n)&&n!==t&&h(l,n,{get:()=>e[n],enumerable:!(i=a(e,n))||i.enumerable});return l};var d=l=>x(h({},"__esModule",{value:!0}),l);var g={};f(g,{default:()=>s,type:()=>$});module.exports=d(g);var s=[{match:new class{exec(l){let e=this.lastIndex,t,i=n=>{for(;++e<l.length-2;)if(l[e]=="{")i();else if(l[e]=="}")return};for(;e<l.length;e++)if(l[e-1]!="\\"&&l[e]=="$"&&l[e+1]=="{")return t=e++,i(e),this.lastIndex=e+1,{index:t,0:l.slice(t,e+1)};return null}},sub:[{type:"kwd",match:/^\${|}$/g},{match:/(?!^\$|{)[^]+(?=}$)/g,sub:"js"}]}],$="str";0&&(module.exports={type});
