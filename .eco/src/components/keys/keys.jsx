import React, {useContext, useCallback, useState, useEffect, useLayoutEffect } from "react";

import AppContext, { AppContextProvider } from '../../helpers/contexts/App.context'
import {Modal} from '../modal/modal'

export const Keys = (props) => {

  const { stateApp, dispatchApp } = useContext( AppContext )

  const pressFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      dispatchApp({ type: "closeDialog"})
      dispatchApp({ type: 'setDialogName' , payload: null});
    }
    if(event.keyCode === 32) {
      dispatchApp({ type: 'setDialogName' , payload: `cmd`}); 
      dispatchApp({ type: 'openDialog'}); 
    }

    // if(event.keyCode === 13) {
    //   dispatchApp({ type: 'openDialog'}); 
    // }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", pressFunction, false);
    return () => {
      document.removeEventListener("keydown", pressFunction, false);
    };

  }, []);

  return(
    <>
      <Modal 
        modalId={`cmd`}
        onClose={()=>{}} 
        onSubmit={ ()=>{}} 
      >
        Dialog CMD
      </Modal>
    </>
  )
}