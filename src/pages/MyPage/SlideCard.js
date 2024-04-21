import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import PropertyImages from "../../common/PropertyImages/PropertyImages";
import { useGetImagesQuery } from "../../hooks/useGetPropertyImages";
import { useNavigate } from "react-router-dom";
import "./SlideCard.style.css";

const SlideCard = ({ item }) => {
  const { data, isLoading, isError } = useGetImagesQuery(item.id);
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/properties/${item?.id}`);
  };
  if (!data || data.length === 0) {
    return null;
  }
  console.log(item, "data");
  return (
    <Card className='mypage_card_carousel'>
      <Card.Img
        style={{ height: "10rem" }}
        variant='top'
        src={data.data[0].link}
      />
      <Card.Body>
        <Card.Title onClick={() => goToDetailPage()}>
          {item.name === undefined ? "APARTMENT" : `${item?.name}`}
        </Card.Title>
        <Card.Text>
          <p>{item?.bedRange}</p>
          <p>{item.rentRange}</p>
          <p>{item?.address.city}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SlideCard;
