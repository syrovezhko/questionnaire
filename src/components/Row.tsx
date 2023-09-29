import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.sizes.desktop};
  height: 100%;
  padding: 0rem 5rem;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  flex-shrink: 0;
  border: 1px solid red;
  @media ${(props) => props.theme.media.mobile} {
    border: 1px solid green;
  }
  @media ${(props) => props.theme.media.tablet} {
    border: 1px solid yellow;
  }
`;

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
