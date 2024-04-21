import React, { useState, useEffect } from 'react';
import './PropertyDetailPage.style.css';
import { useGetPropertyDetailQuery } from '../../hooks/useGetPropertyDetail';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PropertyReviews from '../../common/PropertyReviews/PropertyReviews';
import { useGetImagesQuery } from '../../hooks/useGetPropertyImages';
import PropertyCarousel from '../../common/Carousel/PropertyCarousel';
import { useGetReviewsQuery } from '../../hooks/useGetReviews';
import PropertyRating from '../../common/PropertyRating/PropertyRating';
import PropertyPricing from './components/PropertyPricing';
import Contact from './components/Contact';
import Amenities from './components/Amenities';
import FeesPolicies from './components/FeesPolicies';
import PropertyDetails from './components/PropertyDetails';
import Transportation from './components/Transportation';

const PropertyDetailPage = () => {
	const { id } = useParams();
	const { data, isLoading, error, isError } = useGetPropertyDetailQuery(id);
	const { data: imageData } = useGetImagesQuery(id);
	const { data: reviewsData } = useGetReviewsQuery(id);

	const [selectedTab, setSelectedTab] = useState(null);

	useEffect(() => {
		// Set the default selected tab when data or availabilities change
		if (data && data?.availabilities && data?.availabilities?.length > 0) {
			setSelectedTab(data?.availabilities[0]?.type); // Select the type of the first availability
		}
	}, [data]);

	console.log('PropertyDetailData', data);
	console.log('PropertyDetailData', reviewsData);
	console.log('PropertyImageData', imageData);

	if (isLoading) {
		return (
			<Container>
				<Row>
					<Col>
						<h1>Loading...</h1>
					</Col>
				</Row>
			</Container>
		);
	}

	if (isError) {
		return (
			<Container>
				<Row>
					<Col>
						<h1>Error: {error.message}</h1>
					</Col>
				</Row>
			</Container>
		);
	}

	// Destructure the data object to access specific properties
	const {
		name,
		rentRange,
		bedRange,
		address,
		description,
		contact,
		amenities,
		availabilities,
		recurringExpenses,
		leaseTerms,
		yearBuilt,
		unitCount,
		storyCount,
		isFurnished,
		transits,
	} = data; // Access nested data

	const images = imageData?.data;
	const reviews = reviewsData?.data;

	const handleTabSelect = (type) => {
		setSelectedTab(type);
	};

	//Calculate average rating based on total reviews of property
	const calculateAverageRating = () => {
		if (reviews?.length === 0) return 0;

		const totalRating = reviews?.reduce(
			(acc, review) => acc + review.rating,
			0
		);
		return totalRating / reviews?.length;
	};

	const averageRating = calculateAverageRating();

	const totalReviews = reviews?.length; //total number of reviews

	// Find availability with type "All"
	const availability = availabilities?.find(
		(availability) => availability.type === 'All'
	);
	console.log('Availability:', availabilities);

	// Extract bathNum from details
	let maxBathNum = ''; // Initialize maxBathNum as an empty string or null

	if (availability && availability.details && availability.details.length > 0) {
		// Extract all bathNum values from details array
		const bathNumValues = availability?.details?.map(
			(detail) => detail.bathNum
		);

		// Convert bathNum values to numbers and filter out any non-numeric values
		const validBathNumValues = bathNumValues
			.filter((value) => !isNaN(parseFloat(value)))
			.map((value) => parseFloat(value));

		// Find the maximum bathNum value
		if (validBathNumValues.length > 0) {
			maxBathNum = Math.max(...validBathNumValues).toString(); // Convert max value back to string
		}
	}
	console.log('Max BathNum:', maxBathNum);

	return (
		<Container>
			<PropertyCarousel images={images} />
			<h1 className='propertyDetailPage-title'>{name}</h1>
			<p>
				{`${address.lineOne}, ${address.city}, ${address.state} ${address.postalCode}`}
			</p>

			<PropertyRating
				averageRating={averageRating}
				totalReviews={totalReviews}
			/>

			<Row className='rent-bed-bath-container'>
				<Col className='rent-bed-bath-inner-container'>
					<p className='rent-range-title'>Monthly Rent</p>
					<p className='rent-range-value'>{rentRange}</p>
				</Col>

				<Col className='rent-bed-bath-inner-container'>
					<p className='rent-range-title'>Bedrooms</p>
					<p className='rent-range-value'>{bedRange}</p>
				</Col>

				<Col className='rent-bed-bath-inner-container'>
					<p className='rent-range-title'>Bathrooms</p>
					<p className='rent-range-value'>{`1 - ${maxBathNum} baths`}</p>
				</Col>
			</Row>

			<PropertyPricing
				availabilities={availabilities}
				selectedTab={selectedTab}
				onTabSelect={handleTabSelect}
				amenities={amenities}
				imageData={imageData}
			/>

			<div>
				<h2>About {name}</h2>
				<p className='about-description'>{description}</p>
			</div>

			<Contact contact={contact} />

			<Amenities amenities={amenities} />

			<FeesPolicies data={data} />

			<PropertyReviews id={id} />

			<PropertyDetails
				recurringExpenses={recurringExpenses}
				leaseTerms={leaseTerms}
				yearBuilt={yearBuilt}
				unitCount={unitCount}
				storyCount={storyCount}
				isFurnished={isFurnished}
			/>

			<Transportation transits={transits} />
		</Container>
	);
};

export default PropertyDetailPage;
