import { createGlobalStyle } from "styled-components";
import { FontFaces, ImportFontFaces } from "./fonts.style";
import NormalizeCss from "normalize.css";

const MainCSS = createGlobalStyle`
  ${NormalizeCss}
  ${FontFaces}
  ${ImportFontFaces}
`;

export default MainCSS;
