import React from "react";

import {NodeWrapper, Conector} from './node.styles'

export const Node = (props) => {
  
  const isLeftOn = true
  const isRightOn = true
  
  return (
    <NodeWrapper>
      <Conector on={isLeftOn} ></Conector>
      {props.item.label}
      <Conector on={isRightOn} ></Conector>
    </NodeWrapper>
  )
}