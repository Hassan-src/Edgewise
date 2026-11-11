import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root{
  /* Typography */
  --font-sans: "Inter", sans-serif;
  --font-mono: "Geist Mono", monospace;

   --text-xs: clamp(0.7rem, 0.68rem + 0.1vw, 0.75rem);
  --text-sm: clamp(0.8rem, 0.77rem + 0.15vw, 0.875rem);
  --text-base: clamp(0.875rem, 0.83rem + 0.2vw, 1rem);
  --text-lg: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  --text-xl: clamp(1.125rem, 1.08rem + 0.25vw, 1.25rem);
  --text-2xl: clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem);
  --text-3xl: clamp(1.5rem, 1.35rem + 0.6vw, 1.875rem);
  --text-4xl: clamp(1.75rem, 1.55rem + 0.8vw, 2.25rem);
  --text-5xl: clamp(2rem, 1.8rem + 0.8vw, 2.375rem);
  --text-6xl: clamp(2.125rem, 1.9rem + 1vw, 2.5rem);
  

  /* Spacing: 4px base */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 0.875rem;
  --radius-xl: 1.25rem;
  --radius-full: 9999px;
  // uni colors
  --color-text-warning:#3D290A;
  --color-error: #BE1313;
  --color-error-hover: #E81717;
  --color-error-dark: #950F0F;
  --color-warning-light: #EECD9B;
  /* Light theme */
  &,&.light-mode{

 /* Backgrounds */
  --color-bg: #F7F8FA;
  --color-surface: #FFFFFF;
  --color-surface-muted: #E9EDF2;
  --color-bg-400: #D9DEE7;
  --color-scroll-thumb: #9FABC3;
  /* Borders */
  --color-border: #F0F2F5;

  /* Text */
  --color-text: #202936;
  --color-text-secondary: #687386;
  --color-text-light: #EFF2F6;
  --color-text-on-accent: #ECF5F2;

  /* Accent */
  --color-accent: #0F8F75;
  --color-accent-hover: #0B755F;
  --color-accent-surface: #69F2D2;
  --color-accent-surface-hover: #14BD9B;
  --color-on-accent-surface: #073D34;

  /* Financial */
  --color-profit: #16845C;
  --color-profit-transparent: rgb(87, 214, 163, 0.2);
  --color-loss: #D14343;
  --color-loss-transparent: rgb(209, 67, 67, 0.2);
  --color-warning: #B7791F;
  --color-warning-transparent: rgb(183, 121, 31, 0.2);
  /* Shadows */
  --shadow-sm: 0 1px 2px rgb(15 23 42 / 0.04);
  --shadow-md: 0 4px 12px rgb(15 23 42 / 0.06);
  --shadow-lg: 0 8px 24px rgb(15 23 42 / 0.10);
  --shadow-xl: 0 16px 48px rgb(15 23 42 / 0.16);

  --image-grayscale: 0;
  --image-opacity: 100%;

  }
  &.dark-mode {
  /* Backgrounds */
  --color-bg: #0C111B;
  --color-surface: #141B28;
  --color-surface-muted: #1D2736;
  --color-bg-400: #1A253B;
  --color-scroll-thumb: #364C78;
  
  /* Borders */
  --color-border: #283243;

  /* Text */
  --color-text: #F1F5F9;
  --color-text-secondary: #9AA8BA;
  --color-text-light: #F1F5F9;
  --color-text-on-accent: #051510;

  /* Accent */
  --color-accent: #57D6B5;
  --color-accent-hover: #79E4C8;
  --color-accent-surface: #173D35;
  --color-accent-surface-hover: #245B4E;
  --color-on-accent-surface: #E6FFF7;

  /* Financial */
  --color-profit: #57D6A3;
  --color-profit-transparent: rgb(87, 214, 163, 0.2);
  --color-loss: #FF5C5C;
  --color-loss-transparent: rgb(255, 92, 92,0.2);
  --color-warning: #F2C36B;
  --color-warning-transparent: rgb(242, 195, 107,0.2);
  /* Shadows */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.12);
  --shadow-md: 0 4px 12px rgb(0 0 0 / 0.20);
  --shadow-lg: 0 8px 24px rgb(0 0 0 / 0.30);
  --shadow-xl: 0 16px 48px rgb(0 0 0 / 0.40);

  /* --image-grayscale: 10%;
  --image-opacity: 90%; */
  }
 }

 *,*::before,*::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.2s, border 0.2s;
 }

 body {
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.5;
  transition: color 0.2s, background-color 0.2s;
  overflow: hidden;
}

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  select{
    width: fit-content;
  font-size: var(--text-lg);
  text-transform: capitalize;
  font-weight: 500;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  }
  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-surface);
    color: var(--color-text-secondary);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  } 


  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
    letter-spacing: 0.3px;
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }
  
`;

export default GlobalStyles;
