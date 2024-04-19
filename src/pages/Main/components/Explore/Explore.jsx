import React, { useEffect, useState } from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';
import './Explore.style.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '@googlemaps/js-api-loader';
import {
	addUserLocation,
	toggleShowUserLocation,
} from '../../../../redux/reducers/getUserLocationSlice';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const loader = new Loader({
	apiKey: API_KEY,
	version: 'weekly',
	libraries: ['places'],
	suppressDeprecationWarnings: true,
});

const Explore = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userCity, setUserCity] = useState('New York');
	// const userLocation = useSelector((state) => state.userLocation.userLocation);
	// console.log('userLocation', userLocation);

	// useEffect(() => {
	// 	const initMap = async () => {
	// 		try {
	// 			await loader.load();
	// 			if (navigator.geolocation) {
	// 				navigator.geolocation.getCurrentPosition(async (position) => {
	// 					const { latitude, longitude } = position.coords;

	// 					// Make a reverse geocoding request
	// 					const response = await fetch(
	// 						`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
	// 					);
	// 					const data = await response.json();

	// 					// Check if the user is in the USA
	// 					const usResults = data?.results?.filter((result) => {
	// 						return (
	// 							result.plus_code &&
	// 							result.plus_code.compound_code.includes('US')
	// 						);
	// 					});

	// 					// Set the default city based on the user's location
	// 					let defaultCity = 'New York';
	// 					if (usResults.length === 0) {
	// 						defaultCity = 'New York';
	// 					}

	// 					// Extract the city name from the response
	// 					const city =
	// 						data?.results[0]?.address_components.find((component) =>
	// 							component.types.includes('locality')
	// 						)?.long_name || defaultCity;
	// 					setUserCity(city);
	// 					dispatch(addUserLocation(city));
	// 					console.log('City:', city);
	// 				});
	// 			}
	// 		} catch (error) {
	// 			console.error('Error loading Google Maps API:', error);
	// 		}
	// 	};

	// 	initMap();
	// }, [userLocation, dispatch]);

	const searchParams = {
		location: userCity,
		minRent: '1000',
		maxRent: '8000',
		page: '1',
		sort: 'default',
		// Add other params here
	};
	const viewMore = () => {
		navigate(`/properties?q=${userCity}`);
	};
	return (
		<div className='explore-container'>
			<h2>Explore Rentals in {userCity}</h2>
			<div
				className='explore-cards'
				style={{ display: 'flex', flexDirection: 'column' }}>
				<ExploreCard props={searchParams} />
			</div>
			<Button
				variant='success'
				className='explore-more-btn'
				onClick={(e) => viewMore()}>
				View More
			</Button>
		</div>
	);
};

export default Explore;
