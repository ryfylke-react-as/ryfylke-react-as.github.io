import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-05);
  min-height: 220px;
  width: 40%;
  overflow: hidden;
  padding-bottom: var(--spacing-07);
  position: relative;
  border-radius: 50%;
  min-width: 270px !important;
  min-height: 250px;
  @keyframes rotate1 {
    from {
      --rotate: 0deg;
      transform: translate(0%, 110%) perspective(520px)
        rotateX(0deg) rotateY(0deg);
      opacity: 0;
    }
    30% {
    }
    69% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      --rotate: 90deg;
      transform: translate(-0%, 0%) perspective(1020px)
        rotateX(180deg) rotateY(180deg);
      opacity: 0;
    } /* 
    100% {
      transform: perspective(520px) rotateX(0deg) rotateY(0deg);
      opacity: 1;
    } */
  }
  > div:not(.laptop) {
    background: var(--ui-03);
    --rotate: 0deg;
    opacity: 0;
    clip-path: polygon(
      0% 15%,
      15% 15%,
      15% 0%,
      85% 0%,
      85% 15%,
      100% 15%,
      100% 85%,
      85% 85%,
      85% 100%,
      15% 100%,
      15% 85%,
      0% 85%
    );
    transform: perspective(520px) rotateX(var(--rotate))
      rotateY(var(--rotate));
    animation: rotate1 4.5s ease-in-out infinite;

    @supports (-webkit-touch-callout: none) {
      display: none;
    }

    @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
      @media {
        display: none;
      }
    }

    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        display: none;
      }
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
    &:nth-child(5) {
      animation-delay: 1s;
    }
    &:nth-child(6) {
      animation-delay: 1.2s;
    }
    &:nth-child(7) {
      animation-delay: 1.4s;
    }
    &:nth-child(8) {
      animation-delay: 1.6s;
    }
    &:nth-child(9) {
      animation-delay: 1.8s;
    }
    &:nth-child(10) {
      animation-delay: 2s;
    }
  }
  /** https://codepen.io/llecouey/pen/zqhea */

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    &::marker {
      content: "";
      display: none;
    }
  }
  .laptop {
    --laptopColor: #fff;
    --secondary: #aaa;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -110%);
    width: 200px;
    height: 120px;
    margin: 56px 0 0 0;
    border: 5px var(--laptopColor) solid;
    border-radius: 2px;
  }

  .laptop:before {
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 3px;
    margin: 126px 0 0 80px;
    background: var(--background);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 1;
    background: var(--secondary);
  }

  .laptop:after {
    content: "";
    display: block;
    position: absolute;
    width: 240px;
    height: 8px;
    margin: 6px 0 0 -20px;
    background: var(--laptopColor);
    border-radius: 2px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .laptop .content {
    width: 180px;
    height: 100px;
    margin: 0px 0 0 0;
    padding: 10px;
    background: var(--text-02);
    color: var(--text-01);
    font-size: 0.5em;
    overflow: hidden;
  }

  .laptop ul li {
    height: 6px;
    margin: 0 0 5px 0;
    border-color: var(--text-01);
    background: var(--text-01);
    &:nth-child(1) {
      height: 18px;
      margin-bottom: 12px;
    }
    &:nth-child(9) {
      height: 18px;
      margin: 12px 0;
    }
    &:nth-child(8) {
      height: 12px;
      margin-bottom: 12px;
    }
  }

  .laptop ul {
    animation: laptop 10s cubic-bezier(0.25, 0.1, 0.25, 1)
      infinite;
    animation-delay: 1.25s;
    opacity: 0.5;
  }

  @keyframes laptop {
    0% {
      transform: translateY(0%);
    }
    7% {
      opacity: 1;
      transform: translateY(0%);
    }
    25% {
      transform: translateY(-40%);
    }
    40%,
    60% {
      transform: translateY(-50%);
    }
    80%,
    90% {
      transform: translateY(0%);
    }
    95% {
      opacity: 1;
      transform: translateY(5%);
    }
    98% {
      opacity: 0;
    }
  }
`;
