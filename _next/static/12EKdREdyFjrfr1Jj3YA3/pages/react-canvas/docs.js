(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{264:function(e,t,n){__NEXT_REGISTER_PAGE("/react-canvas/docs",function(){return e.exports=n(293),{page:e.exports.default}})},293:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),u=n.n(a),c=(n(31),n(7)),i=n(8);n(17),n(265);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(){var e,n,r,o,a,u,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),p=0;p<i;p++)l[p]=arguments[p];return r=this,n=!(o=(e=f(t)).call.apply(e,[this].concat(l)))||"object"!==s(o)&&"function"!=typeof o?y(r):o,a=y(y(n)),c=function(e){return e.sort(function(e,t){return Number(e.tags[0])-Number(t.tags[0])})},(u="sortMenuItems")in a?Object.defineProperty(a,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[u]=c,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.menu||[0,1],n=this.props.url;return u.a.createElement("aside",{className:"menu menu-side"},t.map(function(t,r){return u.a.createElement("div",{key:r},u.a.createElement("p",{className:"menu-label"},t.title),u.a.createElement("ul",{className:"menu-list"},e.sortMenuItems(t.body).map(function(t){var r=t.key==n.query.id?"is-active":"";return u.a.createElement("li",{key:t.key},u.a.createElement("a",{className:r,href:"".concat(e.props.prefix,"/").concat(t.key)},t.title))})))}))}}])&&l(n.prototype,r),o&&l(n,o),t}();n(267);var b=n(3);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return _});var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,E(t).apply(this,arguments))}var n,r,s,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){return u.a.createElement("div",{className:""},u.a.createElement(c.a,null),u.a.createElement("div",{className:"container markdown-body menu-wrap"},u.a.createElement(m,{prefix:"/react-canvas/docs",menu:this.props.menuObj,url:this.props.url}),u.a.createElement("div",{className:"container menu-body"},u.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.note.content}}))),u.a.createElement(i.a,null))}}],s=[{key:"getInitialProps",value:(l=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.next=3,b.a.get("/notes/getNote",{key:n.id});case 3:return r=e.sent,e.next=6,b.a.get("/notes/notesList");case 6:return a=e.sent,e.abrupt("return",{note:r,menuObj:g(a)});case 8:case"end":return e.stop()}},e,this)}),f=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=l.apply(e,t);function a(e){h(o,n,r,a,u,"next",e)}function u(e){h(o,n,r,a,u,"throw",e)}a(void 0)})},function(e){return f.apply(this,arguments)})}],r&&d(n.prototype,r),s&&d(n,s),t}();function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{title:"The Basics",body:e["react-canvas-basics"]},{title:"Components",body:e["react-canvas-components"]}]}}},[[264,1,0,2]]]);