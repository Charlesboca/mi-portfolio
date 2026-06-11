import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
 

import './styles/global.css'; // Si tienes un archivo de estilos, impórtalo aquí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);