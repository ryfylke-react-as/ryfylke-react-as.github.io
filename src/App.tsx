import React, { useEffect, useState } from "react";
import {
  Header,
  Section,
  Browser,
  SmallWaves,
  CodeWriter,
  LightmodeToggle,
  Blocks,
  Personalize,
} from "./components";
import { GlobalStyles, PumpingIcon } from "./App.styles";
import "./fonts.css";
import { useForm } from "@formspree/react";

let timer: any = setTimeout(() => {});
const TIME = 5000;

let lastColor: string;

function getActualRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getComplementaryColor = (color = "") => {
  const colorPart = color.slice(1);
  const ind = parseInt(colorPart, 16);
  let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(
    16
  );
  while (iter.length < colorPart.length) {
    iter = "0" + iter;
  }
  return "#" + iter;
};

function getRandomColor() {
  if (lastColor) {
    return getComplementaryColor(lastColor);
  } else {
    return getActualRandomColor();
  }
}

export default function App() {
  const [state, handleSubmit] = useForm("mvodeazb");
  const [currentColors, setCurrentColors] = useState([
    "violet",
    "blue",
  ]);
  const [isLightmode, setLightmode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? false
      : true
  );

  const changeColors = () => {
    setCurrentColors([getRandomColor(), getRandomColor()]);
    timer = setTimeout(() => changeColors(), TIME);
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

  useEffect(() => {
    timer = setTimeout(() => changeColors(), TIME);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <LightmodeToggle
        onClick={() => setLightmode(!isLightmode)}
        isLightmode={isLightmode}
      />
      <Header isLightmode={isLightmode} />
      <Section flex>
        <div>
          <h2>
            Utvikling <span>+</span> Design <span>=</span>{" "}
            <PumpingIcon aria-label="Love" role="img">
              ❤
            </PumpingIcon>
          </h2>
          <p>
            Ryfylke React AS er din mellommann for moderne
            nettside-teknologi.
          </p>
          <p>
            Vi kan utføre oppgaver innenfor det som omfattes som{" "}
            <strong>front-end</strong> teknologier. Dette
            inneholder blant annet...
          </p>
          <ul>
            <li>Interaktivitet</li>
            <li>Animasjoner</li>
            <li>Søkeoptimalisering</li>
            <li>Responsive design.</li>
          </ul>
          <p>
            Ryfylke React er åpne for prosjekter på eksisterende
            nettsted, i tillegg til bistand til utvikling av helt
            nye nettsted.
          </p>
        </div>
        <Blocks />
      </Section>

      <SmallWaves background="var(--ui-02)" />
      <Section
        background="var(--ui-02)"
        flex
        className="checklist"
        style={
          {
            "--color-01": currentColors[0],
            "--color-02": currentColors[1],
          } as React.CSSProperties
        }
      >
        <div>
          <h2>Vi tilbyr</h2>
          <ul>
            <li>
              <h3>Design & utvikling av nettsted</h3>
              <ul>
                <li>Responsive til alle enheter</li>
                <li>Søkeoptimalisert</li>
                <li>Basert på din data-kilde</li>
                <li>
                  Mulighet for tilpassing gjennom egne systemer
                </li>
              </ul>
            </li>
            <li>
              <h3>Videreutvikling på eksisterende nettsted</h3>
            </li>
            <li>
              <h3>
                Bistand til spørsmål rundt utvikling av nettsted
              </h3>
            </li>
          </ul>
        </div>
        <Personalize />
      </Section>
      <SmallWaves background="var(--ui-02)" />
      <Section background="var(--ui-02)" flex>
        <CodeWriter />
        <div>
          <h2>
            Kompetanse <span>&</span> Erfaring
          </h2>
          <p>
            <a
              href="https://haakon.dev"
              target="_blank"
              rel="noreferrer"
            >
              Håkon Svennes Underbakke
            </a>{" "}
            har jobbet innen front-end nettside utvikling
            profesjonelt i 5 år. Han har jobbet som fast ansatt
            på in-house prosjekter hos LIGL AS, som konsulent for
            Idean (Capgemini Invent), og nå som konsulent for
            eget firma - Ryfylke React AS.
          </p>
          <p>
            Som konsulent har Håkon jobbet på prosjekter hos
            blant annet Equinor, NDLA og Telenor. Det gjør at
            Håkon har erfaring med å jobbe både på store
            prosjekter, med rutinerte arbeidsmetodikker - i
            tillegg til mindre prosjekter.
          </p>
          <p>
            Vi har sterk kompetanse innen de grunnleggende
            frontend teknologiene; HTML, CSS & JavaScript, i
            tillegg til rammeverk som React.JS, og teknologiene
            som følger med det. Vi har også kunnskap rundt resten
            av prosessen av å publisere et nettsted, og kan
            gjerne rådføre for veien videre.
          </p>
        </div>{" "}
      </Section>
      <SmallWaves background="var(--ui-03)" />
      <Section
        background="var(--ui-03)"
        flex
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div>
          <h2>La oss finne en løsning</h2>
          <p>
            Trenger du hjelp med hele prosessen? Bare litt? Vi
            finner en løsning, og du får ditt produkt ut til
            resten av verden i stil.
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ opacity: state.submitting ? 0.5 : 1 }}
          >
            <label>
              E-post addresse
              <input
                type="email"
                name="email"
                placeholder="business@bedrift.no"
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
              <textarea name="utdyp" />
            </label>
            <button type="submit" disabled={state.submitting}>
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
            width: "30%",
            position: "absolute",
            right: "-5%",
            bottom: "-20%",
            opacity: 0.1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </Section>
    </div>
  );
}
