import '@googlemaps/extended-component-library/place_picker.js';
import React from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const SearchBar = () => {
	return (
		<div>
			<gmpx-api-loader key={API_KEY}></gmpx-api-loader>
			<gmpx-place-picker
				id='place-picker'
				placeholder='Enter city name'
				types='(cities)'
				exclude-types='establishment,geocode,(regions)'
				solution-channel='GMP_DOCS_placepicker_v1'></gmpx-place-picker>
		</div>
	);
};

export default SearchBar;
