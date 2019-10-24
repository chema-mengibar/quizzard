import React from "react";

import {Node} from '../node/node'

import {ColWrapper, ColHeader, ColContent} from './col.styles'

export const Col = (props) => {

  const items = props.items

  return (
    <ColWrapper>
      <ColHeader>
        {props.atomicType}
      </ColHeader>
      <ColContent>
        {
          items &&  items.map( (item, idx) => <Node key={ `node_${props.atomicType}_${idx}` } item={item} /> )
        }
        </ColContent>
    </ColWrapper>
  )
}