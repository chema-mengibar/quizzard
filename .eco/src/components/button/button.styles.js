import styled, {css} from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'

export const Button = styled.div`

  ${({small}) =>{
    return small ?
    css`
      min-width: 20px;
      height: 20px;
      line-height: 20px;
    ` :
    css`
      min-width: 100px;
      height: 30px;
      line-height: 30px;
    `
  }}

  text-align: center;
  border-radius:5px;
  color: ${ theme.text};
  cursor:pointer;

  ${({dark}) =>{
    return dark ?
    css`
      background-color: ${theme.base};
    ` :
    css`
      background-color: ${colorize.hexToRgbA('#ffffff', '.3')};
    `
  }}

  :hover{
    background-color: ${ theme.accent.default.base};
  }

  :not(:last-child){
    margin-right:5px;
  }

` ;