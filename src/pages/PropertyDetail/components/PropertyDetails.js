import React from "react";
import "./PropertyDetails.style.css";
import { Container } from "react-bootstrap";

const PropertyDetails = ({
  recurringExpenses,
  leaseTerms,
  yearBuilt,
  unitCount,
  storyCount,
  isFurnished,
}) => {
  const getLeaseTermList = (terms) => {
    if (!terms) return [];
    return terms.split(", ").map((term) => term.trim());
  };

  const leaseTermList = getLeaseTermList(leaseTerms);

  return (
    <Container className="propertyDetail-container">
      <h2>Details</h2>
      <div className="propertyDetail-section">
        <p className="propertyDetail-section-title">Utility Included</p>
        <ul className="two-column-list">
          {recurringExpenses?.map((recurringExpense, index) => {
            // Split the type string by comma, ampersand, or 'and'
            const formattedWords = recurringExpense.type
              .split(/,\s*|\s*&\s*|\s+and\s+/)
              .map((word) => word.trim().toLowerCase());

            return formattedWords?.map((word, wordIndex) => (
              <li
                key={`${index}-${wordIndex}`}
                className="propertyDetail-section-item"
              >
                {word}
              </li>
            ));
          })}
        </ul>
      </div>
      <div className="propertyDetail-section">
        <p className="propertyDetail-section-title">Lease Option</p>
        {leaseTermList.length > 1 ? (
          <ul className="two-column-list">
            {leaseTermList?.map((term, index) => (
              <li key={index} className="propertyDetail-section-item">
                {term}
              </li>
            ))}
          </ul>
        ) : (
          <p className="propertyDetail-section-item">{leaseTermList[0]}</p>
        )}
      </div>
      <div className="propertyDetail-section">
        <p className="propertyDetail-section-title">Property Information</p>
        <ul className="propertyDetail-section-list">
          <li className=" propertyInfo-detail-list">Built {yearBuilt}</li>
          <li className=" propertyInfo-detail-list">{`${unitCount} units / ${storyCount} stories`}</li>
          <li className=" propertyInfo-detail-list">
            {isFurnished ? "Furnished" : "Unfurnished"}
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default PropertyDetails;
