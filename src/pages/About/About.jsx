import React from 'react';
import './About.style.css';
import { Container, Row, Col } from 'react-bootstrap';
import aboutPhoto from '../../images/about-photo2.png';
import ceo from '../../images/ceo.png';
import coding13 from '../../images/coding13.png';
import logo from '../../images/logo-dark.png';

const About = () => {
	return (
		<Container fluid className='about-container'>
			<Row
				className='about-photo'
				style={{ backgroundImage: `url(${aboutPhoto})` }}>
				<Col>
					<Row className='about-us'>About Us</Row>
					<Row className='about-rr'>RENT REACT Network</Row>
				</Col>
			</Row>
			<Row className='ceo'>
				<img src={ceo} alt='ceo' />
			</Row>
			<Row className='about-us-description'>
				<p>
					The RentReact Network represents the most comprehensive online rental
					marketplace in the USA. Our extensive network of 10 leading sites
					including RentReact.com, ForRent.com, ApartmentFinder.com and 7 others
					are visited over 100 million times each month by renters looking for
					their next apartment. Our suite of digital advertising, social and
					reputation management, and market analytics solutions delivers the
					most leases at a great ROI for our advertisers. RentReact.com is the
					only source you need to optimize your online marketing performance and
					fill your vacancies fast.
				</p>
			</Row>
			<Row className='coding-13-row'>
				<img src={coding13} alt='coding13' />
			</Row>
			<Row className='coding-13'>
				<Col className='descriptions'>
					<Row>
						<h2>About Coding13</h2>
					</Row>
					<Row>
						<p>
							The Coding13 team is a group of talented individuals passionate
							about creating innovative solutions for the real estate industry.
							With expertise in frontend and backend technologies, design, and
							project management, our team is dedicated to delivering a
							user-friendly and efficient rental experience for our users.
						</p>
					</Row>
					<Row>
						<p>
							Our team utilizes the latest technologies and best practices to
							ensure that Rent React is a cutting-edge platform that meets the
							needs of both renters and property managers. By combining
							creativity, technical skills, and industry knowledge, we strive to
							make Rent React the premier online apartment resource for renters
							and property managers alike.
						</p>
					</Row>
				</Col>
			</Row>
			<Row></Row>
			<div className='about-content'>
				<img src={logo} alt='logo' className='about-logo' />
			</div>
		</Container>
	);
};

export default About;
