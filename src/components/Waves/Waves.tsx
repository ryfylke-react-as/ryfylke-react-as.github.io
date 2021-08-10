import React from "react";
import styled from "styled-components";

const StyledGroup = styled.g`
  fill: var(--ui-01);

  @keyframes move-waves {
    0% {
      transform: translate3d(-30px, 0, 0);
    }
    50% {
      transform: translate3d(30px, 0, 0);
    }
    100% {
      transform: translate3d(-30px, 0, 0);
    }
  }
  use {
    animation: move-waves 50s ease-in-out infinite;
    fill: linear-gradient(from top, var(--ui-01), var(--ui-01));
    @media (prefers-reduced-motion) {
      animation: none;
    }
  }
  use:nth-child(odd) {
    animation-direction: reverse;
    animation-duration: 33s;
  }
  use:nth-child(1) {
    animation-delay: -2s;
    opacity: 0.7;
  }
  use:nth-child(2) {
    animation-delay: -3s;
    opacity: 0.5;
  }
  use:nth-child(3) {
    animation-delay: -4s;
    opacity: 0.3;
  }
  use:nth-child(4) {
    animation-delay: -5s;
  }
`;

export function Waves(
  props: React.SVGProps<SVGSVGElement> & { background?: string }
) {
  return (
    <svg
      className="prefix__waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        <path
          id="prefix__a"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        />
      </defs>
      <StyledGroup style={{ fill: props?.background ?? "var(--ui-01)" }}>
        <use xlinkHref="#prefix__a" />
        <use xlinkHref="#prefix__a" x={50} y={3} />
        <use xlinkHref="#prefix__a" x={100} y={5} />
        <use xlinkHref="#prefix__a" x={150} y={7} />
      </StyledGroup>
    </svg>
  );
}

const StyledSmallWaves = styled.div`
  position: relative;
  z-index: 3;
  user-select: none;
  pointer-events: none;
  > svg {
    height: 150px;
    width: 100%;
    margin-top: -10rem;
    margin-bottom: 10rem;
  }
`;

export const SmallWaves = (
  props: React.SVGProps<SVGSVGElement> & { background?: string }
) => {
  return (
    <StyledSmallWaves>
      <Waves {...props} />
    </StyledSmallWaves>
  );
};
