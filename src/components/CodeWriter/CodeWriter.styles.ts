import styled from "styled-components";

export const StyledCode = styled.div`
  padding-top: var(--spacing-05);
  background: #2e2a2f;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px #0f1e21;
  filter: hue-rotate(250deg);
  min-width: 399px !important;
  height: 390px;
  margin-bottom: auto;

  @-moz-document url-prefix() {
    background: #282528;
    filter: hue-rotate(250deg);
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 8rem;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 2rem;
  }

  video {
    width: 100%;
    clip-path: polygon(0 1%, 100% 1%, 100% 100%, 0% 100%);
  }
`;
