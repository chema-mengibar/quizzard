import React from 'react'


const AppContext = React.createContext()


let initialState = {
  name: '',
  dialogIsOpen: false,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return initialState;
    case "empty":
      return { ...state, name: state.name = ''};
    case "rename":
      return { ...state, name: action.payload };
    case "openDialog":
      return { ...state, dialogIsOpen: true };
    case "closeDialog":
      return { ...state, dialogIsOpen: false };
  }
};


export const AppContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { stateApp: state, dispatchApp: dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}


export const getAppContext = () => { return AppContext }


export default AppContext
