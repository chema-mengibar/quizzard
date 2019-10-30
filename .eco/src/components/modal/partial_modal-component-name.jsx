import React, {useContext, useState, useRef, useEffect, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import {Button} from '../button/button.styles'

import { H1, Input, Label } from './modal.styles'

export const ModalComponentName = ({
  modalId,
  onSubmit,
  onClose,
}) => {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const [componentName, setComponentName] = useState( '' );

  const nameRef = useRef(null);

  function handleChange(event) {
    setComponentName(event.target.value);
  }

  function resetForm(){
    setComponentName('')
  }

  // // todo: focus
  useEffect(() => {
    if( stateApp.dialogIsOpen ){
      // nameRef.current.focus() // todo: focus
      setTimeout(() => { nameRef.current.focus() });
    }
  }, [stateApp.dialogIsOpen]);

  return (
    <>
      <H1>Add Component</H1>
      <Label htmlFor={'component-name'}>Component name</Label>
      <Input 
        type="text" 
        ref={nameRef} 
        name="component-name" 
        value={ componentName } 
        onChange={handleChange} 
      />
      
      <Button onClick={()=>{
        const modalData = {componentName}
        resetForm()
        dispatchApp({ type: "closeDialog"})
        onSubmit( modalData )
        }}
      >
        Create
      </Button>
    </>
  )
}