import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: #3D79F2;
  transition: background-color .3s ease;
  
  &:hover {
    background-color: #5e8de9;
  }
  
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const Button = (props) => {
    return <StyledButton {...props}/>
}

export default Button;