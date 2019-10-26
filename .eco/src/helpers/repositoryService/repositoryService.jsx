import Repo from './repository.mocks'

export const repository = {...Repo}

function generateId( _type ){
  const prefix = _type
  const counter = 999
  const newId = `${prefix}${counter}`
  return newId
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