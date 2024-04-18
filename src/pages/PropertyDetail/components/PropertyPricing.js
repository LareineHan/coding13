// import React from "react";
// import "./PropertyPricing.style.css";
// import { Container, Row, Col, Nav } from "react-bootstrap";

// const PropertyPricing = ({ availabilities, selectedTab, onTabSelect }) => {
//   const handleTabSelect = (type) => {
//     onTabSelect(type); // Pass the selected tab type to the parent component
//   };

//   // Find the availability object that matches the selectedTab
//   const selectedAvailability = availabilities.find(
//     (availability) => availability.type === selectedTab
//   );

//   // Check if selectedAvailability exists and has details
//   if (!selectedAvailability || !selectedAvailability.details) {
//     return (
//       <Container className="propertyPricing-container">
//         <p>No availability found for {selectedTab}</p>
//       </Container>
//     );
//   }

//   // Destructure the details array from the selected availability object
//   const { details } = selectedAvailability;

//   return (
//     <Container className="propertyPricing-container">
//       <h2>Pricing & Availability</h2>

//       {/* Tab Navigation */}
//       <Nav variant="pills" as="ul">
//         {availabilities.map((availability, index) => (
//           <Nav.Item key={index} as="li">
//             <Nav.Link
//               onClick={() => handleTabSelect(availability.type)}
//               className={`property-type-tab ${
//                 availability.type === selectedTab ? "active" : ""
//               }`}
//             >
//               {availability.type}
//             </Nav.Link>
//           </Nav.Item>
//         ))}
//       </Nav>

//       {/* Display Pricing Details based on the selected tab */}
//       {details.map((availability, index) => (
//         <Row key={index} className="propertyPricing-card">
//           <Col>
//             <h4>{availability.modelName}</h4>
//             <p>Rent Range: {availability.rentRange}</p>
//             <p>Beds: {availability.beds}</p>
//             <p>Baths: {availability.baths}</p>
//             <p>Availability: {availability.availabilityText}</p>
//           </Col>
//         </Row>
//       ))}
//     </Container>
//   );
// };

// export default PropertyPricing;

import React from "react";
import "./PropertyPricing.style.css";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
const PropertyPricing = ({ availabilities, selectedTab, onTabSelect }) => {
  const handleTabSelect = (type) => {
    onTabSelect(type); // Pass the selected tab type to the parent component
  };

  const selectedAvailability = availabilities.find(
    (availability) => availability.type === selectedTab
  );

  if (!selectedAvailability || !selectedAvailability.details) {
    return (
      <Container className="propertyPricing-container">
        <p>No availability found for {selectedTab}</p>
      </Container>
    );
  }

  const { details } = selectedAvailability;

  return (
    <Container className="propertyPricing-container">
      <h2>Pricing & Availability</h2>

      {/* Tab Navigation */}
      <Tabs
        id="property-pricing-tabs"
        activeKey={selectedTab}
        onSelect={(type) => handleTabSelect(type)}
        className="mb-3"
      >
        {availabilities.map((availability, index) => (
          <Tab
            key={index}
            eventKey={availability.type}
            title={availability.type}
            className="property-type-tab"
          >
            {/* Display Pricing Details based on the selected tab */}
            {details.map((availability, idx) => (
              <Row key={idx} className="propertyPricing-card">
                <Col>
                  <h4>{availability.modelName}</h4>
                  <p>Rent Range: {availability.rentRange}</p>
                  <p>Beds: {availability.beds}</p>
                  <p>Baths: {availability.baths}</p>
                  <p>Availability: {availability.availabilityText}</p>
                </Col>
              </Row>
            ))}
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default PropertyPricing;
