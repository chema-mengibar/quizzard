import { createGlobalStyle } from 'styled-components'

import {fontCssGlobal} from './fonts.styles'
import {theme} from './theme.styles'

export const GlobalStyles = createGlobalStyle`

  ${fontCssGlobal}

  html, body {
    height: 100%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #app{
    display: flex;
    flex-direction: column;
    background-color: ${theme.base};
    min-height:100%;
  }
 
`


//     // color: ${props => (props.whiteColor ? 'white' : 'black')};