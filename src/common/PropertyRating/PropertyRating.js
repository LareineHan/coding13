import React from "react";
import "./PropertyRating.style.css";
import fillStarIcon from "./Icons/star-fill.png";
import halfStarIcon from "./Icons/star-half-empty.png";
import starIcon from "./Icons/star-empty.png";

const PropertyRating = ({ averageRating, totalReviews }) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;

  const renderStar = (index) => {
    if (index < fullStars) {
      return (
        <img
          src={fillStarIcon}
          alt="fill star icon"
          className="RatingStar-icons"
          key={index}
        />
      );
    } else if (hasHalfStar && index === fullStars) {
      return (
        <img
          src={halfStarIcon}
          alt="half full star icon"
          className="RatingStar-icons"
          key={index}
        />
      );
    } else {
      return (
        <img
          src={starIcon}
          alt="star icon"
          className="RatingStar-icons"
          key={index}
        />
      );
    }
  };

  return (
    <div className="rating-container">
      {[...Array(MAX_STARS)].map((_, index) => renderStar(index))}{" "}
      <span className="avg-rating">{averageRating.toFixed(1)}</span>{" "}
      <span className="total-reviews">({totalReviews} reviews)</span>
    </div>
  );
};

export default PropertyRating;
