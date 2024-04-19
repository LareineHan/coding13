// import React from 'react';
// import './AppLayout.style.css';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import GoToMyPage from './components/GoToMyPage';
// import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import logoDark from '../images/logo-dark.png';

// const AppLayout = () => {
// 	const login = sessionStorage.getItem('token');
// 	const name = sessionStorage.getItem('name');
// 	const navigate = useNavigate();

// 	return (
// 		<div>
// 			<div className='appLayout-container'>
// 				<div className='appLayout-left-section'>
// 					<div className='appLayout-left-section-menu'>
// 						<NavDropdown title='Menu' id='basic-nav-dropdown'>
// 							<NavDropdown.Item href='#action/3.1'>
// 								Rental Tools
// 							</NavDropdown.Item>
// 							<NavDropdown.Item href='#action/3.2'>
// 								Help Center
// 							</NavDropdown.Item>
// 							<NavDropdown.Divider />
// 							<NavDropdown.Item href='#action/3.4'>About us</NavDropdown.Item>
// 						</NavDropdown>
// 					</div>
// 					<button className='appLayout-left-section-language'>English</button>
// 				</div>

// 				<a href='/' className='appLayout-center-section'>
// 					<img
// 						className='main-logo'
// 						src={logoDark}
// 						width={'220px'}
// 						alt='logo'
// 					/>
// 				</a>

// 				<div className='appLayout-right-section'>
// 					<div className='appLayout-right-section-login'>
// 						<button>
// 							<GoToMyPage to='/myPage'>{name}</GoToMyPage>
// 						</button>
// 					</div>

// 					<div className='appLayout-right-section-wrap'>
// 						<button className='appLayout-right-section-add-property'>
// 							another btn
// 						</button>
// 						<button className='appLayout-right-section-add-property'>
// 							<GoToMyPage to='/myPage'>{name}go to my page</GoToMyPage>
// 						</button>
// 						<a
// 							className='appLayout-right-section-add-property'
// 							eventKey={2}
// 							href={!login ? '/login' : '/logOut'}>
// 							{login ? 'Log Out' : 'Log In'}
// 							<span>
// 								<img
// 									className='googlelogo'
// 									src={'./image/googlelogo.png'}
// 									alt='logo'
// 								/>
// 							</span>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div
// 				style={{
// 					padding: '4.6rem',
// 					paddingTop: '1rem',
// 					paddingBottom: '2rem',
// 					backgroundColor: '#666',
// 					position: 'absolute',
// 					right: '0',
// 					top: '0',
// 				}}></div>
// 			<Outlet />
// 		</div>
// 	);
// };

// export default AppLayout;

import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import GoToMyPage from './components/GoToMyPage';
import logoDark from '../images/logo-dark.png';
import './AppLayout.style.css';

const AppLayout = () => {
	const login = sessionStorage.getItem('token');
	const name = sessionStorage.getItem('name');

	return (
		<>
			<Navbar bg='light' className='main-navbar' expand='lg'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<NavDropdown title='Menu' id='basic-nav-dropdown'>
								<NavDropdown.Item>Rental Tools</NavDropdown.Item>
								<NavDropdown.Item>Help Center</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>About us</NavDropdown.Item>
							</NavDropdown>
						</Nav>

						<Nav id='basic-navbar-nav'>
							<Navbar.Text>
								<FontAwesomeIcon icon={faGlobe} className='english' />
								&nbsp;&nbsp;English
							</Navbar.Text>
						</Nav>
					</Navbar.Collapse>

					<Navbar.Brand href='/'>
						<img
							src={logoDark}
							width='220px'
							className='d-inline-block align-top'
							alt='logo'
						/>
					</Navbar.Brand>

					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text className='nav-extra-item' id='basic-navbar-nav'>
							<a href='/mypage' className='text-decoration-none '>
								Add a Property
							</a>
						</Navbar.Text>

						<Nav id='basic-navbar-nav'>
							{login ? (
								<NavDropdown title={name} id='basic-nav-dropdown'>
									<NavDropdown.Item href='/myPage'>
										Go to My Page
									</NavDropdown.Item>
									<NavDropdown.Item href='/logout'>Log Out</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Navbar.Text>
									<a href='/login' className='text-decoration-none '>
										Log In
									</a>
								</Navbar.Text>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div>
				<Outlet />
			</div>
		</>
	);
};

export default AppLayout;
