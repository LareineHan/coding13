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
		setFilter((prev) => ({
			...prev,
			minBed,
			maxBed,
			minBath,
			maxBath,
			minRent,
			maxRent,
			sort: sortOption === 'Sort' ? 'default' : sortOption.toLowerCase(),
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
		// Update minBed and maxBed based on the selected option
	};

	const handleBathroomSelect = (option) => {
		setBathroomOption(option);
		// Update minBath and maxBath based on the selected option
	};

	return (
		<Container>
			<Row className='filter-menu'>
				<Col lg={8} md={9} className='filter-bar-search'>
					<SearchBar />
				</Col>

				<Col lg={4} md={12} className='filter-menu-box'>
					<Row className='filters'>
						<Col lg={3} md={3} className='filter-menu-list'>
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

						<Col lg={3} md={3} className='filter-menu-list'>
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

						<Col lg={3} md={3} className='filter-menu-list'>
							<Form.Group controlId='minRent'>
								<Form.Control
									type='text'
									placeholder='Min Rent'
									value={minRent}
									onChange={(e) => setMinRent(e.target.value)}
								/>
							</Form.Group>
						</Col>
						<Col lg={3} md={3} className='filter-menu-list'>
							<Form.Group controlId='maxRent'>
								<Form.Control
									type='text'
									placeholder='Max Rent'
									value={maxRent}
									onChange={(e) => setMaxRent(e.target.value)}
								/>
							</Form.Group>
						</Col>
					</Row>
					<div className='filter-handlers'>
						<Button
							variant='success'
							className='apply-filter-button'
							onClick={handleApplyFilters}>
							Apply Filter
						</Button>
						<Button
							variant='outline-danger'
							className='reset-filter-button'
							onClick={handleResetFilters}>
							Reset Filter
						</Button>
					</div>
					<Row className='sort-options'>
						<Col lg={12} md={12} className='filter-menu-list'>
							<DropdownButton
								id='sort-dropdown'
								title={sortOption}
								variant='link'
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
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default FilterBar;
