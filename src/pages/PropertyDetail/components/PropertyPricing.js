import React, { useEffect, useState } from "react";
import "./PropertyPricing.style.css";
import { animateScroll as scroll } from "react-scroll";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  Image,
  Button,
} from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PropertyPricing = ({
  availabilities,
  selectedTab,
  onTabSelect,
  amenities,
  imageData,
}) => {
  const [expandedAvailableUnit, setExpandedAvailableUnit] = useState({}); // State to manage expanded rows for each tab
  const [showAllUnits, setShowAllUnits] = useState({}); // State to manage show more/less for each tab

  const handleTabSelect = (type) => {
    onTabSelect(type); // Pass the selected tab type to the parent component
  };

  useEffect(() => {
    setExpandedAvailableUnit({});
    setShowAllUnits({});
  }, [selectedTab]);

  const toggleShowDetails = (tab, idx) => {
    setExpandedAvailableUnit((prev) => {
      const isExpanded = prev[tab]?.includes(idx);
      const updatedRows = { ...prev };

      if (isExpanded) {
        updatedRows[tab] = updatedRows[tab].filter((item) => item !== idx);
      } else {
        updatedRows[tab] = [...(updatedRows[tab] || []), idx];
      }

      return updatedRows;
    });
  };

  const toggleShowMoreLess = (tab) => {
    setShowAllUnits((prev) => ({
      ...prev,
      [tab]: !prev[tab], // Toggle the showAllUnits state for the selected tab
    }));
    // Check if we are collapsing the units (going from Show Less to Show More)
    if (showAllUnits[tab]) {
      // Scroll to the top of the units container when toggling to Show Less
      scroll.scrollToTop({
        duration: 200, // Duration of the scroll animation in milliseconds
        smooth: true, // Enable smooth scrolling
        offset: -300, // Additional offset if needed (adjust as necessary)
      });
    }
  };

  //Find amenities object for type "Interior Amenities"
  const interiorAmenities = amenities.find(
    (amenity) => amenity.type === "Interior Amenities"
  );

  const propertyAmenities = interiorAmenities
    ? interiorAmenities.amenities
    : [];

  const renderUnits = (details, tab) => {
    const unitsToShow = showAllUnits[tab] ? details : details.slice(0, 2);

    return unitsToShow.map((detail, idx) => (
      <Col key={idx} xs={12} className="propertyPricing-card">
        <Row className="propertyPricing-card-content">
          <Col xs={7}>
            <div className="pricing-title">
              <p>{detail.modelName}</p>
              <p>{detail.rentRange}</p>
            </div>
            <div className="pricing-subtitle">
              <p>{`${detail.beds}, ${detail.baths}`}</p>
              <p>{`${detail.rentRange} deposit`}</p>
            </div>
          </Col>
          <Col>
            {/* Randomly select an image from imageData */}
            <Image
              src={
                imageData?.data[
                  Math.floor(Math.random() * imageData.data.length)
                ].link
              }
              fluid
            />
          </Col>
        </Row>
        <p className="availableUnit">{`${details.length} ${
          details.length === 1 ? "Available Unit" : "Available Units"
        }`}</p>
        <Table className="availableUnit-table">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Price</th>
              <th>Availability</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.modelName}</td>
              <td>{detail.rentRange}</td>
              <td>{detail.availabilityText}</td>
              <td onClick={() => toggleShowDetails(tab, idx)}>
                {expandedAvailableUnit[tab]?.includes(idx) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </td>
            </tr>
            {expandedAvailableUnit[tab]?.includes(idx) && (
              <tr>
                <td colSpan="4" className="availableUnit-detail">
                  <div>
                    <p>{detail.modelName}</p>
                    <div>
                      <p>Lease Information</p>
                      <p>{`Deposit: ${detail.rentRange}`}</p>
                    </div>
                    <div>
                      <p>Features</p>
                      <ul>
                        {propertyAmenities.map((amenity, idx) => (
                          <li key={idx}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    ));
  };
  return (
    <Container
      id="propertyPricingContainer"
      className="propertyPricing-container"
    >
      <h2>Pricing & Availability</h2>
      <Tabs
        id="property-pricing-tabs"
        activeKey={selectedTab}
        onSelect={handleTabSelect}
        className="mb-3"
      >
        {availabilities.map((availability, index) => (
          <Tab
            key={index}
            eventKey={availability.type}
            title={availability.type}
            className="property-type-tab"
          >
            <Row className="propertyPricing-card-container">
              {renderUnits(availability.details, availability.type)}
            </Row>
          </Tab>
        ))}
      </Tabs>
      <div className="showMoreLessBtn-container">
        {" "}
        <Button
          variant="outline-primary"
          className="showMoreLessBtn btn-outline-primary"
          onClick={() => toggleShowMoreLess(selectedTab)}
        >
          {showAllUnits[selectedTab] ? (
            <>
              Show Less <FaChevronUp />
            </>
          ) : (
            <>
              Show More <FaChevronDown />
            </>
          )}
        </Button>
      </div>
    </Container>
  );
};
export default PropertyPricing;
