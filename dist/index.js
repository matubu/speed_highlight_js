import expandData from"./common.js";const langs={},sanitize=(t="")=>t.replaceAll("&","&#38;").replaceAll?.("<","&lt;").replaceAll?.(">","&gt;"),toSpan=(t,e)=>e?`<span class="shj-syn-${e}">${t}</span>`:t;async function tokenize(t,e,a){let n,l,i={},h,s=[],c=0,d="string"==typeof e?await(langs[e]??=import(`./languages/${e}.js`)):{};for("string"==typeof e&&(e=[...d.default]);c<t.length;){for(i.index=null,n=e.length;0<n--;){if(l=e[n].expand?expandData[e[n].expand]:e[n],void 0===s[n]||s[n].match.index<c){if(l.match.lastIndex=c,null===(h=l.match.exec(t))){e.splice(n,1),s.splice(n,1);continue}s[n]={match:h,lastIndex:l.match.lastIndex}}s[n].match[0]&&(s[n].match.index<=i.index||null===i.index)&&(i={part:l,index:s[n].match.index,match:s[n].match[0],end:s[n].lastIndex})}if(null===i.index)break;a(t.slice(c,i.index),d.type),c=i.end,i.part.sub?await tokenize(i.match,i.part.sub,a):a(i.match,i.part.type)}a(t.slice(c,t.length),d.type)}async function highlightText(t,e,a=!0){let n=a?`<div><div class="shj-numbers">${"<div></div>".repeat(t.split("\n").length)}</div><div>`:"";return await tokenize(t,e,(t,e)=>n+=toSpan(sanitize(t),e)),a&&(n+="</div></div>"),n}async function highlightElement(t,e=t.className.match(/shj-lang-([\w-]+)/)?.[1],a="CODE"!=t.tagName){t.dataset.lang=e,t.classList.add("shj-lang-"+e),t.innerHTML=await highlightText(t.textContent,e,a)}let highlightAll=async()=>document.querySelectorAll('[class*="shj-lang-"]').forEach(t=>highlightElement(t));export{tokenize,highlightText,highlightElement,highlightAll};