import React, { useEffect, useState } from 'react';
import { useGetPropertiesQuery } from '../../../../hooks/useGetProperties';
import { useDispatch } from 'react-redux';
import { addMapMarkers } from '../../../../redux/reducers/getMapMarkersSlice';
import Map from './Map/Map';

const MapBox = ({ props }) => {
	const { data, isLoading, isError } = useGetPropertiesQuery(props);
	const dispatch = useDispatch();
	const [dispatchCompleted, setDispatchCompleted] = useState(false);
	console.log('Mapbox loading?');
	useEffect(() => {
		if (data) {
			console.log('data', data);
			dispatch(addMapMarkers(data?.data))
				.then(() => setDispatchCompleted(true))
				.catch((error) => {
					console.error('Error adding map markers:', error);
					setDispatchCompleted(true); // Set completed even on error
				});
		} else {
			console.log('No data received!');
		}
	}, [data, dispatch]);

	return <>{dispatchCompleted && <Map />}</>;
};

export default MapBox;
