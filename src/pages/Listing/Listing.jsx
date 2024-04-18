import React from "react";
import "./Listing.style.css";
import { Container, Row, Col } from "react-bootstrap";
import MapBox from "./components/MapBox/MapBox";
import FilterBar from "./components/FilterBar/FilterBar";
import { useSelector } from "react-redux";
import Card from "../../common/ListingCard/ListingCard";
import ListingCard from "../../common/ListingCard/ListingCard";

const Listing = () => {
  const searchPlace = useSelector((state) => state.searchPlace.searchPlace);
  const cityName = searchPlace?.name;
  const searchParams = {
    location: cityName ? cityName : "new-york",
    minRent: "1000",
    maxRent: "8000",
    page: "1",
    sort: "default",
    // Add other params here
  };
  return (
    <div>
      <Container className='properties'>
        <Col>
          <Row>
            <Row className='property-filter-bar'>
              <FilterBar />
            </Row>
          </Row>
          <Row>
            <Col lg={8} className='properties-map-box'>
              <MapBox props={searchParams} />
            </Col>
            <Col lg={4} className='property-listing'>
              <Row className='property-listing-card-box'>
                <ListingCard props={searchParams} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Listing;
