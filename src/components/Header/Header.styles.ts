import styled, { keyframes } from "styled-components";

const titleAnim = keyframes`
  from {
    opacity:0;
    transform:rotate(6deg);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  gap: var(--spacing-07);
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-09) var(--spacing-08) 0;
  position: relative;
  min-height: 50vh;
  svg {
    position: relative;
    z-index: 1;
    height: 7rem;
    width: calc(100% + calc(var(--spacing-08) * 2));
    margin-top: auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: var(--spacing-06);
  margin: var(--cds-spacing-08) 0;
  margin-top: auto;
  cursor: default;
  width: 100%;
  max-width: 900px;
  h1 {
    font-size: clamp(3rem, 8.5vmin, 6.5rem);
    animation: ${titleAnim} 0.2s ease-out;
    span {
      animation: ${titleAnim} 0.8s ease-out;
      animation-fill-mode: both;
      transition: color 0.3s ease-in-out;
    }
  }
  &:hover img {
    transform: rotate(-5deg);
  }
  img {
    width: clamp(35px, 6.5vmin, 12rem);
    transition: transform 0.1s ease-in;
    transform: translateY(6%);
    user-select: none;
    animation: smudIn 0.3s ease-in-out;
    @keyframes smudIn {
      from {
        clip-path: circle(12px);
        transform: rotate(25deg);
      }
      to {
        clip-path: circle(35px);
      }
    }
  }
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  position: absolute;
  bottom: 25%;
  left: 10%;
  transform: rotate(5deg);
  animation: tagUpDown 10s ease-in-out infinite;
  @media (prefers-reduced-motion) {
    animation: none;
  }
  user-select: none;
  color: var(--text-02);
  opacity: 0.1;
  @keyframes tagUpDown {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(0px, 10px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  &:nth-of-type(2) {
    left: 25%;
    bottom: 28%;
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    left: 42%;
    bottom: 23%;
    transform: rotate(-5deg);
    animation-delay: 0.5s;
  }
  &:nth-of-type(4) {
    left: 78%;
    bottom: 25%;
    animation-delay: 0.7s;
  }
  &:nth-of-type(5) {
    left: 60%;
    bottom: 30%;
    animation-delay: 1s;
  }
`;
