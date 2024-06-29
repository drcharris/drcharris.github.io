/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/path-source@0.1.3/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"../array-source@0.0.4/_esm.js";function n(n){return fetch(n).then((function(n){return n.body&&n.body.getReader?n.body.getReader():n.arrayBuffer().then(e)}))}function r(n){return new Promise((function(r,t){var o=new XMLHttpRequest;o.responseType="arraybuffer",o.onload=function(){r(e(o.response))},o.onerror=t,o.ontimeout=t,o.open("GET",n,!0),o.send()}))}function t(e){return("function"==typeof fetch?n:r)(e)}export{t as default};
