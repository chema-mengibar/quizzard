import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:33%;
  height: auto;
  min-height: 100%;
  border: 1px solid ${theme.decoration};

` ;

export const ColHeader = styled.div`
  border-bottom: 1px solid ${theme.decoration};
  height:30px;
  background-color: ${theme.base_des_01};
` ;

export const ColContent = styled.div`
  background-color: ${theme.base_des_01};
  flex-grow:1;
` ;