import styled, {css} from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'


export const ModalWrapper = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  display:${ ({show})=> show ? 'block' : 'none'};
  z-index:9000;
` ;


export const ModalOverlay = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background-color: ${ colorize.hexToRgbA('#000000', '.3') };
` ;



export const ModalContainer = styled.div`
  position:relative;
  margin:100px auto;
  width:500px;
  height:200px;
  color: ${theme.text};
  background-color: ${theme.base_des_01};
  border: 2px solid ${theme.decoration};
  padding:15px;
  display:flex;
  border-radius:5px;
` ;

export const ModalControl = styled.div`
  padding-left:10px;
`;

export const ModalPanel = styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  margin: 10px 0 20px;
`;


export const H1 = styled.h1`
  font-size: 14px;
  margin-bottom:20px;
`;


export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;


export const Input = styled.input`
  font-size: 18px;
  letter-spacing: 0.10em;
  border-radius: 5px;
  border: 2px solid ${ theme.decoration};
  background-color: ${ theme.base_des_01};
  height: 35px;
  line-height: 20px;
  margin-bottom: 10px;
  padding: 10px;
  color: ${theme.text};
`;

