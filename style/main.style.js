import { createGlobalStyle } from 'styled-components';
import theme from './theme.shared'
import skins from './skin.style'


console.log( skins.text_base )

const MainCSS = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,700');
  html, body, #root{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    height:100%;
  }
  body {
    line-height: 1;

  }

`;

export default MainCSS;