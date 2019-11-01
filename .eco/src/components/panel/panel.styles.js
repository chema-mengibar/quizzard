import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const PanelWrapper = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  display:${ ({visible})=> visible ? 'block' : 'none'};
  z-index:10000;
`

export const PanelOverlay = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background-color: transparent;
`

export const PanelContainer = styled.div`
  position: relative;
  margin: 10px 20px;
  width:150px;
  min-height:150px;
  color: ${theme.text};
  background-color: ${theme.base_des_01};
  border: 2px solid ${theme.decoration};
  border-left: 1px solid ${theme.accent.default.base};
  padding: 5px 5px 15px 15px;
  display:flex;
  border-radius:5px;
  display:flex;
  flex-direction: column;
`

export const PanelHeader = styled.div`
  & > *{
    float: right;
  }
`

export const UlContent = styled.ul`
  display:block;
  list-style-type: none;
  padding:0;
  margin: 15px 0;
`