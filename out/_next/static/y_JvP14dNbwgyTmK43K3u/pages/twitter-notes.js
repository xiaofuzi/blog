(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{260:function(t,e,n){__NEXT_REGISTER_PAGE("/twitter-notes",function(){return t.exports=n(286),{page:t.exports.default}})},286:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=(n(43),n(12)),c=n(13),s=(n(261),function(t){return i.a.createElement("div",{className:"twitter-note"},i.a.createElement("div",{className:"twitter-note-content",dangerouslySetInnerHTML:{__html:t.note.content}}),i.a.createElement("p",null,"记录于 ",t.note.createdAt))}),l=n(10);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"default",function(){return d});var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,b(e).apply(this,arguments))}var n,r,f,d,w;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,a["Component"]),n=e,r=[{key:"render",value:function(){return i.a.createElement("div",{className:""},i.a.createElement(u.a,null),i.a.createElement("div",{className:"container markdown-body"},this.props.notesList.map(function(t){return i.a.createElement("div",{className:"note-container",key:t.key},i.a.createElement(s,{note:t}),i.a.createElement("hr",null))})),i.a.createElement(c.a,null))}}],f=[{key:"getInitialProps",value:(d=o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/notes/notesList");case 2:return e=t.sent,t.abrupt("return",{notesList:e.twitterNotes});case 4:case"end":return t.stop()}},t,this)}),w=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=d.apply(t,e);function a(t){p(o,n,r,a,i,"next",t)}function i(t){p(o,n,r,a,i,"throw",t)}a(void 0)})},function(){return w.apply(this,arguments)})}],r&&y(n.prototype,r),f&&y(n,f),e}()}},[[260,1,0,2]]]);