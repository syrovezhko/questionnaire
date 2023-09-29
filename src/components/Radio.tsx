import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import Text from './Text';

const RadioBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Radio = (props) => {
  return (
    <RadioBlock>
      <RadioButton {...props} />
      <Text type={'label'} {...props} />
    </RadioBlock>
  );
};

export default Radio;
