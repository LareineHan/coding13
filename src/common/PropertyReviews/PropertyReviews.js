import React from "react";
import "./PropertyReviews.style.css";
import { useGetReviewsQuery } from "../../hooks/useGetReviews";
import { ListGroup } from "react-bootstrap";

const PropertyReviews = ({ id }) => {
  const { data, isLoading, isError } = useGetReviewsQuery(id);
  console.log("property review:", data);
  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error fetching reviews: {isError.message}</div>;
  }

  return (
    <div className="property-review-box">
      <h2>Reviews</h2>
      <ListGroup>
        {data?.data.map((review) => (
          <ListGroup.Item key={review.key}>
            <p>Title: {review.title}</p>
            <p>Text: {review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>Submission Date: {review.submissionDate}</p>
            {review.comments && <p>Comment: {review.comments[0].text}</p>}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PropertyReviews;
