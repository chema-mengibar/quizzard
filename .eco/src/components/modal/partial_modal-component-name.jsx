import React, {useContext, useState, useLayoutEffect } from "react";

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

  function handleChange(event) {
    setComponentName(event.target.value);
  }

  function resetForm(){
    setComponentName('')
  }

  return (
    <>
      <H1>Add Component</H1>
      <Label htmlFor={'component-name'}>Component name:</Label>
      <Input 
        type="text" 
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
        Submit
      </Button>
    </>
  )
}