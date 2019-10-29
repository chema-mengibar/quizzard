import React, {useContext, useState, useLayoutEffect } from "react";

import RepositoryContext, { RepositoryContextProvider } from '../../helpers/contexts/Repository.context'
import { connectFromTo, getItemById } from '../../helpers/repositoryService/repositoryService'

import {Button} from '../button/button.styles'
import {MenuWrapper} from './menu.styles'

export const Menu = (props) => {

  const { state, dispatch } = useContext( RepositoryContext )

  return (
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
    </MenuWrapper>
  )
}