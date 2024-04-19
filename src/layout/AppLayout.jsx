import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import GoToMyPage from './components/GoToMyPage';
import logoDark from '../images/logo-dark.png';
import './AppLayout.style.css';
import { useSelector } from 'react-redux';
import '../../node_modules/serve-index/public/style.css';

const AppLayout = () => {
	const [username, setUserName] = useState(null);

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
						<Nav id='basic-navbar-nav' className='nav-extra-item'>
							<Navbar.Text href='/properties' className='text-decoration-none '>
								<a href='/properties'>Properties</a>
							</Navbar.Text>
						</Nav>

						<Nav id='basic-navbar-nav'>
							{username ? (
								<NavDropdown title={username} id='basic-nav-dropdown'>
									<NavDropdown.Item>
										<a href='/mypage'>Go to My Page</a>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<a href='/logout' className='text-decoration-none '>
											LogOut
										</a>
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Navbar.Text href='/login' className='text-decoration-none '>
									<Navbar.Text>
										<a href='/login' className='text-decoration-none '>
											LogIn
										</a>
									</Navbar.Text>
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
