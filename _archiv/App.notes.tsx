import React from 'react'

// export default () =>{
//   return (
//     <div> App</div>
//   )
// }

type ComponentAProps = {
  header: string
};

interface CardProps {
  Title: string
}
 const App: React.FC<ComponentAProps> = (props) => {
  return (
      <div> App </div>
  )
}

export default App;