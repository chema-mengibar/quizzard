import React, {useContext, useState} from "react";

import {getContext} from '../../Context'

import {Node} from '../node/node'

import {ColWrapper, ColHeader, ColContent} from './col.styles'



export const Col = (props) => {

  const { state, dispatch } = useContext( getContext() )
  // const [task, setTask] = useState('');
  console.log( dispatch )
  const items = props.items

  const setName = ( _type ) => { dispatch({ type: "rename", payload: _type }) };
  const reset = () => dispatch({ type: "empty" });

  return (

      <ColWrapper>
        <ColHeader onClick={ () => {  setName( props.atomicType ); console.log('click');  } }>
          {props.atomicType} {state.name}
        </ColHeader>
        <ColContent>
          {
            items &&  items.map( (item, idx) => { 
              return( 
                <Node key={ `node_${props.atomicType}_${idx}` } 
                  item={item}
                  click={ () => { reset(); console.log('click');  } }
                /> 
              )
            })
          }
          </ColContent>
      </ColWrapper>

  )
}