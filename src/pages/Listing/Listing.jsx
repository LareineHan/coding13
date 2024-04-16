import React from 'react';
import './Listing.style.css';
import Properties from '../../common/Properties/Properties';
import Map from './components/Map/Map';
import { Container, Row, Col } from 'react-bootstrap';

const Listing = () => {
	const searchParams = {
		location: 'new-york',
		minRent: '1500',
		maxRent: '3000',
		page: '1',
		sort: 'default', // Sort has options on the API!
		// Add other params here
	};
	return (
		<Container className='properties'>
			<Col lg={8} className='property-listing-markers'>
				<Map />
			</Col>
			<Col lg={4} className='property-listing'>
				<Properties props={searchParams} />
			</Col>
		</Container>
	);
};

export default Listing;
