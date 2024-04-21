import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./AdventureCarousel.style.css"

const AdventureCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div className='adventure-carousel-container'>
    <Carousel className='adventure-carousel-box' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='adventure-carousel-img' alt='adventure-img-1' src='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/493000/493900-marion-oliver-mccaw-hall.jpg'/>
        <Carousel.Caption>
            <h3 className='main-page-carousel-city-name'>Seattle, WA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='adventure-carousel-img' alt='adventure-img-2' src='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/497000/497565-harborwalk-village.jpg'/>
        <Carousel.Caption>
          <h3 className='main-page-carousel-city-name'>Florida, USA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='adventure-carousel-img' alt='adventure-img-3' src='https://a.cdn-hotels.com/gdcs/production40/d158/6f802f29-e39f-4ee2-879c-348107d2d263.jpg'/>
        <Carousel.Caption>
            <h3 className='main-page-carousel-city-name'>Las Vegas, NV</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default AdventureCarousel
