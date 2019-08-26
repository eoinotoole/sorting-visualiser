import * as React from "react";
import styled from "styled-components";
import { themeVariable } from "./style/helpers";

interface ButtonProps {
  text: string;
  colour: string;
  onClick: any;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  colour,
  onClick
}) => (
  <Btn colour={colour} onClick={onClick}>
    {text}
  </Btn>
);

export default Button;

interface BtnProps {
  colour: string;
}

const Btn = styled.button<BtnProps>`
  min-width: 7rem;
  padding: var(--space-sm) var(--space-md);
  color: #fff;
  border: none;
  border-radius: 3px;
  outline: none;
  background: ${props =>
    props.colour
      ? themeVariable("colours", props.colour)
      : themeVariable("colours", "magenta")};
  box-shadow: none;
  cursor: pointer;
`;
