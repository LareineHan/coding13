import React from 'react';
import './Properties.style.css';
import { Spinner } from 'react-bootstrap';
import { useGetPropertiesQuery } from '../../hooks/useGetProperties';
import { Link } from 'react-router-dom';

const Properties = ({ props }) => {
	const { data, isLoading, isError } = useGetPropertiesQuery(props);
	if (isLoading) {
		return <Spinner animation='border' />;
	}
	if (isError) {
		return <div>Error: {isError.message}</div>;
	}
  console.log("ddd", data)

	const listing = data?.data?.map((property) => (
		<Link key={property.id} to={`/properties/${property.id}`} className='property-link'>
      {/* Wrap each property card with a Link component to link PropertyDetail page */}
      <div className='listing'>
        <ul className='listing-ul'>
          <li>{property.name}</li>
          <li>{property.rentRange}</li>
          <li>{property.bedRange}</li>
          <li>{property.address.fullAddress}</li>
          <li>{property.address.postalCode}</li>
          <li>{property.address.latitude}</li>
          <li>{property.address.longitude}</li>
        </ul>
      </div>
    </Link>
	));
	return <div>{listing}</div>;
};

export default Properties;