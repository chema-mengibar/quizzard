import Repo from './repository.mocks'

export const repository = {...Repo}

function generateId( _type ){
  const prefix = _type
  const counter = 999
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
}

export const getRepo = () =>{
  return repository
}


export function getChildren( id ){
  const treeItemList = repository.tree.filter( (item)=> item.id == id )
  return treeItemList.length && treeItemList[0].children ? treeItemList[0].children : []
}


/*
import {getItemById, getChildren} from '../../helpers/repositoryService/repositoryService'

*/