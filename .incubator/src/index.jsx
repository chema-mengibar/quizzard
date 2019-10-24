import React from "react";
import ReactDOM from "react-dom";

import {GlobalStyles} from './styles/global.styles'

import Context, { ContextProvider } from './Context'

import {GridHeader, GridPanel} from './components/grid/grid'
import {Col} from './components/col/col'
import Repo from './repository.mocks'

const App = ( props ) => {

  const atomicTypes = ['atom','molecule','organism','page']

  return (
    <>
      <GlobalStyles />
      <GridHeader>

      </GridHeader>
      <GridPanel>
        { 
          atomicTypes && atomicTypes.map( (atomicType, idx ) => {
            const filteredItems = Repo.items.filter( item => item.type === atomicType)
            return (
              <Col key={`col_${atomicType}_${idx}`} atomicType={atomicType} items={ filteredItems }>
            </Col>
          )})
        }
      </GridPanel>
    </>
  )
}


ReactDOM.render( 
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("app")
);