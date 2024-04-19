import React from "react";
import { useGetPropertyDetailQuery } from "../../../hooks/useGetPropertyDetail";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./ListingCardItem.style.css";
import ListingCardCarousel from "../ListingCardCarousel/ListingCardCarousel";

const ListingCardItem = ({ id }) => {
  const { data, isLoading, isError } = useGetPropertyDetailQuery(id);
  console.log("디테일", data);

  if (isLoading) {
    return <Spinner animation='border' />;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  const {
    name,
    rentRange,
    bedRange,
    bathRange,
    address,
    description,
    contact,
    amenities,
    availabilities,
    recurringExpenses,
    petPolicies,
    leaseTerms,
    yearBuilt,
    unitCount,
    storyCount,
    isFurnished,
    // transits,
  } = data; // Access nested data
  const pet = petPolicies ? "Dog & Cat Friendly" : "";

  const desc = [
    pet,
    amenities[0].amenities[0],
    amenities[0].amenities[3],
    amenities[0].amenities[5],
    amenities[0].amenities[6],
    amenities[0].amenities[7],
  ];
  console.log("설명", desc);

  return (
    <div>
      <div key={id} className='card'>
        <div className='card_title'>
          <div className='title_name'>
            <div className='name'>
              <h1>{name}</h1>
              <span>{address.fullAddress}</span>
            </div>
            <div className='logo'>
              {contact.logo ? (
                <img src={contact.logo} alt='company logo' />
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
          <ListingCardCarousel id={id} />
          <div className='info_items'>
            <ul>
              <li className='price'>{rentRange}</li>
              <li>{bedRange}</li>
              <li className='label'>
                {desc.map((item) => (
                  <span className={item ? "" : "none"}>{item}</span>
                ))}
              </li>
              <li className='phone'>{contact.phone}</li>
            </ul>
            <Button className='btn_contact'>Email</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardItem;