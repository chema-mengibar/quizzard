import { createGlobalStyle } from "styled-components";
import { FontFaces } from "./fonts.styles";
import NormalizeCss from "normalize.css";

const MainCSS = createGlobalStyle`
  ${NormalizeCss}
  ${FontFaces}
`;

export default MainCSS;
