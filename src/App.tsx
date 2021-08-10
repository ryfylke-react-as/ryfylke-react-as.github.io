import React, { useEffect, useState } from "react";
import {
  Header,
  Section,
  Browser,
  SmallWaves,
  CodeWriter,
  LightmodeToggle,
  Blocks,
} from "./components";
import { GlobalStyles, PumpingIcon } from "./App.styles";
import "./fonts.css";

export default function App() {
  const [fs, setFs] = useState({
    email: "",
    message: "",
    loading: false,
    error: false,
    success: false,
  });
  const [isLightmode, setLightmode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? false
      : true
  );

  const changeFormInput = (key: keyof typeof fs, value: any) => {
    setFs({
      ...fs,
      [key]: value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fs.email && fs.message) {
      changeFormInput("loading", true);
      changeFormInput("success", false);
      fetch(
        "https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reply_to: fs.email,
            name: fs.email,
            message: fs.message,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("Successful response from server: ", res);
          changeFormInput("loading", false);
          changeFormInput("success", true);
        })
        .catch((err) => {
          console.error("Unsuccessful response from server: ", err);
          changeFormInput("loading", false);
          changeFormInput("success", true);
        });
    } else {
      changeFormInput("error", true);
    }
    return;
  };

  const registerInput = (key: keyof typeof fs) => ({
    value: fs[key] as string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      changeFormInput(key, e?.target?.value),
    name: key,
    disabled: fs.loading || fs.success,
  });

  useEffect(() => {
    const storedLightmode = localStorage.getItem("rr-lm");
    if (storedLightmode) {
      const parsedLightmode = JSON.parse(storedLightmode);
      setLightmode(parsedLightmode);
    }
  }, []);

  useEffect(() => {
    console.log(fs);
  }, [fs]);

  useEffect(() => {
    if (!isLightmode) {
      localStorage.setItem("rr-lm", JSON.stringify(false));
      document.body.classList.remove("lm");
    } else {
      document.body.classList.add("lm");
      localStorage.setItem("rr-lm", JSON.stringify(true));
    }
  }, [isLightmode]);

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
          <p>Ryfylke React AS er din mellommann for moderne nett-teknologi.</p>
          <p>
            Vi kan utføre oppgaver innenfor det som omfattes som{" "}
            <strong>front-end</strong> teknologier. Dette inneholder blant annet
            interaktivitet, animasjoner, søkeoptimalisering, responsive design,
            og tilrettelegging for mennesker med funksjonshemminger.
          </p>
          <p>
            Ryfylke React er åpne for prosjekter på eksisterende nettsted, i
            tillegg til bistand til utvikling av helt nye nettsted.
          </p>
        </div>
        <Blocks />
      </Section>
      <SmallWaves background="var(--ui-02)" />
      <Section background="var(--ui-02)" flex>
        <CodeWriter />
        <div>
          <h2>
            Kompetanse <span>&</span> Erfaring
          </h2>
          <p>
            <a href="https://haakon.dev" target="_blank" rel="noreferrer">
              Håkon Svennes Underbakke
            </a>{" "}
            har jobbet innen front-end nettside utvikling profesjonelt i 5 år.
            Han har jobbet som fast ansatt på in-house prosjekter hos LIGL AS,
            som konsulent for Idean (Capgemini Invent), og nå som konsulent for
            eget firma - Ryfylke React AS.
          </p>
          <p>
            Som konsulent har Håkon jobbet på prosjekter hos blant annet
            Equinor, NDLA og Telenor. Det gjør at Håkon har erfaring med å jobbe
            både på store prosjekter, med rutinerte arbeidsmetodikker - i
            tillegg til mindre prosjekter.
          </p>
          <p>
            Vi har sterk kompetanse innen de grunnleggende frontend
            teknologiene; HTML, CSS & JavaScript, i tillegg til rammeverk som
            React.JS, og teknologiene som følger med det. Vi har også kunnskap
            rundt resten av prosessen av å publisere et nettsted, og kan gjerne
            rådføre for veien videre.
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
            Trenger du hjelp med hele prosessen? Bare litt? Vi finner en
            løsning, og du får ditt produkt ut til resten av verden i stil.
          </p>
          <form onSubmit={onSubmit} style={{ opacity: fs.loading ? 0.5 : 1 }}>
            <label>
              E-post addresse
              <input
                type="email"
                {...registerInput("email")}
                placeholder="business@bedrift.no"
              />
            </label>
            <label>
              Din melding
              <textarea {...registerInput("message")} />
            </label>
            <button type="submit" disabled={fs.loading}>
              {fs.success ? "Melding mottatt!" : "Kontakt oss"}
            </button>
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
