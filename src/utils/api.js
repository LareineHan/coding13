import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
	baseURL: 'https://apartments-com1.p.rapidapi.com',
	headers: {
		Accept: 'application/json',
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'apartments-com1.p.rapidapi.com',
	},
	mode: 'cors',
});

export default api;
