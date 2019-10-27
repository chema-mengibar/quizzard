import React from 'react'


const RepositoryContext = React.createContext()
console.log('init repo contxt')


let initialState = {
  changed: { flag:false, type:null },
  selectedNodeId: '',
  familyNodes: [],
};


let reducer = (state, action) => {
  switch (action.type) {
    case "change":
      console.log('change')
      return { ...state, changed: { flag:true, type: action.payload } };
    case "updated":
      console.log('updated')
      return { ...state, changed: { flag:false, type: null } };
    case "selectedNodeId":
      return initialState;
    case "setSelectedNodeId":
      return { ...state, selectedNodeId: action.payload };
    case "addToFamilyNodes":
      return { ...state, familyNodes: [ ...state.familyNodes , ...action.payload] };
    case "setFamilyNodes":
      return { ...state, familyNodes: action.payload };
  }
};


export const RepositoryContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <RepositoryContext.Provider value={value}>{props.children}</RepositoryContext.Provider>
  );
}


export const getContext = () => { return RepositoryContext }


export default RepositoryContext