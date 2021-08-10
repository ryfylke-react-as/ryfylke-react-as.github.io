import React, { useState } from "react";
import { Sun, Moon } from "./LightmodeToggle.assets";
import { Container, Icon } from "./LightmodeToggle.styles";

type Props = {
  onClick: () => void;
  isLightmode: boolean;
};

export const LightmodeToggle = ({ onClick, isLightmode }: Props) => {
  const [toggled, setToggled] = useState(false);
  return (
    <Container>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            if (!toggled) {
              setToggled(true);
            }
            onClick();
          }}
          checked={!isLightmode}
          aria-label="Toggle darkmode"
        />
        <Icon>
          <Moon
            className={isLightmode ? "" : toggled ? "lm" : ""}
            style={{ opacity: isLightmode ? 0.35 : 1 }}
          />
        </Icon>
        <Icon>
          <Sun
            style={{ opacity: isLightmode ? 1 : 0.35 }}
            className={isLightmode && toggled ? "lm" : ""}
          />
        </Icon>
      </label>
    </Container>
  );
};
