import React from "react";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView();
  return (
    <StyledHeader>
      <HeaderBackground isLightmode={isLightmode} noAnim />
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
          Ryfylke{" "}
          <span ref={ref} key={inView ? "a" : "b"}>
            React
          </span>
        </h1>
      </LogoContainer>
      <Waves />
    </StyledHeader>
  );
};
