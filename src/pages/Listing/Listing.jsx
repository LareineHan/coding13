import React, { useEffect } from 'react';
import './Listing.style.css';
import { Container, Row, Col } from 'react-bootstrap';
import MapBox from './components/MapBox/MapBox';
import FilterBar from './components/FilterBar/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowUserLocation } from '../../redux/reducers/getUserLocationSlice';
import ListingCard from '../../common/ListingCard/ListingCard';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Listing = () => {
	const [query, setQuery] = useSearchParams();
	const keyword = query.get('q');
	const navigate = useNavigate();
	console.log('키워드', keyword);

	const userLocation = useSelector((state) => state.userLocation.userLocation);
	const searchPlace = useSelector((state) => state.searchPlace.searchPlace);
	const showUserLocation = useSelector(
		(state) => state.userLocation.showUserLocation
	);
	const dispatch = useDispatch();
	console.log('showUserLocation', showUserLocation);
	console.log('searchPlace', searchPlace?.name);
	console.log('userLocation', userLocation);
	const cityName = searchPlace?.name || keyword;
	const searchParams = {
		location: showUserLocation === true ? userLocation : cityName || 'New York',
		minRent: '1000',
		maxRent: '8000',
		page: '1',
		sort: 'default',
		// Add other params here
	};
	useEffect(() => {
		if (keyword) {
			navigate(`/properties?q=${keyword}`);
		} else if (searchPlace !== null) {
			setQuery({ q: searchPlace.name });
			dispatch(toggleShowUserLocation(false));
		}
		console.log('searchParams', searchParams);
	}, [searchPlace, showUserLocation]);

	useEffect(() => {
		if (searchPlace !== null) {
			navigate(`/properties?q=${searchPlace.name}`);
		}
	}, [searchPlace]);

	return (
		<div>
			<Container className='properties'>
				<Col>
					<Row className='property-filter-row'>
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
								<ListingCard props={searchParams} />
							</Row>
						</Col>
					</Row>
				</Col>
			</Container>
		</div>
	);
};

export default Listing;
