import React from 'react';
import '@googlemaps/extended-component-library/place_picker.js';
const SearchBar = () => {
	const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

	return (
		<div>
			<gmpx-api-loader api-key={API_KEY}></gmpx-api-loader>
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
