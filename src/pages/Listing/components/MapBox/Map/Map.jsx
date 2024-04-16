import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useSelector } from 'react-redux';
import './Map.style.css';
//import SearchBar from '../../../../common/SearchBar/SearchBar';
//import Properties from '../../../../common/Properties/Properties';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const loader = new Loader({
	apiKey: API_KEY,
	version: 'weekly',
	libraries: ['places'],
	suppressDeprecationWarnings: true,
});

const Map = () => {
	const markers = useSelector((state) => state.mapMarkers?.markers);

	useEffect(() => {
		console.log('markers', markers);
		console.log(loader);

		if (!markers || markers.length === 0) {
			return; // Exit early if markers is undefined or empty
		}

		const centerLat = markers[0]?.[0]?.lat;
		const centerLng = markers[0]?.[0]?.lng;

		console.log('Center Coordinates:', centerLat, centerLng);

		const initMap = async () => {
			try {
				console.log('Google Maps API loading...');
				await loader.load();

				const map = new window.google.maps.Map(document.getElementById('map'), {
					zoom: 11,
					center: { lat: centerLat, lng: centerLng },
				});
				console.log('map', map);
				const infoWindow = new window.google.maps.InfoWindow();

				markers?.forEach(([position, title], i) => {
					console.log('Creating Marker:', title, position);
					const marker = new window.google.maps.Marker({
						position,
						map,
						title: `${i + 1}. ${title}`,
						label: `${i + 1}`,
						optimized: false,
					});

					marker?.addListener('click', () => {
						infoWindow.close();
						infoWindow.setContent(marker.getTitle());
						infoWindow.open(marker.getMap(), marker);
						alert('marker works!!!!');
						console.log(`marker ${title} clicked`);
					});
				});
			} catch (error) {
				console.error('Error loading Google Maps API:', error);
			}
		};
		initMap();
		console.log('markers', markers);
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
