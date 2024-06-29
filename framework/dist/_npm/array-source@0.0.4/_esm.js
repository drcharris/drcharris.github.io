/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/array-source@0.0.4/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function r(r){return new e(r instanceof Uint8Array?r:new Uint8Array(r))}function e(r){this._array=r}e.prototype.read=function(){var r=this._array;return this._array=null,Promise.resolve(r?{done:!1,value:r}:{done:!0,value:void 0})},e.prototype.cancel=function(){return this._array=null,Promise.resolve()};export{r as default};
