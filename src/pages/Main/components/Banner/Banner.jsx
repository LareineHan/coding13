import React from 'react';
import './Banner.style.css';
import BannerSearchBar from '../../../../common/SearchBar/BannerSearchBar';

const Banner = () => {
	return (
		<div className='banner-container'>
			<div className='banner-wrap'>
				<h1 className='banner-wrap-h1' >Discover Your New Home</h1>
				<p className='banner-wrap-p' >We've helped millions of renters find their perfect fit.</p>
				<div className='banner-wrap-search'>
					<BannerSearchBar />
				</div>
			</div>
		</div>
	);
};

export default Banner;
