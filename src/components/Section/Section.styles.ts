import styled from "styled-components";
import { SectionProps } from "./Section.types";

const generateBackground = (props: SectionProps) => {
  const bgVal = props.background ?? "var(--ui-01)";

  return `linear-gradient(to bottom, ${bgVal}, var(--ui-01))`;
};

export const InnerContainer = styled.div<SectionProps>`
  max-width: 900px;
  margin: 0 auto;
  display: ${(props) => (props.flex ? "flex" : "block")};
  gap: var(--spacing-09);
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
  > div {
    min-width: 100px;
    max-width: 100%;
  }
`;

export const StyledSection = styled.section<SectionProps>`
  padding: var(--spacing-08);
  padding-bottom: 10rem;
  background: ${generateBackground};
  margin-bottom: var(--spacing-07);
  height: 60vh;
  max-height: 450px;
  @media screen and (max-width: 850px) {
    max-height: 2000px;
    height: auto;
  }
  &:not(:first-of-type) {
    margin-top: -12rem;
    position: relative;
    z-index: 2;
  }
  form {
    --width: 400px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-03);
    label {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      gap: var(--spacing-03);
      color: var(--text-02);
      width: var(--width);
      max-width: var(--width);
      flex-grow: 0;
      flex-shrink: 0;
    }
    input,
    textarea {
      border: none;
      border-radius: 4px;
      background: var(--ui-01);
      padding: var(--spacing-04);
      color: var(--text-01);
      font-size: 0.8rem;
      font-family: "Ubuntu", sans-serif;
      max-width: var(--width);
      margin: 0;
      flex-grow: 0;
      flex-shrink: 0;
    }
    [disabled] {
      opacity: 0.1;
    }
    textarea {
      height: 5rem;
      max-height: 5rem;
      resize: none;
    }
    button {
      background: var(--background);
      padding: var(--spacing-04);
      color: var(--text-01);
      border: none;
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
      font-size: 0.8rem;
      max-width: var(--width);
      margin: 0;
      cursor: pointer;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
  a {
    position: relative;
    z-index: 99;
  }
  p {
    max-width: 700px;
    line-height: 1.35em;
    color: var(--text-02);
  }
  ul {
    li {
      padding-left: var(--spacing-03);
      line-height: 1.35em;
      ul {
        margin-top: var(--spacing-02);
      }
    }
    li::marker {
      content: "*";
      color: var(--text-02);
      font-size: 0.8em;
      display: inline-block;
    }
  }
`;
