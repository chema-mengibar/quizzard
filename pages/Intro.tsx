import React from 'react'
import { inject } from 'mobx-react';

export default inject('AppStore')((props) =>{
  return (
    <div onClick={
      ()=>{
        props.AppStore.selectUser('Intro text')
        console.log("click")
      }
    }> Intro </div>
  )
})
