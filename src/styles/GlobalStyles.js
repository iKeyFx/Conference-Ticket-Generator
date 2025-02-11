import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-gradient-1: radial-gradient(circle at bottom, #072b30 20%, #031c20 80%);
    color: rgba(255, 255, 255, 0.87);

    --color-primary: #041e23;       
  --color-secondary: #0e464f;    
  --color-accent: #24a0b5;       
  --color-gray-text: #cccccc;    
  --color-card-background: #072b30; 
  --color-card-border: #0e464f;  
  --color-box-shadow: rgba(4, 30, 35, 0.68);
}


`;
export default GlobalStyles;
