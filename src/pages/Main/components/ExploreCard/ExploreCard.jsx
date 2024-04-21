import React from 'react';
import Card from 'react-bootstrap/Card';
import './ExploreCard.style.css';
import { useGetPropertiesQuery } from '../../../../hooks/useGetProperties';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import ExploreCardImage from '../ExploreCardImage/ExploreCardImage';
import { Row, Col } from "react-bootstrap"

const ExploreCard = ({ props }) => {
	const { data, isLoading, isError } = useGetPropertiesQuery(props);
	console.log('ddd', data);
	const { id } = useParams();

	if (isLoading) {
		return <Spinner animation='border' />;
	}
	if (isError) {
		return <div>Error: {isError.message}</div>;
	}

	return (
		<div className='explore-card-container'>
			{data?.data.slice(4, 8).map((property, idx) => (

				<Card className='explore-card' key={idx}>
					<ExploreCardImage className='explore-card-img' id={property?.id} />
					<Card.Body>
						<Card.Title>{property.name}</Card.Title>
						<Card.Text>
							<ul className='explore-card-content'>
								<li>{property.address.fullAddress}</li>
								<li>
									{property.bedRange} | {property.rentRange}
								</li>
							</ul>
						</Card.Text>
					</Card.Body>
				</Card>
	
			))}
		</div>
	);
};

export default ExploreCard;
