import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetPropertiesQuery } from "../../hooks/useGetProperties";
import ListingCardItem from "./ListingCardItem/ListingCardItem";

const ListingCard = ({ searchParams }) => {
  const { data, isLoading, isError } = useGetPropertiesQuery(searchParams);

  if (isLoading) {
    return (
      <div className='listing_card_spinner'>
        <Spinner animation='border' />
      </div>
    );
  }

  if (isError) {
    return <div className='error'>Error: {isError.message}</div>;
  }

  return (
    <div className='listing_card_container'>
      {data?.data.map((item) => (
        <ListingCardItem id={item.id} />
      ))}
    </div>
  );
};

export default ListingCard;
