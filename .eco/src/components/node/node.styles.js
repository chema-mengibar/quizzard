import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'

const nodeMinHeight = 35
const connectorWidth = 40
const connectorDecorationWidth = 10
const actionHeight = Math.min( 25 , nodeMinHeight );


export const NodeWrapper = styled.div`
  display:flex;
  min-height: ${ nodeMinHeight }px;
  margin: 5px 0;
` ;


const processStatus = ({isSelected, hasParents, hasChildren, isInParent, isInChildren})=> { 
  // ${ ({status}) => processStatus(status) };
  let color = theme.accent.default.base
  if( !isSelected ){
    color = isInParent ? theme.accent.primary.base : theme.accent.secondary.base 
  }
  return color
}


export const ConectorAction = styled.div`
  flex: 1;
  align-self: center;
  background-color: ${
    ({active, status}) => active ?
      processStatus(status) :
      colorize.hexToRgbA('#ffffff', '.1')
    };
  height: ${actionHeight}px;
  order:${ ({left}) => left ? `0` : `1`};
`


export const ConectorDecoration = styled.div`
  width: ${connectorDecorationWidth}px;
  background-color: ${theme.base_des_02};
  order: ${ ({left}) => left ? '1' : '0'};
  ${({left}) => {
    const borderRadiusCss = (left ? 
      `border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      ` :
    `border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    `)
    return borderRadiusCss
  }}

  ${({left, active, status}) => {
    const color = processStatus(status);
    const borderLineCss = (active ?
      (left ? 
        `border-left: 2px solid ${color};` : 
        `border-right: 2px solid ${color};`
      ) : ''
    )
    return borderLineCss
  }}
`


export const ConectorWrapper = styled.div`
  display:flex;
  width: ${connectorWidth + 2}px;
  cursor: pointer;

  :hover{
    ${ConectorDecoration}{
      ${ ({left}) => left ?
        `border-left: 2px solid ${theme.accent.tertiary.base};` :
        `border-right: 2px solid ${theme.accent.tertiary.base};`
      }
    }
    ${ConectorAction}{
      background-color: ${theme.accent.tertiary.base};
    }
  }
` ;


export const Box = styled.div`
  display:flex;
  flex-direction:row;
  flex-grow: 1;
  background-color: ${ theme.base_des_02 };
  color: ${theme.text};
` ;


export const BoxCol = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:left;
  color: ${({status})=> status && (status.isSelected || status.isInParent || status.isInChildren ) ? processStatus(status) : theme.text };
  padding: 5px 0;

  &:first-child {
    margin-left: 10px;
    margin-right: 5px;
    flex-grow: 1;

    cursor:pointer;
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
  background-color: ${colorize.hexToRgbA('#ffffff', '.1') };
  text-align:center;
  font-size:10px;
  color: ${colorize.hexToRgbA('#ffffff', '.2') };
` ;


export const Dotted = styled.div`
  width: 10px;
  align-self: flex-end;
  cursor:pointer;

  :after {
    display: inline-block;
    content: '\\2807';
    font-size: 18px;
    color: ${theme.text_des_01};
  }
` ;