import React from 'react'
import { inject } from 'mobx-react';



export default inject('AppStore')((props) =>{

  // inject('appStore')
  props.AppStore.user = 'gamer';
  return (
    <div> Game {props.AppStore.user}</div>
  )
})
