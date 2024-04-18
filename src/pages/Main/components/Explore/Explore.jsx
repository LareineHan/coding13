import React from 'react'
import ExploreCard from '../ExploreCard/ExploreCard';
import "./Explore.style.css"
import Button from 'react-bootstrap/Button';


const Explore = () => {
  return (
    <div className='explore-container'>
      <h2>Explore Rentals in Mississauga, ON</h2>
      <div className='explore-cards'>
        <ExploreCard/>
        {/* <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/> */}
      </div>
      <Button variant="success" type="submit" className='explore-more-btn'>View More</Button>
    </div>
  )
}

export default Explore