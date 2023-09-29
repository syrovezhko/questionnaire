import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const Primary = styled.button`
  background-color: ${(props) => props.theme.colors.greyWhite};
  height: 100%;
  padding: 1rem 2.8rem;
  border: none;
  border-radius: 3rem;
  color: ${(props) => props.theme.colors.greyBlack};
  /* color: ${(props) => props.color}; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration-line: line-through;
    text-decoration-thickness: 0.1rem;
  }
`;

const Secondary = styled(Primary)`
  background-color: ${(props) => props.theme.colors.greyDark2};
  color: ${(props) => props.theme.colors.greyWhite};
`;

const Button = (props) => {
  if(props.type === 'secondary') return (
    <Secondary>
      <Text type={'button'} {...props} />
    </Secondary>
  )
  else return (
    <Primary>
      <Text type={'button'} {...props} />
    </Primary>
  )
};

export default Button;
