import React, { useContext } from "react";

import Config  from '../../helpers/config'
import Server from '../../helpers/server';
import AppContext from '../../helpers/contexts/App.context'
import RepositoryContext from '../../helpers/contexts/Repository.context'
import { getRepo, connectFromTo, getItemById, disconnecToFrom} from '../../helpers/repositoryService/repositoryService'
import {Button} from '../button/button.styles'

import IconCreate from '../icon/icon-create'
import IconConnect from '../icon/icon-connect'
import IconCut from '../icon/icon-cut'
import IconEcco from '../icon/icon-ecco'
import IconInfo from '../icon/icon-info'

import {
  MenuWrapper,
  Area, Block,
  Label, Value, Separator
} from './menu.styles'

export const Menu = (props) => {

  const { state, dispatch } = useContext( RepositoryContext )
  const { dispatchApp } = useContext( AppContext )

  function triggerUpdate(){
    dispatch({ type: "setPaintNodeConnections", payload: true })
    setTimeout(
      function() {
        dispatch({ type: "setPaintNodeConnections", payload: false })
      }
      .bind(this),
      500
    )
  }

  function saveData(){
    const data = getRepo()
    Server.sendData(data)
  } 

  function sendEcco( action ){
    const {fetchPromise, cleanup} = Server.sendEcco( action )
    fetchPromise.then(json =>{
      console.log(json)
    });
  } 

  return (
    <>
      <MenuWrapper>
        <Area>
          { Config.actions.save && 
            <Block>
              <Button  onClick={()=> { saveData() }} >
                Save
                <IconCreate color={'white'} size={15} />
              </Button>
            </Block> 
          }
          { Config.actions.connect && 
            <Block>
              <Label> From </Label>
              <Value
                onClick={ ()=>{
                  if( state.nodeIdFrom){
                    // this.blur(); // todo: button lose focus
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdFrom});
                    triggerUpdate()
                  }
                } }
              >
                {state.nodeIdFrom ? `${getItemById(state.nodeIdFrom).type.toUpperCase()}::${getItemById(state.nodeIdFrom).label}` : 'no-selected'}</Value>
              <Separator />
              <Label> To </Label>
              <Value
                onClick={ ()=>{
                  if( state.nodeIdTo){
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo})
                    triggerUpdate()
                  }
                }}
              >
                {state.nodeIdTo ? `${getItemById(state.nodeIdTo).type.toUpperCase()}::${getItemById(state.nodeIdTo).label}` : 'no-selected'}</Value>
              <Separator />
              <Button 
                onClick={()=> { 
                  if( state.nodeIdFrom && state.nodeIdTo && state.nodeIdFrom !== state.nodeIdTo ){
                    connectFromTo( state.nodeIdFrom, state.nodeIdTo )
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo});
                    triggerUpdate()
                  }
                  else{
                    console.log('Action not possible')
                  }
                }}
              >
                Connect <IconConnect size={15} />
              </Button>
              <Button 
                onClick={()=> { 
                  if( state.nodeIdFrom || state.nodeIdTo){
                    disconnecToFrom(  state.nodeIdTo , state.nodeIdFrom)
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo});
                    triggerUpdate()
                  }
                }}
              >
                Disconnect <IconCut size={15} />
              </Button>
              <Button dark onClick={()=> { dispatch({ type: "resetFromTo" }); }} > Clear </Button>
            </Block>
          }
        </Area>
        <Area>
          { Config.actions.ecco && 
            <Block>
              <Button onClick={()=> { sendEcco()}} >
                Send Ecco <IconEcco size={20} />
              </Button>
              <Button dark onClick={()=> { sendEcco('stop')}} >
                Stop Ecco
              </Button>
            </Block>
          }
          <Block>
            <Button small dark
              onClick={()=> {
                dispatchApp({ type: 'setDialogName' , payload: 'menuModal'}); 
                dispatchApp({ type: "openDialog"});
              }}
            >
              <IconInfo size={15}/>
            </Button>
          </Block>  
        </Area>
      </MenuWrapper>
    </>
  )
}