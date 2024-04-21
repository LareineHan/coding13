import React, { useState } from "react";
import "./FilterBar.style.css";
import SearchBar from "../../../../common/SearchBar/SearchBar";
import {
  Container,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

const FilterBar = ({ setFilter }) => {
  const [minBed, setMinBed] = useState("");
  const [maxBed, setMaxBed] = useState("");
  const [minBath, setMinBath] = useState("");
  const [maxBath, setMaxBath] = useState("");
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  const handleApplyFilters = () => {
    setFilter((prev) => ({
      ...prev,
      minBed,
      maxBed,
      minBath,
      maxBath,
      minRent,
      maxRent,
    }));
  };

  const handleResetFilters = () => {
    setMinBed("");
    setMaxBed("");
    setMinBath("");
    setMaxBath("");
    setMinRent("");
    setMaxRent("");
    setFilter({});
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
                title='Bedrooms'
                variant='success'
              >
                <Dropdown.Item
                  onClick={() => {
                    setMinBed("1");
                    setMaxBed("1");
                  }}
                >
                  one
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setMinBed("2");
                    setMaxBed("2");
                  }}
                >
                  up to two
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setMinBed("3");
                    setMaxBed("3");
                  }}
                >
                  up to three
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setMinBed("3");
                  }}
                >
                  three +
                </Dropdown.Item>
              </DropdownButton>
            </Col>

            <Col lg={3} md={3} className='filter-menu-list'>
              <DropdownButton
                id='bathroom-dropdown'
                title='Bathrooms'
                variant='success'
              >
                <Dropdown.Item
                  onClick={() => {
                    setMinBath("1");
                    setMaxBath("1");
                  }}
                >
                  one
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setMinBath("2");
                    setMaxBath("2");
                  }}
                >
                  two
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setMinBath("3");
                  }}
                >
                  three +
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col lg={3} md={3} className='filter-menu-list'>
              <Form.Group controlId='minRent'>
                {/* <Form.Label>Min Rent</Form.Label> */}
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
                {/* <Form.Label>Max Rent</Form.Label> */}
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
              variant='link'
              style={{ color: "green" }}
              onClick={handleApplyFilters}
            >
              Apply Filter
            </Button>
            <Button
              variant='link'
              style={{ color: "00BF67" }}
              onClick={handleResetFilters}
            >
              Reset
            </Button>
          </div>
          <Row className='sort-options'>
            <Col lg={12} md={12} className='filter-menu-list'>
              <DropdownButton id='sort-dropdown' title='Sort' variant='link'>
                <Dropdown.Item
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: "default",
                    }));
                  }}
                >
                  Default
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: "lastUpdated",
                    }));
                  }}
                >
                  Last Updated
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: "rentHighToLow",
                    }));
                  }}
                >
                  Rent High To Low
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: "rentLowToHigh",
                    }));
                  }}
                >
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
