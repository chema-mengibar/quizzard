import React, { useContext, useState, useRef, useEffect } from "react";

import AppContext from '../../helpers/contexts/App.context'
import RepositoryContext from '../../helpers/contexts/Repository.context'

import { H1, P } from './modal.styles'

export const ModalInfo = ({
  modalId,
  onSubmit,
  onClose,
}) => {
  
  return (
    <>
      <H1>About</H1>
      <p> Chema Mengibar </p>
      <p> https://github.com/chema-mengibar </p>
    </>
  )
}