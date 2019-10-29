import React, {useContext, useState, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import RepositoryContext, {getContext} from '../../helpers/contexts/Repository.context'


import { repository, getRepo, addItem} from '../../helpers/repositoryService/repositoryService'
import {Node} from '../node/node'
import {Modal} from '../modal/modal'
import {ModalComponentName} from '../modal/partial_modal-component-name'
import {Button} from '../button/button.styles'

import {ColWrapper, ColHeader, ColContent} from './col.styles'


function getItemsByType( _type ){
  return repository.items.filter( item => item.type === _type)
}



export const Col = (props) => {

  const { state, dispatch } = useContext( getContext() )
  const { stateApp, dispatchApp } = useContext( AppContext )

  const [items, setItems] = useState( getItemsByType( props.atomicType ) );

  function modalOnClose (){
    console.log('close modal callback')
  }

  function modalOnSubmit ( modalData ){
    console.log('submit modal callback', modalData )
    const addedItemId = addItem( props.atomicType , modalData.componentName )
    console.log( addedItemId )
    dispatch({ type: "change" , payload: props.atomicType});
  }

  useLayoutEffect(() => {
    if( state.changed.type == props.atomicType ){
      const filteredItems = getItemsByType( props.atomicType )
      setItems( filteredItems )
      dispatch({ type: "updated"});
    }
  }, [state.changed.type]);
  
  return (
    <>
      <ColWrapper>
        <ColHeader>
          <Button 
            dark  
            onClick={ () => {  
              dispatchApp({ type: 'setDialogName' , payload: `componentName__${props.atomicType}`}); 
              dispatchApp({ type: 'openDialog'}); 
            }} >
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
      <Modal 
        modalId={`componentName__${props.atomicType}`}
        onClose={()=> modalOnClose()} 
      >
        <ModalComponentName onSubmit={ modalOnSubmit } />
      </Modal>
    </>
  )
}