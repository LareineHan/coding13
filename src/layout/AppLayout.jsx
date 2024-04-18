import React from 'react';
import './AppLayout.style.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar, Button } from 'react-bootstrap';
import GoToMyPage from './components/GoToMyPage';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
	const login = sessionStorage.getItem('token');
	const name = sessionStorage.getItem('name');
	return (
		<div>
			<div className='appLayout-container'>
				<div className='appLayout-left-section'>
					<div className='appLayout-left-section-menu'>
						<NavDropdown title='Menu' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								Rental Tools
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Help Center
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>About us</NavDropdown.Item>
						</NavDropdown>
					</div>
					<button className='appLayout-left-section-language'>English</button>
				</div>

				<div className='appLayout-center-section'>Apartment</div>

				<div className='appLayout-right-section'>
					<div className='appLayout-right-section-login'>
						<button>
							<GoToMyPage to='/myPage'>{name}</GoToMyPage>
						</button>
					</div>

					<div className='appLayout-right-section-wrap'>
						<button className='appLayout-right-section-add-property'>
							another btn
						</button>
						<button className='appLayout-right-section-add-property'>
							<GoToMyPage to='/myPage'>{name}go to my page</GoToMyPage>
						</button>
						<button
							className='appLayout-right-section-add-property'
							eventKey={2}
							href={!login ? '/login' : '/logOut'}>
							{login ? 'Log Out' : 'Log In'}
							<span>
								<img
									className='googlelogo'
									src={'./image/googlelogo.png'}
									alt='logo'
								/>
							</span>
						</button>
					</div>
				</div>
			</div>
			<div
				style={{
					padding: '4.6rem',
					paddingTop: '1rem',
					paddingBottom: '2rem',
					backgroundColor: '#666',
					position: 'absolute',
					right: '0',
					top: '0',
				}}></div>
			<Outlet />
		</div>
	);
};

export default AppLayout;
