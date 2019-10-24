import styled from 'styled-components'

export const NodeWrapper = styled.div`
  height:15px; //@todo: resize
  background-color: gold;
  margin-bottom: 5px; //@todo: resize
  display:flex;
  justify-content: space-between;
` ;

export const Conector = styled.div`
  background-color: ${ props => (props.on ? 'white' : 'black')};
  width: 15px;
  height:100%;
` ;