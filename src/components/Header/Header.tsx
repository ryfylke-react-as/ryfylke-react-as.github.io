import React from "react";
import { Waves } from "../";
import { LogoContainer, StyledHeader, Tag } from "./Header.styles";

type Props = {
  isLightmode: boolean;
};

export const Header = ({ isLightmode }: Props) => {
  return (
    <StyledHeader>
      <LogoContainer>
        <img
          src={isLightmode ? "/logo-lm.svg" : "/logo-dm.svg"}
          alt={`Logo, ${
            isLightmode ? "blått" : "oransje"
          } vikingskip, hvor tuppen ser ut som et drage-hode.`}
        />
        <h1>Ryfylke React</h1>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
        <Tag>JavaScript</Tag>
        <Tag>Design</Tag>
        <Tag>Utvikling</Tag>
      </LogoContainer>
      <Waves />
    </StyledHeader>
  );
};
