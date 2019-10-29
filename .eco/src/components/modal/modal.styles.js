import styled, {css} from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'


export const ModalWrapper = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background-color: ${ colorize.hexToRgbA('#000000', '.3') };
  display:${ ({show})=> show ? 'block' : 'none'};
` ;


export const ModalContainer = styled.div`
  position:relative;
  margin:100px auto;
  width:500px;
  height:200px;
  background-color: white;
  padding:15px;
  display:flex;
  border-radius:5px;
` ;

export const ModalControl = styled.div`
  padding-left:10px;
`;

export const ModalPanel = styled.div`
  flex:1;
`;