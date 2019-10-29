import React, {useContext, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import {GlobalStyles} from './styles/global.styles'
import AppContext, { AppContextProvider } from './helpers/contexts/App.context'
import RepositoryContext, { RepositoryContextProvider } from './helpers/contexts/Repository.context'

import {GridHeader, GridPanel} from './components/grid/grid'
import {Menu} from './components/menu/menu'
import {Col} from './components/col/col'


const App = ( props ) => {

  const atomicTypes = ['atom','molecule','organism','page']

  return (
    <>
      <GlobalStyles />
      <GridHeader>
        <Menu />
      </GridHeader>
      <GridPanel>
        { 
          atomicTypes && atomicTypes.map( (atomicType, idx ) => (
            <Col 
              key={`col_${atomicType}_${idx}`} 
              atomicType={atomicType} 
            >
            </Col>
          ))
        }
      </GridPanel>
    </>
  )
}

ReactDOM.render( 
  <RepositoryContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </RepositoryContextProvider>,
  document.getElementById("app")
);