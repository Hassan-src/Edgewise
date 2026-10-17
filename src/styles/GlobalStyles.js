import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root{
  /* Typography */
  --font-sans: "Inter", sans-serif;
  --font-mono: "Geist Mono", monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

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

  /* Light theme */
  // BackGrond
  --color-bg: #F7F8FA;
  --color-surface: #FFFFFF;
  --color-surface-muted: #E9EDF2;
  --color-bg-400:#D9DEE7;
  --color-backdrop : rgb(255,255,255,0.1);
  // Border
  --color-border: #E1E5EB;

  // Text
  --color-text: #202936;
  --color-text-secondary: #687386;
  --color-text-light:#EFF2F6;
  
  // Accent
  --color-accent: #0F8F75;
  --color-accent-hover: #0B755F;
  --color-accent-200: #E8FDF8;
  --color-accent-400: #BDF9EB;

  // Red
  --color-error: #BD1436;
  --color-error-hover: #8F0F29;
  --color-error-dark: #6A0B1E;

  // Numberic colors
  --color-profit: #16845C;
  --color-loss: #D14343;
  --color-warning: #B7791F;

  /* Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 0.875rem;
  --radius-xl: 1.25rem;
  --radius-full: 9999px;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgb(15 23 42 / 0.04);
  --shadow-md: 0 4px 12px rgb(15 23 42 / 0.06);
  --shadow-lg: 0 8px 24px rgb(15 23 42 / 0.10);
  --shadow-xl: 0 16px 48px rgb(15 23 42 / 0.16);

  [data-theme="dark"] {

  --color-bg: #0C111B;
  --color-bg-400: #1A253B;
  --color-surface: #141B28;
  --color-surface-muted: #1D2736;
  --color-border: #283243;

  --color-text: #F1F5F9;
  --color-text-secondary: #9AA8BA;

  --color-accent: #57D6B5;
  --color-accent-hover: #79E4C8;
  --color-accent-200: #EAFAF6;
  --color-accent-400: #C5F1E6;    

  --color-profit: #57D6A3;
  --color-loss: #FF7777;
  --color-warning: #F2C36B;

  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.12);
  --shadow-md: 0 4px 12px rgb(0 0 0 / 0.20);
  --shadow-lg: 0 8px 24px rgb(0 0 0 / 0.30);
  --shadow-xl: 0 16px 48px rgb(0 0 0 / 0.40);

  --image-grayscale: 0;
  --image-opacity: 100%;
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

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-surface-muted);
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
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }
`;

export default GlobalStyles;
