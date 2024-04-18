import React, { useEffect } from 'react';
import './Listing.style.css';
import Card from './components/Card/Card';
import { Container, Row, Col } from 'react-bootstrap';
import MapBox from './components/MapBox/MapBox';
import FilterBar from './components/FilterBar/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowUserLocation } from '../../redux/reducers/getUserLocationSlice';

const Listing = () => {
	const userLocation = useSelector((state) => state.userLocation.userLocation);
	const searchPlace = useSelector((state) => state.searchPlace.searchPlace);
	const showUserLocation = useSelector(
		(state) => state.userLocation.showUserLocation
	);
	const dispatch = useDispatch();
	console.log('showUserLocation', showUserLocation);
	console.log('searchPlace', searchPlace?.name);
	console.log('userLocation', userLocation);
	const cityName = searchPlace?.name;
	const searchParams = {
		location: showUserLocation === true ? userLocation : cityName || 'New York',
		minRent: '1000',
		maxRent: '8000',
		page: '1',
		sort: 'default',
		// Add other params here
	};
	useEffect(() => {
		if (searchPlace !== null) {
			dispatch(toggleShowUserLocation(false));
		}
		console.log('searchParams', searchParams);
	}, [searchPlace, showUserLocation]);

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
