import React from 'react'
import { inject } from 'mobx-react';

export default inject('AppStore')((props) =>{
  return (
    <div> Intro </div>
  )
})
