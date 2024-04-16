import React from "react";
import "./Listing.style.css";
import { Row } from "react-bootstrap";
import Map from "./components/Map/Map";
import Card from "./components/Card/Card";

const Listing = () => {
  const searchParams = {
    location: "new-york",
    minRent: "1500",
    maxRent: "3000",
    page: "1",
    // Add other params here
  };
  return (
    <div>
      <Row>
        <Map />
      </Row>
      <Row>
        <div className='properties'>
          <Card props={searchParams} />
        </div>
      </Row>
    </div>
  );
};

export default Listing;
