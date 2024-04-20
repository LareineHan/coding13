import React from 'react'
import AdventureCarousel from '../AdventureCarousel/AdventureCarousel'
// import AdventureCard from '../AdventureCard/AdventureCard'
import "./Adventure.style.css"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Adventure = () => {
  const token=sessionStorage.getItem('token')
  
  return (
    <div>
        <div className='adventure-container' style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            <div>
                <div style={{marginTop: "9rem", marginRight: "2rem", textAlign: "center"}}>
                    <h4>Get home recommendations</h4>
                    <p>Sign in for a more personalized experience.</p>
                    <Link to={!token?'/login':'/properties'} style={{textDecoration: 'none'}}>
                    <Button variant="outline-success" type="submit" className='adventure-more-btn'>{!token?'Sign in':'Go to Properties'}</Button>
                    </Link>
                </div>
            </div>
            <AdventureCarousel/>
        </div>
    </div>
  )
}

export default Adventure
