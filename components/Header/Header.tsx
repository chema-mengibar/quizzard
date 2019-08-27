import React from 'react'
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

const Header = inject('AppStore')((props) => {

  const Menu = ['game','intro','ranking','menu'];

  return (
    <div>
      {props.AppStore.user}
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
  });

export default Header;