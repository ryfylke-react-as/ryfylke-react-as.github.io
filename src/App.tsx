import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MountainIMG from "./assets/MOUNTAINS.svg";
import CN from "classnames";

type Page = "home" | "contact" | "portfolio";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [canAnimate, setCanAnimate] = useState<Page[]>(["home"]);

  useEffect(() => {
    if (!canAnimate.includes(page)) {
      setCanAnimate([...canAnimate, page]);
    }
  }, [page]);

  const homeCN = CN(
    "page",
    "home",
    { canAnimate: canAnimate.includes("home") },
    { active: page === "home" }
  );

  const contactCN = CN(
    "page",
    "contact",
    { canAnimate: canAnimate.includes("contact") },
    { active: page === "contact" }
  );

  const portfolioCN = CN(
    "page",
    "portfolio",
    { canAnimate: canAnimate.includes("portfolio") },
    { active: page === "portfolio" }
  );

  return (
    <React.Fragment>
      <Container>
        <div className={homeCN}>
          <h1>
            RYFYLKE
            <br />
            REACT
          </h1>
          <h2>Frontend konsulent-tjenester</h2>
          <p>Utvikling av nettsider og web-apps.</p>
          <button onClick={() => setPage("contact")}>Kontakt</button>
          <button onClick={() => setPage("portfolio")}>Leveranser</button>
        </div>
        <div className={contactCN}>
          <h2>KONTAKT</h2>
          <label>
            Ditt navn
            <input type="text" />
          </label>
          <label>
            E-post adresse
            <input type="email" />
          </label>
          <label>
            Melding
            <textarea />
          </label>
          <footer>
            <button onClick={() => setPage("home")}>Tilbake</button>
            <button onClick={() => setPage("portfolio")}>Kontakt oss</button>
          </footer>
        </div>
        <div className={portfolioCN}>
          <h2>LEVERANSER</h2>
          <p>...</p>
          <button onClick={() => setPage("home")}>Tilbake</button>
        </div>
      </Container>
      <Mountain src={MountainIMG} page={page} role="presentation" />
      <Mountain2 src={MountainIMG} page={page} role="presentation" />
    </React.Fragment>
  );
}

const Container = styled.div`
  color: var(--violet);
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1;
  > * {
    grid-area: 1 / 1;
  }
  h1 {
    font-size: 6em;
    margin: 0;
  }
  h2 {
    opacity: 0.6;
  }
  button {
    border: none;
    padding: 0.7em 1.3em;
    font-weight: bold;
    font-size: 1.3em;
    cursor: pointer;
    color: var(--violet);
    background: var(--pink-g);
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    + button {
      background: var(--pink);
      margin-left: 0.6em;
    }
  }
  .page {
    opacity: 0;
    &.canAnimate {
      opacity: 1;
      animation: goAway 0.6s ease-in;
      animation-fill-mode: both;
    }
    pointer-events: none;
    @keyframes goAway {
      from {
        opacity: 1;
        transform: none;
      }
      to {
        opacity: 0;
        transform: translate(-20%, 0px);
      }
    }
    &.home button {
      margin-top: 30px;
    }
    &.portfolio h2,
    &.contact h2 {
      font-size: 4.5em;
    }
    &.contact {
      display: flex;
      flex-direction: column;
      width: 500px;
      @media screen and (max-width: 550px) {
        width: 95vw;
        padding: 0 5vmin;
      }
      h2 {
        margin: 0 0 0.5em;
      }
      label {
        display: flex;
        flex-direction: column;
        input,
        textarea {
          border: none;
          background: var(--pink-l);
          font-size: 1em;
          min-width: 100%;
          max-width: 100%;
          padding: 0.5em;
        }
        textarea {
          max-height: 25ch;
        }
        + label {
          margin-top: 0.8em;
        }
      }
      footer {
        margin-top: 30px;
      }
      &.active {
        animation: fadeInContact 0.4s ease-in;
        animation-fill-mode: both;
        animation-delay: 0.6s;
        @keyframes fadeInContact {
          from {
            opacity: 0;
            transform: translate(-8%, 0px);
          }
        }
      }
    }
    &.active {
      animation: scaleUp 0.3s ease-in;
      animation-fill-mode: both;
      animation-delay: 0.6s;
      pointer-events: all;
      position: static;
      @keyframes scaleUp {
        from {
          opacity: 0;
          transform: scale(0.99) translate(0px, 5%);
        }
      }
    }
  }
`;

const Mountain = styled.img<{ page: Page }>`
  position: absolute;
  bottom: 0;
  right: 2vmin;
  max-width: 45%;
  transform-origin: bottom right;
  pointer-events: none;
  user-select: none;
  transition: transform 1.2s ease-out, opacity 0.8s ease-out;
  animation: mountainIn 0.4s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
  @keyframes mountainIn {
    from {
      opacity: 0;
      transform: translate(0px, 20px);
    }
  }
  transform: scale(
    ${(props) =>
      props.page === "home" ? 1 : props.page === "contact" ? 0.5 : 1.5}
  );
  opacity: ${(props) =>
    props.page === "home" ? 1 : props.page === "contact" ? 0.5 : 1};
`;

const Mountain2 = styled.img<{ page: Page }>`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 70%;
  pointer-events: none;
  user-select: none;
  transition: transform 1.2s ease-out, opacity 0.8s ease-out;
  transform: translate(
    ${(props) =>
      props.page === "home"
        ? "-100%"
        : props.page === "contact"
        ? "-50%"
        : "-100%"}
  );
  opacity: ${(props) =>
    props.page === "home" ? 0 : props.page === "contact" ? 1 : 0};
`;

export default App;
