import styled from "styled-components";

export const StyledCode = styled.div`
  padding-top: var(--spacing-05);
  background: #2e2a2f;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px #0f1e21;
  filter: hue-rotate(250deg);
  opacity: 0.8;

  @-moz-document url-prefix() {
    background: #282528;
    filter: hue-rotate(250deg);
  }

  video {
    width: 100%;
    clip-path: polygon(0 1%, 100% 1%, 100% 100%, 0% 100%);
    @media screen and (min-width: 1200px) {
      min-width: 386px;
    }
  }
`;
