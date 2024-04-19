import React from 'react';
import './Banner.style.css';
import SearchBar from '../../../../common/SearchBar/SearchBar';
const Banner = () => {
	return (
		<div className='banner-container'>
			<div className='banner-wrap'>
				<h1>Discover Your New Home</h1>
				<p>We've helped millions of renters find their perfect fit.</p>
				<div className='banner-wrap-search'>
					<SearchBar />
				</div>
			</div>
		</div>
	);
};

export default Banner;
