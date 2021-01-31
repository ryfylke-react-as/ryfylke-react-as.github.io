import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MountainIMG from "./assets/MOUNTAINS.svg";
import CN from "classnames";

type Page = "home" | "contact" | "portfolio";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [canAnimate, setCanAnimate] = useState<Page[]>(["home"]);
  const [formState, setFormState] = useState({
    name: "",
    reply_to: "",
    message: "",
  });
  const [loadingForm, setLoadingForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [fillFields, setFillFields] = useState(false);

  const setState = (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
    setFormSent(false);
    setFillFields(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.message && formState.reply_to) {
      console.log("fetching...");
      setLoadingForm(true);
      fetch(
        "https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formState),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("Successful response from server: ", res);
          setLoadingForm(false);
          setFormState({
            name: "",
            reply_to: "",
            message: "",
          });
          setFormSent(true);
        })
        .catch((err) => {
          console.error("Unsuccessful response from server: ", err);
          setLoadingForm(false);
          setFormState({
            name: "",
            reply_to: "",
            message: "",
          });
          setFormSent(true);
        });
    } else {
      //
      setFillFields(true);
    }
    return;
  };

  useEffect(() => {
    if (!canAnimate.includes(page)) {
      setCanAnimate([...canAnimate, page]);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
            <span>AS</span>
          </h1>
          <h2>Frontend konsulent-tjenester</h2>
          <p>Utvikling av nettsider og web-apps.</p>
          <button onClick={() => setPage("contact")}>Kontakt</button>
          <button onClick={() => setPage("portfolio")}>Konsulenter</button>
        </div>
        <div className={contactCN}>
          <h2>KONTAKT</h2>
          {formSent && (
            <span className="succ">
              <strong> Meldingen ble sendt. </strong>Vi kontakter deg innen 2-4
              virkedager.
            </span>
          )}
          {fillFields && (
            <span className="succ">Vennligst fyll ut alle felt.</span>
          )}
          <label>
            Ditt navn
            <input
              type="text"
              value={formState.name}
              onChange={(e) => setState("name", e.target.value)}
            />
          </label>
          <label>
            E-post adresse
            <input
              type="email"
              value={formState.reply_to}
              onChange={(e) => setState("reply_to", e.target.value)}
            />
          </label>
          <label>
            Melding
            <textarea
              value={formState.message}
              onChange={(e) => setState("message", e.target.value)}
            />
          </label>
          <footer>
            <button onClick={() => setPage("home")}>Tilbake</button>
            <button onClick={onSubmit} disabled={loadingForm}>
              {loadingForm ? "Sender..." : "Kontakt oss"}
            </button>
          </footer>
        </div>
        <div className={portfolioCN}>
          <h2>KONSULENTER</h2>
          <p>Trykk på konsulenten for å lese mer.</p>
          <ul>
            <li>
              <a href="https://haakon.dev">Håkon Svennes Underbakke</a> -
              Frontend
            </li>
          </ul>
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
  max-width: 85vw;
  margin: 0 auto;
  > * {
    grid-area: 1 / 1;
  }
  h1 {
    font-size: 6em;
    @media screen and (max-width: 800px) {
      font-size: 4em;
    }
    margin: 0;
    span {
      color: var(--pink-g);
      font-size: 0.5em;
    }
  }
  h2 {
    opacity: 0.6;
    @media screen and (max-width: 800px) {
      font-size: 1.2em;
    }
  }
  p {
    @media screen and (max-width: 800px) {
      font-size: 0.8em;
    }
  }
  button {
    border: none;
    padding: 0.7em 1.3em;
    font-weight: bold;
    font-size: 1.3em;
    @media screen and (max-width: 800px) {
      font-size: 1.1em;
    }
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
      animation: goAway 0.3s ease-in;
      animation-fill-mode: both;
    }
    pointer-events: none;
    @keyframes goAway {
      from {
        opacity: 1;
        transform: none;
        visibility: visible;
      }
      to {
        opacity: 0;
        transform: translate(-20%, 0px);
        visibility: hidden;
      }
    }
    &.home button {
      margin-top: 30px;
      @media screen and (max-width: 800px) {
        display: block;
        width: 100%;
        margin: 0;
        margin-top: 10px;
        &:first-of-type {
          margin-top: 25px;
        }
      }
    }
    &.portfolio h2,
    &.contact h2 {
      font-size: 4.5em;
      @media screen and (max-width: 800px) {
        font-size: 3em;
      }
    }
    &.portfolio {
      h2 {
        margin: 0 0 20px;
      }
      button {
        margin-top: 30px;
      }
      ul {
        padding-left: 20px;
        li {
          font-size: 1.2em;
          @media screen and (max-width: 800px) {
            font-size: 0.8em;
          }
          a {
            color: var(--violet);
            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
    &.contact {
      display: flex;
      flex-direction: column;
      width: 500px;
      .succ {
        display: block;
        margin-bottom: 20px;
        color: var(--violet);
        background: var(--pink-l);
        padding: 10px;
        font-size: 0.8em;
      }
      @media screen and (max-width: 550px) {
        width: 85vw;
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
          min-height: 12ch;
          max-height: 12ch;
        }
        + label {
          margin-top: 0.8em;
        }
      }
      footer {
        margin-top: 30px;
        @media screen and (max-width: 800px) {
          display: flex;
          flex-direction: column;
          button {
            width: 100%;
            + button {
              margin: 0;
              margin-top: 10px;
            }
          }
        }
      }
      &.active {
        animation: fadeInContact 0.3s ease-in;
        animation-fill-mode: both;
        animation-delay: 0.4s;
        visibility: visible;
        @keyframes fadeInContact {
          from {
            opacity: 0;
            transform: translate(-8%, 0px);
          }
          to {
            opacity: 1;
            transform: none;
            visibility: visible;
          }
        }
      }
    }
    &.active {
      animation: scaleUp 0.3s ease-in;
      animation-fill-mode: both;
      animation-delay: 0.4s;
      pointer-events: all;
      position: static;
      visibility: visible;
      @keyframes scaleUp {
        from {
          opacity: 0;
          transform: scale(0.99) translate(0px, 5%);
        }
        to {
          opacity: 1;
          transform: none;
          visibility: visible;
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
  @media screen and (max-width: 800px) {
    max-width: 70%;
  }
  transform-origin: bottom right;
  pointer-events: none;
  user-select: none;
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  animation: mountainIn 0.4s ease-out;
  animation-delay: 0.4s;
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
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
  pointer-events: none;
  user-select: none;
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
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
