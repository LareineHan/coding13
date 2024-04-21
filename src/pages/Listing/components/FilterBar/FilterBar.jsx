import React, { useState } from 'react';
import './FilterBar.style.css';
import SearchBar from '../../../../common/SearchBar/SearchBar';
import {
	Container,
	Form,
	Row,
	Col,
	Dropdown,
	DropdownButton,
	Button,
} from 'react-bootstrap';
const FilterBar = ({ setFilter }) => {
	const [minBed, setMinBed] = useState('');
	const [maxBed, setMaxBed] = useState('');
	const [minBath, setMinBath] = useState('');
	const [maxBath, setMaxBath] = useState('');
	const [minRent, setMinRent] = useState('');
	const [maxRent, setMaxRent] = useState('');
	const [sortOption, setSortOption] = useState('Sort');
	const [bedroomOption, setBedroomOption] = useState('Bedrooms');
	const [bathroomOption, setBathroomOption] = useState('Bathrooms');

	const handleApplyFilters = () => {
		let sortValue = 'default';
		if (sortOption === 'Last Updated') {
			sortValue = 'lastUpdated';
		} else if (sortOption === 'Rent High To Low') {
			sortValue = 'rentHighToLow';
		} else if (sortOption === 'Rent Low To High') {
			sortValue = 'rentLowToHigh';
		}
		setFilter((prev) => ({
			...prev,
			minBed,
			maxBed,
			minBath,
			maxBath,
			minRent,
			maxRent,
			sort: sortValue,
		}));
	};

	const handleResetFilters = () => {
		setMinBed('');
		setMaxBed('');
		setMinBath('');
		setMaxBath('');
		setMinRent('');
		setMaxRent('');
		setSortOption('Sort');
		setBedroomOption('Bedrooms');
		setBathroomOption('Bathrooms');
		setFilter({});
	};

	const handleSortSelect = (option) => {
		setSortOption(option);
	};

	const handleBedroomSelect = (option) => {
		setBedroomOption(option);
		if (option === 'one') {
			setMinBed('1');
			setMaxBed('1');
		} else if (option === 'up to two') {
			setMinBed('1');
			setMaxBed('2');
		} else if (option === 'up to three') {
			setMinBed('1');
			setMaxBed('3');
		} else if (option === 'three +') {
			setMinBed('3');
		}
	};

	const handleBathroomSelect = (option) => {
		setBathroomOption(option);
		if (option === 'one') {
			setMinBath('1');
			setMaxBath('1');
		} else if (option === 'two') {
			setMinBath('2');
			setMaxBath('2');
		} else if (option === 'three +') {
			setMinBath('3');
		}
	};

	return (
		<Container>
			<Row className='filter-menu'>
				<Col lg={7} md={9} className='filter-bar-search'>
					<SearchBar />
				</Col>

				<Col lg={5} md={12} className='filter-menu-box'>
					<Row className='filters'>
						<Col className='filter-menu-list'>
							<DropdownButton
								id='bedroom-dropdown'
								title={bedroomOption}
								variant='outline-success'>
								<Dropdown.Item onClick={() => handleBedroomSelect('one')}>
									one
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleBedroomSelect('up to two')}>
									up to two
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleBedroomSelect('up to three')}>
									up to three
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleBedroomSelect('three +')}>
									three +
								</Dropdown.Item>
							</DropdownButton>
						</Col>

						<Col className='filter-menu-list'>
							<DropdownButton
								id='bathroom-dropdown'
								title={bathroomOption}
								variant='outline-success'>
								<Dropdown.Item onClick={() => handleBathroomSelect('one')}>
									one
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleBathroomSelect('two')}>
									two
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleBathroomSelect('three +')}>
									three +
								</Dropdown.Item>
							</DropdownButton>
						</Col>
						<Col className='filter-menu-list'>
							<DropdownButton
								id='sort-dropdown'
								title={sortOption}
								variant='outline-success'
								className='sort-dropdown'>
								<Dropdown.Item onClick={() => handleSortSelect('Default')}>
									Default
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleSortSelect('Last Updated')}>
									Last Updated
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleSortSelect('Rent High To Low')}>
									Rent High To Low
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleSortSelect('Rent Low To High')}>
									Rent Low To High
								</Dropdown.Item>
							</DropdownButton>
						</Col>
						<Row>
							<Col className='filter-menu-list'>
								<Form.Group controlId='minRent'>
									<Form.Control
										type='text'
										placeholder='Min Rent'
										value={minRent}
										onChange={(e) => setMinRent(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col className='filter-menu-list'>
								<Form.Group controlId='maxRent'>
									<Form.Control
										type='text'
										placeholder='Max Rent'
										value={maxRent}
										onChange={(e) => setMaxRent(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col className='filter-handlers'>
								<Button
									variant='outline-dark'
									className='apply-filter-button'
									onClick={handleApplyFilters}>
									Apply
								</Button>
							</Col>
							<Col className='filter-handlers'>
								<Button
									variant='outline-danger'
									className='reset-filter-button'
									onClick={handleResetFilters}>
									Reset
								</Button>
							</Col>
						</Row>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default FilterBar;
