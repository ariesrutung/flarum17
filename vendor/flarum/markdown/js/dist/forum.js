(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["forum/app"];var r=t.n(e);const n=flarum.core.compat["common/app"];var i=t.n(n);const a=flarum.core.compat["common/extend"],c=flarum.core.compat["common/components/TextEditor"];var l=t.n(c);const s=flarum.core.compat["common/utils/BasicEditorDriver"];var d=t.n(s);const u=flarum.core.compat["common/utils/styleSelectedText"];var f=t.n(u);function p(t,o){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},p(t,o)}function h(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,p(t,o)}const k=flarum.core.compat["common/Component"];var y=t.n(k),b=function(t){function o(){return t.apply(this,arguments)||this}return h(o,t),o.prototype.view=function(t){return m("div",{className:"MarkdownToolbar"},t.children)},o}(y());const x=flarum.core.compat["common/helpers/icon"];var v=t.n(x);const g=flarum.core.compat["common/components/Tooltip"];var w=t.n(g),_=function(t){function o(){return t.apply(this,arguments)||this}h(o,t);var e=o.prototype;return e.oncreate=function(o){t.prototype.oncreate.call(this,o)},e.view=function(){var t=m("button",{className:"Button Button--icon Button--link",type:"button","data-hotkey":this.attrs.hotkey,onkeydown:this.keydown.bind(this),onclick:this.attrs.onclick},v()(this.attrs.icon));return this.attrs.title?m(w(),{text:this.attrs.title},t):t},e.keydown=function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.element.click())},o}(y());const O=flarum.core.compat["common/utils/ItemList"];var j=t.n(O),T=navigator.userAgent.match(/Macintosh/)?"⌘":"ctrl",P={header:{prefix:"### "},bold:{prefix:"**",suffix:"**",trimFirst:!0},italic:{prefix:"_",suffix:"_",trimFirst:!0},strikethrough:{prefix:"~~",suffix:"~~",trimFirst:!0},quote:{prefix:"> ",multiline:!0,surroundWithNewlines:!0},code:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"},link:{prefix:"[",suffix:"](https://)",replaceNext:"https://",scanFor:"https?://"},image:{prefix:"![",suffix:"](https://)",replaceNext:"https://",scanFor:"https?://"},unordered_list:{prefix:"- ",multiline:!0,surroundWithNewlines:!0},ordered_list:{prefix:"1. ",multiline:!0,orderedList:!0},spoiler:{prefix:">!",suffix:"!<",blockPrefix:">! ",multiline:!0,trimFirst:!0}},S=function(t,o){f()(o.el,P[t])};function I(t,o,e){return function(r){r.key===o&&(r.metaKey&&"⌘"===T||r.ctrlKey&&"ctrl"===T)&&(r.preventDefault(),S(t,e))}}function M(t){var o=this,e="function"==typeof t?t():new(j());function r(t,o){return i().translator.trans("flarum-markdown.lib.composer."+t+"_tooltip")+(o?" <"+T+"-"+o+">":"")}var n=function(t){return function(){return S(t,o.attrs.composer.editor)}};return e.add("header",m(_,{title:r("header"),icon:"fas fa-heading",onclick:n("header")}),1e3),e.add("bold",m(_,{title:r("bold","b"),icon:"fas fa-bold",onclick:n("bold")}),900),e.add("italic",m(_,{title:r("italic","i"),icon:"fas fa-italic",onclick:n("italic")}),800),e.add("strikethrough",m(_,{title:r("strikethrough"),icon:"fas fa-strikethrough",onclick:n("strikethrough")}),700),e.add("quote",m(_,{title:r("quote"),icon:"fas fa-quote-left",onclick:n("quote")}),600),e.add("spoiler",m(_,{title:r("spoiler"),icon:"fas fa-exclamation-triangle",onclick:n("spoiler")}),500),e.add("code",m(_,{title:r("code"),icon:"fas fa-code",onclick:n("code")}),400),e.add("link",m(_,{title:r("link"),icon:"fas fa-link",onclick:n("link")}),300),e.add("image",m(_,{title:r("image"),icon:"fas fa-image",onclick:n("image")}),200),e.add("unordered_list",m(_,{title:r("unordered_list"),icon:"fas fa-list-ul",onclick:n("unordered_list")}),100),e.add("ordered_list",m(_,{title:r("ordered_list"),icon:"fas fa-list-ol",onclick:n("ordered_list")}),0),e}function F(){return F=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},F.apply(this,arguments)}const N=F({},{"markdown/components/MarkdownButton":_,"markdown/components/MarkdownToolbar":b}),q=flarum.core;r().initializers.add("flarum-markdown",(function(t){(0,a.extend)(d().prototype,"keyHandlers",(function(t){t.add("bold",I("bold","b",this)),t.add("italic",I("italic","i",this))})),l().prototype.markdownToolbarItems?(0,a.override)(l().prototype,"markdownToolbarItems",M):l().prototype.markdownToolbarItems=M,(0,a.extend)(l().prototype,"toolbarItems",(function(t){t.add("markdown",m(b,{for:this.textareaId,setShortcutHandler:function(t){return shortcutHandler=t}},this.markdownToolbarItems().toArray()),100)}))})),Object.assign(q.compat,N)})(),module.exports=o})();
//# sourceMappingURL=forum.js.map