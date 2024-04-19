import React, { useState } from 'react';
import './FilterBar.style.css';
import SearchBar from '../../../../common/SearchBar/SearchBar';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const FilterBar = () => {
	return (
		<Container>
			<Row className='filter-menu'>
				<Col lg={7} md={9} className='filter-bar-search'>
					<SearchBar />
				</Col>

				<Col lg={4} md={12} className='filter-menu-box'>
					<Row>
						<Col lg={4} md={4} className='filter-menu-list'>
							<DropdownButton
								id='dropdown-basic-button'
								title='Dropdown button'
								variant='success'>
								<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
							</DropdownButton>
						</Col>
						<Col lg={4} md={4} className='filter-menu-list'>
							<DropdownButton
								id='dropdown-basic-button'
								title='Dropdown button'
								variant='success'>
								<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
							</DropdownButton>
						</Col>
						<Col lg={4} md={4} className='filter-menu-list'>
							<DropdownButton
								id='dropdown-basic-button'
								title='Dropdown button'
								variant='success'>
								<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
							</DropdownButton>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default FilterBar;
