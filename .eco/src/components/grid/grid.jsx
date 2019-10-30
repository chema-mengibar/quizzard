import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const GridHeader = styled.div`
  height: 40px;
  border-bottom: 1px solid ${theme.decoration};
  position:fixed;
`

export const GridPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 39px;
`

