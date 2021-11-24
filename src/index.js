// Importation de module react-redux
import { Provider } from 'react-redux';
// Importation de fichier store
import store from './redux/store';
import React from 'react';
import App from './App'
import ReactDOM from 'react-dom';

ReactDOM.render(
 <Provider store={store}>
 <React.StrictMode>
    <App />
 </React.StrictMode>
 </Provider>,
 document.getElementById('root'));