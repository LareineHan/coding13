import React from 'react';
import { useGetImagesQuery } from '../../../hooks/useGetPropertyImages';
import Carousel from 'react-bootstrap/Carousel';
import './ListingCardCarousel.style.css';

const ListingCardCarousel = ({ id }) => {
	const { data, isLoading, isError } = useGetImagesQuery(id);
	// console.log("property images:", data);

	if (isLoading) {
		return <div>Loading images...</div>;
	}

	if (isError) {
		return (
			<div className='carousel_error'>
				<div className='error_img'>
					<img src='/image/carousel_error.png' alt='Error fetching images' />
				</div>
			</div>
		);
	}

	return (
		<div className='info_images'>
			<Carousel fade interval={null}>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={data?.data[0].link}
						alt='Rental house image'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={data?.data[data.data.length - 1].link}
						alt='Rental house image'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default ListingCardCarousel;
