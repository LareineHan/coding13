import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetPropertiesQuery } from "../../../../hooks/useGetProperties";
import CardCarousel from "../CardCarousel/CardCarousel";
import "./Card.style.css";

const Card = ({ props }) => {
  const { data, isLoading, isError } = useGetPropertiesQuery(props);
  const { id } = useParams();
  console.log("데이터", data);

  if (isLoading) {
    return <Spinner animation='border' />;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      {data?.data.map((property) => (
        <div key={property.id} className='card'>
          <div className='card_title'>
            <div>
              <div>
                <h1>{property.name}</h1>
                <span>{property.address.fullAddress}</span>
              </div>
              <div>
                {property.contact.logo ? (
                  <img src='property.contact.logo' alt='company logo' />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <button>Like</button>
            </div>
          </div>
          <div className='card_info'>
            <CardCarousel id={property.id} />
            <div className='info_items'>
              <ul>
                <li>{property.rentRange}</li>
                <li>{property.bedRange}</li>
                <li>{property.address.latitude}</li>
                <li>{property.contact.phone}</li>
              </ul>
              <Button className='btn_contact'>Email</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
