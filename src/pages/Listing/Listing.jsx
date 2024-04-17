import React from 'react';
import './Listing.style.css';
import Card from './components/Card/Card';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar/SearchBar';
import MapBox from './components/MapBox/MapBox';

const Listing = () => {
	const searchParams = {
		location: 'new-york',
		minRent: '1000',
		maxRent: '8000',
		page: '1',
		sort: 'default',
		// Add other params here
	};
	return (
		<Container className='properties'>
			<Col lg={8} className='properties-map-box'>
				<MapBox props={searchParams} />
			</Col>
			<Col lg={4} className='property-listing'>
				<Row className='property-listing-search-bar'>
					<SearchBar />
				</Row>
				<Row className='property-listing-card-box'>
					<Card props={searchParams} />
				</Row>
			</Col>
		</Container>
	);
};

export default Listing;
