import React from 'react'
import { inject } from 'mobx-react';

export default inject('AppStore')((props) =>{


  return (
    <div onClick={
      ()=>{
        props.AppStore.selectUser('Max')
        props.AppStore.addItem('Max')
        console.log("click")
      }
    }> Game</div>
  )
})
