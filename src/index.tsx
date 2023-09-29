import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/questions';
import { createGlobalStyle } from 'styled-components';

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

render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById('root')
);
