import React, {Fragment, useContext, useState, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import RepositoryContext, { RepositoryContextProvider } from '../../helpers/contexts/Repository.context'
import { connectFromTo, getItemById } from '../../helpers/repositoryService/repositoryService'

import {Modal} from '../modal/modal'
import {Button} from '../button/button.styles'
import {MenuWrapper} from './menu.styles'

export const Menu = (props) => {

  const { state, dispatch } = useContext( RepositoryContext )
  const { stateApp, dispatchApp } = useContext( AppContext )

  function modalOnClose (){
    console.log('close modal callback')
  }

  return (
    <>
      <MenuWrapper>
        <Button 
          onClick={()=> { 
            connectFromTo( state.nodeIdFrom, state.nodeIdTo )
            // const toItem = getItemById( state.nodeIdTo )
            dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo});
            dispatch({ type: "setPaintNodeConnections", payload: true });
            setTimeout(
              function() {
                dispatch({ type: "setPaintNodeConnections", payload: false });
              }
              .bind(this),
              500
            );
          }}
          >
          Connect
        </Button>
        <Button 
          onClick={()=> { 
            dispatchApp({ type: "openDialog"});
          }}
        >
          Open Dialog
        </Button>
      </MenuWrapper>
      <Modal onClose={ ()=> modalOnClose() } onSubmit={ ()=> modalOnClose() } />
    </>
  )
}