import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MountainIMG from "./assets/MOUNTAINS.svg";
import Icon from "./assets/icon.svg";
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
          <img src={Icon} alt="Ikon" className="icon" />
          <h2>Frontend konsulent-tjenester.</h2>
          <p>Utvikling av nettsider og web-apps.</p>
          <Button onClick={() => setPage("contact")}>Kontakt</Button>
          <Button onClick={() => setPage("portfolio")}>Konsulenter</Button>
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
            <Button onClick={() => setPage("home")}>Tilbake</Button>
            <Button onClick={onSubmit} disabled={loadingForm}>
              {loadingForm ? "Sender..." : "Kontakt oss"}
            </Button>
          </footer>
        </div>
        <div className={portfolioCN}>
          <h2>KONSULENTER</h2>
          <p>Trykk på konsulenten for å lese mer.</p>
          <ul>
            <li>
              <a href="https://haakon.dev">Håkon Svennes Underbakke</a>
            </li>
          </ul>
          <Button onClick={() => setPage("home")}>Tilbake</Button>
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
  max-width: 82vw;
  margin: 0 auto;
  > * {
    grid-area: 1 / 1;
  }
  h1 {
    font-size: 5.5em;
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
      font-size: 1.1em;
    }
  }
  p {
    @media screen and (max-width: 800px) {
      font-size: 0.8em;
    }
  }
  .page {
    opacity: 0;
    max-height: 100vh;
    overflow-y: auto;
    @media screen and (max-width: 800px) {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }
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
    &.home {
      position: relative;
      .icon {
        position: absolute;
        user-select: none;
        pointer-events: none;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.2;
      }
      button {
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
    }
    &.portfolio h2,
    &.contact h2 {
      font-size: 4.5em;
      @media screen and (max-width: 800px) {
        font-size: 2.5em;
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
        list-style: none;
        padding: 0;
        li {
          font-size: 1.2em;
          @media screen and (max-width: 800px) {
            font-size: 0.8em;
          }
          padding-bottom: 10px;
          a {
            display: block;
            padding: 10px;
            background: var(--pink-l);
            color: var(--violet);
            text-decoration: none;
            position: relative;
            border: 1px solid var(--pink-g);
            border-left: 0px;
            border-right: 0px;
            transition: text-indent 0.2s ease-in-out;
            &:hover,
            &:focus-visible {
              text-indent: 10px;
            }
            &::before {
              content: "";
              position: absolute;
              top: -1px;
              left: 0;
              right: 0;
              bottom: -1px;
              border: 1px solid var(--violet);
              border-left: 0px;
              border-right: 0px;
              opacity: 0;
              transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
              transform: scaleX(0);
            }
            &:hover::before,
            &:focus-visible::before {
              transform: scaleX(1);
              opacity: 1;
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
        width: 100%;
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

function Button({
  children,
  ...rest
}: {
  children: ReactNode;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}) {
  const ref = useRef(null);
  const [onMouseMove, styles] = useMouseMove(ref);
  return (
    <StyledButton ref={ref} style={styles} onMouseMove={onMouseMove} {...rest}>
      <strong>{children}</strong>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: relative;
  border: none;
  padding: 0.7em 1.3em;
  font-weight: bold;
  font-size: 1.3em;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    font-size: 1.1em;
  }
  cursor: pointer;
  color: var(--violet);
  background: var(--pink-g);
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  strong {
    position: relative;
    z-index: 3;
  }
  + button {
    background: var(--pink);
    margin-left: 0.6em;
  }
  transition: opacity 0.2s ease-in-out;
  &:active > strong {
    top: 1px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid var(--violet);
    border-left: 0px;
    border-right: 0px;
    opacity: 0;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    transform: scaleX(0);
  }
  &:hover::before,
  &:focus-visible::before {
    transform: scaleX(1);
    opacity: 1;
  }
  &::after {
    opacity: 0;
  }
  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
  }
  &::after {
    content: "";
    position: absolute;
    background: radial-gradient(
      rgb(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0) 70%
    ); /* White glow */
    width: 7em;
    height: 7em;
    border-radius: 50%;

    top: calc(var(--y) * 1px); /* Use coordinates to do fancy styles */
    left: calc(var(--x) * 1px);

    transform: translate(-50%, -50%); /* Center circle around cursor */
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
  transform: ${(props) =>
    props.page === "home"
      ? "scale(1)"
      : props.page === "contact"
      ? "scale(0.5)"
      : "scale(1.5) translate(20%, 0px)"};
  opacity: ${(props) =>
    props.page === "home" ? 0.6 : props.page === "contact" ? 0.4 : 1};
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

const getTotalOffset = (el: HTMLElement) => {
  let a: any = el,
    x = 0,
    y = 0;
  while (a) {
    x += a.offsetLeft;
    y += a.offsetTop;
    a = a.offsetParent;
  }
  return { offsetX: x, offsetY: y };
};

function useMouseMove(
  reference: React.RefObject<HTMLElement>
): [(e: React.MouseEvent) => void, React.CSSProperties] {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });
  const mouseMove = (event: React.MouseEvent) => {
    if (reference?.current) {
      const { pageX, pageY } = event;
      const { offsetX, offsetY } = getTotalOffset(reference.current);
      const x = pageX - offsetX;
      const y = pageY - offsetY;
      setMousePointer({
        x,
        y,
      });
    }
  };
  const styles = {
    "--x": mousePointer.x,
    "--y": mousePointer.y,
  } as React.CSSProperties;
  return [mouseMove, styles];
}

export default App;
