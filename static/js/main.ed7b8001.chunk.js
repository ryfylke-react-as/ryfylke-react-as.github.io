(this["webpackJsonpryfylke-react-as"]=this["webpackJsonpryfylke-react-as"]||[]).push([[0],{24:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t(0),o=t.n(i),s=t(14),r=t.n(s),c=(t(24),t(7)),l=t(18),m=t(5),d=t(11),p=t(2),u=t(9),b=t.p+"static/media/MOUNTAINS.8fe333d2.svg",f=t.p+"static/media/icon.d2f33491.svg",h=t(8),x=t.n(h);function j(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 70%;\n  @media screen and (max-width: 800px) {\n    max-width: 100%;\n  }\n  pointer-events: none;\n  user-select: none;\n  transition: transform 0.8s ease-out, opacity 0.8s ease-out;\n  transform: translate(\n    ","\n  );\n  opacity: ",";\n"]);return j=function(){return n},n}function g(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 2vmin;\n  max-width: 45%;\n  @media screen and (max-width: 800px) {\n    max-width: 70%;\n  }\n  transform-origin: bottom right;\n  pointer-events: none;\n  user-select: none;\n  transition: transform 0.8s ease-out, opacity 0.8s ease-out;\n  animation: mountainIn 0.4s ease-out;\n  animation-delay: 0.4s;\n  animation-fill-mode: backwards;\n  @keyframes mountainIn {\n    from {\n      opacity: 0;\n      transform: translate(0px, 20px);\n    }\n  }\n  transform: scale(\n    ","\n  );\n  opacity: ",";\n"]);return g=function(){return n},n}function v(){var n=Object(c.a)(['\n  color: var(--violet);\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-rows: 1;\n  grid-template-columns: 1;\n  max-width: 82vw;\n  margin: 0 auto;\n  > * {\n    grid-area: 1 / 1;\n  }\n  h1 {\n    font-size: 5.5em;\n    @media screen and (max-width: 800px) {\n      font-size: 4em;\n    }\n    margin: 0;\n    span {\n      color: var(--pink-g);\n      font-size: 0.5em;\n    }\n  }\n  h2 {\n    opacity: 0.6;\n    @media screen and (max-width: 800px) {\n      font-size: 1.1em;\n    }\n  }\n  p {\n    @media screen and (max-width: 800px) {\n      font-size: 0.8em;\n    }\n  }\n  button {\n    border: none;\n    padding: 0.7em 1.3em;\n    font-weight: bold;\n    font-size: 1.3em;\n    @media screen and (max-width: 800px) {\n      font-size: 1.1em;\n    }\n    cursor: pointer;\n    color: var(--violet);\n    background: var(--pink-g);\n    font-family: "Montserrat", sans-serif;\n    text-transform: uppercase;\n    + button {\n      background: var(--pink);\n      margin-left: 0.6em;\n    }\n  }\n  .page {\n    opacity: 0;\n    max-height: 100vh;\n    overflow-y: auto;\n    @media screen and (max-width: 800px) {\n      padding-top: 20px !important;\n      padding-bottom: 20px !important;\n    }\n    &.canAnimate {\n      opacity: 1;\n      animation: goAway 0.3s ease-in;\n      animation-fill-mode: both;\n    }\n    pointer-events: none;\n    @keyframes goAway {\n      from {\n        opacity: 1;\n        transform: none;\n        visibility: visible;\n      }\n      to {\n        opacity: 0;\n        transform: translate(-20%, 0px);\n        visibility: hidden;\n      }\n    }\n    &.home {\n      position: relative;\n      .icon {\n        position: absolute;\n        user-select: none;\n        pointer-events: none;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        opacity: 0.2;\n      }\n      button {\n        margin-top: 30px;\n        @media screen and (max-width: 800px) {\n          display: block;\n          width: 100%;\n          margin: 0;\n          margin-top: 10px;\n          &:first-of-type {\n            margin-top: 25px;\n          }\n        }\n      }\n    }\n    &.portfolio h2,\n    &.contact h2 {\n      font-size: 4.5em;\n      @media screen and (max-width: 800px) {\n        font-size: 2.5em;\n      }\n    }\n    &.portfolio {\n      h2 {\n        margin: 0 0 20px;\n      }\n      button {\n        margin-top: 30px;\n      }\n      ul {\n        list-style: none;\n        padding: 0;\n        li {\n          font-size: 1.2em;\n          @media screen and (max-width: 800px) {\n            font-size: 0.8em;\n          }\n          padding-bottom: 10px;\n          a {\n            display: block;\n            padding: 10px;\n            background: var(--pink-l);\n            color: var(--violet);\n            &:hover {\n              text-decoration: none;\n            }\n          }\n        }\n      }\n    }\n    &.contact {\n      display: flex;\n      flex-direction: column;\n      width: 500px;\n      .succ {\n        display: block;\n        margin-bottom: 20px;\n        color: var(--violet);\n        background: var(--pink-l);\n        padding: 10px;\n        font-size: 0.8em;\n      }\n      @media screen and (max-width: 550px) {\n        width: 100%;\n        padding: 0 5vmin;\n      }\n      h2 {\n        margin: 0 0 0.5em;\n      }\n      label {\n        display: flex;\n        flex-direction: column;\n        input,\n        textarea {\n          border: none;\n          background: var(--pink-l);\n          font-size: 1em;\n          min-width: 100%;\n          max-width: 100%;\n          padding: 0.5em;\n        }\n        textarea {\n          min-height: 12ch;\n          max-height: 12ch;\n        }\n        + label {\n          margin-top: 0.8em;\n        }\n      }\n      footer {\n        margin-top: 30px;\n        @media screen and (max-width: 800px) {\n          display: flex;\n          flex-direction: column;\n          button {\n            width: 100%;\n            + button {\n              margin: 0;\n              margin-top: 10px;\n            }\n          }\n        }\n      }\n      &.active {\n        animation: fadeInContact 0.3s ease-in;\n        animation-fill-mode: both;\n        animation-delay: 0.4s;\n        visibility: visible;\n        @keyframes fadeInContact {\n          from {\n            opacity: 0;\n            transform: translate(-8%, 0px);\n          }\n          to {\n            opacity: 1;\n            transform: none;\n            visibility: visible;\n          }\n        }\n      }\n    }\n    &.active {\n      animation: scaleUp 0.3s ease-in;\n      animation-fill-mode: both;\n      animation-delay: 0.4s;\n      pointer-events: all;\n      position: static;\n      visibility: visible;\n      @keyframes scaleUp {\n        from {\n          opacity: 0;\n          transform: scale(0.99) translate(0px, 5%);\n        }\n        to {\n          opacity: 1;\n          transform: none;\n          visibility: visible;\n        }\n      }\n    }\n  }\n']);return v=function(){return n},n}var O=u.a.div(v()),y=u.a.img(g(),(function(n){return"home"===n.page?1:"contact"===n.page?.5:1.5}),(function(n){return"home"===n.page?.6:"contact"===n.page?.4:1})),k=u.a.img(j(),(function(n){return"home"===n.page?"-100%":"contact"===n.page?"-50%":"-100%"}),(function(n){return"home"===n.page?0:"contact"===n.page?1:0})),w=function(){var n=Object(i.useState)("home"),e=Object(p.a)(n,2),t=e[0],s=e[1],r=Object(i.useState)(["home"]),c=Object(p.a)(r,2),u=c[0],h=c[1],j=Object(i.useState)({name:"",reply_to:"",message:""}),g=Object(p.a)(j,2),v=g[0],w=g[1],z=Object(i.useState)(!1),S=Object(p.a)(z,2),C=S[0],N=S[1],T=Object(i.useState)(!1),A=Object(p.a)(T,2),I=A[0],E=A[1],F=Object(i.useState)(!1),K=Object(p.a)(F,2),U=K[0],_=K[1],M=function(n,e){w(Object(d.a)(Object(d.a)({},v),{},Object(m.a)({},n,e))),E(!1),_(!1)};Object(i.useEffect)((function(){u.includes(t)||h([].concat(Object(l.a)(u),[t]))}),[t]);var L=x()("page","home",{canAnimate:u.includes("home")},{active:"home"===t}),D=x()("page","contact",{canAnimate:u.includes("contact")},{active:"contact"===t}),J=x()("page","portfolio",{canAnimate:u.includes("portfolio")},{active:"portfolio"===t});return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsxs)(O,{children:[Object(a.jsxs)("div",{className:L,children:[Object(a.jsxs)("h1",{children:["RYFYLKE",Object(a.jsx)("br",{}),"REACT",Object(a.jsx)("span",{children:"AS"})]}),Object(a.jsx)("img",{src:f,alt:"Ikon",className:"icon"}),Object(a.jsx)("h2",{children:"Frontend konsulent-tjenester."}),Object(a.jsx)("p",{children:"Utvikling av nettsider og web-apps."}),Object(a.jsx)("button",{onClick:function(){return s("contact")},children:"Kontakt"}),Object(a.jsx)("button",{onClick:function(){return s("portfolio")},children:"Konsulenter"})]}),Object(a.jsxs)("div",{className:D,children:[Object(a.jsx)("h2",{children:"KONTAKT"}),I&&Object(a.jsxs)("span",{className:"succ",children:[Object(a.jsx)("strong",{children:" Meldingen ble sendt. "}),"Vi kontakter deg innen 2-4 virkedager."]}),U&&Object(a.jsx)("span",{className:"succ",children:"Vennligst fyll ut alle felt."}),Object(a.jsxs)("label",{children:["Ditt navn",Object(a.jsx)("input",{type:"text",value:v.name,onChange:function(n){return M("name",n.target.value)}})]}),Object(a.jsxs)("label",{children:["E-post adresse",Object(a.jsx)("input",{type:"email",value:v.reply_to,onChange:function(n){return M("reply_to",n.target.value)}})]}),Object(a.jsxs)("label",{children:["Melding",Object(a.jsx)("textarea",{value:v.message,onChange:function(n){return M("message",n.target.value)}})]}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("button",{onClick:function(){return s("home")},children:"Tilbake"}),Object(a.jsx)("button",{onClick:function(n){n.preventDefault(),v.name&&v.message&&v.reply_to?(console.log("fetching..."),N(!0),fetch("https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then((function(n){return n.json()})).then((function(n){console.log("Successful response from server: ",n),N(!1),w({name:"",reply_to:"",message:""}),E(!0)})).catch((function(n){console.error("Unsuccessful response from server: ",n),N(!1),w({name:"",reply_to:"",message:""}),E(!0)}))):_(!0)},disabled:C,children:C?"Sender...":"Kontakt oss"})]})]}),Object(a.jsxs)("div",{className:J,children:[Object(a.jsx)("h2",{children:"KONSULENTER"}),Object(a.jsx)("p",{children:"Trykk p\xe5 konsulenten for \xe5 lese mer."}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://haakon.dev",children:"H\xe5kon Svennes Underbakke"})})}),Object(a.jsx)("button",{onClick:function(){return s("home")},children:"Tilbake"})]})]}),Object(a.jsx)(y,{src:b,page:t,role:"presentation"}),Object(a.jsx)(k,{src:b,page:t,role:"presentation"})]})},z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;t(n),a(n),i(n),o(n),s(n)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),z()}},[[27,1,2]]]);
//# sourceMappingURL=main.ed7b8001.chunk.js.map