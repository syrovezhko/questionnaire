import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/questions';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu';
  }
  html {
    font-size: 10px;
  }
`;

const sizes = {
  desktop: '1280px',
  tablet: '1024px',
  mobile: '425px'
};

const theme = {
  colors: {
    grayBlack: '#010101',
    greyDark1: '#0A0A0A',
    greyDark2: '#0E0E0E',
    greyDark3: '#161616',
    greyDark4: '#2B2B2B',
    greyWhite: '#FFF',
    greyLight: '#CDCDCD',
    greyMedium: '#5F5F5F',
    glassLight: 'rgba(255, 255, 255, 0.05)',
    glassMedium: 'rgba(28, 28, 28, 0.50)',
    glassDark: 'rgba(16, 16, 16, 0.90)',
    inputGradient: `linear-gradient(180deg, #1C1C1C 0%, #1C1C1C 100%)`,
    disabledNoHovered: 'rgba(255, 255, 255, 0.20)',
    success: '#6DB95A',
    error: '#DD5E5E'
  },
  media: {
    tablet: `(max-width: ${sizes.tablet}) and (min-width: ${sizes.mobile})`,
    mobile: `(max-width: ${sizes.mobile})`
  },
  sizes: sizes
};

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
