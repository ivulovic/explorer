(this["webpackJsonpreactor-os"]=this["webpackJsonpreactor-os"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),r=n(2),o=n(3);n(10);var l=n(0),d=function(){};function u(e){var t=e.title,n=e.icon,i=e.onClick,s=void 0===i?d:i,a=e.tooltip,r=Object(c.useRef)(),u=Object(c.useState)(!1),j=Object(o.a)(u,2),b=j[0],O=j[1];return function(e,t){Object(c.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(r,(function(){return O(!1)})),Object(l.jsxs)("div",{ref:r,onClick:function(){return O(!0)},onDoubleClick:function(){return s(t)},className:"icon ".concat(b?"active":""),style:{position:"relative"},children:[Object(l.jsx)("div",{className:"icon-image",children:Object(l.jsx)("img",{src:n,alt:"icon"})}),a&&Object(l.jsxs)("div",{className:"icon-tooltip right",children:[Object(l.jsx)("div",{}),Object(l.jsx)("p",{children:a})]}),Object(l.jsx)("div",{className:"icon-title",children:t}),Object(l.jsx)("div",{className:"progres",children:Object(l.jsx)("div",{style:{width:"0px"}})})]})}var j=n.p+"static/media/webpage7.6cdb45dc.png",b=(0,n(1).createContext)(null);n(12);function O(e){var t=e.title,n=e.content,i=e.isOpened,s=e.onClose,a=Object(c.useContext)(b),o=a.lastOpened,d=a.setLastOpened,j=o===t;return Object(l.jsxs)("div",{onClick:function(){j||d(t)},className:"folder file-explorer ui-draggable ui-draggable-handle ".concat(i?"active-folder":""," ").concat(j?"in-focus":""),children:[Object(l.jsxs)("div",{className:"folder-panel",children:[Object(l.jsx)("div",{className:"folder-close",onClick:function(){return s(t)}}),Object(l.jsx)("div",{className:"folder-title",children:t})]}),Object(l.jsx)("div",{className:"folder-inner",children:n.map((function(e){return Object(l.jsx)(u,Object(r.a)({},e),"".concat(t).concat(e.title))}))})]})}n(13),n(14);function f(e){var t=e.children,n=e.onClose,i=e.title,s=Object(c.useContext)(b),a=s.lastOpened,r=s.setLastOpened,o=a===i;return Object(l.jsx)("div",{onClick:function(){o||r(i)},className:"browser-wrap ".concat(o?"in-focus":""),children:Object(l.jsxs)("div",{className:"browser ui-droppable",style:{display:"block"},children:[Object(l.jsxs)("div",{className:"browser-panel",children:[Object(l.jsx)("div",{className:"browser-close",onClick:function(){return n()}}),Object(l.jsx)("div",{className:"browser-title",children:i})]}),Object(l.jsx)("div",{className:"website",children:Object(l.jsx)("div",{className:"website-menu",children:Object(l.jsx)("div",{className:"website-inner",children:t})})})]})})}var v=[{title:"Class Component Lifecycle",url:"https://codesandbox.io/embed/react-grid-layout-react-lifecycle-rhk5y?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0"},{title:"Keys and List",url:"https://codesandbox.io/embed/react-list-and-keys-f4xzd?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0"}];function m(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useContext)(b).setLastOpened,a=function(e){var t=v.find((function(t){return t.title===e}));t&&(s(t.title),i(t))},d=[{title:"React",content:[{icon:j,title:"Class Component Lifecycle",onClick:function(){return a("Class Component Lifecycle")}},{icon:j,title:"Keys and List",onClick:function(){return a("Keys and List")}}]}],m=Object(c.useState)(d.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{isOpened:!1})}))),p=Object(o.a)(m,2),h=p[0],A=p[1],x=function(e){A(h.map((function(t){return t.title===e?Object(r.a)(Object(r.a)({},t),{},{isOpened:!0}):t}))),s(e)},g=function(e){A(h.map((function(t){return t.title===e?Object(r.a)(Object(r.a)({},t),{},{isOpened:!1}):t}))),s(null)};return Object(l.jsxs)("div",{className:"desktop",children:[Object(l.jsx)("div",{className:"column-list",children:h.map((function(e){return Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)(u,{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAwCAYAAABNPhkJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QgVEwQOQF451wAAAVlJREFUaN7t1j1LQzEYhuH7pEWtdhIEQSgIugjagu6dBMXJVR0EV10cXAShIIgff8N/4Ozg4qp18wO3gkuhtWgLTeNyjlapg1qw5DwPBE4IJ3DxviEJnHOcNhw9lA1gHZgARn/xvwWuwrEDlKOF1f6AJL2VPaDwxz0SwGw4loE54DFaND2EHQ/B3czw1z07VTgFTP0DeCmsTrez8B24DzgANsNvXzLSPmlv6V1g2zNsdKZTncAr+Jt8J3DGY/C7zeRu7jm+fcDDVv7U1msDhiD4uIfTT/UG1WaTF2u9kg4lEtRbrUy2eJe6npl8DbLFuzxwBqTxO2Vg0QBHMcBGj5CCAaaJT3Km/Y7yPs4NGmIWgT1v6UAVFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFvgn4HJcsM7aigHO4wK2tefLJLAF1IB5YMzTypZstXJROtw/eQPxdEYyi3iIgQAAAABJRU5ErkJggg==",title:e.title,onClick:x}),Object(l.jsx)(O,{title:e.title,content:e.content,isOpened:e.isOpened,onClose:g})]},e.title)}))}),n.url&&Object(l.jsx)(f,{onClose:function(){i({})},title:n.title,children:Object(l.jsx)("iframe",{className:"iframe",src:n.url})})]})}function p(e){var t=e.children,n=Object(c.useState)(),i=Object(o.a)(n,2),s=i[0],a=i[1];return Object(l.jsx)(b.Provider,{value:{lastOpened:s,setLastOpened:a},children:t})}var h=function(){return Object(l.jsx)(p,{children:Object(l.jsx)(m,{})})};n(15);a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.639c2ba4.chunk.js.map