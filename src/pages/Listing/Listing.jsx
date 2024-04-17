import React from 'react';
import './Listing.style.css';
import Properties from '../../common/Properties/Properties';

const Listing = () => {

	const searchParams = {
		location: 'new-york',
		minRent: '1500',
		maxRent: '3000',
		page: '1',
		// Add other params here
	};
	return (
		<div className='properties'>
			<Properties props={searchParams} />
		</div>
	);
};

export default Listing;
