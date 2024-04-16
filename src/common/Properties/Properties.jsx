import React from 'react';
import './Properties.style.css';
import { Spinner } from 'react-bootstrap';
import { useGetPropertiesQuery } from '../../hooks/useGetProperties';
import { useNavigate } from 'react-router-dom';

const Properties = ({ props }) => {
	const { data, isLoading, isError } = useGetPropertiesQuery(props);
	const navigate = useNavigate();

	if (isLoading) {
		return <Spinner animation='border' />;
	}
	if (isError) {
		return <div>Error: {isError.message}</div>;
	}

	const listing = data?.data?.map((property) => (
		<div key={property.id} className='listing'
		onClick={() => navigate(`/properties/${property.id}`)}>
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
	return <div>{listing}</div>;
};

export default Properties;
