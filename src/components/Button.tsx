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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    text-decoration-line: line-through;
    text-decoration-thickness: 0.1rem;
  }
`;

const Secondary = styled(Primary)`
  background-color: ${(props) => props.theme.colors.greyDark2};
  color: ${(props) => props.theme.colors.greyWhite};
`;

const Tag = styled(Primary)`
  border: 0.2rem solid ${(props) => props.theme.colors.greyDark2};
  padding: 0.4rem 1.4rem;
  border-radius: 2.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.greyWhite};
  &:hover {
    background-color: ${(props) => props.theme.colors.greyDark2};
    text-decoration: none;
  }
  &:active {
    color: ${(props) => props.theme.colors.grayBlack};
    background-color: ${(props) => props.theme.colors.greyWhite};
    border-color: ${(props) => props.theme.colors.greyWhite};
  }
`;

const Button = (props) => {
  if (props.type === 'secondary')
    return (
      <Secondary>
        <Text type={'button'} {...props} />
      </Secondary>
    );
  else if (props.type === 'tag')
    return (
      <Tag>
        <Text type={'label'} {...props} />
      </Tag>
    );
  else
    return (
      <Primary>
        <Text type={'button'} {...props} />
      </Primary>
    );
};

export default Button;
