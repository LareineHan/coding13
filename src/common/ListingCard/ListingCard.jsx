import React from "react";
import { Spinner } from "react-bootstrap";
import { useGetPropertiesQuery } from "../../hooks/useGetProperties";
import ListingCardItem from "./ListingCardItem/ListingCardItem";

const ListingCard = ({ props }) => {
  const { data, isLoading, isError } = useGetPropertiesQuery(props);
  console.log("데이터", data);

  if (isLoading) {
    return <Spinner animation='border' />;
  }

  if (isError) {
    return <div className='error'>Error: {isError.message}</div>;
  }

  return (
    <div>
      {data?.data.map((item) => (
        <ListingCardItem id={item.id} />
      ))}
    </div>
  );
};

export default ListingCard;
