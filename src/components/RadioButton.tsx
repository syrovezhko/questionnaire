import React from 'react';
import styled from 'styled-components';

const RadioOff = styled.input`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.6rem solid ${(props) => props.theme.colors.greyDark2};
  appearance: none;
  border-radius: 50%;
  background-color: transparent;

  &:checked {
    border-width: 0.1rem;
    padding: 5px;
    fill: #0f0f0f;
    stroke-width: 1px;
    stroke: rgba(35, 35, 35, 0.56);
    box-shadow: 0px 5px 5px 0px #000 inset;
    filter: drop-shadow(0px 3px 8px rgba(255, 255, 255, 0.03));
    background-color: ${(props) => props.theme.colors.inputGradient};
  }
  &:checked::before {
    content: '';
    background-color: ${(props) => props.theme.colors.greyWhite};
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

const RadioButton = (props) => {
  return <RadioOff type="radio" id={`radio_${props.id}`} value={`radio_${props.id}`}></RadioOff>;
};

export default RadioButton;
