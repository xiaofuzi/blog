(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{253:function(e,t,n){__NEXT_REGISTER_PAGE("/papers",function(){return e.exports=n(254),{page:e.exports.default}})},254:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n(3),o=n.n(r),a=n(0),u=n.n(a),i=(n(56),n(14)),c=n(15),s=n(30),p=n(16),f=n(83),l=n.n(f);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,v(t).apply(this,arguments))}var n,r,f,y,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){return u.a.createElement("div",{className:""},u.a.createElement(i.a,null),u.a.createElement("div",{className:"container markdown-body"},u.a.createElement("h2",null,"Weekly："),u.a.createElement(s.a,{items:this.props.notesList})),u.a.createElement(c.a,null))}}],f=[{key:"getInitialProps",value:(y=o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/notes/notesList");case 2:return t=e.sent,e.abrupt("return",{notesList:t[l.a.noteType.papers].map(function(e,n){return e.newTitle=e.title,n=t[l.a.noteType.papers].length-n,e.title="第"+n+"期",e})});case 4:case"end":return e.stop()}},e,this)}),d=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=y.apply(e,t);function a(e){b(o,n,r,a,u,"next",e)}function u(e){b(o,n,r,a,u,"throw",e)}a(void 0)})},function(){return d.apply(this,arguments)})}],r&&m(n.prototype,r),f&&m(n,f),t}()},83:function(e,t){e.exports={storgePath:"/Users/yangxiaofu/Boostnote",noteType:{posts:"yangxiaofu-blog",papers:"papers"}}}},[[253,1,0,2]]]);