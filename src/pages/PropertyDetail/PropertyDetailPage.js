import React from "react";
import "./PropertyDetailPage.style.css";
import { useGetPropertyDetailQuery } from "../../hooks/useGetPropertyDetailQuery";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useGetPropertyDetailQuery({ id });

  console.log("MovieDetailPage Data:", data);

  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Loading...</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Error: {error.message}</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      {/* Display property details */}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>Price: {data.price}</p>
          <p>Bedrooms: {data.bedrooms}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PropertyDetailPage;
