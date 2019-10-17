import styled, { css } from "styled-components";
import media from '../../../style/media.style';

import { {{> MyName }}Props } from ".";

const {{> MyName }}Styled = styled.div<{{> MyName }}Props>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;

/*

  @media ${media.md} {
    background-color: green;
  }

*/