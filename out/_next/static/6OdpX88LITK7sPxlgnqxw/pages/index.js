(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(t,e,n){__NEXT_REGISTER_PAGE("/",function(){return t.exports=n(252),{page:t.exports.default}})},252:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v});var r=n(6),o=n.n(r),u=n(0),a=n.n(u),i=(n(11),n(22)),c=n(23),s=n(31),f=n(24);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,m(e).apply(this,arguments))}var n,r,l,v,w;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,u["Component"]),n=e,r=[{key:"render",value:function(){return a.a.createElement("div",{className:""},a.a.createElement(i.a,null),a.a.createElement("div",{className:"container markdown-body"},a.a.createElement("h2",null,"Recent posts:"),a.a.createElement(s.a,{items:this.props.notesList})),a.a.createElement(c.a,null))}}],l=[{key:"getInitialProps",value:(v=o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("/notes/notesList");case 2:return e=t.sent,t.abrupt("return",{notesList:e["yangxiaofu-blog"]});case 4:case"end":return t.stop()}},t,this)}),w=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=v.apply(t,e);function u(t){p(o,n,r,u,a,"next",t)}function a(t){p(o,n,r,u,a,"throw",t)}u(void 0)})},function(){return w.apply(this,arguments)})}],r&&y(n.prototype,r),l&&y(n,l),e}()}},[[251,1,0]]]);