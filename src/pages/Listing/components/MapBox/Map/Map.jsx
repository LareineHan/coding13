import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useSelector, useDispatch } from 'react-redux';
import './Map.style.css';
import { Spinner } from 'react-bootstrap';
import {
	addUserLocation,
	toggleShowUserLocation,
} from '../../../../../redux/reducers/getUserLocationSlice';
import { addSearchPlace } from '../../../../../redux/reducers/getSearchPlaceSlice';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const loader = new Loader({
	apiKey: API_KEY,
	version: 'weekly',
	libraries: ['places'],
	suppressDeprecationWarnings: true,
});

const Map = () => {
	const dispatch = useDispatch();
	const [userCity, setUserCity] = useState(null);
	const markers = useSelector((state) => state.mapMarkers?.markers);

	useEffect(() => {
		if (!markers || markers.length === 0) {
			return; // Exit early if markers is undefined or empty
		}
		const centerLat = markers[0]?.[0]?.lat;
		const centerLng = markers[0]?.[0]?.lng;

		const initMap = async () => {
			try {
				await loader.load();
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(async (position) => {
						const { latitude, longitude } = position.coords;
						//console.log('Latitude:', latitude, 'Longitude:', longitude);

						// Make a reverse geocoding request
						const response = await fetch(
							`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
						);
						const data = await response.json();
						console.log('Reverse Geocoding Result:', data);
						// Check if the user is in the USA
						const usResults = data?.results?.filter((result) => {
							return (
								result.plus_code &&
								result.plus_code.compound_code.includes('US')
							);
						});
						//console.log('Filtered US Results:', usResults);

						// Set the default city based on the user's location
						let defaultCity = 'New York';
						if (usResults.length === 0) {
							defaultCity = 'New York';
						}

						// Extract the city name from the response
						const city =
							data?.results[0]?.address_components.find((component) =>
								component.types.includes('locality')
							)?.long_name || defaultCity;
						setUserCity(city);
						dispatch(addUserLocation(city));
						//console.log('City:', city, 'User City:', userCity);
					});
				}

				const map = new window.google.maps.Map(document.getElementById('map'), {
					zoom: 12,
					center: { lat: centerLat, lng: centerLng },
				});

				const infoWindow = new window.google.maps.InfoWindow();

				markers?.forEach(([position, title], i) => {
					const marker = new window.google.maps.Marker({
						position,
						map,
						icon: {
							path: window.google.maps.SymbolPath.CIRCLE,
							scale: 10, // marker size
							fillColor: 'rgb(251, 0, 125)', // color of the marker
							fillOpacity: 1, // opacity of the marker
							strokeWeight: 0, // border thickness of the marker
						},
						title: `${i + 1}. ${title}`,
						label: `${i + 1}`,
						optimized: false,
					});

					marker?.addListener('click', () => {
						infoWindow.close();
						infoWindow.setContent(marker.getTitle());
						infoWindow.open(marker.getMap(), marker);
						console.log(`Marker ${title} clicked`);
					});
					marker.addListener('mouseover', () => {
						marker.setIcon({
							path: window.google.maps.SymbolPath.CIRCLE,
							scale: 10, // marker size

							fillColor: '#00BF67', // color of the marker on hover
							fillOpacity: 1, // opacity of the marker on hover
							strokeWeight: 0, // border thickness of the marker on hover
						});
					});

					// Add event listener for mouseout
					marker.addListener('mouseout', () => {
						marker.setIcon({
							path: window.google.maps.SymbolPath.CIRCLE,
							scale: 10, // marker size
							fillColor: '#00BF67', // color of the marker
							fillOpacity: 1, // opacity of the marker
							strokeWeight: 0, // border thickness of the marker
						});
					});
				});

				const locationButton = document.createElement('button');
				locationButton.textContent = 'Pan to Current Location';
				locationButton.classList.add('custom-map-control-button');
				map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
					locationButton
				);
				locationButton.addEventListener('click', () => {
					dispatch(toggleShowUserLocation(true));
					dispatch(addSearchPlace(null));
				});
			} catch (error) {
				console.error('Error loading Google Maps API:', error);
			}
		};

		initMap();
	}, [markers]);

	return (
		<>
			<div
				className='google-map'
				id='map'
				style={{
					width: '100%',
					height: '100vh',
				}}></div>
		</>
	);
};

export default Map;
