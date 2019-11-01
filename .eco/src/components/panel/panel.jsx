import React from "react";

import {Button} from '../button/button.styles'

import {
  PanelWrapper, 
  PanelOverlay, 
  PanelContainer, PanelHeader, UlContent 
} from './panel.styles'

export default ({
  visible,
  onClick,
  children
}) => {
  return (
    <PanelWrapper visible={visible} >
      <PanelOverlay />
      <PanelContainer >
        <PanelHeader>
          <Button small dark 
            onClick={()=>{
              onClick()
            }}
          >
          x
          </Button>
        </PanelHeader>
        <UlContent>
          {children}
        </UlContent>
      </PanelContainer>
    </PanelWrapper>
  )
}