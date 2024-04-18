import React from 'react';
import './Listing.style.css';
import Card from './components/Card/Card';
import { Container, Row, Col } from 'react-bootstrap';
import MapBox from './components/MapBox/MapBox';
import FilterBar from './components/FilterBar/FilterBar';
import { useSelector } from 'react-redux';

const Listing = () => {
	const searchPlace = useSelector((state) => state.searchPlace.searchPlace);
	console.log('searchPlace', searchPlace.name);
	const cityName = searchPlace?.name;
	const searchParams = {
		location: cityName ? cityName : 'new-york',
		minRent: '1000',
		maxRent: '8000',
		page: '1',
		sort: 'default',
		// Add other params here
	};
	return (
		<div>
			<Container className='properties'>
				<Col>
					<Row>
						<Row className='property-filter-bar'>
							<FilterBar />
						</Row>
					</Row>
					<Row>
						<Col lg={8} className='properties-map-box'>
							<MapBox props={searchParams} />
						</Col>
						<Col lg={4} className='property-listing'>
							<Row className='property-listing-card-box'>
								<Card props={searchParams} />
							</Row>
						</Col>
					</Row>
				</Col>
			</Container>
		</div>
	);
};

export default Listing;
