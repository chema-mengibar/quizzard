import React from "react";
import ReactDOM from "react-dom";

import {GlobalStyles} from './styles/global.styles'
import Context, { ContextProvider } from './helpers/contexts/App.context'
import RepositoryContext, { RepositoryContextProvider } from './helpers/contexts/Repository.context'
import {GridHeader, GridPanel} from './components/grid/grid'
import {Col} from './components/col/col'


const App = ( props ) => {

  const atomicTypes = ['atom','molecule','organism','page']

  return (
    <>
      <GlobalStyles />
      <GridHeader>
        Menu
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
    <ContextProvider>
      <App />
    </ContextProvider>
  </RepositoryContextProvider>,
  document.getElementById("app")
);