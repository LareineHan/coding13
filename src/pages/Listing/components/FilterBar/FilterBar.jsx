import React, { useState } from 'react';
import './FilterBar.style.css';
import SearchBar from '../../../../common/SearchBar/SearchBar';
import {
	Container,
	Row,
	Col,
	Button,
	Navbar,
	Nav,
	NavDropdown,
} from 'react-bootstrap';

const FilterBar = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false);
	return (
		<Navbar
			expand='lg'
			className='bg-body-tertiary'
			expanded={navbarExpanded}
			collapseOnSelect>
			<Container fluid>
				<Navbar.Brand>
					<div className='filter-bar-search'>
						<SearchBar />
					</div>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls='navbarScroll'
					onClick={() => setNavbarExpanded(!navbarExpanded)}
				/>
				<Navbar.Collapse id='navbarScroll' className='filters-collapse'>
					<Nav className='me-auto my-2 my-lg-0 nav-menu' navbarScroll>
						<NavDropdown title='Price' id='basic-nav-dropdown'>
							<NavDropdown.Item>Rent price input table</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Another action</NavDropdown.Item>
							<NavDropdown.Item>Something</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link>Filter Btns</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default FilterBar;
