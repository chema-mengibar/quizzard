import React, {useContext, useState, useLayoutEffect } from "react";

import RepositoryContext, {getContext} from '../../helpers/contexts/Repository.context'
import { repository, getRepo, addItem} from '../../helpers/repositoryService/repositoryService'
import {Node} from '../node/node'
import {Button} from '../button/button.styles'

import {ColWrapper, ColHeader, ColContent} from './col.styles'


function getItemsByType( _type ){
  return repository.items.filter( item => item.type === _type)
}

export const Col = (props) => {

  const { state, dispatch } = useContext( getContext() )

  const [items, setItems] = useState( getItemsByType( props.atomicType ) );

  useLayoutEffect(() => {
    if( state.changed.type == props.atomicType ){
      const filteredItems = getItemsByType( props.atomicType )
      setItems( filteredItems )
      dispatch({ type: "updated"});
    }
  }, [state.changed.type]);
  
  return (
    <ColWrapper>
      <ColHeader>
        <Button dark
          onClick={ 
            () => {  
              // setName( props.atomicType ); 
              console.log('click');  
              const addedItemId = addItem( props.atomicType ,'Cactus')
              console.log( addedItemId )
              dispatch({ type: "change" , payload: props.atomicType});
            } 
          }
        >
          ADD {props.atomicType} 
        </Button>
        {/* { state.changed ? 'YES' : 'NO'} */}
      </ColHeader>
      <ColContent>
        {
          items &&  items.map( (item, idx) => { 
            return( 
              <Node key={ `node_${props.atomicType}_${idx}` } {...item} /> 
            )
          })
        }
        </ColContent>
    </ColWrapper>
  )
}