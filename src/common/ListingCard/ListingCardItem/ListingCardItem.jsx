import React from "react";
import { useGetPropertyDetailQuery } from "../../../hooks/useGetPropertyDetail";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./ListingCardItem.style.css";
import ListingCardCarousel from "../ListingCardCarousel/ListingCardCarousel";
import LikeBtn from "../../HeartBtn/LikeBtn";
import { useNavigate } from "react-router-dom";

const ListingCardItem = ({ id }) => {
  const { data, isLoading, isError } = useGetPropertyDetailQuery(id);
  const navigate = useNavigate();
  console.log("디테일", data);

  if (isLoading) {
    return <Spinner animation='border' />;
  }

  if (isError) {
    return <div className='error'>Error: {isError.message}</div>;
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
  //	console.log('amenities desc', desc);

  const goToDeatailPage = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div
      className='card_content'
      onClick={() => {
        goToDeatailPage(id);
      }}
    >
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
            <LikeBtn listId={data?.id} />
          </div>
        </div>
        <div className='card_info'>
          <ListingCardCarousel id={id} />
          <div className='info_items'>
            <ul>
              <li className='price'>{rentRange}</li>
              <li className='room'>{bedRange}</li>
              <li className='label'>
                {desc.map((item) => (
                  <span className={item ? "block" : "none"}>{item}</span>
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
  s;
};

export default ListingCardItem;
