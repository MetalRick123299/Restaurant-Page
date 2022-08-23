(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function ee(){const e=document.createElement("div");e.setAttribute("id","Contact"),e.classList.add("Contact");const a=[["Contact Us Here:",["Email: FakeEmail@NotReal.com","Phone: 123-456-7890"]],["Hours",["Monday: 12:00 - 22:00","Tuesday: 12:00 - 22:00","Wednesday: 12:00 - 22:00","Thursday: 12:00 - 22:00","Friday: 12:00 - 23:00","Saturday: 12:00 - 23:00","Sunday: 12:00 - 23:00"]],["Address",["123 Fake Street Vancouver, BC V06 0E1"]]];for(let n=0;n<3;n++){const u=document.createElement("div");u.classList.add("col");const t=document.createElement("h2");t.textContent=a[n][0],u.appendChild(t),a[n][1].forEach(r=>{const f=document.createElement("li");f.textContent=r,u.appendChild(f)}),e.appendChild(u)}return e}function M(){const e=document.createElement("div");e.setAttribute("id","Home"),e.classList.add("Home");const a=document.createElement("h1");a.textContent="Freshest Burgers in Your Area",e.appendChild(a);const n=document.createElement("h2");n.textContent="Making burgers since 1945",e.appendChild(n);const u=document.createElement("img");u.setAttribute("src","./src/images/chef.jpg"),u.setAttribute("alt","Chef Pic"),e.appendChild(u);const t=document.createElement("h2");return t.textContent="Order Online or Visit Us",e.appendChild(t),e}var C={},_={};Object.defineProperty(_,"__esModule",{value:!0});_.FORMAT_PLAIN=_.FORMAT_HTML=_.FORMATS=void 0;var U="html";_.FORMAT_HTML=U;var W="plain";_.FORMAT_PLAIN=W;var te=[U,W];_.FORMATS=te;var h={};Object.defineProperty(h,"__esModule",{value:!0});h.UNIT_WORDS=h.UNIT_WORD=h.UNIT_SENTENCES=h.UNIT_SENTENCE=h.UNIT_PARAGRAPHS=h.UNIT_PARAGRAPH=h.UNITS=void 0;var k="words";h.UNIT_WORDS=k;var D="word";h.UNIT_WORD=D;var F="sentences";h.UNIT_SENTENCES=F;var x="sentence";h.UNIT_SENTENCE=x;var B="paragraphs";h.UNIT_PARAGRAPHS=B;var H="paragraph";h.UNIT_PARAGRAPH=H;var ne=[k,D,F,x,B,H];h.UNITS=ne;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.WORDS=void 0;var re=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];N.WORDS=re;var $={},O={};Object.defineProperty(O,"__esModule",{value:!0});O.LINE_ENDINGS=void 0;var ae={POSIX:`
`,WIN32:`\r
`};O.LINE_ENDINGS=ae;var G={},E={},j={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){var r=t.trim();return r.charAt(0).toUpperCase()+r.slice(1)},n=a;e.default=n})(j);var A={exports:{}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){return!!e.exports},u=n;a.default=u})(A,A.exports);var q={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){var t=!1;try{t=navigator.product==="ReactNative"}catch{t=!1}return t},n=a;e.default=n})(q);var z={},R={};Object.defineProperty(R,"__esModule",{value:!0});R.SUPPORTED_PLATFORMS=void 0;var ie={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};R.SUPPORTED_PLATFORMS=ie;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=R,n=function(){var r=!1;try{r=process.platform===a.SUPPORTED_PLATFORMS.WIN32}catch{r=!1}return r},u=n;e.default=u})(z);var I={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(t)).map(function(r,f){return f})},n=a;e.default=n})(I);var V={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(I);function n(r){return r&&r.__esModule?r:{default:r}}var u=function(f,m){var l=(0,a.default)(f);return l.map(function(){return m()})},t=u;e.default=t})(V);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return f.default}});var a=m(j),n=m(A.exports),u=m(q),t=m(z),r=m(I),f=m(V);function m(l){return l&&l.__esModule?l:{default:l}}})(E);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=N,n=E;function u(v,s){if(!(v instanceof s))throw new TypeError("Cannot call a class as a function")}function t(v,s){for(var c=0;c<s.length;c++){var i=s[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(v,i.key,i)}}function r(v,s,c){return s&&t(v.prototype,s),c&&t(v,c),Object.defineProperty(v,"prototype",{writable:!1}),v}function f(v,s,c){return s in v?Object.defineProperty(v,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):v[s]=c,v}var m=function(){function v(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=s.sentencesPerParagraph,i=c===void 0?{max:7,min:3}:c,d=s.wordsPerSentence,o=d===void 0?{max:15,min:5}:d,g=s.random;s.seed;var p=s.words,P=p===void 0?a.WORDS:p;if(u(this,v),f(this,"sentencesPerParagraph",void 0),f(this,"wordsPerSentence",void 0),f(this,"random",void 0),f(this,"words",void 0),i.min>i.max)throw new Error("Minimum number of sentences per paragraph (".concat(i.min,") cannot exceed maximum (").concat(i.max,")."));if(o.min>o.max)throw new Error("Minimum number of words per sentence (".concat(o.min,") cannot exceed maximum (").concat(o.max,")."));this.sentencesPerParagraph=i,this.words=P,this.wordsPerSentence=o,this.random=g||Math.random}return r(v,[{key:"generateRandomInteger",value:function(c,i){return Math.floor(this.random()*(i-c+1)+c)}},{key:"generateRandomWords",value:function(c){var i=this,d=this.wordsPerSentence,o=d.min,g=d.max,p=c||this.generateRandomInteger(o,g);return(0,n.makeArrayOfLength)(p).reduce(function(P,S){return"".concat(i.pluckRandomWord()," ").concat(P)},"").trim()}},{key:"generateRandomSentence",value:function(c){return"".concat((0,n.capitalize)(this.generateRandomWords(c)),".")}},{key:"generateRandomParagraph",value:function(c){var i=this,d=this.sentencesPerParagraph,o=d.min,g=d.max,p=c||this.generateRandomInteger(o,g);return(0,n.makeArrayOfLength)(p).reduce(function(P,S){return"".concat(i.generateRandomSentence()," ").concat(P)},"").trim()}},{key:"pluckRandomWord",value:function(){var c=0,i=this.words.length-1,d=this.generateRandomInteger(c,i);return this.words[d]}}]),v}(),l=m;e.default=l})(G);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=_,n=O,u=r(G),t=E;function r(i){return i&&i.__esModule?i:{default:i}}function f(i,d){if(!(i instanceof d))throw new TypeError("Cannot call a class as a function")}function m(i,d){for(var o=0;o<d.length;o++){var g=d[o];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(i,g.key,g)}}function l(i,d,o){return d&&m(i.prototype,d),o&&m(i,o),Object.defineProperty(i,"prototype",{writable:!1}),i}function v(i,d,o){return d in i?Object.defineProperty(i,d,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[d]=o,i}var s=function(){function i(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a.FORMAT_PLAIN,g=arguments.length>2?arguments[2]:void 0;if(f(this,i),this.format=o,this.suffix=g,v(this,"generator",void 0),a.FORMATS.indexOf(o.toLowerCase())===-1)throw new Error("".concat(o," is an invalid format. Please use ").concat(a.FORMATS.join(" or "),"."));this.generator=new u.default(d)}return l(i,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,t.isReactNative)()&&(0,t.isNode)()&&(0,t.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(o){return this.format===a.FORMAT_HTML?"<p>".concat(o,"</p>"):o}},{key:"formatStrings",value:function(o){var g=this;return o.map(function(p){return g.formatString(p)})}},{key:"generateWords",value:function(o){return this.formatString(this.generator.generateRandomWords(o))}},{key:"generateSentences",value:function(o){return this.formatString(this.generator.generateRandomParagraph(o))}},{key:"generateParagraphs",value:function(o){var g=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,t.makeArrayOfStrings)(o,g)).join(this.getLineEnding())}}]),i}(),c=s;e.default=c})($);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoremIpsum",{enumerable:!0,get:function(){return t.default}}),e.loremIpsum=void 0;var a=_,n=h,u=N,t=r($);function r(m){return m&&m.__esModule?m:{default:m}}var f=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=l.count,s=v===void 0?1:v,c=l.format,i=c===void 0?a.FORMAT_PLAIN:c,d=l.paragraphLowerBound,o=d===void 0?3:d,g=l.paragraphUpperBound,p=g===void 0?7:g,P=l.random,S=l.sentenceLowerBound,X=S===void 0?5:S,T=l.sentenceUpperBound,J=T===void 0?15:T,w=l.units,K=w===void 0?n.UNIT_SENTENCES:w,L=l.words,Y=L===void 0?u.WORDS:L,b=l.suffix,Q=b===void 0?"":b,Z={random:P,sentencesPerParagraph:{max:p,min:o},words:Y,wordsPerSentence:{max:J,min:X}},y=new t.default(Z,i,Q);switch(K){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return y.generateParagraphs(s);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return y.generateSentences(s);case n.UNIT_WORDS:case n.UNIT_WORD:return y.generateWords(s);default:return""}};e.loremIpsum=f})(C);const oe=new C.LoremIpsum({wordsPerSentence:{max:16,min:7}});function ue(){const e=document.createElement("div");e.setAttribute("id","Menu"),e.classList.add("Menu");for(let a=1;a<16;a++){const n=document.createElement("div"),u=document.createElement("h2"),t=document.createElement("img"),r=document.createElement("p");n.classList.add("grid-item"),u.textContent=`Burger ${a}!!`,r.textContent=oe.generateSentences(1),t.setAttribute("src",`./src/images/Burgers/BurgerPic-${a}.png`),t.setAttribute("alt",`Burgeer Pic-${a}`),n.appendChild(u),n.appendChild(t),n.appendChild(r),e.appendChild(n)}return e}function de(){const e=document.createElement("header"),a=document.createElement("h1");return a.textContent="Burger Joint",e.appendChild(a),e.appendChild(se()),e}function se(){const e=document.createElement("nav"),a=document.createElement("button"),n=document.createElement("button"),u=document.createElement("button");return[[a,"Home",M()],[n,"Menu",ue()],[u,"Contact",ee()]].forEach(r=>{r[0].textContent=r[1],r[0].setAttribute("id",r[1]),e.appendChild(r[0]),r[0].addEventListener("click",f=>{const m=document.querySelector("#main");f.target.classList.contains("active")||(ce(r[0]),m.firstChild.id!=r[1]&&(m.firstChild.remove(),m.appendChild(r[2])))})}),a.classList.add("active"),e}function ce(e){document.querySelectorAll("button").forEach(n=>{n!==this&&n.classList.remove("active")}),e.classList.add("active")}function le(){const e=document.createElement("main");return e.setAttribute("id","main"),e.classList.add("main"),e.appendChild(M()),e}function fe(){const e=document.querySelector("#content");e.appendChild(de()),e.appendChild(le())}fe();