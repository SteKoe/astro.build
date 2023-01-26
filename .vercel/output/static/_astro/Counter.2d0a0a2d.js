import{r as l}from"./index.45a47ed6.js";/* empty css                       */var n={},a={get exports(){return n},set exports(t){n=t}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l,d=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,c){var r,o={},u=null,s=null;c!==void 0&&(u=""+c),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)m.call(e,r)&&!j.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:d,type:t,key:u,ref:s,props:o,_owner:x.current}}i.Fragment=_;i.jsx=p;i.jsxs=p;(function(t){t.exports=i})(a);function h({children:t,count:e}){const[c,r]=l.useState(e),o=()=>r(s=>s+1),u=()=>r(s=>s-1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"counter",children:[n.jsx("button",{onClick:u,children:"-"}),n.jsx("pre",{children:c}),n.jsx("button",{onClick:o,children:"+"})]}),n.jsx("div",{className:"counter-message",children:t})]})}export{h as default};
