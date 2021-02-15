import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.btnText}</StyledButton>
}

export default Button

const StyledButton = styled.a`
  text-decoration: none;
  padding: 8px 30px;
  color: white;
  background: #ea4c88;
  position: relative;

  :before {
    position: absolute;
    content: '';
    border: 0.3px solid rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 100%;
    left: -1px;
    bottom: -1px;
  }

  :hover:before {
    border: 1px solid #ea4c88;
    transition: 0.3s cubic-bezier(0.21, 0.61, 0.35, 1);
    transform: scale(1.05, 1.2);
  }

  :active:before {
    border: 1px solid #ea4c88;
    transition: 0.3s cubic-bezier(0.21, 0.61, 0.35, 1);
    transform: scale(1.1, 1.5);
  }
`
