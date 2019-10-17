import React from 'react'
import styled, {css} from 'styled-components';
// import Link from 'next/link';

import { inject, observer } from 'mobx-react';
import media from '../../../style/media.style';


const FooterStyled = styled.div`
  
  background-color:red;

  @media ${media.md} {
    background-color: green;
  }

`

const Footer =  props => {
  return (
    <FooterStyled>
      Footer: 
      {props.AppStore.getUser }
      <br />
      {props.AppStore.getCactus }
      <br />
      {props.AppStore.getStoreArray }
    </FooterStyled>
  )
 };

export default inject('AppStore')(observer(Footer))