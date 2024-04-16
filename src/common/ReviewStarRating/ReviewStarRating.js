import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ReviewStarRating = ({ averageRating }) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;

  const renderStar = (index) => {
    if (index < fullStars) {
      return <BsStarFill key={index} />;
    } else if (hasHalfStar && index === fullStars) {
      return <BsStarHalf key={index} />;
    } else {
      return <BsStar key={index} />;
    }
  };

  return (
    <div>{[...Array(MAX_STARS)].map((_, index) => renderStar(index))}</div>
  );
};

export default ReviewStarRating;
