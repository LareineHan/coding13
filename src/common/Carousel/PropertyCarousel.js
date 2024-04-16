import React from "react";
import "./PropertyCarousel.style.css";
import { Carousel } from "react-bootstrap";

const PropertyCarousel = ({ images }) => {
  if (!images || !Array.isArray(images)) {
    return <div>No images available</div>;
  }
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={5000}>
          <img
            className="property-carousel-img"
            src={image.link}
            alt={`Slide ${index + 1}`}
          />

          <Carousel.Caption>
            <h3>{image.caption}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PropertyCarousel;
