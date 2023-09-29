import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.grayBlack};
  color: ${(props) => props.theme.colors.greyWhite};
  display: flex;
  justify-content: center;
`;

const App = () => {
  return <AppWrapper>
  </AppWrapper>;
};

export default App;
