import React, { ReactNode } from "react";
import { StyledBrowser } from "./Browser.styles";
import { Tabs } from "./Browser.assets";

export const Browser = ({
  children,
  style
}: {
  children?: ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <StyledBrowser style={style}>
      <Tabs />
      <div>{children}</div>
    </StyledBrowser>
  );
};

export default Browser;
