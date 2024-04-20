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
  propertyInfo,
}) => {
  const getLeaseTermList = (terms) => {
    if (!terms) return [];
    return terms.split(", ").map((term) => term.trim());
  };

  const leaseTermList = getLeaseTermList(leaseTerms);

  return (
    <Container>
      <h2>Details</h2>
      <div className="property-section">
        <p className="property-section-title">Utility Included</p>
        <ul className="utilityLease-list two-column-list">
          {recurringExpenses.map((recurringExpense, index) => {
            // Split the type string by comma, ampersand, or 'and'
            const formattedWords = recurringExpense.type
              .split(/,\s*|\s*&\s*|\s+and\s+/)
              .map((word) => word.trim().toLowerCase());

            return formattedWords.map((word, wordIndex) => (
              <li
                key={`${index}-${wordIndex}`}
                className="property-section-item"
              >
                {word}
              </li>
            ));
          })}
        </ul>
      </div>
      <div className="property-section">
        <p className="property-section-title">Lease Option</p>
        {leaseTermList.length > 1 ? (
          <ul className="property-section-list">
            {leaseTermList.map((term, index) => (
              <li key={index} className="property-section-item">
                {term}
              </li>
            ))}
          </ul>
        ) : (
          <p className="property-section-item">{leaseTermList[0]}</p>
        )}
      </div>
      <div className="property-section">
        <p className="property-section-title">Property Information</p>
        <ul className="property-section-list two-column-list">
          <li>Built {yearBuilt}</li>
          <li>{`${unitCount} units / ${storyCount} stories`}</li>
          <li>{isFurnished ? "Furnished" : "Unfurnished"}</li>
        </ul>
      </div>
    </Container>
  );
};

export default PropertyDetails;
