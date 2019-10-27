import React, {useContext, useState, useEffect, useLayoutEffect } from "react";

import {getContext} from '../../helpers/contexts/Repository.context'
import {getItemById, getChildren} from '../../helpers/repositoryService/repositoryService'

import { 
  NodeWrapper, 
  ConectorWrapper, ConectorAction, ConectorDecoration,
  Box, BoxCol, Sticker, Dotted
} from './node.styles'


const Conector = (props) => {
  return (
    <ConectorWrapper left={props.left} >
      <ConectorAction active={props.active} left={props.left} />
      <ConectorDecoration active={props.active} left={props.left} />
    </ConectorWrapper>
  )
}


export const Node = ({
  type,
  label,
  id,
}) => {
  
  const { state, dispatch } = useContext( getContext() )
  
  const [isSelected, setIsSelected] = useState( (state.selectedNodeId == id) );
  const [isCreated, setIsCreated] = useState( false );
  const [isRelated, setIsRelated] = useState( false );
  const [hasChildren, setHasChildren] = useState( false );

  useEffect(() => {
    setIsSelected( state.selectedNodeId == id )
  }, [state.selectedNodeId]);

  useLayoutEffect(() => {
    const inList = state.familyNodes.indexOf( id ) > -1
    setIsRelated( inList )
    if( inList ){
      const gen1ChildrenIds = getChildren( id )
      setHasChildren( gen1ChildrenIds.length > 0 )
    }
    else{
      !isSelected && setHasChildren( false )
    }
   
  }, [state.familyNodes]);

  useEffect(() => {
    if( isSelected ){
      const gen1ChildrenIds = getChildren( id )
      setHasChildren( gen1ChildrenIds.length > 0 )
      dispatch({ type: "setFamilyNodes", payload: gen1ChildrenIds});
      gen1ChildrenIds.forEach( subId => {
        const gen2ChildrenIds = getChildren( subId )
        dispatch({ type: "addToFamilyNodes", payload: gen2ChildrenIds});
        gen2ChildrenIds.forEach( subId => {
          const gen3ChildrenIds = getChildren( subId )
          dispatch({ type: "addToFamilyNodes", payload: gen3ChildrenIds});
        });
      });
    }
    else{
      setHasChildren(false)
    }
  }, [isSelected]);


  
  function selectNode( ){
    dispatch({ type: "setSelectedNodeId", payload: id});
  }

  return (
    <NodeWrapper>
      <Conector active={hasChildren} left ></Conector>
      <Box isSelected={isSelected} >
        <BoxCol onClick={ ()=> selectNode( ) }>
          {label}
        </BoxCol>
        <BoxCol>
          <Sticker {...isCreated} >{ isCreated ? 'C' : 'P'}</Sticker>
        </BoxCol>
        <BoxCol>
          <Dotted />
        </BoxCol>
      </Box>
      <Conector active={isRelated}></Conector>
    </NodeWrapper>
  )
}