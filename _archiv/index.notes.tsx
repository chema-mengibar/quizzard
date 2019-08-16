import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';



// if (typeof window !== 'undefined') {
//     ReactDOM.render(<App/>, document.getElementById("root"));
// }


export default class extends React.Component {
  render() {
    return (
      <App/>
    )
  }
}






// if (typeof document === "undefined") {
//   module.exports = Index;
// } else {
//   ReactDOM.hydrate(Index, document.getElementById('root'));
// }



// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from 'store/reducer.store'

// const store = createStore( 
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// React.render(
//   <>
//     <App />
//   </>,
//   document.getElementById('root')
// );

// if (typeof window !== 'undefined') {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }

// interface CardProps {
//   Title: string
//   Image: string
//   Body: string
// }
// export const Index: React.FC<CardProps> = (props) => {
//   return (
//       <div />
//   )
// }