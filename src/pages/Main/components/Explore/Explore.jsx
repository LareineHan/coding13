import React, { useState } from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';
import './Explore.style.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Container,Row, Col } from "react-bootstrap"


const Explore = () => {
	const navigate = useNavigate(); //eslint-disable-line
	const [userCity, setUserCity] = useState('New York');

	const searchParams = {
		location: userCity,
		minRent: '1000',
		maxRent: '8000',
		page: '1',
		sort: 'default',
		// Add other params here
	};
	const viewMore = () => {
		navigate(`/properties?q=${userCity}`);
	};
	return (
		<div className='explore-container'>
			<h2 className='explore-container-h2'>Explore Rentals in {userCity}</h2>
            <Container>
                <Row>
                    <Col>
                        <ExploreCard props={searchParams} />
                    </Col>
                </Row>
            </Container>
			<Button
				variant='success'
				className='explore-more-btn'
				onClick={(e) => viewMore()}>
				View More
			</Button>
		</div>
	);
};

export default Explore;
