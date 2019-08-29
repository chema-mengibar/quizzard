import React from 'react'
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

const Header = (props) => {

  const Menu = ['game','intro','ranking','menu'];



  return (
    <div>
      {props.AppStore.getUser}


      <ul>
        {
          Menu && Menu.length &&
          Menu.map((item, idx)=>{
            return(
              <li key={'menu_' + idx }>
                <Link href={'/'+ item}>
                  <a>{item}</a>
                </Link>
              </li>
            )
          })
        }
        
      </ul>
      
    </div>
  )
  };

  export default inject('AppStore')(observer(Header))
  // export default inject('AppStore')(observer(Header))