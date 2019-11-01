import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:33%;
  height: auto;
  min-height: 100%;
  border: 1px solid ${theme.decoration};
`

export const ColHeader = styled.div`
  display:flex;
  border-bottom: 1px solid ${theme.decoration};
  height:40px;
  line-height:40px;
  padding:5px;
  background-color: ${theme.base_des_01};
  color: ${theme.text};
  text-align:center;
  text-transform: uppercase;
`

export const ColContent = styled.div`
  background-color: ${theme.base_des_01};
  flex-grow:1;
`