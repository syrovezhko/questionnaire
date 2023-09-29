import React from 'react';
import styled from 'styled-components';

const GeneralText = styled.p`
  font-family: Ubuntu;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  height: 100%;
  color: ${(props) => props.color};
`;

const SmallText = styled(GeneralText)`
  font-size: 1rem;
`;

const LargeText = styled(GeneralText)`
  font-size: 1.4rem;
`;

const LabelText = styled(GeneralText)`
  font-size: 0.9rem;
  letter-spacing: 0.189rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const ButtonText = styled(LabelText)`
  font-size: 1rem;
  letter-spacing: 0.21rem;
`;

const Text = (props) => {
  if (props.type === 'small') return <SmallText {...props} />;
  else if (props.type === 'large') return <LargeText {...props} />;
  else if (props.type === 'label') return <LabelText {...props} />;
  else if (props.type === 'button') return <ButtonText {...props} />;
  else return <GeneralText {...props} />;
};

export default Text;
