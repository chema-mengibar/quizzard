import styled, {css} from 'styled-components'

import {theme} from '../../styles/theme.styles'

import colorize from '../../helpers/colorize/colorize'

const nodeMinHeight = 35
const connectorWidth = 40
const connectorDecorationWidth = 10
const actionHeight = Math.min( 25 , nodeMinHeight );


export const NodeWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  min-height: ${ nodeMinHeight }px; //@todo: resize
  margin: 5px 0; //@todo: resize
` ;


const borderDecorationCSS = `
  display: block;
  content: '';
  width: ${connectorDecorationWidth}px;
  height:100%;
  min-height:  ${ nodeMinHeight }px;
  background-color: ${ theme.base_des_02};
`

const actionDecorationCSS = `
  display: block;
  content: '';
  width: ${ connectorWidth - connectorDecorationWidth }px;
  height:${actionHeight}px;
  background-color: ${colorize.hexToRgbA('#ffffff', '.1')};
  margin-top: ${ (nodeMinHeight - actionHeight) / 2 }px;
`

const borderHoverCSS = `2px solid ${theme.accent_primary}`

export const Conector = styled.div`
  background-color: ${ props => props.on ? 'transparent' : theme.accent_primary};
  // background-clip: content-box;
  // padding: 12px 0;
  width: ${connectorWidth + 2}px; // borderHoverCSS border-sieze
  height:100%;
  min-height: 20px;
  box-sizing: border-box;
  cursor: pointer;

  :hover{
    :before{
      ${ ({left}) => {
        return left ? `border-left: ${borderHoverCSS};` : `border-right: ${borderHoverCSS};`
      }}
    }
    :after{
      background-color: ${theme.accent_primary};
    }
  }

  ${
    ({left}) => {
      return left ? 
      `
      :before{
        ${borderDecorationCSS}
        float: right;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      :after{
        ${actionDecorationCSS}
        float: right;
      }
      `: 
      `
      :before{
        ${borderDecorationCSS}
        float: left;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      :after{
        ${actionDecorationCSS}
        float: left;
      }
      `
    }
  }
` ;

export const Box = styled.div`
  display:flex;
  flex-direction:row;
  flex-grow: 1;
  background-color: ${theme.base_des_02};
  color: ${theme.text};
` ;

export const BoxCol = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:left;
  padding: 5px 0;

  &:first-child {
    margin-left: 10px;
    margin-right: 5px;
    flex-grow: 1;
  }
  &:last-child {
    margin-right: 10px;
    margin-left: 5px;
    width:20px;
  }
` ;

export const Sticker = styled.div`
  min-width:30px;
  padding:2px;
  border-radius: 5px;
  background-color: ${theme.accent_primary_dev_01};
  text-align:center;
  font-size:10px;
  color: ${theme.accent_primary};
` ;

export const Dotted = styled.div`
  width: 10px;
  align-self: flex-end;
  &:after {
    display: inline-block;
    content: '\\2807';
    font-size: 18px;
    color: ${theme.text_des_01};
  }
` ;


