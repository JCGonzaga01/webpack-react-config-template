!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(T,o)&&T[o]&&l.push(T[o][0]),T[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(H&&H(n);l.length;)l.shift()();return N.push.apply(N,c||[]),t()}function t(){for(var e,n=0;n<N.length;n++){for(var t=N[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==T[a]&&(r=!1)}r&&(N.splice(n--,1),e=I(I.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!x[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(b[t]=n[t]);0==--v&&0===g&&S()}(e,n),r&&r(e,n)};var o,a=!0,i="8c9350439a35ab0d6a8d",c={},s=[],l=[];function u(n){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(b={})[n]=e[n],f("ready");break;case"ready":D(n);break;case"prepare":case"check":case"dispose":case"apply":(m=m||[]).push(n)}},check:E,apply:_,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:c[n]};return o=void 0,t}var d=[],p="idle";function f(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var h,b,y,m,v=0,g=0,k={},w={},x={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=I.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f(P()?"ready":"idle"),null;w={},k={},x=e.c,y=e.h,f("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));for(var t in b={},T)j(t);return"prepare"===p&&0===g&&0===v&&S(),n}));var n}function j(e){x[e]?(w[e]=!0,v++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+i+".hot-update.js",document.head.appendChild(n)}(e)):k[e]=!0}function S(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return _(a)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in b)Object.prototype.hasOwnProperty.call(b,t)&&n.push(O(t));e.resolve(n)}}function _(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function n(t){var r,a,l,u,d;function p(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((u=R[a])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(u.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<u.parents.length;c++){var s=u.parents[c],l=R[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[a]?(t[s]||(t[s]=[]),h(t[s],[a])):(delete t[s],n.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}P();var v={},g=[],k={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var E in b)if(Object.prototype.hasOwnProperty.call(b,E)){var j;d=O(E),j=b[E]?p(d):{type:"disposed",moduleId:E};var S=!1,_=!1,D=!1,N="";switch(j.chain&&(N="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+j.moduleId+N));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+N));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(S=new Error("Aborted because "+d+" is not accepted"+N));break;case"accepted":t.onAccepted&&t.onAccepted(j),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(S)return f("abort"),Promise.reject(S);if(_)for(d in k[d]=b[d],h(g,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(v[d]||(v[d]=[]),h(v[d],j.outdatedDependencies[d]));D&&(h(g,[j.moduleId]),k[d]=w)}var U,A=[];for(a=0;a<g.length;a++)d=g[a],R[d]&&R[d].hot._selfAccepted&&k[d]!==w&&!R[d].hot._selfInvalidated&&A.push({module:d,parents:R[d].parents.slice(),errorHandler:R[d].hot._selfAccepted});f("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&function(e){delete T[e]}(e)}));var M,H,L=g.slice();for(;L.length>0;)if(d=L.pop(),u=R[d]){var C={},q=u.hot._disposeHandlers;for(l=0;l<q.length;l++)(r=q[l])(C);for(c[d]=C,u.hot.active=!1,delete R[d],delete v[d],l=0;l<u.children.length;l++){var z=R[u.children[l]];z&&((U=z.parents.indexOf(d))>=0&&z.parents.splice(U,1))}}for(d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&(u=R[d]))for(H=v[d],l=0;l<H.length;l++)M=H[l],(U=u.children.indexOf(M))>=0&&u.children.splice(U,1);f("apply"),void 0!==y&&(i=y,y=void 0);for(d in b=void 0,k)Object.prototype.hasOwnProperty.call(k,d)&&(e[d]=k[d]);var B=null;for(d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&(u=R[d])){H=v[d];var J=[];for(a=0;a<H.length;a++)if(M=H[a],r=u.hot._acceptedDependencies[M]){if(-1!==J.indexOf(r))continue;J.push(r)}for(a=0;a<J.length;a++){r=J[a];try{r(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:H[a],error:e}),t.ignoreErrored||B||(B=e)}}}for(a=0;a<A.length;a++){var W=A[a];d=W.module,s=W.parents,o=d;try{I(d)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||B||(B=n),B||(B=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||B||(B=e)}}if(B)return f("fail"),Promise.reject(B);if(m)return n(t).then((function(e){return g.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return f("idle"),new Promise((function(e){e(g)}))}(n=n||{})}function P(){if(m)return b||(b={}),m.forEach(D),m=void 0,!0}function D(n){Object.prototype.hasOwnProperty.call(b,n)||(b[n]=e[n])}var R={},T={0:0},N=[];function I(n){if(R[n])return R[n].exports;var t=R[n]={i:n,l:!1,exports:{},hot:u(n),parents:(l=s,s=[],l),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=R[e];if(!n)return I;var t=function(t){return n.hot.active?(R[t]?-1===R[t].parents.indexOf(e)&&R[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),I(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var a in I)Object.prototype.hasOwnProperty.call(I,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===p&&f("prepare"),g++,I.e(e).then(n,(function(e){throw n(),e}));function n(){g--,"prepare"===p&&(k[e]||j(e),0===g&&0===v&&S())}},t.t=function(e,n){return 1&n&&(e=t(e)),I.t(e,-2&n)},t}(n)),t.l=!0,t.exports}I.e=function(e){var n=[],t=T[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=T[e]=[n,r]}));n.push(t[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,I.nc&&a.setAttribute("nonce",I.nc),a.src=function(e){return I.p+""+({}[e]||e)+"."+i+".js"}(e);var c=new Error;o=function(n){a.onerror=a.onload=null,clearTimeout(s);var t=T[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,t[1](c)}T[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(n)},I.m=e,I.c=R,I.d=function(e,n,t){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)I.d(t,r,function(n){return e[n]}.bind(null,r));return t},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/",I.oe=function(e){throw console.error(e),e},I.h=function(){return i};var U=window.webpackJsonp=window.webpackJsonp||[],A=U.push.bind(U);U.push=n,U=U.slice();for(var M=0;M<U.length;M++)n(U[M]);var H=A;N.push([40,1]),t()}({13:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t.n(r)()(!1);o.push([e.i,"html {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n",""]),n.default=o},14:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t.n(r),a=t(11),i=t.n(a),c=t(24),s=t(25),l=t(26),u=o()(!1),d=i()(c.a),p=i()(s.a),f=i()(l.a);u.push([e.i,"html,\nbody,\n.root {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n}\nbody,\n.app {\n  background: white;\n}\n\n/* main page */\n\n.list-books-title {\n  padding: 10px 0;\n  background: #2e7c31;\n  text-align: center;\n}\n.list-books-title h1 {\n  font-weight: 400;\n  margin: 0;\n  color: white;\n}\n\n.list-books-content {\n  padding: 0 0 80px;\n  flex: 1;\n}\n\n.bookshelf {\n  padding: 0 10px 20px;\n}\n\n@media (min-width: 600px) {\n  .bookshelf {\n    padding: 0 20px 40px;\n  }\n}\n\n.bookshelf-title {\n  border-bottom: 1px solid #dedede;\n}\n.bookshelf-books {\n  text-align: center;\n}\n\n.open-search {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n}\n.open-search a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #2e7d32;\n  background-image: url("+d+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 28px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  font-size: 0;\n}\n\n/* search page */\n\n.search-books-bar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  display: flex;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);\n  background-color: #fff;\n}\n.search-books-input-wrapper {\n  flex: 1;\n  background: #e9e;\n}\n.search-books-bar input {\n  width: 100%;\n  padding: 15px 10px;\n  font-size: 1.25em;\n  border: none;\n  outline: none;\n}\n\n.close-search {\n  display: block;\n  top: 20px;\n  left: 15px;\n  width: 50px;\n  height: 53px;\n  background: white;\n  background-image: url("+p+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 28px;\n  font-size: 0;\n}\n\n.search-books-results {\n  padding: 80px 10px 20px;\n}\n\n/* books grid */\n\n.books-grid {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.books-grid li {\n  padding: 10px 15px;\n  text-align: left;\n}\n\n.book {\n  width: 140px;\n}\n.book-title,\n.book-authors {\n  font-size: 0.8em;\n}\n.book-title {\n  margin-top: 10px;\n}\n.book-authors {\n  color: #999;\n}\n\n.book-top {\n  position: relative;\n  height: 200px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.book-shelf-changer {\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #60ac5d;\n  background-image: url("+f+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 20px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.book-shelf-changer select {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* book cover */\n\n.book-cover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background: #eee;\n}\n.book-cover-title {\n  padding: 20px 10px 0;\n  text-align: center;\n  font-size: 0.8em;\n}\n",""]),n.default=u},18:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1),i=t.n(a),c=t(7),s=function(e){var n=e.bookId,t=e.shelf,r=e.bookCoverImage,a=e.bookTitle,i=e.bookAuthors,s=e.handleStatusUpdate;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(r,'")')}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t,onChange:function(e){s({id:n},e.target.value)}},o.a.createElement("option",{value:"none",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a),o.a.createElement("div",{className:"book-authors"},i.map((function(e){return o.a.createElement("span",{key:e},e,o.a.createElement("br",null))}))),o.a.createElement("div",{className:"book-authors"},o.a.createElement(c.b,{className:"more",to:"/details/".concat(n)},"More...")))};s.propTypes={bookId:i.a.string.isRequired,shelf:i.a.string,bookCoverImage:i.a.string,bookTitle:i.a.string,bookAuthors:i.a.array,handleStatusUpdate:i.a.func.isRequired},s.defaultProps={shelf:"none",bookCoverImage:"",bookTitle:"Title",bookAuthors:["No Authors"]},n.a=s},24:function(e,n,t){"use strict";n.a=t.p+"1b5d9b6afb5557f7992cc85713ca0faf.svg"},25:function(e,n,t){"use strict";n.a=t.p+"cd079cab42defead9875f9270c5ad67c.svg"},26:function(e,n,t){"use strict";n.a=t.p+"4378492a3a09dbfc31ff4b858fccb74a.svg"},38:function(e,n,t){var r=t(20),o=t(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(13,(function(){"string"==typeof(o=(o=t(13)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},39:function(e,n,t){var r=t(20),o=t(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(14,(function(){"string"==typeof(o=(o=t(14)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},40:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(21),i=t.n(a),c=t(7),s=t(2),l=t(22),u=t.n(l),d=(t(33),t(9)),p=t(1),f=t.n(p),h=t(18);function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var y=function(e){var n=e.bookShelfTitle,t=e.books,r=e.handleStatusUpdate;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},n),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.length>0&&t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(h.a,b({shelf:e.shelf,bookId:e.id,bookCoverImage:e.imageLinks.thumbnail,bookTitle:e.title,bookAuthors:e.authors,handleStatusUpdate:r},e)))})))))};y.propTypes={bookShelfTitle:f.a.string,books:f.a.array,handleStatusUpdate:f.a.func.isRequired},y.defaultProps={bookShelfTitle:"No title set",books:[]};var m=y,v=function(e){var n=e.books,t=e.handleBookStatusUpdate;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads Project")),o.a.createElement("div",{className:"list-books-content"},[{name:"Currently Reading",slug:"currentlyReading"},{name:"Want to Read",slug:"wantToRead"},{name:"Read",slug:"read"}].map((function(e){return o.a.createElement(m,{key:e.slug,bookShelfTitle:e.name,books:n.filter((function(n){return n.shelf===e.slug})),handleStatusUpdate:t})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(c.b,{to:"/search"},"Add a book")))};v.propTypes={books:f.a.array,handleBookStatusUpdate:f.a.func.isRequired},v.defaultProps={books:[]};var g=v;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,n){return(O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function E(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=_(e);if(n){var o=_(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return j(this,t)}}function j(e,n){return!n||"object"!==k(n)&&"function"!=typeof n?S(e):n}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var D=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}(i,e);var n,t,r,a=E(i);function i(){var e;w(this,i);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return P(S(e=a.call.apply(a,[this].concat(t))),"state",{searchedList:[],query:""}),e}return n=i,(t=[{key:"handleSearchUpdate",value:function(e){var n=this,t=e.target.value;this.setState({query:t}),d.c(t,20).then((function(e){for(var t=e,r=n.props.books,o=0;o<t.length;o++)for(var a=0;a<r.length;a++){if(t[o].id===r[a].id){t[o].shelf=r[a].shelf;break}t[o].shelf="none"}n.setState({searchedList:t})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(c.b,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",name:"searchTerm",placeholder:"Search by title or author",onChange:function(n){e.handleSearchUpdate(n)},value:this.state.query}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement(m,{bookShelfTitle:"Search Results",books:this.state.searchedList,handleStatusUpdate:this.props.handleBookStatusUpdate}),o.a.createElement("ol",{className:"books-grid"})))}}])&&x(n.prototype,t),r&&x(n,r),i}(r.Component);P(D,"propTypes",{books:f.a.array,handleBookStatusUpdate:f.a.func.isRequired}),P(D,"defaultProps",{books:[]});var R=D,T=function(e){var n=e.isLoading,t=e.pastDelay,r=e.error;return n&&t?o.a.createElement("p",null,"Loading..."):r&&!n?o.a.createElement("p",null,"Error!"):null};function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,n){return(U=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function A(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=L(e);if(n){var o=L(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return M(this,t)}}function M(e,n){return!n||"object"!==N(n)&&"function"!=typeof n?H(e):n}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=u()({loader:function(){return t.e(2).then(t.bind(null,41))},loading:T}),q=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&U(e,n)}(i,e);var n,t,r,a=A(i);function i(e){var n,t,r,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),n=a.call(this,e),t=H(n),o={bookList:[]},(r="state")in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,n.loadList=n.loadList.bind(H(n)),n.handleBookStatusUpdate=n.handleBookStatusUpdate.bind(H(n)),n}return n=i,(t=[{key:"componentDidMount",value:function(){this.loadList()}},{key:"loadList",value:function(){var e=this;d.b().then((function(n){return e.setState({bookList:n})}))}},{key:"handleBookStatusUpdate",value:function(e,n){var t=this;d.d(e,n).then((function(e){return e&&t.loadList()}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(s.a,{path:"/search",render:function(){return o.a.createElement(R,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}),o.a.createElement(s.a,{path:"/details/:bookId",component:C}),o.a.createElement(s.a,{path:"/",exact:!0,render:function(){return o.a.createElement(g,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}))}}])&&I(n.prototype,t),r&&I(n,r),i}(o.a.Component);t(38),t(39);i.a.render(o.a.createElement(c.a,null,o.a.createElement(q,null)),document.getElementById("root"))},9:function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u})),t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return p}));var i="https://reactnd-books-api.udacity.com",c=localStorage.token;c||(c=localStorage.token=Math.random().toString(36).substr(-8));var s={Accept:"application/json",Authorization:c},l=function(e){return fetch("".concat(i,"/books/").concat(e),{headers:s}).then((function(e){return e.json()})).then((function(e){return e.book}))},u=function(){return fetch("".concat(i,"/books"),{headers:s}).then((function(e){return e.json()})).then((function(e){return e.books}))},d=function(e,n){return fetch("".concat(i,"/books/").concat(e.id),{method:"PUT",headers:o(o({},s),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:n})}).then((function(e){return e.json()}))},p=function(e,n){return fetch("".concat(i,"/search"),{method:"POST",headers:o(o({},s),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:n})}).then((function(e){return e.json()})).then((function(e){return e.books}))}}});