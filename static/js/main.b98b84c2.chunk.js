(this.webpackJsonpexplorer=this.webpackJsonpexplorer||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),r=n.n(s),o=n(2),a=n(3);n(10);var l=n(0),d=function(){};function u(e){var t=e.title,n=e.icon,i=e.onClick,s=void 0===i?d:i,r=e.tooltip,o=Object(c.useRef)(),u=Object(c.useState)(!1),j=Object(a.a)(u,2),b=j[0],O=j[1];return function(e,t){Object(c.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(o,(function(){return O(!1)})),Object(l.jsxs)("div",{ref:o,onClick:function(){return O(!0)},onDoubleClick:function(){return s(t)},className:"icon ".concat(b?"active":""),style:{position:"relative"},children:[Object(l.jsx)("div",{className:"icon-image",children:Object(l.jsx)("img",{src:n,alt:"icon"})}),r&&Object(l.jsxs)("div",{className:"icon-tooltip right",children:[Object(l.jsx)("div",{}),Object(l.jsx)("p",{children:r})]}),Object(l.jsx)("div",{className:"icon-title",children:t}),Object(l.jsx)("div",{className:"progres",children:Object(l.jsx)("div",{style:{width:"0px"}})})]})}var j=n.p+"static/media/webpage7.6cdb45dc.png",b=(0,n(1).createContext)(null);n(12);function O(e){var t=e.title,n=e.content,i=e.isOpened,s=e.onClose,r=Object(c.useContext)(b),a=r.lastOpened,d=r.setLastOpened,j=a===t;return Object(l.jsxs)("div",{onClick:function(){j||d(t)},className:"folder file-explorer ui-draggable ui-draggable-handle ".concat(i?"active-folder":""," ").concat(j?"in-focus":""),children:[Object(l.jsxs)("div",{className:"folder-panel",children:[Object(l.jsx)("div",{className:"folder-close",onClick:function(){return s(t)}}),Object(l.jsx)("div",{className:"folder-title",children:t})]}),Object(l.jsx)("div",{className:"folder-inner",children:n.map((function(e){return Object(l.jsx)(u,Object(o.a)({},e),"".concat(t).concat(e.title))}))})]})}n(13),n(14);function f(e){var t=e.children,n=e.onClose,i=e.title,s=Object(c.useContext)(b),r=s.lastOpened,o=s.setLastOpened,a=r===i;return Object(l.jsx)("div",{onClick:function(){a||o(i)},className:"browser-wrap ".concat(a?"in-focus":""),children:Object(l.jsxs)("div",{className:"browser ui-droppable",style:{display:"block"},children:[Object(l.jsxs)("div",{className:"browser-panel",children:[Object(l.jsx)("div",{className:"browser-close",onClick:function(){return n()}}),Object(l.jsx)("div",{className:"browser-title",children:i})]}),Object(l.jsx)("div",{className:"website",children:Object(l.jsx)("div",{className:"website-menu",children:Object(l.jsx)("div",{className:"website-inner",children:t})})})]})})}var m="fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0",v=[{title:"Class Component Lifecycle",url:"https://codesandbox.io/embed/react-grid-layout-react-lifecycle-rhk5y?".concat(m)},{title:"Keys and List",url:"https://codesandbox.io/embed/react-list-and-keys-f4xzd?".concat(m)},{title:"Clojure Increment",url:"https://codesandbox.io/embed/react-clojure-task-dgvvy?".concat(m)}];function p(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useContext)(b).setLastOpened,r=function(e){var t=v.find((function(t){return t.title===e}));t&&(s(t.title),i(t))},d=[{title:"React Tasks",content:[{icon:j,title:"Class Component Lifecycle",onClick:function(){return r("Class Component Lifecycle")}},{icon:j,title:"Clojure Increment",onClick:function(){return r("Clojure Increment")}}]},{title:"React Basics",content:[{icon:j,title:"Keys and List",onClick:function(){return r("Keys and List")}}]}],m=Object(c.useState)(d.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isOpened:!1})}))),p=Object(a.a)(m,2),x=p[0],A=p[1],h=function(e){A(x.map((function(t){return t.title===e?Object(o.a)(Object(o.a)({},t),{},{isOpened:!0}):t}))),s(e)},g=function(e){A(x.map((function(t){return t.title===e?Object(o.a)(Object(o.a)({},t),{},{isOpened:!1}):t}))),s(null)};return Object(l.jsxs)("div",{className:"desktop",children:[Object(l.jsx)("div",{className:"column-list",children:x.map((function(e){return Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)(u,{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAwCAYAAABNPhkJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QgVEwQOQF451wAAAVlJREFUaN7t1j1LQzEYhuH7pEWtdhIEQSgIugjagu6dBMXJVR0EV10cXAShIIgff8N/4Ozg4qp18wO3gkuhtWgLTeNyjlapg1qw5DwPBE4IJ3DxviEJnHOcNhw9lA1gHZgARn/xvwWuwrEDlKOF1f6AJL2VPaDwxz0SwGw4loE54DFaND2EHQ/B3czw1z07VTgFTP0DeCmsTrez8B24DzgANsNvXzLSPmlv6V1g2zNsdKZTncAr+Jt8J3DGY/C7zeRu7jm+fcDDVv7U1msDhiD4uIfTT/UG1WaTF2u9kg4lEtRbrUy2eJe6npl8DbLFuzxwBqTxO2Vg0QBHMcBGj5CCAaaJT3Km/Y7yPs4NGmIWgT1v6UAVFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFvgn4HJcsM7aigHO4wK2tefLJLAF1IB5YMzTypZstXJROtw/eQPxdEYyi3iIgQAAAABJRU5ErkJggg==",title:e.title,onClick:h}),Object(l.jsx)(O,{title:e.title,content:e.content,isOpened:e.isOpened,onClose:g})]},e.title)}))}),n.url&&Object(l.jsx)(f,{onClose:function(){i({})},title:n.title,children:Object(l.jsx)("iframe",{className:"iframe",src:n.url})})]})}function x(e){var t=e.children,n=Object(c.useState)(),i=Object(a.a)(n,2),s=i[0],r=i[1];return Object(l.jsx)(b.Provider,{value:{lastOpened:s,setLastOpened:r},children:t})}var A=function(){return Object(l.jsx)(x,{children:Object(l.jsx)(p,{})})};n(15);r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b98b84c2.chunk.js.map