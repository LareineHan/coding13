import React from "react";
import { useGetPropertyDetailQuery } from "../../hooks/useGetPropertyDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import PropertyImages from "../../common/PropertyImages/PropertyImages";
import PropertyReviews from "../../common/PropertyReviews/PropertyReviews";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useGetPropertyDetailQuery(id);

  console.log("PropertyDetailData", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
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

  return (
    <Container>
      {/* Display Property Images */}
      <PropertyImages id={id} />
      <h1>{name}</h1>
      <p>Rent Range: {rentRange}</p>
      <p>Bed Range: {bedRange}</p>
      <p>Description: {description}</p>

      {/* Display Property Reviews */}
      <PropertyReviews id={id} />

      <h2>Contact</h2>
      <p>Phone: {contact.phone}</p>
      <p>Company: {contact.name}</p>

      <h2>Address</h2>
      <p>{address.lineOne}</p>
      <p>{address.lineTwo}</p>
      <p>
        {address.city}, {address.state} {address.postalCode}
      </p>

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
