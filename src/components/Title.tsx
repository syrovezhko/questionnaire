import React from 'react';
import styled from 'styled-components';

const FirstTitle = styled.h2`
  font-family: Ubuntu;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4rem;
`;

const SecondTitle = styled(FirstTitle)`
  font-size: 3rem;
  line-height: 3;
  line-height: 3.2rem;
`;

const ThirdTitle = styled(FirstTitle)`
  font-size: 2.4rem;
  line-height: 2.4rem;
`;

const FourthTitle = styled(ThirdTitle)`
  font-size: 2rem;
`;

const FifthTitle = styled(ThirdTitle)`
  font-size: 1.8rem;
`;

const Title = (props) => {
  if (props.type === 'h2') return <SecondTitle {...props} />;
  else if (props.type === 'h3') return <ThirdTitle {...props} />;
  else if (props.type === 'h4') return <FourthTitle {...props} />;
  else if (props.type === 'h5') return <FifthTitle {...props} />;
  else return <FirstTitle {...props} />;
};

export default Title;
