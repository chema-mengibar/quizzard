import React, {useContext, useState, useRef, useEffect, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import RepositoryContext, { RepositoryContextProvider } from '../../helpers/contexts/Repository.context'

// import {Button} from '../button/button.styles'

import { H1, Input, Label, Ul, Li } from './modal.styles'

export const ModalCmd = ({
  modalId,
  onSubmit,
  onClose,
}) => {
  
  const { state, dispatch } = useContext( RepositoryContext )
  const { stateApp, dispatchApp } = useContext( AppContext )

  const listCommands = [
    { name:'Clear Connectors', action:()=>{ dispatch({ type: "resetFromTo" }); }},
    { name:'Item copy', action:()=>{ console.log(' action called')}},
    { name:'Item delete', action:()=>{ console.log(' action called')}},
    { name:'Sort by Atoms', action:()=>{ console.log(' action called')}},
  ]


  const [cmd, setCmd] = useState( '' );
  const [list, setList] = useState( [...listCommands] );

  const cmdRef = useRef(null);

  function handleChange(event) {
    const inpuTText = event.target.value
    setCmd(inpuTText);

    const filteredCmd = listCommands.filter( cmdItem =>{
      return cmdItem.name.toLowerCase().indexOf( inpuTText.toLowerCase()) > -1
    })
    setList(filteredCmd)
  }

  function resetForm(){
    setCmd('')
  }


  // // todo: focus
  useEffect(() => {
    if( stateApp.dialogIsOpen ){
      // nameRef.current.focus() // todo: focus
      setTimeout(() => { cmdRef.current.focus() });
    }
  }, [stateApp.dialogIsOpen]);

  return (
    <>
      <H1>Command Modal</H1>
      <Input 
        type="text" 
        ref={cmdRef} 
        name="cmd-search" 
        value={ cmd } 
        onChange={handleChange} 
      />
      <Ul>
      { 
        list && list.map( (cmdItem, idx) =>{
          return (
            <Li 
              key={`cmd-${idx}`} 
              onClick={ ()=> {
                cmdItem.action();
                onSubmit() 
              }}
            >
              {cmdItem.name}
            </Li>
          )
        })
      }
      </Ul>
    </>
  )
}