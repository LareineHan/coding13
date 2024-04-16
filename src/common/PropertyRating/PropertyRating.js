import React from "react";
import "./PropertyRating.style.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const PropertyRating = ({ averageRating, totalReviews }) => {
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
    <div className="rating-box">
      {[...Array(MAX_STARS)].map((_, index) => renderStar(index))}{" "}
      <span>{averageRating.toFixed(1)}</span>{" "}
      <span className="total-reviews">({totalReviews} reviews)</span>
    </div>
  );
};

export default PropertyRating;
