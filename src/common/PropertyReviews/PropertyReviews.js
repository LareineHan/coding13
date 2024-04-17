import React from "react";
import "./PropertyReviews.style.css";
import { useGetReviewsQuery } from "../../hooks/useGetReviews";
import { Container, Row, Col } from "react-bootstrap";

const PropertyReviews = ({ id }) => {
  const { data, isLoading, isError, error } = useGetReviewsQuery(id);
  console.log("property review:", data);

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
    <div className="property-review-box">
      <h2>Reviews</h2>
      {data ? (
        <div>
          {data?.data.map((review) => (
            <div key={review.key}>
              <p>Title: {review.title}</p>
              <p>Text: {review.text}</p>
              <p>Rating: {review.rating}</p>
              <p>Submission Date: {review.submissionDate}</p>
              {review.comments && <p>Comment: {review.comments[0].text}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default PropertyReviews;
