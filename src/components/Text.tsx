import React from 'react';
import styled from 'styled-components';

const GeneralText = styled.p`
  font-family: Ubuntu;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  height: 100%;
  color: ${(props) => props.theme.colors.greyLight};
`;

const SmallText = styled(GeneralText)`
  font-size: 1rem;
`;

const LargeText = styled(GeneralText)`
  font-size: 1.4rem;
`;

const Text = (props) => {
  if (props.type === 'small') return <SmallText {...props} />;
  else if (props.type === 'large') return <LargeText {...props} />;
  else return <GeneralText {...props} />;
};

export default Text;
