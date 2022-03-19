import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import ImagesRender from './displayPics/ImagesRender';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => ImagesRender()
);
