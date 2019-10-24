import React from 'react'

const Context = React.createContext()

let initialState = {
  name: '',
};

let reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return initialState;
    case "empty":
      return { ...state, name: state.name = ''};
    case "rename":
      return { ...state, name: action.payload };
  }
};


export const ContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}

export const getContext = () => { return Context }

export default Context

// https://dev.to/email2vimalraj/react-hooks-lift-up--pass-down-state-using-usecontext-and-usereducer-5ai0
// https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68
