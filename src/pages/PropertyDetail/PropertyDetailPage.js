import React from "react";
import { useGetPropertyDetailQuery } from "../../hooks/useGetPropertyDetail";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PropertyReviews from "../../common/PropertyReviews/PropertyReviews";
import { useGetImagesQuery } from "../../hooks/useGetPropertyImages";
import PropertyCarousel from "../../common/Carousel/PropertyCarousel";
import { useGetReviewsQuery } from "../../hooks/useGetReviews";
import PropertyRating from "../../common/PropertyRating/PropertyRating";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useGetPropertyDetailQuery(id);
  const { data: imageData } = useGetImagesQuery(id);
  const { data: reviewsData } = useGetReviewsQuery(id);

  console.log("PropertyDetailData", data);

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

  // Destructure the data object to access specific properties
  const {
    name,
    rentRange,
    bedRange,
    address,
    description,
    contact,
    amenities,
    transits,
  } = data; // Access nested data

  const images = imageData?.data || [];
  const reviews = reviewsData?.data || [];

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  };

  const averageRating = calculateAverageRating();

  const totalReviews = reviews.length;

  return (
    <Container>
      <PropertyCarousel images={images} />
      <h1>{name}</h1>
      <p>
        {`${address.lineOne}, ${address.city}, ${address.state} ${address.postalCode}`}
      </p>

      <PropertyRating
        averageRating={averageRating}
        totalReviews={totalReviews}
      />

      <p>Rent Range: {rentRange}</p>
      <p>Bed Range: {bedRange}</p>
      <p>Description: {description}</p>
      {/* Display Property Reviews */}
      <PropertyReviews id={id} />
      <h2>Contact</h2>
      <p>Phone: {contact.phone}</p>
      <p>Company: {contact.name}</p>
      <h2>Amenities</h2>
      <ul>
        {amenities.map((amenity) => (
          <li key={amenity.id}>{amenity.type}</li>
        ))}
      </ul>
      <h2>Transit Options</h2>
      <ul>
        {transits.map((transit) => (
          <li key={transit.id}>{transit.type}</li>
        ))}
      </ul>
    </Container>
  );
};

export default PropertyDetailPage;
