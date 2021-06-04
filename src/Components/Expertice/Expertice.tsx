import { Email32 } from "@carbon/icons-react";
import {
  ArtTools_01,
  Build,
  Idea,
  QuestionAndAnswer,
  UserExperienceDesign,
  WebDeveloper,
} from "@carbon/pictograms-react";
import { Button, Tab, Tabs, Tile } from "carbon-components-react";
import React from "react";
import "./Expertice.scss";

type Props = {};

export const Expertice = ({}: Props) => {
  return (
    <div className="Expertice">
      <p>
        Ved bruk av moderne nett-teknologi, kan vi hjelpe til med å løfte ditt
        produkt opp til neste nivå.
      </p>
      <div className="tileGroup">
        <Tile light>
          <UserExperienceDesign />
          <div>
            <h3>Tilgjengelighet</h3>
            <p>
              Hos Ryfylke React er vi veldig opptatt av at nettsted ikke bare
              skal se og føles bra ut, men også være tilgjengelige for hvem som
              helst, hvor som helst. Vi holder oss derfor kurset og oppdatert på
              nyheter og best-practises rundt accessibility og responsivt
              design.
            </p>
          </div>
        </Tile>
        <Tile light>
          <Build />
          <div>
            <h3>Design</h3>
            <p>
              Vi er design-orienterte, og jobber helst innen et rammeverk.
              Nettsted skal både se bra ut, og føles bra å bruke. Vi har god
              kompetanse innen nett-animering, og avansert CSS.
            </p>
          </div>
        </Tile>
        <Tile light>
          <Idea />
          <div>
            <h3>Kompetanse</h3>
            <p>
              Vi har utviklere som har jobbet på prosjekt hos små og store
              firma. Solo-utvikling og design av prosjekt, eller på team av
              internasjonale utviklere med SCRUM metodikk - vi trives på begge
              fronter.
            </p>
          </div>
        </Tile>
        <Tile light>
          <WebDeveloper />
          <div>
            <h3>Erfaring</h3>
            <p>
              Selv om vi er nye på markede, så har vi utvikler med mange år
              erfaring med profesjonelt arbeid og tidligere kunder som Equinor,
              Telenor og LIGL AS.
            </p>
            <Button kind="ghost" href="https://haakon.dev" target="_blank">
              Portfolio
            </Button>
          </div>
        </Tile>
      </div>
    </div>
  );
};

export default Expertice;
