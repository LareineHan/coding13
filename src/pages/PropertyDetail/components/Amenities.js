import React from "react";
import "./Amenities.style.css";
import { Container, Row, Col } from "react-bootstrap";

const Amenities = ({ amenities }) => {
  // Separate amenities by type
  const amenitiesByType = {};

  amenities?.forEach((amenity) => {
    const { type, amenities } = amenity;
    if (!amenitiesByType[type]) {
      amenitiesByType[type] = [];
    }
    amenitiesByType[type] = [...amenitiesByType[type], ...amenities];
  });

  return (
    <Container className="amenities-container">
      {Object?.entries(amenitiesByType).map(([type, amenitiesList]) => (
        <div key={type} className="amenities-section">
          <Row>
            <h2>{type}</h2>
          </Row>
          <Row>
            <Col>
              <ul className="amenities-list two-column-list">
                {amenitiesList?.map((amenity, index) => (
                  <li key={index} className="amenity-item">
                    {amenity}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Amenities;
