import React from 'react';


const text_skins = {
  'text_base': 'color:red;font-size:20px;'
}



const Skins = props => {
  return(
    {...{...text_skins}}
  )
};

export default Skins();