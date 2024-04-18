import React from "react";
import "./FeesPolicies.style.css";
import { Container, Table } from "react-bootstrap";

const FeesPolicies = ({ data }) => {
  if (!data || !data.petPolicies) {
    return null; // Render nothing if data or petPolicies is undefined
  }

  const { onetimeExpenses, petPolicies } = data;

  const feeMapping = {
    "Cats Allowed": "Cat Fee",
    "Dogs Allowed": "Dog Fee",
    // Add other pet types as needed
  };

  return (
    <Container className="feesPolicies-container">
      <h2>Fees and Policies</h2>
      <p className="fee-description">
        The fees below are based on community-supplied data and may exclude
        additional fees and utilities.
      </p>

      <Table className="pets-fee">
        <thead className="FeePolicies-pet">
          <tr>
            <td>Pets</td>
            <td></td>
          </tr>
        </thead>

        {Object.keys(feeMapping).map((petType, index) => {
          const feeType = feeMapping[petType];
          const policy = petPolicies.find((p) => p.type === petType);

          const oneTimeFee = onetimeExpenses.find(
            (fee) => fee.type === feeType
          );

          return (
            <tbody key={index}>
              <tr className="policy-type">
                <td>{petType}</td>
                <td></td>
              </tr>
              <tr>
                <td>Monthly Pet Rent</td>
                <td>{policy ? policy.rent || "N/A" : "N/A"}</td>
              </tr>
              <tr>
                <td>Pet Limit</td>
                <td>{policy ? policy.petLimit || "N/A" : "N/A"}</td>
              </tr>
              <tr>
                <td>One-Time Fee</td>
                <td>{oneTimeFee ? oneTimeFee.amount : "N/A"}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};
export default FeesPolicies;
