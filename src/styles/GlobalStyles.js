import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-primary: #052228;
    --color-secondary: #07373f;
    --color-accent: #24a0b5;
    --color-accent-dark: #197686;
    --color-text: #ffffff;
    --color-text-placeholder: rgba(255, 255, 255, 0.7);
    --color-error: red;
    --color-input-bg: inherit;
    --color-card-bg: #052228;
    --color-card-border: #07373f;
    --color-image-preview-bg: #052228;
    --color-gray-text: #cccccc;
    --border-radius-sm: 8px;
    --border-radius-md: 12px;
    --border-radius-lg: 24px;
    --border-radius-xl: 32px;
    --border-radius-xxl: 40px;
    --spacing-xs: 0.3rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.2rem;
    --color-shadow-primary: rgba(4, 30, 35, 0.68);
    --color-shadow-card: rgba(7, 55, 63, 1);
    --color-shadow-ticket: rgba(50, 50, 93, 0.25);
    --color-shadow-ticket-dark: rgba(0, 0, 0, 0.3);
    --color-shadow-ticket-inset: rgba(10, 37, 64, 0.35);
    --color-header-bg: #052f35;
    --color-text-muted: #b3b3b3;
    --color-dark: #0a0c11;
    --color-text-light: #d9d9d9;
}


`;
export default GlobalStyles;
