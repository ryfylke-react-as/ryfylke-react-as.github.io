import styled from "styled-components";

export const StyledBrowser = styled.div`
  min-height: 300px;
  max-height: 400px;
  background: var(--background);
  width: 550px;
  max-width: 100%;
  border-radius: 8px;
  opacity: 0;
  box-shadow: 0px 1px 15px -9px #0000004f;
  > div {
    padding: var(--spacing-05);
    max-width: 100%;
    overflow: hidden;
    pre,
    code {
      margin: 0;
      padding: 0;
      font-size: 0.75rem;
      color: var(--text-02);
    }
  }
  svg {
    width: 100%;
  }
  img {
    max-width: 50%;
    margin: var(--spacing-04) auto;
    display: block;
    opacity: 0.6;
    animation: dancingPoop 6s infinite ease-out;
    &:hover {
      animation-name: rotate;
    }
    @keyframes rotate {
      0%,
      100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      99% {
        transform: rotate(360deg);
      }
    }
    @keyframes dancingPoop {
      0%,
      100% {
        transform: translate(0px, 0px) rotate(-4deg);
        transition-timing-function: ease-out;
      }
      50% {
        transition-timing-function: ease-in;
        transform: translate(0px, -20px) rotate(-2deg);
      }
    }
  }
`;
