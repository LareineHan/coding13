import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const AdventureCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div style={{marginBottom: "5rem", width: "58vw", height: "60vh"}}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{width: "62vw", height: "60vh"}} alt='adventure-img-1' src='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/493000/493900-marion-oliver-mccaw-hall.jpg'/>
        <Carousel.Caption>
            <h3>Seattle, WA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width: "62vw", height: "60vh"}} alt='adventure-img-2' src='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/497000/497565-harborwalk-village.jpg'/>
        <Carousel.Caption>
          <h3>Florida, USA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width: "62vw", height: "60vh"}} alt='adventure-img-3' src='https://a.cdn-hotels.com/gdcs/production40/d158/6f802f29-e39f-4ee2-879c-348107d2d263.jpg'/>
        <Carousel.Caption>
            <h3>Las Vegas, NV</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default AdventureCarousel
