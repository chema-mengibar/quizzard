import styled, { css } from "styled-components";
import Colors from "../../../styles/colors.styles";

export interface InputProps {
  id?: string;
  type: string;
  hasError?: boolean;
}

const errorCss = css`
  border: 1px solid ${Colors.black};
`;

export default styled.input<InputProps>`
  color: gray;

  ${(props: any): any => props.hasError && errorCss}
`;
