import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Provider } from 'react-redux';
import store from './redux/store';
const GOOGLE_CLIENTID = process.env.REACT_APP_GOOGLE_CLIENTID
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(GOOGLE_CLIENTID,'gg')
root.render(
<GoogleOAuthProvider clientId={GOOGLE_CLIENTID}>
	<Provider store={store}>
	
			<BrowserRouter>
				<App />
				
			</BrowserRouter>
		
	</Provider>
  </GoogleOAuthProvider>
 
);