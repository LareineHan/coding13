import React from "react";
import "./PropertyDetails.style.css";

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
    <div>
      <h2>Details</h2>
      <p className="utility-title">Utility Included</p>
      <ul>
        {recurringExpenses.map((recurringExpense, index) => {
          // Split the type string by comma, ampersand, or 'and'
          const formattedWords = recurringExpense.type
            .split(/,\s*|\s*&\s*|\s+and\s+/)
            .map((word) => word.trim().toLowerCase());

          return formattedWords.map((word, wordIndex) => (
            <li key={`${index}-${wordIndex}`}>{word}</li>
          ));
        })}
      </ul>{" "}
      <div>
        <p className="utility-title">Lease Option</p>
        {leaseTermList.length > 1 ? ( // Render as a list if there are multiple lease terms
          <ul className="lease-terms-list">
            {leaseTermList.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        ) : (
          <p className="leaseTerms-item">{leaseTermList[0]}</p> // Render single term
        )}
      </div>
      <p className="utility-title">Property Information</p>
      <ul>
        <li>Built {yearBuilt}</li>
        <li>{`${unitCount} units / ${storyCount} stories`}</li>
        <li>{isFurnished ? "Furnished" : "Unfurnished"}</li>
      </ul>
    </div>
  );
};

export default PropertyDetails;
