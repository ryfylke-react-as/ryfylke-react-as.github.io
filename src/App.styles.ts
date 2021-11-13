import styled, { createGlobalStyle } from "styled-components";
import { Heart } from "./App.assets";
import { sectionAnim } from "./components/Section/Section.styles";

export const GlobalStyles = createGlobalStyle`
  :root {
    /** VARIABLAR DARKMODE **/ 
    /*                            r   g   b    a
      For rgba, bruk syntax: rgba(255,255,255,0.5)
      For rgb:               rgb(255,255,255)
      For hex:               #ffffff
    */
    --background: #13212b;
    --ui-01: #102330;
    --text-01: #fbe6df;
    --text-02: #cac0bd;
    --link: #69AAB1;
    --ui-01: #203A3C;
    --ui-02: #1C3338;
    --ui-03: #192D33;

    /** Spacing */
    --spacing-01:0.125rem; /* 0.125 * 16px */
    --spacing-02:0.25rem;
    --spacing-03:0.5rem;
    --spacing-04:0.75rem;
    --spacing-05:1rem;
    --spacing-06:1.5rem;
    --spacing-07:2rem;
    --spacing-08:3rem;
    --spacing-09:4rem;
  }
  body.lm {
      /** VARIABLAR LIGHTMODE **/
      --background: #b7b7b7;
      --text-01: #13212b;
      --text-02: #2b404e;
      --link: #203A3C;
      --ui-01: #dad6d0; /* #7fa2a2 */
      --ui-02: #D1CECA; 
      --ui-03: #C8C6C3; 
    }
  *, *:before, *:after {
    box-sizing-inherit;
  }
  body, html {
    margin: 0;
    padding:0;
  }
  @media (prefers-reduced-motion) { 
    * {
      transition:none !important;
      animation: none !important;
    }
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    background-color:var(--background);
    color: var(--text-01);
    font-size: 16px;
    box-sizing:border-box;
    animation: fadeInUp 0.3s ease-in-out;
    transition: color 0.15s ease-in, background-color 0.15s ease-in;
    @keyframes fadeInUp {
      from {
        opacity:0;
      }
    }
  }
  .prefix__waves {
  animation: ${sectionAnim} 0.6s ease-in-out;
  }
  a {
    color: var(--link);
    &:hover {
      text-decoration: none;
    }
  }
  .App {
    position:relative;
  }
  h1,h2,h3,h4{margin:0 0 var(--spacing-03);}
  h1 {
    font-size:2.5rem;
  }
  h2 {
    display:flex;
    gap:var(--spacing-03);
    font-size:2rem;
    color:var(--text-01);
    align-items:center;
    flex-wrap:wrap;
    span {
      color:var(--text-02);
      opacity:0.6;
    }
  }
`;

export const PumpingIcon = styled(Heart)`
  animation: pump 3s ease-in-out infinite;
  height: 0.9em;
  width: 0.9em;
  flex-shrink: 0;
  @keyframes pump {
    0%,
    45%,
    55%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
