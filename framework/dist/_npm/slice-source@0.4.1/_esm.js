/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/slice-source@0.4.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e=new Uint8Array(0);function r(e,r){if(!e.length)return r;if(!r.length)return e;var n=new Uint8Array(e.length+r.length);return n.set(e),n.set(r,e.length),n}function n(e){return"function"==typeof e.slice?e:new t("function"==typeof e.read?e:e.getReader())}function t(r){this._source=r,this._array=e,this._index=0}t.prototype.read=function(){var n=this,t=n._array.subarray(n._index);return n._source.read().then((function(a){return n._array=e,n._index=0,a.done?t.length>0?{done:!1,value:t}:{done:!0,value:void 0}:{done:!1,value:r(t,a.value)}}))},t.prototype.slice=function(r){if((r|=0)<0)throw new Error("invalid length");var n=this,t=this._array.length-this._index;if(this._index+r<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=r));var a=new Uint8Array(r);return a.set(this._array.subarray(this._index)),function i(){return n._source.read().then((function(u){return u.done?(n._array=e,n._index=0,t>0?a.subarray(0,t):null):t+u.value.length>=r?(n._array=u.value,n._index=r-t,a.set(u.value.subarray(0,r-t),t),a):(a.set(u.value,t),t+=u.value.length,i())}))}()},t.prototype.cancel=function(){return this._source.cancel()};export{n as default};