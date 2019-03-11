import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-feature-settings: "tnum";
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #101924;
    font-family: 'Open Sans', sans-serif;
    color: #E1E1E1;

  }

`;

export default GlobalStyle;
