import React, {ReactElement} from 'react'
// import { inject, observer } from 'mobx-react';
// import Link from 'next/link';

import {
 	{{> MyName }}Styled,
} from "./{{> my-name }}.styles";


export interface {{> MyName }}Props {
  AppStore?: object,
  id?: string;
}


const {{> MyName }} = (props:{{> MyName }}Props): ReactElement => {
  return (
    <{{> MyName }}Styled>

      Id: {props.id}
      // {props.AppStore.getUser }

    </{{> MyName }}Styled>
  )
 };

export default {{> MyName }}
//export default inject('AppStore')(observer({{> MyName }}))