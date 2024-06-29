/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/vega-label@1.3.0/build/vega-label.module.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{textMetrics as t,Marks as e}from"../vega-scenegraph@4.13.0/_esm.js";import{canvas as n}from"../vega-canvas@1.2.7/_esm.js";import{Transform as r,rederive as a}from"../vega-dataflow@5.7.6/_esm.js";import{inherits as o,error as i,array as u,isFunction as l}from"../vega-util@1.17.2/_esm.js";const f=4278190080;function s(t,e,n){return new Uint32Array(t.getImageData(0,0,e,n).data.buffer)}function d(t,n,r){if(!n.length)return;const a=n[0].mark.marktype;"group"===a?n.forEach((e=>{e.items.forEach((e=>d(t,e.items,r)))})):e[a].draw(t,{items:r?n.map(m):n})}function m(t){const e=a(t,{});return e.stroke&&0!==e.strokeOpacity||e.fill&&0!==e.fillOpacity?{...e,strokeOpacity:1,stroke:"#000",fillOpacity:0}:e}const c=5,h=31,g=32,y=new Uint32Array(g+1),p=new Uint32Array(g+1);p[0]=0,y[0]=~p[0];for(let t=1;t<=g;++t)p[t]=p[t-1]<<1|1,y[t]=~p[t];function x(t,e,n){const r=Math.max(1,Math.sqrt(t*e/1e6)),a=~~((t+2*n+r)/r),o=~~((e+2*n+r)/r),i=t=>~~((t+n)/r);return i.invert=t=>t*r-n,i.bitmap=()=>function(t,e){const n=new Uint32Array(~~((t*e+g)/g));function r(t,e){n[t]|=e}function a(t,e){n[t]&=e}return{array:n,get:(e,r)=>{const a=r*t+e;return n[a>>>c]&1<<(a&h)},set:(e,n)=>{const a=n*t+e;r(a>>>c,1<<(a&h))},clear:(e,n)=>{const r=n*t+e;a(r>>>c,~(1<<(r&h)))},getRange:(e,r,a,o)=>{let i,u,l,f,s=o;for(;s>=r;--s)if(i=s*t+e,u=s*t+a,l=i>>>c,f=u>>>c,l===f){if(n[l]&y[i&h]&p[1+(u&h)])return!0}else{if(n[l]&y[i&h])return!0;if(n[f]&p[1+(u&h)])return!0;for(let t=l+1;t<f;++t)if(n[t])return!0}return!1},setRange:(e,n,a,o)=>{let i,u,l,f,s;for(;n<=o;++n)if(i=n*t+e,u=n*t+a,l=i>>>c,f=u>>>c,l===f)r(l,y[i&h]&p[1+(u&h)]);else for(r(l,y[i&h]),r(f,p[1+(u&h)]),s=l+1;s<f;++s)r(s,4294967295)},clearRange:(e,n,r,o)=>{let i,u,l,f,s;for(;n<=o;++n)if(i=n*t+e,u=n*t+r,l=i>>>c,f=u>>>c,l===f)a(l,p[i&h]|y[1+(u&h)]);else for(a(l,p[i&h]),a(f,y[1+(u&h)]),s=l+1;s<f;++s)a(s,0)},outOfBounds:(n,r,a,o)=>n<0||r<0||o>=e||a>=t}}(a,o),i.ratio=r,i.padding=n,i.width=t,i.height=e,i}function b(t,e,n,r,a,o){let i=n/2;return t-i<0||t+i>a||e-(i=r/2)<0||e+i>o}function v(t,e,n,r,a,o,i,u){const l=a*o/(2*r),f=t(e-l),s=t(e+l),d=t(n-(o/=2)),m=t(n+o);return i.outOfBounds(f,d,s,m)||i.getRange(f,d,s,m)||u&&u.getRange(f,d,s,m)}const w=[-1,-1,1,1],k=[-1,1,-1,1];const M=["right","center","left"],R=["bottom","middle","top"];function z(t,e,n,r,a,o,i,u,l,f,s,d){return!(a.outOfBounds(t,n,e,r)||(d&&o||a).getRange(t,n,e,r))}const A={"top-left":0,top:1,"top-right":2,left:4,middle:5,right:6,"bottom-left":8,bottom:9,"bottom-right":10},O={naive:function(e,n,r,a){const o=e.width,i=e.height;return function(e){const n=e.datum.datum.items[a].items,r=n.length,u=e.datum.fontSize,l=t.width(e.datum,e.datum.text);let f,s,d,m,c,h,g,y=0;for(let t=0;t<r;++t)f=n[t].x,d=n[t].y,s=void 0===n[t].x2?f:n[t].x2,m=void 0===n[t].y2?d:n[t].y2,c=(f+s)/2,h=(d+m)/2,g=Math.abs(s-f+m-d),g>=y&&(y=g,e.x=c,e.y=h);return c=l/2,h=u/2,f=e.x-c,s=e.x+c,d=e.y-h,m=e.y+h,e.align="center",f<0&&s<=o?e.align="left":0<=f&&o<s&&(e.align="right"),e.baseline="middle",d<0&&m<=i?e.baseline="top":0<=d&&i<m&&(e.baseline="bottom"),!0}},"reduced-search":function(e,n,r,a){const o=e.width,i=e.height,u=n[0],l=n[1];function f(t,n,r,a,f){const s=e.invert(t),d=e.invert(n);let m,c=r,h=i;if(!b(s,d,a,f,o,i)&&!v(e,s,d,f,a,c,u,l)&&!v(e,s,d,f,a,f,u,null)){for(;h-c>=1;)m=(c+h)/2,v(e,s,d,f,a,m,u,l)?h=m:c=m;if(c>r)return[s,d,c,!0]}}return function(n){const l=n.datum.datum.items[a].items,s=l.length,d=n.datum.fontSize,m=t.width(n.datum,n.datum.text);let c,h,g,y,p,x,w,k,M,R,z,A,O,E,S,B,U,C=r?d:0,D=!1,I=!1,N=0;for(let t=0;t<s;++t){for(c=l[t].x,g=l[t].y,h=void 0===l[t].x2?c:l[t].x2,y=void 0===l[t].y2?g:l[t].y2,c>h&&(U=c,c=h,h=U),g>y&&(U=g,g=y,y=U),M=e(c),z=e(h),R=~~((M+z)/2),A=e(g),E=e(y),O=~~((A+E)/2),w=R;w>=M;--w)for(k=O;k>=A;--k)B=f(w,k,C,m,d),B&&([n.x,n.y,C,D]=B);for(w=R;w<=z;++w)for(k=O;k<=E;++k)B=f(w,k,C,m,d),B&&([n.x,n.y,C,D]=B);D||r||(S=Math.abs(h-c+y-g),p=(c+h)/2,x=(g+y)/2,S>=N&&!b(p,x,m,d,o,i)&&!v(e,p,x,d,m,d,u,null)&&(N=S,n.x=p,n.y=x,I=!0))}return!(!D&&!I)&&(p=m/2,x=d/2,u.setRange(e(n.x-p),e(n.y-x),e(n.x+p),e(n.y+x)),n.align="center",n.baseline="middle",!0)}},floodfill:function(e,n,r,a){const o=e.width,i=e.height,u=n[0],l=n[1],f=e.bitmap();return function(n){const s=n.datum.datum.items[a].items,d=s.length,m=n.datum.fontSize,c=t.width(n.datum,n.datum.text),h=[];let g,y,p,x,M,R,z,A,O,E,S,B,U=r?m:0,C=!1,D=!1,I=0;for(let t=0;t<d;++t){for(g=s[t].x,p=s[t].y,y=void 0===s[t].x2?g:s[t].x2,x=void 0===s[t].y2?p:s[t].y2,h.push([e((g+y)/2),e((p+x)/2)]);h.length;)if([z,A]=h.pop(),!(u.get(z,A)||l.get(z,A)||f.get(z,A))){f.set(z,A);for(let t=0;t<4;++t)M=z+w[t],R=A+k[t],f.outOfBounds(M,R,M,R)||h.push([M,R]);if(M=e.invert(z),R=e.invert(A),O=U,E=i,!b(M,R,c,m,o,i)&&!v(e,M,R,m,c,O,u,l)&&!v(e,M,R,m,c,m,u,null)){for(;E-O>=1;)S=(O+E)/2,v(e,M,R,m,c,S,u,l)?E=S:O=S;O>U&&(n.x=M,n.y=R,U=O,C=!0)}}C||r||(B=Math.abs(y-g+x-p),M=(g+y)/2,R=(p+x)/2,B>=I&&!b(M,R,c,m,o,i)&&!v(e,M,R,m,c,m,u,null)&&(I=B,n.x=M,n.y=R,D=!0))}return!(!C&&!D)&&(M=c/2,R=m/2,u.setRange(e(n.x-M),e(n.y-R),e(n.x+M),e(n.y+R)),n.align="center",n.baseline="middle",!0)}}};function E(e,r,a,o,i,u,l,m,c,h,g){if(!e.length)return e;const y=Math.max(o.length,i.length),p=function(t,e){const n=new Float64Array(e),r=t.length;for(let e=0;e<r;++e)n[e]=t[e]||0;for(let t=r;t<e;++t)n[t]=n[r-1];return n}(o,y),b=function(t,e){const n=new Int8Array(e),r=t.length;for(let e=0;e<r;++e)n[e]|=A[t[e]];for(let t=r;t<e;++t)n[t]=n[r-1];return n}(i,y),v=(U=e[0].datum)&&U.mark&&U.mark.marktype,w="group"===v&&e[0].datum.items[c].marktype,k="area"===w,E=function(t,e,n,r){const a=t=>[t.x,t.x,t.x,t.y,t.y,t.y];return t?"line"===t||"area"===t?t=>a(t.datum):"line"===e?t=>{const e=t.datum.items[r].items;return a(e.length?e["start"===n?0:e.length-1]:{x:NaN,y:NaN})}:t=>{const e=t.datum.bounds;return[e.x1,(e.x1+e.x2)/2,e.x2,e.y1,(e.y1+e.y2)/2,e.y2]}:a}(v,w,m,c),S=null===h||h===1/0,B=k&&"naive"===g;var U;let C=-1,D=-1;const I=e.map((e=>{const n=S?t.width(e,e.text):void 0;return C=Math.max(C,n),D=Math.max(D,e.fontSize),{datum:e,opacity:0,x:void 0,y:void 0,align:void 0,baseline:void 0,boundary:E(e),textWidth:n}}));h=null===h||h===1/0?Math.max(C,D)+Math.max(...o):h;const N=x(r[0],r[1],h);let q;if(!B){a&&I.sort(((t,e)=>a(t.datum,e.datum)));let t=!1;for(let e=0;e<b.length&&!t;++e)t=5===b[e]||p[e]<0;const r=(v&&l||k)&&e.map((t=>t.datum));q=u.length||r?function(t,e,r,a,o){const i=t.width,u=t.height,l=a||o,m=n(i,u).getContext("2d"),c=n(i,u).getContext("2d"),h=l&&n(i,u).getContext("2d");r.forEach((t=>d(m,t,!1))),d(c,e,!1),l&&d(h,e,!0);const g=s(m,i,u),y=s(c,i,u),p=l&&s(h,i,u),x=t.bitmap(),b=l&&t.bitmap();let v,w,k,M,R,z,A,O;for(w=0;w<u;++w)for(v=0;v<i;++v)R=w*i+v,z=g[R]&f,O=y[R]&f,A=l&&p[R]&f,(z||A||O)&&(k=t(v),M=t(w),o||!z&&!O||x.set(k,M),l&&(z||A)&&b.set(k,M));return[x,b]}(N,r||[],u,t,k):function(t,e){const n=t.bitmap();return(e||[]).forEach((e=>n.set(t(e.boundary[0]),t(e.boundary[3])))),[n,void 0]}(N,l&&I)}const W=k?O[g](N,q,l,c):function(e,n,r,a){const o=e.width,i=e.height,u=n[0],l=n[1],f=a.length;return function(n){const s=n.boundary,d=n.datum.fontSize;if(s[2]<0||s[5]<0||s[0]>o||s[3]>i)return!1;let m,c,h,g,y,p,x,b,v,w,k,A,O,E,S,B=n.textWidth??0;for(let o=0;o<f;++o){if(m=(3&r[o])-1,c=(r[o]>>>2&3)-1,h=0===m&&0===c||a[o]<0,g=m&&c?Math.SQRT1_2:1,y=a[o]<0?-1:1,p=s[1+m]+a[o]*m*g,k=s[4+c]+y*d*c/2+a[o]*c*g,b=k-d/2,v=k+d/2,A=e(p),E=e(b),S=e(v),!B){if(!z(A,A,E,S,u,l,0,0,0,0,0,h))continue;B=t.width(n.datum,n.datum.text)}if(w=p+y*B*m/2,p=w-B/2,x=w+B/2,A=e(p),O=e(x),z(A,O,E,S,u,l,0,0,0,0,0,h))return n.x=m?m*y<0?x:p:w,n.y=c?c*y<0?v:b:k,n.align=M[m*y+1],n.baseline=R[c*y+1],u.setRange(A,E,O,S),!0}return!1}}(N,q,b,p);return I.forEach((t=>t.opacity=+W(t))),I}const S=["x","y","opacity","align","baseline"],B=["top-left","left","bottom-left","top","bottom","top-right","right","bottom-right"];function U(t){r.call(this,null,t)}U.Definition={type:"Label",metadata:{modifies:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"sort",type:"compare"},{name:"anchor",type:"string",array:!0,default:B},{name:"offset",type:"number",array:!0,default:[1]},{name:"padding",type:"number",default:0,null:!0},{name:"lineAnchor",type:"string",values:["start","end"],default:"end"},{name:"markIndex",type:"number",default:0},{name:"avoidBaseMark",type:"boolean",default:!0},{name:"avoidMarks",type:"data",array:!0},{name:"method",type:"string",default:"naive"},{name:"as",type:"string",array:!0,length:S.length,default:S}]},o(U,r,{transform(t,e){const n=t.modified();if(!(n||e.changed(e.ADD_REM)||function(n){const r=t[n];return l(r)&&e.modified(r.fields)}("sort")))return;t.size&&2===t.size.length||i("Size parameter should be specified as a [width, height] array.");const r=t.as||S;return E(e.materialize(e.SOURCE).source||[],t.size,t.sort,u(null==t.offset?1:t.offset),u(t.anchor||B),t.avoidMarks||[],!1!==t.avoidBaseMark,t.lineAnchor||"end",t.markIndex||0,void 0===t.padding?0:t.padding,t.method||"naive").forEach((t=>{const e=t.datum;e[r[0]]=t.x,e[r[1]]=t.y,e[r[2]]=t.opacity,e[r[3]]=t.align,e[r[4]]=t.baseline})),e.reflow(n).modifies(r)}});export{U as label};export default null;
