import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Banner.style.css"

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-wrap'>
            <h1>Discover Your New Home</h1>
            <p>We've helped millions of renters find their perfect fit.</p>
            
            <div className='banner-wrap-search'>
                <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Search by Location or Point of Interest" />
                </Form.Group>

                <Button variant="success" type="submit">search</Button>
            </div>
      </div>
    </div>
  )
}

export default Banner
