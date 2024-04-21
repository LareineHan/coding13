import React, { useState } from "react";
import "./FilterBar.style.css";
import SearchBar from "../../../../common/SearchBar/SearchBar";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

const FilterBar = ({ setFilter }) => {
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
                title='Bedroom'
                variant='success'
              >
                <Dropdown.Item
                  onClick={() =>
                    setFilter((prev) => ({ ...prev, maxBed: "1", minBed: "1" }))
                  }
                >
                  1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFilter((prev) => ({ ...prev, maxBed: "2", minBed: "2" }))
                  }
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFilter((prev) => ({ ...prev, maxBed: "3", minBed: "3" }))
                  }
                >
                  3
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col lg={4} md={4} className='filter-menu-list'>
              <DropdownButton
                id='dropdown-basic-button'
                title='Bathroom'
                variant='success'
              >
                <Dropdown.Item
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      maxBath: "1",
                      minBath: "1",
                    }))
                  }
                >
                  1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      maxBath: "2",
                      minBath: "2",
                    }))
                  }
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      maxBath: "3",
                      minBath: "3",
                    }))
                  }
                >
                  3
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col lg={4} md={4} className='filter-menu-list'>
              <DropdownButton
                id='dropdown-basic-button'
                title='Dropdown button'
                variant='success'
              >
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
