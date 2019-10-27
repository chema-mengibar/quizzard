import React from "react";

import { 
  NodeWrapper, 
  ConectorWrapper, ConectorAction, ConectorDecoration,
  Box, BoxCol, Sticker, Dotted
} from './node.styles'


const Conector = (props) => {
  return (
    <ConectorWrapper on={props.on} left={props.left} >
      <ConectorAction left={props.left} />
      <ConectorDecoration left={props.left} />
    </ConectorWrapper>
  )
}


export const Node = (props) => {
  
  const isLeftOn = true
  const isRightOn = true
  
  return (
    <NodeWrapper>
      <Conector on={isLeftOn} left ></Conector>
      <Box>
        <BoxCol>
          {props.item.label}
        </BoxCol>
        <BoxCol>
          <Sticker>100</Sticker>
        </BoxCol>
        <BoxCol>
          <Dotted />
        </BoxCol>
      </Box>
      <Conector on={isRightOn}></Conector>
    </NodeWrapper>
  )
}