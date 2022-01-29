import React from 'react';
import ReactDOM from 'react-dom';
import '/src/style/index.css';
// import { App } from './views/App';
import { App2 } from './views/App2';
import reportWebVitals from '../modules/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
