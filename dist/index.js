import f from"./common.js";const u={},i=(n="")=>n.replaceAll("&","&#38;").replaceAll?.("<","&lt;").replaceAll?.(">","&gt;"),l=(n,t)=>t?`<span class="shj-syn-${t}">${n}</span>`:n;async function g(n,t,a){let s,i,l={},o,c=[],e=0,r="string"==typeof t?await(u[t]??=import(`./languages/${t}.js`)):t,d=[..."string"==typeof t?r.default:t.sub];for(;e<n.length;){for(l.t=null,s=d.length;0<s--;){if(i=d[s].expand?f[d[s].expand]:d[s],void 0===c[s]||c[s].i.index<e){if(i.match.lastIndex=e,null===(o=i.match.exec(n))){d.splice(s,1),c.splice(s,1);continue}c[s]={i:o,l:i.match.lastIndex}}c[s].i[0]&&(c[s].i.index<=l.t||null===l.t)&&(l={o:i,t:c[s].i.index,i:c[s].i[0],u:c[s].l})}if(null===l.t)break;a(n.slice(e,l.t),r.type),e=l.u,l.o.sub?await g(l.i,"string"==typeof l.o.sub?l.o.sub:l.o,a):a(l.i,l.o.type)}a(n.slice(e,n.length),r.type)}async function s(n,t,a=!0){let s=a?`<div><div class="shj-numbers">${"<div></div>".repeat(n.split("\n").length)}</div><div>`:"";return await g(n,t,(n,t)=>s+=l(i(n),t)),a&&(s+="</div></div>"),s}async function t(n,t=n.className.match(/shj-lang-([\w-]+)/)?.[1],a="CODE"!=n.tagName){n.dataset.lang=t,n.classList.add("shj-lang-"+t),n.innerHTML=await s(n.textContent,t,a)}let n=async()=>document.querySelectorAll('[class*="shj-lang-"]').forEach(n=>t(n));export{g as tokenize,s as highlightText,t as highlightElement,n as highlightAll};