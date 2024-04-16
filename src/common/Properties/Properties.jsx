import React, { useEffect } from 'react';
import './Properties.style.css';
import { Spinner } from 'react-bootstrap';
import { useGetPropertiesQuery } from '../../hooks/useGetProperties';
import { useDispatch } from 'react-redux';
import { addMapMarkers } from '../../redux/reducers/getMapMarkersSlice';

const Properties = ({ props }) => {
	const { data, isLoading, isError } = useGetPropertiesQuery(props);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			console.log('data', data);
			dispatch(addMapMarkers(data?.data));
		}
	}, [data, dispatch]);

	if (isLoading) {
		return <Spinner animation='border' />;
	}
	if (isError) {
		return <div>Error: {isError.message}</div>;
	}

	const listing = data?.data?.map((property) => (
		<div key={property.id}>
			<ul className='listing-ul'>
				{property.name}
				<li>{property.rentRange}</li>
				<li>{property.bedRange}</li>
				<li>{property.address.fullAddress}</li>
				<li>{property.address.postalCode}</li>
				<li>{property.address.latitude}</li>
				<li>{property.address.longitude}</li>
			</ul>
		</div>
	));
	return <div className='listing'>{listing}</div>;
};

export default Properties;
