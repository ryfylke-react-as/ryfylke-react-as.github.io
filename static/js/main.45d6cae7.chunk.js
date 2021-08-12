(this["webpackJsonpryfylke-react-as"]=this["webpackJsonpryfylke-react-as"]||[]).push([[0],{11:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t(1),a=t.n(r),o=t(12),s=t.n(o),c=(t(11),t(6)),l=t(2),d=t(5),p=t(3),m=t(4);function u(){var n=Object(p.a)(["\n  min-height: 300px;\n  max-height: 400px;\n  background: var(--background);\n  width: 550px;\n  max-width: 100%;\n  border-radius: 8px;\n  opacity: 0;\n  box-shadow: 0px 1px 15px -9px #0000004f;\n  > div {\n    padding: var(--spacing-05);\n    max-width: 100%;\n    overflow: hidden;\n    pre,\n    code {\n      margin: 0;\n      padding: 0;\n      font-size: 0.75rem;\n      color: var(--text-02);\n    }\n  }\n  svg {\n    width: 100%;\n  }\n  img {\n    max-width: 50%;\n    margin: var(--spacing-04) auto;\n    display: block;\n    opacity: 0.6;\n    animation: dancingPoop 6s infinite ease-out;\n    &:hover {\n      animation-name: rotate;\n    }\n    @keyframes rotate {\n      0%,\n      100% {\n        transform: rotate(0deg);\n      }\n      50% {\n        transform: rotate(180deg);\n      }\n      99% {\n        transform: rotate(360deg);\n      }\n    }\n    @keyframes dancingPoop {\n      0%,\n      100% {\n        transform: translate(0px, 0px) rotate(-4deg);\n        transition-timing-function: ease-out;\n      }\n      50% {\n        transition-timing-function: ease-in;\n        transform: translate(0px, -20px) rotate(-2deg);\n      }\n    }\n  }\n"]);return u=function(){return n},n}m.b.div(u());function b(){var n=Object(p.a)(["\n  font-size: 0.8rem;\n  font-weight: 600;\n  position: absolute;\n  bottom: 25%;\n  left: 10%;\n  transform: rotate(5deg);\n  animation: tagUpDown 10s ease-in-out infinite;\n  @media (prefers-reduced-motion) {\n    animation: none;\n  }\n  user-select: none;\n  color: var(--text-02);\n  opacity: 0.1;\n  @keyframes tagUpDown {\n    0% {\n      transform: translate(0px, 0px);\n    }\n    50% {\n      transform: translate(0px, 10px);\n    }\n    100% {\n      transform: translate(0px, 0px);\n    }\n  }\n  &:nth-of-type(2) {\n    left: 25%;\n    bottom: 28%;\n    animation-delay: 0.2s;\n  }\n  &:nth-of-type(3) {\n    left: 42%;\n    bottom: 23%;\n    transform: rotate(-5deg);\n    animation-delay: 0.5s;\n  }\n  &:nth-of-type(4) {\n    left: 78%;\n    bottom: 25%;\n    animation-delay: 0.7s;\n  }\n  &:nth-of-type(5) {\n    left: 60%;\n    bottom: 30%;\n    animation-delay: 1s;\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(p.a)(["\n  display: flex;\n  gap: var(--spacing-04);\n  margin: var(--cds-spacing-08) 0;\n  cursor: default;\n  &:hover img {\n    transform: rotate(-5deg);\n  }\n  img {\n    width: 35px;\n    transition: transform 0.1s ease-in;\n    transform: translateY(6%);\n    user-select: none;\n    animation: smudIn 0.3s ease-in-out;\n    @keyframes smudIn {\n      from {\n        clip-path: circle(12px);\n        transform: rotate(25deg);\n      }\n      to {\n        clip-path: circle(35px);\n      }\n    }\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(p.a)(["\n  display: flex;\n  gap: var(--spacing-07);\n  flex-direction: column;\n  align-items: center;\n  padding-top: var(--spacing-09);\n  position: relative;\n  svg {\n    position: relative;\n    z-index: 1;\n    height: 7rem;\n    width: 100%;\n    margin-top: calc(var(--spacing-03) * -1);\n  }\n"]);return h=function(){return n},n}var f=m.b.header(h()),x=m.b.div(g()),j=m.b.span(b()),v=function(n){var e=n.isLightmode;return Object(i.jsxs)(f,{children:[Object(i.jsxs)(x,{children:[Object(i.jsx)("img",{src:e?"/logo-lm.svg":"/logo-dm.svg",alt:"Logo, ".concat(e?"bl\xe5tt":"oransje"," vikingskip, hvor tuppen ser ut som et drage-hode.")}),Object(i.jsx)("h1",{children:"Ryfylke React"}),Object(i.jsx)(j,{children:"HTML"}),Object(i.jsx)(j,{children:"CSS"}),Object(i.jsx)(j,{children:"JavaScript"}),Object(i.jsx)(j,{children:"Design"}),Object(i.jsx)(j,{children:"Utvikling"})]}),Object(i.jsx)(L,{})]})},O=t(16);function y(){var n=Object(p.a)(["\n  padding: var(--spacing-08);\n  padding-bottom: 10rem;\n  background: ",';\n  margin-bottom: var(--spacing-07);\n  height: 60vh;\n  max-height: 450px;\n  @media screen and (max-width: 850px) {\n    max-height: 2000px;\n    height: auto;\n  }\n  &:not(:first-of-type) {\n    margin-top: -12rem;\n    position: relative;\n    z-index: 2;\n  }\n  form {\n    --width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-03);\n    label {\n      display: flex;\n      flex-direction: column;\n      font-size: 0.8rem;\n      gap: var(--spacing-03);\n      color: var(--text-02);\n      width: var(--width);\n      max-width: var(--width);\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n    input,\n    textarea {\n      border: none;\n      border-radius: 4px;\n      background: var(--ui-01);\n      padding: var(--spacing-04);\n      color: var(--text-01);\n      font-size: 0.8rem;\n      font-family: "Ubuntu", sans-serif;\n      max-width: var(--width);\n      margin: 0;\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n    [disabled] {\n      opacity: 0.1;\n    }\n    textarea {\n      height: 5rem;\n      max-height: 5rem;\n      resize: none;\n    }\n    button {\n      background: var(--background);\n      padding: var(--spacing-04);\n      color: var(--text-01);\n      border: none;\n      font-family: "Ubuntu", sans-serif;\n      font-weight: bold;\n      font-size: 0.8rem;\n      max-width: var(--width);\n      margin: 0;\n      cursor: pointer;\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n  }\n  a {\n    position: relative;\n    z-index: 99;\n  }\n  p {\n    max-width: 700px;\n    line-height: 1.35em;\n    color: var(--text-02);\n  }\n  ul {\n    li {\n      padding-left: var(--spacing-03);\n      line-height: 1.35em;\n      ul {\n        margin-top: var(--spacing-02);\n      }\n    }\n    li::marker {\n      content: "*";\n      color: var(--text-02);\n      font-size: 0.8em;\n      display: inline-block;\n    }\n  }\n']);return y=function(){return n},n}function k(){var n=Object(p.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  display: ",";\n  gap: var(--spacing-09);\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    align-items: center;\n  }\n  > div {\n    min-width: 100px;\n    max-width: 100%;\n  }\n"]);return k=function(){return n},n}var w=m.b.div(k(),(function(n){return n.flex?"flex":"block"})),z=m.b.section(y(),(function(n){var e,t=null!==(e=n.background)&&void 0!==e?e:"var(--ui-01)";return"linear-gradient(to bottom, ".concat(t,", var(--ui-01))")})),S=function(n){var e=n.children,t=Object(O.a)(n,["children"]);return Object(i.jsx)(z,Object(l.a)(Object(l.a)({},t),{},{children:Object(i.jsx)(w,{flex:t.flex,children:e})}))};function A(){var n=Object(p.a)(["\n  position: relative;\n  z-index: 3;\n  user-select: none;\n  pointer-events: none;\n  > svg {\n    height: 150px;\n    width: 100%;\n    margin-top: -10rem;\n    margin-bottom: 10rem;\n  }\n"]);return A=function(){return n},n}function M(){var n=Object(p.a)(["\n  fill: var(--ui-01);\n\n  @keyframes move-waves {\n    0% {\n      transform: translate3d(-30px, 0, 0);\n    }\n    50% {\n      transform: translate3d(30px, 0, 0);\n    }\n    100% {\n      transform: translate3d(-30px, 0, 0);\n    }\n  }\n  use {\n    animation: move-waves 50s ease-in-out infinite;\n    fill: linear-gradient(from top, var(--ui-01), var(--ui-01));\n    @media (prefers-reduced-motion) {\n      animation: none;\n    }\n  }\n  use:nth-child(odd) {\n    animation-direction: reverse;\n    animation-duration: 33s;\n  }\n  use:nth-child(1) {\n    animation-delay: -2s;\n    opacity: 0.7;\n  }\n  use:nth-child(2) {\n    animation-delay: -3s;\n    opacity: 0.5;\n  }\n  use:nth-child(3) {\n    animation-delay: -4s;\n    opacity: 0.3;\n  }\n  use:nth-child(4) {\n    animation-delay: -5s;\n  }\n"]);return M=function(){return n},n}var C=m.b.g(M());function L(n){var e;return Object(i.jsxs)("svg",Object(l.a)(Object(l.a)({className:"prefix__waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none"},n),{},{children:[Object(i.jsx)("defs",{children:Object(i.jsx)("path",{id:"prefix__a",d:"M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"})}),Object(i.jsxs)(C,{style:{fill:null!==(e=null===n||void 0===n?void 0:n.background)&&void 0!==e?e:"var(--ui-01)"},children:[Object(i.jsx)("use",{xlinkHref:"#prefix__a"}),Object(i.jsx)("use",{xlinkHref:"#prefix__a",x:50,y:3}),Object(i.jsx)("use",{xlinkHref:"#prefix__a",x:100,y:5}),Object(i.jsx)("use",{xlinkHref:"#prefix__a",x:150,y:7})]})]}))}var R=m.b.div(A()),D=function(n){return Object(i.jsx)(R,{children:Object(i.jsx)(L,Object(l.a)({},n))})};function I(){var n=Object(p.a)(["\n  padding-top: var(--spacing-05);\n  background: #2e2a2f;\n  border-radius: 10px;\n  box-shadow: 0px 0px 16px -8px #0f1e21;\n  filter: hue-rotate(250deg);\n\n  @-moz-document url-prefix() {\n    background: #282528;\n    filter: hue-rotate(250deg);\n  }\n\n  video {\n    width: 100%;\n    clip-path: polygon(0 1%, 100% 1%, 100% 100%, 0% 100%);\n    @media screen and (min-width: 1200px) {\n      min-width: 386px;\n    }\n  }\n"]);return I=function(){return n},n}var _=m.b.div(I()),E=function(){var n=Object(r.useState)(!1),e=Object(d.a)(n,2),t=e[0],a=e[1],o=Object(r.useRef)(null);return Object(r.useEffect)((function(){(null===o||void 0===o?void 0:o.current)&&(o.current.playbackRate=2,o.current.defaultMuted=!0,o.current.muted=!0)}),[null===o||void 0===o?void 0:o.current]),Object(i.jsx)(_,{children:Object(i.jsx)("video",{src:"https://haakon.dev/codewriter.mp4",poster:"https://haakon.dev/thumb.png",muted:!0,controls:!1,onMouseOver:function(){(null===o||void 0===o?void 0:o.current)&&!t&&(null===o||void 0===o||o.current.play(),a(!0))},ref:o})})};function H(n){return Object(i.jsx)("svg",Object(l.a)(Object(l.a)({width:30,height:35,viewBox:"0 0 30 35",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M16.402 0A17.366 17.366 0 000 17.328a17.366 17.366 0 0029.351 12.569A17.366 17.366 0 0111.018 12.56 17.365 17.365 0 0116.402.003V0z",fill:"currentColor"})}))}function Y(n){return Object(i.jsx)("svg",Object(l.a)(Object(l.a)({width:40,height:40,viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M28.35 19.84a8.511 8.511 0 11-17.023 0 8.511 8.511 0 0117.023 0zM30.005 18.434h9.68v2.817h-9.68v-2.817zM0 18.434h9.68v2.817H0v-2.817zM18.434 9.68V0h2.817v9.68h-2.817zM18.434 39.685v-9.68h2.817v9.68h-2.817zM26.031 11.658l6.845-6.845 1.992 1.992-6.845 6.845-1.992-1.992zM4.815 32.88l6.845-6.846 1.993 1.992-6.845 6.845-1.993-1.992zM11.66 13.65L4.815 6.805l1.993-1.992 6.845 6.845-1.993 1.992zM32.876 34.871l-6.845-6.845 1.992-1.992 6.845 6.845-1.992 1.992z",fill:"currentColor"})}))}function N(){var n=Object(p.a)(["\n  border-radius: 25px;\n  background: rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  svg {\n    max-width: 0.6rem;\n    color: #f9f9f9;\n    transition: transform 0.85s ease-in-out;\n    &.lm {\n      animation: rotateAnim 1s ease-in-out;\n      @media (prefers-reduced-motion) {\n        animation: none;\n      }\n      @keyframes rotateAnim {\n        from {\n          transform: rotate(0deg);\n          opacity: 0.3;\n        }\n        to {\n          opacity: 1;\n          transform: rotate(360deg);\n        }\n      }\n    }\n  }\n"]);return N=function(){return n},n}function U(){var n=Object(p.a)(["\n  position: absolute;\n  top: var(--spacing-07);\n  left: var(--spacing-05);\n  z-index: 99;\n  transition: transform 0.2s ease-in-out;\n  @media screen and (max-width: 500px) {\n    transform: translateY(calc(var(--spacing-05) * -1));\n  }\n  label {\n    display: flex;\n    border-radius: 25px;\n    background: rgba(0, 0, 0, 0.1);\n    padding: var(--spacing-03);\n    gap: var(--spacing-03);\n    opacity: 0.8;\n    transition: all 0.1s ease-in-out;\n    &:hover {\n      opacity: 1;\n      transform: scale(1.01);\n    }\n    cursor: pointer;\n  }\n  input {\n    visibility: hidden;\n    position: fixed;\n  }\n"]);return U=function(){return n},n}var B=m.b.div(U()),J=m.b.div(N()),T=function(n){var e=n.onClick,t=n.isLightmode,a=Object(r.useState)(!1),o=Object(d.a)(a,2),s=o[0],c=o[1];return Object(i.jsx)(B,{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",onChange:function(){s||c(!0),e()},checked:!t,"aria-label":"Toggle darkmode"}),Object(i.jsx)(J,{children:Object(i.jsx)(H,{className:t?"":s?"lm":"",style:{opacity:t?.35:1}})}),Object(i.jsx)(J,{children:Object(i.jsx)(Y,{style:{opacity:t?1:.35},className:t&&s?"lm":""})})]})})};function V(){var n=Object(p.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-05);\n  min-height: 220px;\n  width: 40%;\n  overflow: hidden;\n  opacity: 0.5;\n  padding-bottom: var(--spacing-07);\n  position: relative;\n  border-radius: 50%;\n  min-width: 270px !important;\n  min-height: 250px;\n  @keyframes rotate1 {\n    from {\n      --rotate: 0deg;\n      transform: translate(0%, 110%) perspective(520px) rotateX(0deg)\n        rotateY(0deg);\n      opacity: 0;\n    }\n    30% {\n    }\n    69% {\n      opacity: 0;\n    }\n    70% {\n      opacity: 0;\n    }\n    90% {\n      opacity: 1;\n    }\n    100% {\n      --rotate: 90deg;\n      transform: translate(-0%, 0%) perspective(1020px) rotateX(180deg)\n        rotateY(180deg);\n      opacity: 0;\n    } /* \n    100% {\n      transform: perspective(520px) rotateX(0deg) rotateY(0deg);\n      opacity: 1;\n    } */\n  }\n  > div:not(.laptop) {\n    background: var(--ui-03);\n    --rotate: 0deg;\n    opacity: 0;\n    clip-path: polygon(\n      0% 15%,\n      15% 15%,\n      15% 0%,\n      85% 0%,\n      85% 15%,\n      100% 15%,\n      100% 85%,\n      85% 85%,\n      85% 100%,\n      15% 100%,\n      15% 85%,\n      0% 85%\n    );\n    transform: perspective(520px) rotateX(var(--rotate)) rotateY(var(--rotate));\n    animation: rotate1 4.5s ease-in-out infinite;\n\n    @supports (-webkit-touch-callout: none) {\n      display: none;\n    }\n\n    @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {\n      @media {\n        display: none;\n      }\n    }\n\n    @media not all and (min-resolution: 0.001dpcm) {\n      @supports (-webkit-appearance: none) {\n        display: none;\n      }\n    }\n    &:nth-child(2) {\n      animation-delay: 0.2s;\n    }\n    &:nth-child(3) {\n      animation-delay: 0.4s;\n    }\n    &:nth-child(4) {\n      animation-delay: 0.8s;\n    }\n    &:nth-child(5) {\n      animation-delay: 1s;\n    }\n    &:nth-child(6) {\n      animation-delay: 1.2s;\n    }\n    &:nth-child(7) {\n      animation-delay: 1.4s;\n    }\n    &:nth-child(8) {\n      animation-delay: 1.6s;\n    }\n    &:nth-child(9) {\n      animation-delay: 1.8s;\n    }\n    &:nth-child(10) {\n      animation-delay: 2s;\n    }\n  }\n  /** https://codepen.io/llecouey/pen/zqhea */\n\n  ul,\n  li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    &::marker {\n      content: "";\n      display: none;\n    }\n  }\n  .laptop {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -110%);\n    width: 200px;\n    height: 120px;\n    margin: 56px 0 0 0;\n    border: 5px #fff solid;\n    border-radius: 2px;\n  }\n\n  .laptop:before {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 40px;\n    height: 3px;\n    margin: 126px 0 0 80px;\n    background: var(--background);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n  }\n\n  .laptop:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 240px;\n    height: 8px;\n    margin: 6px 0 0 -20px;\n    background: #fff;\n    border-radius: 2px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n  .laptop .content {\n    width: 180px;\n    height: 100px;\n    margin: 0px 0 0 0;\n    padding: 10px;\n    background: var(--text-02);\n    color: var(--text-01);\n    font-size: 0.5em;\n    overflow: hidden;\n  }\n\n  .laptop ul li {\n    height: 6px;\n    margin: 0 0 5px 0;\n    border-color: var(--text-01);\n    background: var(--text-01);\n    &:nth-child(1) {\n      height: 18px;\n      margin-bottom: 12px;\n    }\n    &:nth-child(9) {\n      height: 18px;\n      margin: 12px 0;\n    }\n    &:nth-child(8) {\n      height: 12px;\n      margin-bottom: 12px;\n    }\n  }\n\n  .laptop ul {\n    animation: laptop 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;\n    animation-delay: 1.25s;\n    opacity: 0.5;\n  }\n\n  @keyframes laptop {\n    0% {\n      transform: translateY(0%);\n    }\n    7% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n    25% {\n      transform: translateY(-40%);\n    }\n    40%,\n    60% {\n      transform: translateY(-50%);\n    }\n    80%,\n    90% {\n      transform: translateY(0%);\n    }\n    95% {\n      opacity: 1;\n      transform: translateY(5%);\n    }\n    98% {\n      opacity: 0;\n    }\n  }\n']);return V=function(){return n},n}var X=m.b.div(V()),F=function(){return Object(i.jsxs)(X,{children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{className:"laptop",children:Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{style:{width:"90%"}}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{style:{width:"70%"}})]})})})]})};function K(){var n=Object(p.a)(["\n  animation: pump 3s ease-in-out infinite;\n  height: 0.9em;\n  width: 0.9em;\n  flex-shrink: 0;\n  @keyframes pump {\n    0%,\n    45%,\n    55%,\n    100% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n  }\n"]);return K=function(){return n},n}function P(){var n=Object(p.a)(["\n  :root {\n    /** VARIABLAR DARKMODE **/ \n    /*\n      For rgba, bruk syntax: rgba(255,255,255,0.5)\n      For rgb:               rgb(255,255,255)\n      For hex:               #ffffff\n    */\n    --background: #13212b;\n    --ui-01: #102330;\n    --text-01: #fbe6df;\n    --text-02: #cac0bd;\n    --link: #69AAB1;\n    --ui-01: #203A3C;\n    --ui-02: #1C3338;\n    --ui-03: #192D33;\n\n    /** Spacing */\n    --spacing-01:0.125rem; /* 0.125 * 16px */\n    --spacing-02:0.25rem;\n    --spacing-03:0.5rem;\n    --spacing-04:0.75rem;\n    --spacing-05:1rem;\n    --spacing-06:1.5rem;\n    --spacing-07:2rem;\n    --spacing-08:3rem;\n    --spacing-09:4rem;\n  }\n  body.lm {\n      /** VARIABLAR LIGHTMODE **/\n      --background: #b7b7b7;\n      --text-01: #13212b;\n      --text-02: #2b404e;\n      --link: #203A3C;\n      --ui-01: #dad6d0; /* #7fa2a2 */\n      --ui-02: #D1CECA; \n      --ui-03: #C8C6C3; \n    }\n  *, *:before, *:after {\n    box-sizing-inherit;\n  }\n  body, html {\n    margin: 0;\n    padding:0;\n  }\n  body {\n    font-family: 'Ubuntu', sans-serif;\n    background:linear-gradient(to bottom, var(--background), 90%, var(--ui-03));\n    color: var(--text-01);\n    font-size: 16px;\n    box-sizing:border-box;\n    animation: fadeInUp 0.3s ease-in-out;\n    @keyframes fadeInUp {\n      from {\n        opacity:0;\n      }\n    }\n  }\n  a {\n    color: var(--link);\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  .App {\n    max-width:1200px;\n    margin:0 auto;\n    position:relative;\n  }\n  h1,h2,h3,h4{margin:0 0 var(--spacing-03);}\n  h1 {\n    font-size:2.5rem;\n  }\n  h2 {\n    display:flex;\n    gap:var(--spacing-03);\n    font-size:2rem;\n    color:var(--text-01);\n    align-items:center;\n    flex-wrap:wrap;\n    span {\n      color:var(--text-02);\n      opacity:0.6;\n    }\n  }\n"]);return P=function(){return n},n}var q=Object(m.a)(P()),G=Object(m.b)((function(n){return Object(i.jsx)("svg",Object(l.a)(Object(l.a)({width:517,height:379,viewBox:"0 0 517 379",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(i.jsx)("path",{d:"M110.449 7.186C53.223 26.857 13.433 76.93 2.256 142.203c-9.835 57.672 11.624 91.203 81.368 125.181 62.144 30.848 99.698 62.143 105.51 88.968 6.259 29.06 5.812 29.06 24.142 6.259 26.377-33.978 76.897-63.485 179.724-105.51 63.038-25.93 99.251-61.696 115.346-112.663 16.541-53.649 8.494-97.91-21.46-123.393C465.874 3.61 444.861-1.755 405.518.48c-43.813 2.682-76.897 18.33-109.98 51.413-24.142 24.59-28.613 27.272-28.613 17.883 0-3.13-6.259-15.2-13.412-27.271-18.33-29.06-48.284-42.92-91.651-42.472-16.989 0-40.237 3.13-51.413 7.153z",fill:"currentColor"})}))}))(K());function Q(){var n=Object(r.useState)({email:"",message:"",loading:!1,error:!1,success:!1}),e=Object(d.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches),s=Object(d.a)(o,2),p=s[0],m=s[1],u=function(n,e){a(Object(l.a)(Object(l.a)({},t),{},Object(c.a)({},n,e)))},b=function(n){return{value:t[n],onChange:function(e){var t;return u(n,null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},name:n,disabled:t.loading||t.success}};return Object(r.useEffect)((function(){var n=localStorage.getItem("rr-lm");if(n){var e=JSON.parse(n);m(e)}}),[]),Object(r.useEffect)((function(){console.log(t)}),[t]),Object(r.useEffect)((function(){p?(document.body.classList.add("lm"),localStorage.setItem("rr-lm",JSON.stringify(!0))):(localStorage.setItem("rr-lm",JSON.stringify(!1)),document.body.classList.remove("lm"))}),[p]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(q,{}),Object(i.jsx)(T,{onClick:function(){return m(!p)},isLightmode:p}),Object(i.jsx)(v,{isLightmode:p}),Object(i.jsxs)(S,{flex:!0,children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["Utvikling ",Object(i.jsx)("span",{children:"+"})," Design ",Object(i.jsx)("span",{children:"="})," ",Object(i.jsx)(G,{"aria-label":"Love",role:"img",children:"\u2764"})]}),Object(i.jsx)("p",{children:"Ryfylke React AS er din mellommann for moderne nett-teknologi."}),Object(i.jsxs)("p",{children:["Vi kan utf\xf8re oppgaver innenfor det som omfattes som"," ",Object(i.jsx)("strong",{children:"front-end"})," teknologier. Dette inneholder blant annet interaktivitet, animasjoner, s\xf8keoptimalisering, responsive design, og tilrettelegging for mennesker med funksjonshemminger."]}),Object(i.jsx)("p",{children:"Ryfylke React er \xe5pne for prosjekter p\xe5 eksisterende nettsted, i tillegg til bistand til utvikling av helt nye nettsted."})]}),Object(i.jsx)(F,{})]}),Object(i.jsx)(D,{background:"var(--ui-02)"}),Object(i.jsxs)(S,{background:"var(--ui-02)",flex:!0,children:[Object(i.jsx)(E,{}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["Kompetanse ",Object(i.jsx)("span",{children:"&"})," Erfaring"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"https://haakon.dev",target:"_blank",rel:"noreferrer",children:"H\xe5kon Svennes Underbakke"})," ","har jobbet innen front-end nettside utvikling profesjonelt i 5 \xe5r. Han har jobbet som fast ansatt p\xe5 in-house prosjekter hos LIGL AS, som konsulent for Idean (Capgemini Invent), og n\xe5 som konsulent for eget firma - Ryfylke React AS."]}),Object(i.jsx)("p",{children:"Som konsulent har H\xe5kon jobbet p\xe5 prosjekter hos blant annet Equinor, NDLA og Telenor. Det gj\xf8r at H\xe5kon har erfaring med \xe5 jobbe b\xe5de p\xe5 store prosjekter, med rutinerte arbeidsmetodikker - i tillegg til mindre prosjekter."}),Object(i.jsx)("p",{children:"Vi har sterk kompetanse innen de grunnleggende frontend teknologiene; HTML, CSS & JavaScript, i tillegg til rammeverk som React.JS, og teknologiene som f\xf8lger med det. Vi har ogs\xe5 kunnskap rundt resten av prosessen av \xe5 publisere et nettsted, og kan gjerne r\xe5df\xf8re for veien videre."})]})," "]}),Object(i.jsx)(D,{background:"var(--ui-03)"}),Object(i.jsxs)(S,{background:"var(--ui-03)",flex:!0,style:{position:"relative",overflow:"hidden"},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"La oss finne en l\xf8sning"}),Object(i.jsx)("p",{children:"Trenger du hjelp med hele prosessen? Bare litt? Vi finner en l\xf8sning, og du f\xe5r ditt produkt ut til resten av verden i stil."}),Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.email&&t.message?(u("loading",!0),u("success",!1),fetch("https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reply_to:t.email,name:t.email,message:t.message})}).then((function(n){return n.json()})).then((function(n){console.log("Successful response from server: ",n),u("loading",!1),u("success",!0)})).catch((function(n){console.error("Unsuccessful response from server: ",n),u("loading",!1),u("success",!0)}))):u("error",!0)},style:{opacity:t.loading?.5:1},children:[Object(i.jsxs)("label",{children:["E-post addresse",Object(i.jsx)("input",Object(l.a)(Object(l.a)({type:"email"},b("email")),{},{placeholder:"business@bedrift.no"}))]}),Object(i.jsxs)("label",{children:["Din melding",Object(i.jsx)("textarea",Object(l.a)({},b("message")))]}),Object(i.jsx)("button",{type:"submit",disabled:t.loading,children:t.success?"Melding mottatt!":"Kontakt oss"})]})]})," ",Object(i.jsx)("img",{src:p?"/logo-lm.svg":"/logo-dm.svg",alt:"Logo, ".concat(p?"bl\xe5tt":"oransje"," vikingskip, hvor tuppen ser ut som et drage-hode."),style:{width:"30%",position:"absolute",right:"-5%",bottom:"-20%",opacity:.1,pointerEvents:"none",userSelect:"none"}})]})]})}s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Q,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.45d6cae7.chunk.js.map