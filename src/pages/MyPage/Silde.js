import React from 'react';
import Carousel from "react-multi-carousel";
import { responsive } from '../../utils/responsive';
import "react-multi-carousel/lib/styles.css";
import SlideCard from './SlideCard';

const Slide = ({ data }) => {
  console.log(data, 'data');
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <div style={{ height: '400px' }}>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {data.map((item, index) => (
          <SlideCard key={index} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

export default Slide;