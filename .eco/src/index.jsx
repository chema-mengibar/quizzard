import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import {GlobalStyles} from './styles/global.styles'
import AppContext, { AppContextProvider } from './helpers/contexts/App.context'
import RepositoryContext, { RepositoryContextProvider } from './helpers/contexts/Repository.context'

import {setRepo} from './helpers/repositoryService/repositoryService'
import {GridHeader, GridPanel} from './components/grid/grid'
import {Menu} from './components/menu/menu'
import {Col} from './components/col/col'
import {Keys} from './components/keys/keys'


const App = ( props ) => {

  const atomicTypes = ['atom','molecule','organism','page']

  const [init, setInit] = useState( false );

  useEffect(() => {

    const abortController = new AbortController()
    const signal = abortController.signal
    // https://medium.com/@selvaganesh93/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7

    fetch('http://localhost:80/repo', {signal: signal}) // todo:server
    .then(res => res.json())
    .then(json =>{
      console.log( json )
      setRepo(json)
      setInit(true)
    });

    return function cleanup(){
      abortController.abort()
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <GridHeader>
        <Menu />
      </GridHeader>
      <GridPanel>
        { 
          init && atomicTypes && atomicTypes.map( (atomicType, idx ) => (
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
      <Keys />
    </AppContextProvider>
  </RepositoryContextProvider>,
  document.getElementById("app")
);