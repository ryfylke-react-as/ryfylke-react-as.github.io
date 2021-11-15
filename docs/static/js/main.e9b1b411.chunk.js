(this["webpackJsonpryfylke-react-as"]=this["webpackJsonpryfylke-react-as"]||[]).push([[0],{12:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t(1),r=t.n(a),o=t(14),s=t.n(o),c=(t(12),t(5)),l=t(3),d=t(4);function p(){var n=Object(l.a)(["\n  min-height: 300px;\n  max-height: 400px;\n  background: var(--background);\n  width: 550px;\n  max-width: 100%;\n  border-radius: 8px;\n  opacity: 0;\n  box-shadow: 0px 1px 15px -9px #0000004f;\n  > div {\n    padding: var(--spacing-05);\n    max-width: 100%;\n    overflow: hidden;\n    pre,\n    code {\n      margin: 0;\n      padding: 0;\n      font-size: 0.75rem;\n      color: var(--text-02);\n    }\n  }\n  svg {\n    width: 100%;\n  }\n  img {\n    max-width: 50%;\n    margin: var(--spacing-04) auto;\n    display: block;\n    opacity: 0.6;\n    animation: dancingPoop 6s infinite ease-out;\n    &:hover {\n      animation-name: rotate;\n    }\n    @keyframes rotate {\n      0%,\n      100% {\n        transform: rotate(0deg);\n      }\n      50% {\n        transform: rotate(180deg);\n      }\n      99% {\n        transform: rotate(360deg);\n      }\n    }\n    @keyframes dancingPoop {\n      0%,\n      100% {\n        transform: translate(0px, 0px) rotate(-4deg);\n        transition-timing-function: ease-out;\n      }\n      50% {\n        transition-timing-function: ease-in;\n        transform: translate(0px, -20px) rotate(-2deg);\n      }\n    }\n  }\n"]);return p=function(){return n},n}d.b.div(p());var m=t(2);var h=t(6);function u(){var n=Object(l.a)(["\n  font-size: 0.8rem;\n  font-weight: 600;\n  position: absolute;\n  bottom: 25%;\n  left: 10%;\n  transform: rotate(5deg);\n  animation: tagUpDown 10s ease-in-out infinite;\n  @media (prefers-reduced-motion) {\n    animation: none;\n  }\n  user-select: none;\n  color: var(--text-02);\n  opacity: 0.1;\n  @keyframes tagUpDown {\n    0% {\n      transform: translate(0px, 0px);\n    }\n    50% {\n      transform: translate(0px, 10px);\n    }\n    100% {\n      transform: translate(0px, 0px);\n    }\n  }\n  &:nth-of-type(2) {\n    left: 25%;\n    bottom: 28%;\n    animation-delay: 0.2s;\n  }\n  &:nth-of-type(3) {\n    left: 42%;\n    bottom: 23%;\n    transform: rotate(-5deg);\n    animation-delay: 0.5s;\n  }\n  &:nth-of-type(4) {\n    left: 78%;\n    bottom: 25%;\n    animation-delay: 0.7s;\n  }\n  &:nth-of-type(5) {\n    left: 60%;\n    bottom: 30%;\n    animation-delay: 1s;\n  }\n"]);return u=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: flex;\n  gap: var(--spacing-06);\n  align-items: center;\n  margin: var(--cds-spacing-08) 0;\n  margin-top: auto;\n  cursor: default;\n  animation: "," 0.6s ease-in-out;\n  width: 100%;\n  max-width: 900px;\n  h1 {\n    font-size: clamp(3rem, 8.5vmin, 6.5rem);\n    animation: "," 0.2s ease-out;\n    span {\n      animation: "," 0.8s ease-out;\n      animation-fill-mode: both;\n      transition: color 0.3s ease-in-out;\n    }\n  }\n  &:hover img {\n    transform: scale(1.05) rotate(-3deg);\n  }\n  img {\n    width: clamp(35px, 6.5vmin, 12rem);\n    transition: transform 0.1s ease-in;\n    transform: translateY(6%);\n    user-select: none;\n    animation: smudIn 0.3s ease-in-out;\n    @keyframes smudIn {\n      from {\n        clip-path: circle(12px);\n        transform: rotate(25deg);\n      }\n      to {\n        clip-path: circle(35px);\n      }\n    }\n  }\n"]);return b=function(){return n},n}function f(){var n=Object(l.a)(["\n  display: flex;\n  gap: var(--spacing-07);\n  flex-direction: column;\n  align-items: center;\n  padding: var(--spacing-09) var(--spacing-08) 0;\n  position: relative;\n  z-index: 1;\n  min-height: 50vh;\n  svg {\n    position: relative;\n    z-index: 1;\n    height: 7rem;\n    width: calc(100% + calc(var(--spacing-08) * 2));\n    margin-top: auto;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(l.a)(['\n  pointer-events: none;\n  position: absolute;\n  top: -200px;\n  left: 0;\n  right: 0;\n  bottom: 0px;\n  background-image: url("/header-pattern.png");\n  background-blend-mode: overlay;\n  transform-origin: center top;\n  animation: '," 0.6s ease-in-out;\n  animation-direction: ",";\n  transform: translateY(124px);\n  z-index: -1;\n  opacity: ",";\n  ",";\n"]);return x=function(){return n},n}function j(){var n=Object(l.a)(["\n  from {\n    opacity:0;\n    transform:scale(0.99) rotate(1deg);\n  }\n"]);return j=function(){return n},n}function g(){var n=Object(l.a)(["\n  from {\n    opacity:0;\n    transform:translateY(100px);\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(l.a)(["\n  from {\n    opacity:0;\n    transform:rotate(6deg);\n  }\n"]);return v=function(){return n},n}var O=Object(d.c)(v()),y=Object(d.c)(g()),k=Object(d.c)(j()),w=d.b.div(x(),y,(function(n){return n.isLightmode?"reverse":"normal"}),(function(n){return n.isLightmode?"0.3":"0.4"}),(function(n){return n.noAnim&&"\n    animation: none;\n    transform:translateY(64px);\n    opacity:0.3;\n  "})),z=d.b.header(f()),M=d.b.div(b(),k,O,O),C=(d.b.span(u()),function(n){var e=n.isLightmode,t=Object(h.a)(),a=t.ref,r=t.inView;return Object(i.jsxs)(z,{children:[Object(i.jsx)(w,{isLightmode:e,noAnim:!0}),Object(i.jsx)(w,{isLightmode:e},e?"hbga":"hbgb"),Object(i.jsxs)(M,{children:[Object(i.jsx)("img",{src:e?"/logo-lm.svg":"/logo-dm.svg",alt:"Logo, ".concat(e?"bl\xe5tt":"oransje"," vikingskip, hvor tuppen ser ut som et drage-hode.")}),Object(i.jsxs)("h1",{children:["Ryfylke"," ",Object(i.jsx)("span",{ref:a,children:"React"},r?"a":"b")]})]}),Object(i.jsx)(D,{})]})}),A=t(23);function S(){var n=Object(l.a)(["\n  padding: var(--spacing-08);\n  padding-bottom: 10rem;\n  transition: color 0.15s ease-in, background-color 0.15s ease-in;\n  background: ",";\n  margin-bottom: var(--spacing-07);\n  max-height: 450px;\n  position: relative;\n  z-index: 2;\n  animation: ",' 0.4s ease-in-out;\n  @media screen and (max-width: 850px) {\n    max-height: 2000px;\n    height: auto;\n  }\n  @media screen and (max-width: 500px) {\n    h2 {\n      justify-content: center;\n      margin-bottom: var(--spacing-09);\n    }\n  }\n  &:not(:first-of-type) {\n    margin-top: -12rem;\n    position: relative;\n    z-index: 2;\n  }\n  form {\n    --width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-04);\n    label {\n      display: flex;\n      flex-direction: column;\n      font-size: 0.8rem;\n      gap: var(--spacing-03);\n      color: var(--text-02);\n      width: var(--width);\n      max-width: var(--width);\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n    select {\n      padding: var(--spacing-03);\n      background: var(--ui-01);\n      color: var(--text-01);\n      border: none;\n    }\n    input,\n    textarea {\n      border: none;\n      border-radius: 4px;\n      background: var(--ui-01);\n      padding: var(--spacing-04);\n      color: var(--text-01);\n      font-size: 0.8rem;\n      font-family: "Ubuntu", sans-serif;\n      max-width: var(--width);\n      margin: 0;\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n    [disabled] {\n      opacity: 0.1;\n    }\n    textarea {\n      height: 5rem;\n      max-height: 5rem;\n      resize: none;\n    }\n    button {\n      background: var(--background);\n      padding: var(--spacing-04);\n      color: var(--text-01);\n      border: none;\n      font-family: "Ubuntu", sans-serif;\n      font-weight: bold;\n      font-size: 0.8rem;\n      max-width: var(--width);\n      margin: 0;\n      cursor: pointer;\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n  }\n  a {\n    position: relative;\n    z-index: 99;\n  }\n  p {\n    max-width: 700px;\n    line-height: 1.35em;\n    color: var(--text-02);\n  }\n  &:not(.checklist) {\n    ul li::marker {\n      content: "*";\n      color: var(--text-02);\n      font-size: 0.8em;\n      display: inline-block;\n    }\n  }\n  ul {\n    padding-left: var(--spacing-06);\n    li {\n      padding-left: var(--spacing-03);\n      line-height: 1.35em;\n      color: var(--text-01);\n      transition: none;\n      ul {\n        margin-top: var(--spacing-02);\n      }\n    }\n  }\n  &.checklist {\n    padding-top: var(--spacing-09);\n    svg {\n      max-width: 22rem;\n      max-height: 19rem;\n      opacity: 0.5;\n      path {\n        transition: all 0.2s ease-out;\n      }\n      @media screen and (max-width: 700px) {\n        display: none;\n      }\n    }\n    --color-01: violet;\n    --color-02: blue;\n    ul {\n      list-style: none;\n      li {\n        list-style: none;\n        h3 {\n          display: flex;\n          gap: var(--spacing-03);\n          align-items: center;\n          font-weight: normal;\n          svg {\n            width: 0.8em;\n            height: 0.8em;\n            fill: var(--link);\n            flex-shrink: 0;\n          }\n        }\n      }\n    }\n    ul > li > ul {\n      padding-left: var(--spacing-03);\n      margin-bottom: var(--spacing-03);\n      color: var(--text-02);\n      opacity: 0.8;\n      > li::marker {\n        content: "-";\n      }\n      > li::before {\n        display: none;\n      }\n    }\n  }\n']);return S=function(){return n},n}function L(){var n=Object(l.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  display: ",";\n  gap: var(--spacing-09);\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    align-items: center;\n  }\n  > div {\n    min-width: 100px;\n    max-width: 100%;\n  }\n"]);return L=function(){return n},n}function R(){var n=Object(l.a)(["\n  from {\n    transform:translateY(4px);\n  }\n"]);return R=function(){return n},n}var I=Object(d.c)(R()),V=d.b.div(L(),(function(n){return n.flex?"flex":"block"})),Y=d.b.section(S(),(function(n){var e,t=null!==(e=n.background)&&void 0!==e?e:"var(--ui-01)";return"linear-gradient(to bottom, ".concat(t,", var(--ui-01))")}),I),_=function(n){var e=n.children,t=Object(A.a)(n,["children"]);return Object(i.jsx)(Y,Object(m.a)(Object(m.a)({},t),{},{children:Object(i.jsx)(V,{flex:t.flex,children:e})}))};function H(){var n=Object(l.a)(["\n  position: relative;\n  z-index: 3;\n  user-select: none;\n  pointer-events: none;\n  > svg {\n    height: 150px;\n    width: 100%;\n    margin-top: -10rem;\n    margin-bottom: 10rem;\n  }\n"]);return H=function(){return n},n}function B(){var n=Object(l.a)(["\n  fill: var(--ui-01);\n\n  @keyframes move-waves {\n    0% {\n      transform: translate3d(-30px, 0, 0);\n    }\n    50% {\n      transform: translate3d(30px, 0, 0);\n    }\n    100% {\n      transform: translate3d(-30px, 0, 0);\n    }\n  }\n  use {\n    animation: move-waves 50s ease-in-out infinite;\n    fill: linear-gradient(from top, var(--ui-01), var(--ui-01));\n    @media (prefers-reduced-motion) {\n      animation: none;\n    }\n  }\n  use:nth-child(odd) {\n    animation-direction: reverse;\n    animation-duration: 33s;\n  }\n  use:nth-child(1) {\n    animation-delay: -2s;\n    opacity: 0.7;\n  }\n  use:nth-child(2) {\n    animation-delay: -3s;\n    opacity: 0.5;\n  }\n  use:nth-child(3) {\n    animation-delay: -4s;\n    opacity: 0.3;\n  }\n  use:nth-child(4) {\n    animation-delay: -5s;\n  }\n"]);return B=function(){return n},n}var E=d.b.g(B());function D(n){var e;return Object(i.jsxs)("svg",Object(m.a)(Object(m.a)({className:"prefix__waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none"},n),{},{children:[Object(i.jsx)("defs",{children:Object(i.jsx)("path",{id:"prefix__a",d:"M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"})}),Object(i.jsxs)(E,{style:{fill:null!==(e=null===n||void 0===n?void 0:n.background)&&void 0!==e?e:"var(--ui-01)"},children:[Object(i.jsx)("use",{xlinkHref:"#prefix__a"}),Object(i.jsx)("use",{xlinkHref:"#prefix__a",x:50,y:3}),Object(i.jsx)("use",{xlinkHref:"#prefix__a",x:100,y:5}),Object(i.jsx)("use",{xlinkHref:"#prefix__a",x:150,y:7})]})]}))}var N=d.b.div(H()),U=function(n){return Object(i.jsx)(N,{children:Object(i.jsx)(D,Object(m.a)({},n))})};function T(){var n=Object(l.a)(["\n  padding-top: var(--spacing-05);\n  background: #2e2a2f;\n  border-radius: 10px;\n  box-shadow: 0px 0px 16px -8px #0f1e21;\n  filter: hue-rotate(250deg);\n  min-width: 399px !important;\n  height: 390px;\n  margin-bottom: auto;\n\n  @media screen and (max-width: 500px) {\n    max-width: 280px !important;\n    min-width: 0px !important;\n  }\n\n  @-moz-document url-prefix() {\n    background: #282528;\n    filter: hue-rotate(250deg);\n  }\n\n  @media screen and (max-width: 700px) {\n    margin-bottom: 8rem;\n    max-width: 90vw;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  @media screen and (max-width: 500px) {\n    margin-bottom: 2rem;\n  }\n\n  video {\n    width: 100%;\n    clip-path: polygon(0 1%, 100% 1%, 100% 100%, 0% 100%);\n  }\n"]);return T=function(){return n},n}var J=d.b.div(T()),X=function(){var n=Object(h.a)({threshold:0}),e=n.ref,t=(n.inView,Object(a.useState)(!1)),r=Object(c.a)(t,2),o=(r[0],r[1],Object(a.useRef)(null));return Object(a.useEffect)((function(){(null===o||void 0===o?void 0:o.current)&&(o.current.playbackRate=2,o.current.defaultMuted=!0,o.current.muted=!0)}),[null===o||void 0===o?void 0:o.current]),Object(i.jsx)(J,{ref:e,children:Object(i.jsx)("video",{src:"https://haakon.dev/codewriter.mp4",poster:"https://haakon.dev/thumb.png",muted:!0,controls:!1,onClick:function(){(null===o||void 0===o?void 0:o.current)&&o.current.play()},title:"Click to play video",ref:o})})};function F(n){return Object(i.jsx)("svg",Object(m.a)(Object(m.a)({width:30,height:35,viewBox:"0 0 30 35",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M16.402 0A17.366 17.366 0 000 17.328a17.366 17.366 0 0029.351 12.569A17.366 17.366 0 0111.018 12.56 17.365 17.365 0 0116.402.003V0z",fill:"currentColor"})}))}function K(n){return Object(i.jsx)("svg",Object(m.a)(Object(m.a)({width:40,height:40,viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M28.35 19.84a8.511 8.511 0 11-17.023 0 8.511 8.511 0 0117.023 0zM30.005 18.434h9.68v2.817h-9.68v-2.817zM0 18.434h9.68v2.817H0v-2.817zM18.434 9.68V0h2.817v9.68h-2.817zM18.434 39.685v-9.68h2.817v9.68h-2.817zM26.031 11.658l6.845-6.845 1.992 1.992-6.845 6.845-1.992-1.992zM4.815 32.88l6.845-6.846 1.993 1.992-6.845 6.845-1.993-1.992zM11.66 13.65L4.815 6.805l1.993-1.992 6.845 6.845-1.993 1.992zM32.876 34.871l-6.845-6.845 1.992-1.992 6.845 6.845-1.992 1.992z",fill:"currentColor"})}))}function q(){var n=Object(l.a)(["\n  border-radius: 25px;\n  background: rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  svg {\n    max-width: 0.6rem;\n    color: #f9f9f9;\n    transition: transform 0.85s ease-in-out;\n    &.lm {\n      animation: rotateAnim 1s ease-in-out;\n      @media (prefers-reduced-motion) {\n        animation: none;\n      }\n      @keyframes rotateAnim {\n        from {\n          transform: rotate(0deg);\n          opacity: 0.3;\n        }\n        to {\n          opacity: 1;\n          transform: rotate(360deg);\n        }\n      }\n    }\n  }\n"]);return q=function(){return n},n}function G(){var n=Object(l.a)(["\n  position: absolute;\n  top: var(--spacing-07);\n  left: var(--spacing-05);\n  z-index: 99;\n  transition: transform 0.2s ease-in-out;\n  @media screen and (max-width: 500px) {\n    transform: translateY(calc(var(--spacing-05) * -1));\n  }\n  label {\n    display: flex;\n    border-radius: 25px;\n    background: rgba(0, 0, 0, 0.1);\n    padding: var(--spacing-03);\n    gap: var(--spacing-03);\n    opacity: 0.8;\n    transition: all 0.1s ease-in-out;\n    &:hover {\n      opacity: 1;\n      transform: scale(1.01);\n    }\n    cursor: pointer;\n  }\n  input {\n    visibility: hidden;\n    position: fixed;\n  }\n"]);return G=function(){return n},n}var P=d.b.div(G()),Q=d.b.div(q()),W=function(n){var e=n.onClick,t=n.isLightmode,r=Object(a.useState)(!1),o=Object(c.a)(r,2),s=o[0],l=o[1];return Object(i.jsx)(P,{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",onChange:function(){s||l(!0),e()},checked:!t,"aria-label":"Toggle darkmode"}),Object(i.jsx)(Q,{children:Object(i.jsx)(F,{className:t?"":s?"lm":"",style:{opacity:t?.35:1}})}),Object(i.jsx)(Q,{children:Object(i.jsx)(K,{style:{opacity:t?1:.35},className:t&&s?"lm":""})})]})})};function Z(){var n=Object(l.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-05);\n  min-height: 220px;\n  width: 40%;\n  overflow: hidden;\n  opacity: 0.5;\n  padding-bottom: var(--spacing-07);\n  position: relative;\n  border-radius: 50%;\n  min-width: 270px !important;\n  min-height: 250px;\n  @keyframes rotate1 {\n    from {\n      --rotate: 0deg;\n      transform: translate(0%, 110%) perspective(520px) rotateX(0deg)\n        rotateY(0deg);\n      opacity: 0;\n    }\n    30% {\n    }\n    69% {\n      opacity: 0;\n    }\n    70% {\n      opacity: 0;\n    }\n    90% {\n      opacity: 1;\n    }\n    100% {\n      --rotate: 90deg;\n      transform: translate(-0%, 0%) perspective(1020px) rotateX(180deg)\n        rotateY(180deg);\n      opacity: 0;\n    } /* \n    100% {\n      transform: perspective(520px) rotateX(0deg) rotateY(0deg);\n      opacity: 1;\n    } */\n  }\n  > div:not(.laptop) {\n    background: var(--ui-03);\n    --rotate: 0deg;\n    opacity: 0;\n    clip-path: polygon(\n      0% 15%,\n      15% 15%,\n      15% 0%,\n      85% 0%,\n      85% 15%,\n      100% 15%,\n      100% 85%,\n      85% 85%,\n      85% 100%,\n      15% 100%,\n      15% 85%,\n      0% 85%\n    );\n    transform: perspective(520px) rotateX(var(--rotate)) rotateY(var(--rotate));\n    animation: rotate1 4.5s ease-in-out infinite;\n\n    @supports (-webkit-touch-callout: none) {\n      display: none;\n    }\n\n    @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {\n      @media {\n        display: none;\n      }\n    }\n\n    @media not all and (min-resolution: 0.001dpcm) {\n      @supports (-webkit-appearance: none) {\n        display: none;\n      }\n    }\n    &:nth-child(2) {\n      animation-delay: 0.2s;\n    }\n    &:nth-child(3) {\n      animation-delay: 0.4s;\n    }\n    &:nth-child(4) {\n      animation-delay: 0.8s;\n    }\n    &:nth-child(5) {\n      animation-delay: 1s;\n    }\n    &:nth-child(6) {\n      animation-delay: 1.2s;\n    }\n    &:nth-child(7) {\n      animation-delay: 1.4s;\n    }\n    &:nth-child(8) {\n      animation-delay: 1.6s;\n    }\n    &:nth-child(9) {\n      animation-delay: 1.8s;\n    }\n    &:nth-child(10) {\n      animation-delay: 2s;\n    }\n  }\n  /** https://codepen.io/llecouey/pen/zqhea */\n\n  ul,\n  li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    &::marker {\n      content: "";\n      display: none;\n    }\n  }\n  .laptop {\n    --laptopColor: #fff;\n    --secondary: #aaa;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -110%);\n    width: 200px;\n    height: 120px;\n    margin: 56px 0 0 0;\n    border: 5px var(--laptopColor) solid;\n    border-radius: 2px;\n  }\n\n  .laptop:before {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 40px;\n    height: 3px;\n    margin: 126px 0 0 80px;\n    background: var(--background);\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    z-index: 1;\n    background: var(--secondary);\n  }\n\n  .laptop:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 240px;\n    height: 8px;\n    margin: 6px 0 0 -20px;\n    background: var(--laptopColor);\n    border-radius: 2px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n  .laptop .content {\n    width: 180px;\n    height: 100px;\n    margin: 0px 0 0 0;\n    padding: 10px;\n    background: var(--text-02);\n    color: var(--text-01);\n    font-size: 0.5em;\n    overflow: hidden;\n  }\n\n  .laptop ul li {\n    height: 6px;\n    margin: 0 0 5px 0;\n    border-color: var(--text-01);\n    background: var(--text-01);\n    &:nth-child(1) {\n      height: 18px;\n      margin-bottom: 12px;\n    }\n    &:nth-child(9) {\n      height: 18px;\n      margin: 12px 0;\n    }\n    &:nth-child(8) {\n      height: 12px;\n      margin-bottom: 12px;\n    }\n  }\n\n  .laptop ul {\n    animation: laptop 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;\n    animation-delay: 1.25s;\n    opacity: 0.5;\n  }\n\n  @keyframes laptop {\n    0% {\n      transform: translateY(0%);\n    }\n    7% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n    25% {\n      transform: translateY(-40%);\n    }\n    40%,\n    60% {\n      transform: translateY(-50%);\n    }\n    80%,\n    90% {\n      transform: translateY(0%);\n    }\n    95% {\n      opacity: 1;\n      transform: translateY(5%);\n    }\n    98% {\n      opacity: 0;\n    }\n  }\n']);return Z=function(){return n},n}var $=d.b.div(Z()),nn=function(){return Object(i.jsx)($,{children:Object(i.jsx)("div",{className:"laptop",children:Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{style:{width:"90%"}}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{style:{width:"70%"}})]})})})})};function en(n){return Object(i.jsxs)("svg",Object(m.a)(Object(m.a)({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",width:897.318,height:556.975,viewBox:"0 0 897 756"},n),{},{children:[Object(i.jsx)("path",{d:" 10.388h-26.81a2.03 2.03 0 000 4.06h26.81a2.03 2.03 0 000-4.06zM774.304 17.998h-26.81a2.03 2.03 0 000 4.06h26.81a2.03 2.03 0 000-4.06zM656.713 116.141h-434.01a8.07 8.07 0 00-8.07 8.06v204.87a8.079 8.079 0 008.07 8.07h434.01a8.077 8.077 0 008.06-8.07v-204.87a8.068 8.068 0 00-8.06-8.06z",fill:"var(--color-02)",style:{opacity:.2}}),Object(i.jsx)("path",{d:"M542.073 214.842a8.068 8.068 0 00-8.06 8.06v57.87a8.077 8.077 0 008.06 8.07h122.7v-74z",fill:"var(--color-02)"}),Object(i.jsx)("path",{d:"M871.088 288.837h-329.01a8.076 8.076 0 01-8.067-8.066v-57.868a8.075 8.075 0 018.067-8.066h329.01a8.075 8.075 0 018.066 8.066v57.868a8.076 8.076 0 01-8.066 8.066z",fill:"var(--color-01)",opacity:.5}),Object(i.jsx)("circle",{cx:586.571,cy:255.537,r:13.089,fill:"#fff"}),Object(i.jsx)("path",{d:"M860.894 251.734H624.38a3.898 3.898 0 110-7.796h236.514a3.898 3.898 0 110 7.796zM771.063 267.135H624.38a3.898 3.898 0 110-7.795h146.683a3.898 3.898 0 010 7.795z",fill:"#fff"}),Object(i.jsx)("path",{d:"M869.68 238.348a27.638 27.638 0 1127.638-27.638 27.638 27.638 0 01-27.638 27.638z",fill:"var(--color-02)"}),Object(i.jsx)("path",{d:"M880.586 207.984h-8.18v-8.18a2.726 2.726 0 00-5.452 0v8.18h-8.179a2.726 2.726 0 100 5.452h8.18v8.18a2.726 2.726 0 005.452 0v-8.18h8.179a2.726 2.726 0 100-5.452z",fill:"#fff"}),Object(i.jsx)("path",{d:"M447.883 289.212h-105.01a8.079 8.079 0 00-8.07 8.07v39.86h121.14v-39.86a8.077 8.077 0 00-8.06-8.07z",fill:"var(--color-01)"}),Object(i.jsx)("path",{d:"M447.88 401.212H342.87a8.076 8.076 0 01-8.067-8.067v-95.867a8.075 8.075 0 018.067-8.066h105.01a8.075 8.075 0 018.066 8.066v95.867a8.076 8.076 0 01-8.066 8.067z",fill:"var(--color-01)",opacity:.5}),Object(i.jsx)("circle",{cx:373.808,cy:321.563,r:13.089,fill:"#fff"}),Object(i.jsx)("path",{d:"M426.131 354.547h-61.514a3.898 3.898 0 110-7.795h61.514a3.898 3.898 0 110 7.795zM394.3 369.95h-29.683a3.898 3.898 0 010-7.797H394.3a3.898 3.898 0 010 7.796z",fill:"#fff"}),Object(i.jsx)("path",{d:"M340.68 429.348a27.638 27.638 0 1127.638-27.638 27.638 27.638 0 01-27.638 27.638z",fill:"var(--color-01)"}),Object(i.jsx)("path",{d:"M351.586 398.984h-8.18v-8.18a2.726 2.726 0 10-5.452 0v8.18h-8.179a2.726 2.726 0 100 5.452h8.18v8.18a2.726 2.726 0 105.452 0v-8.18h8.179a2.726 2.726 0 100-5.452z",fill:"#fff"}),Object(i.jsx)("path",{d:"M327.887 228.266h-105.01a8.076 8.076 0 01-8.067-8.066v-95.867a8.075 8.075 0 018.067-8.067h105.01a8.075 8.075 0 018.066 8.067V220.2a8.076 8.076 0 01-8.066 8.066z",fill:"var(--color-01)"}),Object(i.jsx)("circle",{cx:253.816,cy:156.618,r:13.089,fill:"var(--color-01)"}),Object(i.jsx)("path",{d:"M306.139 185.602h-61.514a3.898 3.898 0 110-7.795h61.514a3.898 3.898 0 110 7.795zM274.308 201.004h-29.683a3.898 3.898 0 110-7.796h29.683a3.898 3.898 0 110 7.796z",fill:"var(--color-01)"}),Object(i.jsx)("path",{d:"M327.887 228.266h-105.01a8.076 8.076 0 01-8.067-8.066v-95.867a8.075 8.075 0 018.067-8.067h105.01a8.075 8.075 0 018.066 8.067V220.2a8.076 8.076 0 01-8.066 8.066z",fill:"var(--color-01)",opacity:.5}),Object(i.jsx)("circle",{cx:253.816,cy:156.618,r:13.089,fill:"#fff"}),Object(i.jsx)("path",{d:"M306.139 185.602h-61.514a3.898 3.898 0 110-7.795h61.514a3.898 3.898 0 110 7.795zM274.308 201.004h-29.683a3.898 3.898 0 110-7.796h29.683a3.898 3.898 0 110 7.796z",fill:"#fff"})]}))}function tn(n){return Object(i.jsx)("svg",Object(m.a)(Object(m.a)({height:"511pt",viewBox:"1 1 512 511",width:"511pt",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M512 256.5c0 50.531-15 99.672-43.375 142.113-3.855 5.77-10.191 8.887-16.645 8.887-3.82 0-7.683-1.09-11.097-3.375-9.184-6.137-11.649-18.559-5.512-27.742C459.336 340.543 472 299.09 472 256.5c0-18.3-2.29-36.477-6.805-54.016-2.754-10.695 3.688-21.601 14.383-24.355 10.703-2.75 21.602 3.687 24.356 14.383C509.285 213.309 512 234.836 512 256.5zM367.734 441.395C334.141 461.742 295.504 472.5 256 472.5c-119.102 0-216-96.898-216-216s96.898-216 216-216c44.098 0 86.5 13.195 122.629 38.16 9.086 6.278 21.543 4 27.824-5.086 6.277-9.086 4.004-21.543-5.086-27.824C358.523 16.148 308.257.5 256 .5 187.621.5 123.332 27.129 74.98 75.48 26.63 123.832 0 188.121 0 256.5s26.629 132.668 74.98 181.02C123.332 485.87 187.621 512.5 256 512.5c46.813 0 92.617-12.758 132.46-36.895 9.45-5.722 12.47-18.02 6.747-27.468-5.727-9.45-18.023-12.465-27.473-6.742zM257.93 314.492c-3.168.125-6.125-1-8.422-3.187l-104.746-99.317c-8.016-7.601-20.676-7.265-28.274.75-7.601 8.016-7.265 20.676.75 28.274l104.727 99.3c9.672 9.196 22.183 14.188 35.441 14.188.711 0 1.422-.016 2.133-.043 14.043-.566 26.941-6.644 36.316-17.117.239-.262.465-.531.688-.809l211.043-262.5c6.922-8.61 5.555-21.199-3.055-28.117-8.605-6.922-21.199-5.555-28.12 3.055L265.78 310.957a11.434 11.434 0 01-7.851 3.535zm0 0"})}))}function an(){var n=Object(l.a)(["\n  animation: pump 3s ease-in-out infinite;\n  height: 0.9em;\n  width: 0.9em;\n  flex-shrink: 0;\n  @keyframes pump {\n    0%,\n    45%,\n    55%,\n    100% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(l.a)(["\n  :root {\n    /** VARIABLAR DARKMODE **/ \n    /*                            r   g   b    a\n      For rgba, bruk syntax: rgba(255,255,255,0.5)\n      For rgb:               rgb(255,255,255)\n      For hex:               #ffffff\n    */\n    --background: #13212b;\n    --ui-01: #102330;\n    --text-01: #fbe6df;\n    --text-02: #cac0bd;\n    --link: #69AAB1;\n    --ui-01: #203A3C;\n    --ui-02: #1C3338;\n    --ui-03: #192D33;\n\n    /** Spacing */\n    --spacing-01:0.125rem; /* 0.125 * 16px */\n    --spacing-02:0.25rem;\n    --spacing-03:0.5rem;\n    --spacing-04:0.75rem;\n    --spacing-05:1rem;\n    --spacing-06:1.5rem;\n    --spacing-07:2rem;\n    --spacing-08:3rem;\n    --spacing-09:4rem;\n  }\n  body.lm {\n      /** VARIABLAR LIGHTMODE **/\n      --background: #b7b7b7;\n      --text-01: #13212b;\n      --text-02: #2b404e;\n      --link: #203A3C;\n      --ui-01: #dad6d0; /* #7fa2a2 */\n      --ui-02: #D1CECA; \n      --ui-03: #C8C6C3; \n    }\n  html {\n    background-color: var(--background);\n  }\n  body, html {\n    margin: 0;\n    padding:0;\n  }\n  @media (prefers-reduced-motion) { \n    * {\n      transition:none !important;\n      animation: none !important;\n    }\n  }\n  body {\n    font-family: 'Ubuntu', sans-serif;\n    background-color:var(--background);\n    color: var(--text-01);\n    font-size: 16px;\n    box-sizing:border-box;\n    animation: fadeInUp 0.3s ease-in-out;\n    transition: color 0.15s ease-in, background-color 0.15s ease-in;\n    @keyframes fadeInUp {\n      from {\n        opacity:0;\n      }\n    }\n    @media screen and (max-width: 500px) {\n      overflow-x:hidden;\n      max-width:100vw;\n    }\n  }\n  .prefix__waves {\n  animation: "," 0.4s ease-in-out;\n  }\n  a {\n    color: var(--link);\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  .App {\n    position:relative;\n  }\n  h1,h2,h3,h4{margin:0 0 var(--spacing-03);}\n  h1 {\n    font-size:2.5rem;\n  }\n  h2 {\n    display:flex;\n    gap:var(--spacing-03);\n    font-size:2rem;\n    color:var(--text-01);\n    align-items:center;\n    flex-wrap:wrap;\n    span {\n      color:var(--text-02);\n      opacity:0.6;\n    }\n  }\n"]);return rn=function(){return n},n}var on=Object(d.a)(rn(),I),sn=Object(d.b)((function(n){return Object(i.jsx)("svg",Object(m.a)(Object(m.a)({width:517,height:379,viewBox:"0 0 517 379",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M110.449 7.186C53.223 26.857 13.433 76.93 2.256 142.203c-9.835 57.672 11.624 91.203 81.368 125.181 62.144 30.848 99.698 62.143 105.51 88.968 6.259 29.06 5.812 29.06 24.142 6.259 26.377-33.978 76.897-63.485 179.724-105.51 63.038-25.93 99.251-61.696 115.346-112.663 16.541-53.649 8.494-97.91-21.46-123.393C465.874 3.61 444.861-1.755 405.518.48c-43.813 2.682-76.897 18.33-109.98 51.413-24.142 24.59-28.613 27.272-28.613 17.883 0-3.13-6.259-15.2-13.412-27.271-18.33-29.06-48.284-42.92-91.651-42.472-16.989 0-40.237 3.13-51.413 7.153z",fill:"currentColor"})}))}))(an()),cn=t(22),ln=setTimeout((function(){}));function dn(){return function(){for(var n="#",e=0;e<6;e++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n}()}function pn(){var n=Object(cn.a)("mvodeazb"),e=Object(c.a)(n,2),t=e[0],r=e[1],o=Object(h.a)(),s=o.ref,l=o.inView,d=Object(a.useState)(["violet","blue"]),p=Object(c.a)(d,2),m=p[0],u=p[1],b=Object(a.useState)(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches),f=Object(c.a)(b,2),x=f[0],j=f[1],g=function n(){u([dn(),dn()]),ln=setTimeout((function(){return n()}),5e3)};return Object(a.useEffect)((function(){var n=localStorage.getItem("rr-lm");if(n){var e=JSON.parse(n);j(e)}}),[]),Object(a.useEffect)((function(){x?(document.body.classList.add("lm"),localStorage.setItem("rr-lm",JSON.stringify(!0))):(localStorage.setItem("rr-lm",JSON.stringify(!1)),document.body.classList.remove("lm"))}),[x]),Object(a.useEffect)((function(){return ln=setTimeout((function(){return g()}),5e3),function(){return clearTimeout(ln)}}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(on,{}),Object(i.jsx)(W,{onClick:function(){return j(!x)},isLightmode:x}),Object(i.jsx)(C,{isLightmode:x}),Object(i.jsxs)(_,{flex:!0,children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["Utvikling ",Object(i.jsx)("span",{children:"+"})," Design ",Object(i.jsx)("span",{children:"="})," ",Object(i.jsx)(sn,{"aria-label":"Love",role:"img",children:"\u2764"})]}),Object(i.jsx)("p",{children:"Ryfylke React AS er din mellommann for moderne nettside-teknologi."}),Object(i.jsxs)("p",{children:["Vi kan utf\xf8re oppgaver innenfor det som omfattes som"," ",Object(i.jsx)("strong",{children:"front-end"})," teknologier. Dette inneholder blant annet..."]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Interaktivitet"}),Object(i.jsx)("li",{children:"Animasjoner"}),Object(i.jsx)("li",{children:"S\xf8keoptimalisering"}),Object(i.jsx)("li",{children:"Responsive design."})]}),Object(i.jsx)("p",{children:"Ryfylke React er \xe5pne for prosjekter p\xe5 eksisterende nettsted, i tillegg til bistand til utvikling av helt nye nettsted."})]}),Object(i.jsx)(nn,{})]}),Object(i.jsx)(U,{background:"var(--ui-02)"}),Object(i.jsxs)(_,{background:"var(--ui-02)",flex:!0,className:"checklist",style:{"--color-01":m[0],"--color-02":m[1]},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Vi tilbyr"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(mn,{submenu:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Responsive til alle enheter"}),Object(i.jsx)("li",{children:"S\xf8keoptimalisert"}),Object(i.jsx)("li",{children:"Basert p\xe5 din data-kilde"}),Object(i.jsx)("li",{children:"Mulighet for tilpassing gjennom egne systemer"})]}),children:"Design & utvikling av nettsted"}),Object(i.jsx)(mn,{children:"Videreutvikling p\xe5 eksisterende nettsted"}),Object(i.jsx)(mn,{children:"Bistand til sp\xf8rsm\xe5l rundt utvikling av nettsted"})]})]}),Object(i.jsx)(en,{})]}),Object(i.jsx)(U,{background:"var(--ui-02)"}),Object(i.jsxs)(_,{background:"var(--ui-02)",flex:!0,children:[Object(i.jsx)(X,{}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["Kompetanse ",Object(i.jsx)("span",{children:"&"})," Erfaring"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"https://haakon.dev",target:"_blank",rel:"noreferrer",children:"H\xe5kon Svennes Underbakke"})," ","har jobbet innen front-end nettside utvikling profesjonelt i 5 \xe5r. Han har jobbet som fast ansatt p\xe5 in-house prosjekter hos LIGL AS, som konsulent for Idean (Capgemini Invent), og n\xe5 som konsulent for eget firma - Ryfylke React AS."]}),Object(i.jsx)("p",{children:"Som konsulent har H\xe5kon jobbet p\xe5 prosjekter hos blant annet Equinor, NDLA og Telenor. Det gj\xf8r at H\xe5kon har erfaring med \xe5 jobbe b\xe5de p\xe5 store prosjekter, med rutinerte arbeidsmetodikker - i tillegg til mindre prosjekter."}),Object(i.jsx)("p",{children:"Vi har sterk kompetanse innen de grunnleggende frontend teknologiene; HTML, CSS & JavaScript, i tillegg til rammeverk som React.JS, og teknologiene som f\xf8lger med det. Vi har ogs\xe5 kunnskap rundt resten av prosessen av \xe5 publisere et nettsted, og kan gjerne r\xe5df\xf8re for veien videre."})]})," "]}),Object(i.jsx)(U,{background:"var(--ui-03)"}),Object(i.jsxs)(_,{background:"var(--ui-03)",flex:!0,style:{position:"relative",overflow:"hidden"},children:[Object(i.jsxs)("div",{ref:s,children:[Object(i.jsx)("h2",{children:"La oss finne en l\xf8sning"}),Object(i.jsx)("p",{children:"Trenger du hjelp med hele prosessen? Bare litt? Vi finner en l\xf8sning, og du f\xe5r ditt produkt ut til resten av verden i stil."}),Object(i.jsxs)("form",{onSubmit:r,style:{opacity:t.submitting?.5:1},children:[Object(i.jsxs)("label",{children:["E-post addresse",Object(i.jsx)("input",{type:"email",name:"email",placeholder:"business@bedrift.no"})]}),Object(i.jsxs)("label",{children:["Interessert i",Object(i.jsxs)("select",{name:"interresert_i",children:[Object(i.jsx)("option",{children:"En prat"}),Object(i.jsx)("option",{children:"Utvikle nytt nettsted"}),Object(i.jsx)("option",{children:"Jobb p\xe5 eksisterende nettsted"})]})]}),Object(i.jsxs)("label",{children:["Utdyp",Object(i.jsx)("textarea",{name:"utdyp"})]}),Object(i.jsx)("button",{type:"submit",disabled:t.submitting,children:t.submitting?"Vent litt...":"Kontakt oss"}),Object(i.jsx)("div",{children:t.succeeded&&"Melding mottatt!"})]})]})," ",Object(i.jsx)("img",{src:x?"/logo-lm.svg":"/logo-dm.svg",alt:"Logo, ".concat(x?"bl\xe5tt":"oransje"," vikingskip, hvor tuppen ser ut som et drage-hode."),style:{width:"30%",position:"absolute",right:"-5%",bottom:"-20%",opacity:.1,pointerEvents:"none",userSelect:"none",transition:"transform 0.9s cubic-bezier(0.175, 0.5, 0.1, 1.275)",transform:l?"rotate(-5deg)":"rotate(15deg)"}})]})]})}var mn=function(n){var e=n.children,t=n.submenu;return Object(i.jsxs)("li",{children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)(tn,{})," ",e]})," ",null!==t&&void 0!==t?t:""]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(pn,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e9b1b411.chunk.js.map