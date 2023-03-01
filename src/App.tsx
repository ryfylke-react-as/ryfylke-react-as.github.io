import { useForm } from "@formspree/react";
import { ReactNode, useEffect, useState } from "react";
import { Tween } from "react-gsap";
import { useInView } from "react-intersection-observer";
import { Controller, Scene } from "react-scrollmagic";
import { GlobalStyles, PumpingIcon } from "./App.styles";
import {
  Blocks,
  Check,
  Header,
  LightmodeToggle,
  Section,
  SmallWaves,
} from "./components";
import "./fonts.css";
import useMediaQuery from "./hooks/useMediaQuery";

export default function App() {
  const [state, handleSubmit] = useForm("mvodeazb");
  const { ref: footerRef, inView: footerInView } = useInView();
  const [fs, setFs] = useState({
    email: "",
    message: "",
  });
  const [isLightmode, setLightmode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? false
      : true
  );
  const isMaxWidth = useMediaQuery("(min-width: 1045px)");
  const titleBreaks = useMediaQuery("(max-width: 640px)");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    if (true) {
      handleSubmit(event);
    }
  };

  useEffect(() => {
    const storedLightmode = localStorage.getItem("rr-lm");
    if (storedLightmode) {
      const parsedLightmode = JSON.parse(storedLightmode);
      setLightmode(parsedLightmode);
    }
  }, []);

  useEffect(() => {
    if (!isLightmode) {
      localStorage.setItem("rr-lm", JSON.stringify(false));
      document.body.classList.remove("lm");
    } else {
      document.body.classList.add("lm");
      localStorage.setItem("rr-lm", JSON.stringify(true));
    }
  }, [isLightmode]);

  let formOK = true;

  switch (true) {
    case /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(fs.email) ===
      false:
    case fs.message.length < 1:
      formOK = false;
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <GlobalStyles />
      <LightmodeToggle
        onClick={() => setLightmode(!isLightmode)}
        isLightmode={isLightmode}
      />
      <Header isLightmode={isLightmode} />
      {!isMaxWidth ? (
        <Section flex id="trigger">
          <div style={{ position: "relative" }}>
            <h2
              style={
                titleBreaks
                  ? {
                      textAlign: "center",
                      justifyContent: "center",
                    }
                  : {}
              }
            >
              Vi
              <PumpingIcon aria-label="Love" role="img">
                ❤
              </PumpingIcon>
              Frontend Utvikling
            </h2>
            <p>
              Ryfylke React AS leverer <i>ekte</i> frontend
              kompetanse.
            </p>
            <p>
              Dette omfatter alt fra design, til utvikling og
              testing. Vi har erfaring med hva som fungerer i
              praksis, og hva som ikke fungerer.
            </p>
            <p>
              Vi leverer for øyeblikket kun konsulent-bistand på
              pågående prosjekter, grunnet begrenset kapasitet.
            </p>
          </div>
          <Blocks />
        </Section>
      ) : (
        <Section flex id="trigger">
          <Controller>
            <Scene triggerElement="#trigger" duration={500}>
              {(progress: number) => (
                <Tween
                  to={{
                    top: "0px",
                    opacity: 1,
                  }}
                  from={{
                    top: "50px",
                    opacity: 0,
                  }}
                  ease="Strong.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div style={{ position: "relative" }}>
                    <h2>
                      Vi
                      <PumpingIcon aria-label="Love" role="img">
                        ❤
                      </PumpingIcon>
                      Frontend Utvikling
                    </h2>
                    <p>
                      Ryfylke React AS leverer <i>ekte</i>{" "}
                      frontend kompetanse.
                    </p>
                    <p>
                      Dette omfatter alt fra design, til
                      utvikling og testing. Vi har erfaring med
                      hva som fungerer i praksis, og hva som ikke
                      fungerer.
                    </p>
                    <p>
                      Vi leverer for øyeblikket kun
                      konsulent-bistand på pågående prosjekter,
                      grunnet begrenset kapasitet.
                    </p>
                  </div>
                </Tween>
              )}
            </Scene>
            <Scene triggerElement="#trigger" duration={500}>
              {(progress: number) => (
                <Tween
                  from={{
                    right: "360px",
                    bottom: "100px",
                    scale: 2,
                    opacity: 1,
                  }}
                  to={{
                    right: "16px",
                    opacity: 0.8,
                    scale: 1,
                    bottom: "0px",
                  }}
                  ease="Strong.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div style={{ position: "relative" }}>
                    <Blocks />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </Section>
      )}

      <SmallWaves background="var(--ui-03)" />

      <Section
        background="var(--ui-03)"
        flex
        style={{
          position: "relative",
          overflow: "hidden",
          paddingBottom: "15rem",
        }}
      >
        <div ref={footerRef}>
          <h2>La oss finne en løsning</h2>
          <p style={{ marginBottom: "var(--spacing-07)" }}>
            Trenger du hjelp med hele prosessen? Bare litt? Vi
            finner en løsning, og du får ditt produkt ut til
            resten av verden i stil.
          </p>
          <form
            onSubmit={onSubmit}
            style={{ opacity: state.submitting ? 0.5 : 1 }}
          >
            <label>
              E-post addresse
              <input
                type="email"
                name="email"
                placeholder="business@bedrift.no"
                value={fs.email}
                onChange={(e) =>
                  setFs({ ...fs, email: e.target.value })
                }
              />
            </label>
            <label>
              Interessert i
              <select name="interresert_i">
                <option>En prat</option>
                <option>Utvikle nytt nettsted</option>
                <option>Jobb på eksisterende nettsted</option>
              </select>
            </label>
            <label>
              Utdyp
              <textarea
                name="utdyp"
                value={fs.message}
                onChange={(e) =>
                  setFs({ ...fs, message: e.target.value })
                }
              />
            </label>
            <div style={{ fontSize: "0.875rem" }}>
              {!formOK &&
                "Vennligst fyll ut gyldig e-post & utdyp."}
            </div>
            <button
              type="submit"
              disabled={state.submitting || formOK === false}
            >
              {state.submitting ? "Vent litt..." : "Kontakt oss"}
            </button>
            <div>{state.succeeded && "Melding mottatt!"}</div>
          </form>
        </div>{" "}
        <img
          src={isLightmode ? "/logo-lm.svg" : "/logo-dm.svg"}
          alt={`Logo, ${
            isLightmode ? "blått" : "oransje"
          } vikingskip, hvor tuppen ser ut som et drage-hode.`}
          style={{
            width: "clamp(6rem, 30%, 30rem)",
            position: "absolute",
            right: "-5%",
            bottom: "-20%",
            opacity: 0.1,
            pointerEvents: "none",
            userSelect: "none",
            transition:
              "transform 0.9s cubic-bezier(0.175, 0.5, 0.1, 1.275)",
            transform: footerInView
              ? "rotate(-5deg)"
              : "rotate(15deg)",
          }}
        />
      </Section>
    </div>
  );
}

const TilbyrLi = ({
  children,
  submenu,
}: {
  children: ReactNode;
  submenu?: ReactNode;
}) => {
  return (
    <li>
      <h3>
        <Check /> {children}
      </h3>{" "}
      {submenu ?? ""}
    </li>
  );
};
