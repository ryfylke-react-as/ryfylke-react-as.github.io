import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: var(--spacing-07);
  left: var(--spacing-05);
  z-index: 99;
  label {
    display: flex;
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.1);
    padding: var(--spacing-03);
    gap: var(--spacing-03);
    opacity: 0.8;
    transition: all 0.1s ease-in-out;
    &:hover {
      opacity: 1;
      transform: scale(1.01);
    }
    cursor: pointer;
  }
  input {
    visibility: hidden;
    position: fixed;
  }
`;

export const Icon = styled.div`
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 1.2rem;
  width: 1.2rem;
  height: 1.2rem;
  svg {
    max-width: 0.6rem;
    color: #f9f9f9;
    transition: transform 0.85s ease-in-out;
    &.lm {
      animation: rotateAnim 1s ease-in-out;
      @media (prefers-reduced-motion) {
        animation: none;
      }
      @keyframes rotateAnim {
        from {
          transform: rotate(0deg);
          opacity: 0.3;
        }
        to {
          opacity: 1;
          transform: rotate(360deg);
        }
      }
    }
  }
`;
