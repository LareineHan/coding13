import axios from 'axios';

const apibk = axios.create({
	baseURL: 'https://coding13bk.onrender.com/coding',
	headers: {
		'Content-Type': 'application/json',
	},
});

apibk.interceptors.request.use(
	function (config) {
		// Do something before request is sent

		return config;
	},
	function (error) {
		// Do something with request error

		return Promise.reject(error);
	}
);

// Add a response interceptor
apibk.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data

		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		console.log('res err', error);
		return Promise.reject(error);
	}
);

export default apibk;
