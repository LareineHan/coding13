import React from "react";
import { useGetImagesQuery } from "../../../../hooks/useGetPropertyImages";
import Carousel from "react-bootstrap/Carousel";

const CardCarousel = ({ id }) => {
  const { data, isLoading, isError } = useGetImagesQuery(id);
  console.log("property images:", data);

  if (isLoading) {
    return <div>Loading images...</div>;
  }

  if (isError) {
    return <div>Error fetching images: {isError.message}</div>;
  }

  return (
    <div>
      <Carousel fade interval={null}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={data?.data[0].link}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={data?.data[data.data.length - 1].link}
            alt='First slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CardCarousel;
