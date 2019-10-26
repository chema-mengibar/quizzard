import React from "react";

import {NodeWrapper, Conector, Box, BoxCol, Sticker, Dotted} from './node.styles'

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