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
import arrowUpIcon from "../Icons/arrow-up.png";
import arrowDownIcon from "../Icons/down-arrow.png";

const PropertyPricing = ({
  availabilities,
  selectedTab,
  onTabSelect,
  amenities,
  imageData,
  leaseTerms,
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
        updatedRows[tab] = updatedRows[tab]?.filter((item) => item !== idx);
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
  const interiorAmenities = amenities?.find(
    (amenity) => amenity.type === "Interior Amenities"
  );

  const propertyAmenities = interiorAmenities
    ? interiorAmenities.amenities
    : [];

  const getLeaseTermList = (terms) => {
    if (!terms) return [];
    return terms.split(", ").map((term) => term.trim());
  };

  const leaseTermList = getLeaseTermList(leaseTerms);

  const renderUnits = (details, tab) => {
    const unitsToShow = showAllUnits[tab] ? details : details.slice(0, 2);

    return unitsToShow?.map((detail, idx) => (
      <Col key={idx} xs={12} className="propertyPricing-card">
        <Row className="propertyPricing-card-content">
          <Col xs={7} md={6}>
            <div className="pricing-title">
              <p>{detail.modelName}</p>
              <p>{detail.rentRange}</p>
            </div>
            <div className="pricing-subtitle">
              <p>{`${detail.beds}, ${detail.baths}`}</p>
              <p>{`${detail.rentRange} deposit`}</p>
            </div>
          </Col>
          <Col xs={5} md={6}>
            {/* Randomly select an image from imageData */}
            <Image
              src={
                imageData?.data[
                  Math.floor(Math.random() * imageData.data.length)
                ].link
              }
              fluid
              className="property-image"
            />
          </Col>
        </Row>
        <p className="availableUnit">{`${details.length} ${
          details.length === 1 ? "Available Unit" : "Available Units"
        }`}</p>
        <Table className="availableUnit-table">
          <thead>
            <tr>
              <th className="availableUnit-table-head">Unit</th>
              <th className="availableUnit-table-head">Price</th>
              <th className="availableUnit-table-head">Availability</th>
              <th className="availableUnit-table-head"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.modelName}</td>
              <td>{detail.rentRange}</td>
              <td>{detail.availabilityText}</td>
              <td onClick={() => toggleShowDetails(tab, idx)}>
                {expandedAvailableUnit[tab]?.includes(idx) ? (
                  <img
                    src={arrowUpIcon}
                    className="showMoreBtnArrowIcon"
                    alt="arrow up icon"
                  />
                ) : (
                  <img
                    src={arrowDownIcon}
                    className="showMoreBtnArrowIcon"
                    alt="arrow down icon"
                  />
                )}
              </td>
            </tr>
            {expandedAvailableUnit[tab]?.includes(idx) && (
              <tr>
                <td colSpan="4" className="availableUnit-detail">
                  <div>
                    <p className="availableUnit-detail-title">
                      {detail.modelName}
                    </p>
                    <div>
                      <p className="availableUnit-detail-lease">
                        Lease Information
                      </p>
                      {leaseTermList.length > 1 ? (
                        <ul className="two-column-list">
                          {leaseTermList?.map((term, index) => (
                            <li
                              key={index}
                              className="propertyDetail-section-item"
                            >
                              {term}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="propertyDetail-section-item">
                          {leaseTermList[0]}
                        </p>
                      )}
                      <p>
                        <span className="availableUnit-deposit-title">
                          Deposit:
                        </span>
                        {detail.rentRange}
                      </p>
                    </div>
                    <div>
                      <p className="availableUnit-amenity-title">Features</p>
                      <ul className="availableUnit-amenity-ul">
                        {propertyAmenities?.map((amenity, idx) => (
                          <li className="availableUnit-amenity-list" key={idx}>
                            {amenity}
                          </li>
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
        {availabilities?.map((availability, index) => (
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
              Show Less{" "}
              <img
                src={arrowUpIcon}
                className="showMoreBtnArrowIcon"
                alt="arrow up icon"
              />
            </>
          ) : (
            <>
              Show More{" "}
              <img
                src={arrowDownIcon}
                className="showMoreBtnArrowIcon"
                alt="arrow down icon"
              />
            </>
          )}
        </Button>
      </div>
    </Container>
  );
};
export default PropertyPricing;
