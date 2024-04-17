import React from 'react'
import InformationCard from '../InformationCard/InformationCard'
import "./Information.style.css"

const Information = () => {
  return (
    <div className='information-container'>
        <h2>Renting Made Simple</h2>
        <p>Search by city, neighborhood, or postal code, browse high-quality listings, and find the perfect place to call home.</p>
        <InformationCard/>
        <p style={{fontWeight: "600", marginTop: "4rem"}}>
            Search listings including&ensp;
            <a href="https://www.apartments.com/" title="Discover your new apartment">apartments</a>,&ensp;
            <a href="https://www.apartments.com/houses/" title="Discover your new house">houses</a>,&ensp;
            <a href="https://www.apartments.com/condos/" title="Discover your new condo">condos</a>,
            and&ensp;
            <a href="https://www.apartments.com/townhomes/" title="Discover your new townhome">townhomes</a>&ensp;
            available for rent.
            <p>You'll find your next home, in any style you prefer.</p>
        </p>
    </div>
  )
}

export default Information
