import React from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetPropertiesQuery } from "../../../../hooks/useGetProperties";
import CardCarousel from "../CardCarousel/CardCarousel";
import "./Card.style.css";

const Card = ({ props }) => {
  const { data, isLoading, isError } = useGetPropertiesQuery(props);
  const { id } = useParams();

  if (isLoading) {
    return <Spinner animation='border' />;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      {data?.data.map((property) => (
        <div key={property.id} className='listing'>
          <h1>{property.name}</h1>
          <CardCarousel id={property.id} />
          <ul className='listing-ul'>
            <li>{property.rentRange}</li>
            <li>{property.bedRange}</li>
            <li>{property.address.fullAddress}</li>
            <li>{property.address.postalCode}</li>
            <li>{property.address.latitude}</li>
            <li>{property.address.longitude}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
