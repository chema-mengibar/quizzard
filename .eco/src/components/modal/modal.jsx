import React, {useContext, useState, useEffect, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import {Button} from '../button/button.styles'

import {ModalWrapper, ModalContainer, ModalControl, ModalPanel } from './modal.styles'



export const Modal = (props) => {

  const { stateApp, dispatchApp } = useContext( AppContext )

  const [isOpen, setIsOpen] = useState( false );

  useLayoutEffect(() => {
    setIsOpen( stateApp.dialogIsOpen )
  }, [stateApp.dialogIsOpen]);
    

  return (
    <ModalWrapper show={stateApp.dialogIsOpen}>
      <ModalContainer>
        <ModalPanel>
          Panel 

          <Button dark onClick={()=>{
            dispatchApp({ type: "closeDialog"})
            props.onSubmit()
            }}
          >
            Submit
          </Button>

        </ModalPanel>

        <ModalControl>
          <Button small dark onClick={()=>{
            dispatchApp({ type: "closeDialog"})
            props.onClose()
            }}
          >
            x
          </Button>
        </ModalControl>
      </ModalContainer>
    </ModalWrapper>
  )
}