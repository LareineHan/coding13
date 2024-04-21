import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const GOOGLE_CLIENTID = process.env.REACT_APP_GOOGLE_CLIENTID;
console.log('GOOGLE_CLIENTID:', GOOGLE_CLIENTID);
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
	<GoogleOAuthProvider clientId={GOOGLE_CLIENTID}>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<App />
					<ReactQueryDevtools
						initialIsOpen={false}
						buttonPosition='bottom-right'
					/>
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
	</GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
