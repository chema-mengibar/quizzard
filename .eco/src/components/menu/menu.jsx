import React, {Fragment, useContext, useState, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import RepositoryContext, { RepositoryContextProvider } from '../../helpers/contexts/Repository.context'
import { connectFromTo, getItemById } from '../../helpers/repositoryService/repositoryService'

import {Modal} from '../modal/modal'
import {Button} from '../button/button.styles'
import {MenuWrapper, Block, Label, Value, Separator} from './menu.styles'

export const Menu = (props) => {

  const { state, dispatch } = useContext( RepositoryContext )
  const { stateApp, dispatchApp } = useContext( AppContext )

  function modalOnClose (){
    console.log('close modal callback')
  }

  function triggerUpdate(){
    dispatch({ type: "setPaintNodeConnections", payload: true });
    setTimeout(
      function() {
        dispatch({ type: "setPaintNodeConnections", payload: false });
      }
      .bind(this),
      500
    );
  }

  return (
    <>
      <MenuWrapper>
       
        <Button 
          onClick={()=> {
            // dispatchApp({ type: 'setDialogName' , payload: 'menuModal'}); 
            // dispatchApp({ type: "openDialog"});
          }}
        >
          Save
        </Button>
        <Block>
          <Label> From </Label>
          <Value
            onClick={ ()=>{
              if( state.nodeIdFrom){
                // this.blur(); // todo: button lose focus
                dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdFrom});
                triggerUpdate()
              }
            } }
          >
            {state.nodeIdFrom ? `${getItemById(state.nodeIdFrom).type.toUpperCase()}::${getItemById(state.nodeIdFrom).label}` : 'no-selected'}</Value>
          <Separator />
          <Label> To </Label>
          <Value
            onClick={ ()=>{
              if( state.nodeIdTo){
                dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo})
                triggerUpdate()
              }
            } }
          >
            {state.nodeIdTo ? `${getItemById(state.nodeIdTo).type.toUpperCase()}::${getItemById(state.nodeIdTo).label}` : 'no-selected'}</Value>
          <Separator />
          <Button 
            onClick={()=> { 
              if( state.nodeIdFrom || state.nodeIdTo){
                connectFromTo( state.nodeIdFrom, state.nodeIdTo )
                dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo});
                triggerUpdate()
              }
            }}
          >
          Connect
        </Button>
        <Button dark onClick={()=> { dispatch({ type: "resetFromTo" }); }} > Clear </Button>
        </Block>
      </MenuWrapper>
      <Modal  
        modalId={'menuModal'}
        onClose={ ()=> modalOnClose() } 
        onSubmit={ ()=> modalOnClose() } 
      />
    </>
  )
}