import React, {useContext, useState, useEffect, useLayoutEffect } from "react";

import {getContext} from '../../helpers/contexts/Repository.context'
import { getParents, getChildren } from '../../helpers/repositoryService/repositoryService'

import { 
  NodeWrapper, 
  ConectorWrapper, ConectorAction, ConectorDecoration,
  Box, BoxCol, Sticker, Dotted
} from './node.styles'


const Conector = ({left, active, status}) => {
  return (
    <ConectorWrapper left={left} >
      <ConectorAction active={active} left={left} status={status}/>
      <ConectorDecoration active={active} left={left} status={status}/>
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
  const [isInChildren, setIsInChildren] = useState( false );
  const [isInParent, setIsInParent] = useState( false );
  const [hasChildren, setHasChildren] = useState( false );
  const [hasParents, setHasParents] = useState( false );

  function recursionTree(){
    // Direction left: children
    const gen1ChildrenIds = getChildren( id )
    setHasChildren( gen1ChildrenIds.length > 0 )
    dispatch({ type: "setFamilyChildren", payload: gen1ChildrenIds});
    gen1ChildrenIds.forEach( subId => {
      const gen2ChildrenIds = getChildren( subId )
      dispatch({ type: "addToFamilyChildren", payload: gen2ChildrenIds});
      gen2ChildrenIds.forEach( subId => {
        const gen3ChildrenIds = getChildren( subId )
        dispatch({ type: "addToFamilyChildren", payload: gen3ChildrenIds});
      });
    });
    // Direction right: children
    const gen1ParentsIds = getParents(id);
    setHasParents( gen1ParentsIds.length > 0 )
    dispatch({ type: "setFamilyParents", payload: gen1ParentsIds });
    gen1ParentsIds.forEach( subId => {
      const gen2ParentsIds = getParents( subId )
      dispatch({ type: "addToFamilyParents", payload: gen2ParentsIds});
      gen2ParentsIds.forEach( subId => {
        const gen3ParentsIds = getParents( subId )
        dispatch({ type: "addToFamilyParents", payload: gen3ParentsIds});
      });
    });
  }

  function selectNode( ){
    console.log('############', id)
    dispatch({ type: "setSelectedNodeId", payload: id});
    recursionTree();
    processStatus()
  }
    
  function processStatus(  ){
    // This values are changed accord the last selected item: isInParent, isInChildren
    console.log( id, hasParents, hasChildren, isInParent, isInChildren )
  }


  useLayoutEffect(() => {
    setIsSelected( state.selectedNodeId == id )
    console.log('>>> selectedNodeId', id)
  }, [state.selectedNodeId]);


  useLayoutEffect(() => {
    if( state.selectedNodeId != id ){
      const inList = state.familyChildren.indexOf( id ) > -1
      setIsInChildren( inList )
      if( inList ){
        const gen1ChildrenIds = getChildren( id )
        setHasChildren( gen1ChildrenIds.length > 0 )
      }
      else{
        setHasChildren( false )
      }
    }
    console.log('>>> familyChildren', id)
  }, [state.familyChildren]);


  useLayoutEffect(() => {
    if( state.selectedNodeId != id ){
      const inList = state.familyParents.indexOf( id ) > -1
      setIsInParent( inList )
      if( inList ){
        const gen1ParentsIds = getParents( id )
        setHasParents( gen1ParentsIds.length > 0 )
      }
      else{
        setHasParents( false )
      }
    }
    console.log('>>> familyParents', id)
  }, [state.familyParents]);


  useLayoutEffect(() => {
    if( isSelected ){ 
      
    }
    processStatus()
    console.log('>>> isSelected', id)
  }, [isSelected]);



  return (
    <NodeWrapper>
      <Conector active={ hasChildren  || isInParent }
        left 
        status={true}
      />
      <Box isSelected={isSelected} >
        <BoxCol onClick={ ()=>selectNode() }>
          {label}
        </BoxCol>
        <BoxCol>
          <Sticker {...isCreated} >{ isCreated ? 'C' : 'P'}</Sticker>
        </BoxCol>
        <BoxCol>
          <Dotted />
        </BoxCol>
      </Box>
      <Conector 
        active={ hasParents || isInChildren }
        status={true}
      />
    </NodeWrapper>
  )
}