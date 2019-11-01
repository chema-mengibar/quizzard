import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize';

export const MenuWrapper = styled.div`
  display: flex;
  color: ${ theme.text};
`

export const Area = styled.div`
  display: flex;
  padding:5px;
  color: ${ theme.text};
  :nth-of-type(2) {
    margin-left:auto;
  }
`

export const Block = styled.div`
  display: flex;
  height:30px;
  border-left: 1px solid ${theme.decoration};
  :not(:last-of-type){
    border-right: 1px solid ${theme.decoration};
  }
  padding:5px 15px;
  justify-content: center;
  align-items: center;
  
`

export const Label = styled.span`
  color:${ colorize.hexToRgbA( '#ffffff' , '.4') };
  user-select: none;
  margin-right:5px;
`

export const Value = styled.span`
  color:${ theme.text};
  cursor: zoom-in;
  :hover{
    color:${ theme.accent.default.base};
  }
`

export const Separator = styled.span`
  margin: 0 6px;
`






