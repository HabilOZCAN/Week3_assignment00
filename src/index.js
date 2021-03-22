import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//hazirlanan yapi burda import edilerek render edilmesi saglanmistir
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
