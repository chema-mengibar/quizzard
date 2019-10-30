// import RepoMock from './repository.mocks'

export let repository = {}

function generateId( _type ){
  const prefix = 'node-' //_type
  const counter = new Date().getTime()
  const newId = `${prefix}${counter}`
  return newId
}

export function getItemById( id ){
  const foundItemList = repository.items.filter( (item)=> item.id == id )
  return foundItemList.length ? foundItemList[0] : null
}

export const addItem = ( _type, _label, _dispatch) => {
  const newItem = {
    type: _type,
    label: _label,
    id: generateId( _type )
  }
  repository.items.push(newItem)
  return newItem.id
}

export const getRepo = () =>{
  return repository
}

export const setRepo = ( repo) =>{
  repository = {...repo}
}

export function getChildren( id ){
  const treeItemList = repository.tree.filter( (item)=> item.id == id )
  return treeItemList.length && treeItemList[0].children ? treeItemList[0].children : []
}

export function getParents( id ){
  const otherNodes = repository.tree.filter( (item)=> { 
    return ( item.id != id ) && ( item.children && item.children.indexOf(id) > -1 )
  } )
  const parents = otherNodes.map(element => element.id);
  return parents.length  ? parents : []
}


export function connectFromTo( fromNode, toNode){

  let found = false
  repository.tree.forEach(element => {
    if( element.id === toNode ){
      found = true
      if( element.children ){
        element.children.push( fromNode )
      }
      else{
        element.children = [fromNode]
      }
    }
  });

  if(!found){
    const newConnection = {
      id: toNode,
      children:[ fromNode ]
    }
    repository.tree.push( newConnection )
  }

}


/*
import {getItemById, getChildren} from '../../helpers/repositoryService/repositoryService'

*/