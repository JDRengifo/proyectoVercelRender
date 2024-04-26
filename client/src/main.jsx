import React from 'react';
import {GoogleOAuthProvider} from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='106011302877-6l166kutgfvvgg4j6ip5qumncv7avtqg.apps.googleusercontent.com'>
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  </BrowserRouter>
  </GoogleOAuthProvider>
)
