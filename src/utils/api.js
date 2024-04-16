import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: 'https://apartments-com1.p.rapidapi.com',
  headers: {
		Accept: 'application/json',
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'apartments-com1.p.rapidapi.com',
	},
})

api.interceptors.request.use(function (config) {
  // Do something before request is sent

  return config;
}, function (error) {
  // Do something with request error

  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log('res err',error)
  return Promise.reject(error);
});

export default api;