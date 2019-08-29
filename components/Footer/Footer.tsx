import React from 'react'
// import Link from 'next/link';
import { inject, observer } from 'mobx-react';

const Footer =  props => {

  return (
    <div>
      Footer: 
      {props.AppStore.getUser }
      <br />
      {props.AppStore.getCactus }
      <br />
      {props.AppStore.getStoreArray }
    </div>
  )
 };

export default inject('AppStore')(observer(Footer))