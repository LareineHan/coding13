import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ExploreCard.style.css"

const ExploreCard = () => {

  return (
    <div>
        <Card className='explore-card'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default ExploreCard
