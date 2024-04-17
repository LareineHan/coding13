import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const SearchBar = () => {
	const scriptRef = useRef(null);

	useEffect(() => {
		const initializeAutocomplete = () => {
			const input = document.getElementById('autocomplete_search');
			const autocomplete = new window.google.maps.places.Autocomplete(input);

			autocomplete.addListener('place_changed', () => {
				const place = autocomplete.getPlace();
				if (!place.geometry || !place.geometry.location) {
					console.error('Invalid place geometry');
					return;
				}
				console.log('Place:', place); // Log the place object
				console.log('Selected Place:', place.name); // Log the selected place name
				document.getElementById('lat').value = place.geometry.location.lat();
				document.getElementById('long').value = place.geometry.location.lng();
			});

			// Log input value on change
			input.addEventListener('input', () => {
				console.log('Input value:', input.value);
			});
		};

		if (window.google && window.google.maps) {
			initializeAutocomplete();
		} else {
			// Load the Google Maps API script
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
			script.onload = initializeAutocomplete;
			scriptRef.current = script;
			document.head.appendChild(script);
		}

		return () => {
			// Clean up the Google Maps API script
			if (scriptRef.current) {
				document.head.removeChild(scriptRef.current);
			}
		};
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const input = document.getElementById('autocomplete_search');
		const autocomplete = new window.google.maps.places.Autocomplete(input);
		const place = autocomplete.getPlace();
		if (!place.geometry || !place.geometry.location) {
			console.error('Invalid place geometry');
			return;
		}
	};

	return (
		<div id='custom-search-input'>
			<Form.Group
				className='input-group'
				onSubmit={handleSubmit}
				id='autocomplete'>
				<input
					id='autocomplete_search'
					name='autocomplete_search'
					type='text'
					className='form-control'
					placeholder='Search'
				/>
				<input type='hidden' id='lat' name='lat' />
				<input type='hidden' id='long' name='long' />
				<span className='input-group-btn'>
					<button
						className='btn btn-info'
						type='submit'
						style={{ display: 'none' }}>
						<i className='glyphicon glyphicon-search'></i>
					</button>
				</span>
			</Form.Group>
		</div>
	);
};

export default SearchBar;
