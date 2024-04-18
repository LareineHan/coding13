import React from 'react'
import ExploreCard from '../ExploreCard/ExploreCard';
import "./Explore.style.css"
import Button from 'react-bootstrap/Button';

const Explore = () => {
  const searchParams = {
    location: 'new-york',
    minRent: '1500',
    maxRent: '3000',
    page: '1',
    sort: 'default'
  }
  
  return (
    <div className='explore-container'>
      <h2>Explore Rentals in New York, NY</h2>
      <div className='explore-cards' style={{display: "flex", flexDirection: "column"}}>
        <ExploreCard props={searchParams}/>
        {/* <ExploreCard props={searchParams}/> */}
      </div>
      <Button variant="success" type="submit" className='explore-more-btn'>View More</Button>
    </div>
  )
}

export default Explore