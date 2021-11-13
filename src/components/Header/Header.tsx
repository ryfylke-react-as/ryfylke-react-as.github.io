import React from "react";
import { Waves } from "../";
import {
  HeaderBackground,
  LogoContainer,
  StyledHeader,
  Tag,
} from "./Header.styles";

type Props = {
  isLightmode: boolean;
};

export const Header = ({ isLightmode }: Props) => {
  return (
    <StyledHeader>
      <HeaderBackground
        key={isLightmode ? "hbga" : "hbgb"}
        isLightmode={isLightmode}
      />
      <LogoContainer>
        <img
          src={isLightmode ? "/logo-lm.svg" : "/logo-dm.svg"}
          alt={`Logo, ${
            isLightmode ? "blått" : "oransje"
          } vikingskip, hvor tuppen ser ut som et drage-hode.`}
        />
        <h1>
          Ryfylke <span>React</span>
        </h1>
      </LogoContainer>
      <Waves />
    </StyledHeader>
  );
};
