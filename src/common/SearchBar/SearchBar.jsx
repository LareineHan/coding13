import React, { useEffect, useState, useRef } from 'react';
import './SearchBar.style.css';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addSearchPlace } from '../../redux/reducers/getSearchPlaceSlice';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const SearchBar = () => {
	const scriptRef = useRef(null);
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');

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
				dispatch(addSearchPlace(place));
				console.log('Place:', place); // Log the place object
				console.log('Selected Place:', place.name); // Log the selected place name
				document.getElementById('lat').value = place.geometry.location.lat();
				document.getElementById('long').value = place.geometry.location.lng();
				setInputValue(''); // Reset input value
			});

			// Log input value on change
			input.addEventListener('input', () => {
				console.log('Input value:', input.value);
				setInputValue(input.value); // Update input value in state
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
	}, [dispatch]);

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
		<div className='primary-search-bar'>
			<div id='custom-search-input'>
				<Form.Group
					className='input-group'
					onSubmit={handleSubmit}
					id='autocomplete'>
					<input
						id='autocomplete_search'
						name='autocomplete_search'
						type='text'
						className='form-control search-form-control'
						placeholder='Search City Name'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<input type='hidden' id='lat' name='lat' />
					<input type='hidden' id='long' name='long' />
					<span className='input-group-btn'>
						<Button
							className='btn btn-light'
							type='submit'
							style={{ display: 'block' }}>
							<FontAwesomeIcon icon={faSearch} />
						</Button>
					</span>
				</Form.Group>
			</div>
		</div>
	);
};

export default SearchBar;
