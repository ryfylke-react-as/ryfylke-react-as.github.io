import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: var(--spacing-07);
  flex-direction: column;
  align-items: center;
  padding-top: var(--spacing-09);
  position: relative;
  svg {
    position: relative;
    z-index: 1;
    height: 7rem;
    width: 100%;
    margin-top: calc(var(--spacing-03) * -1);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: var(--spacing-04);
  margin: var(--cds-spacing-08) 0;
  cursor: default;
  &:hover img {
    transform: rotate(-5deg);
  }
  img {
    width: 35px;
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
