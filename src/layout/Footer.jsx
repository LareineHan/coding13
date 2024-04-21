import React from 'react'
import "./Footer.style.css"
import { Container, Row, Col } from 'react-bootstrap'
import logoDark from '../images/logo-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className='footer-container'>

    <Container style={{padding: "2rem 1rem"}}>

      {/* logo */}
        <Row>
          <Col>
            <img style={{width: "13rem"}} alt='footer-logo' src={logoDark}/>
          </Col>
        </Row>

      {/* contents */}
        <Row className='footer-second-section'>
          <Col className='footer-second-section-content-part' md={12}>
            <div className='footer-second-section-content'>
              <h6>ADVERTISERS</h6>
              <p className='footer-content-list'>
                <div>Advertise</div>
                <div>Add a Property</div>
                <div>Customer Portal</div>
              </p>
            </div>

            <div className='footer-second-section-content'>
              <h6>SEARCHES</h6>
              <p className='footer-content-list'>
                <div>Newest Rentals</div>
                <div>Open Houses</div>
                <div>Neighborhoods</div>
              </p>
            </div>

            <div className='footer-second-section-content'>
              <h6>LANDLORDS</h6>
              <p className='footer-content-list'>
                <div>List a Property</div>
                <div>My Listings</div>
                <div>Prices</div>
              </p>
            </div>

            <div className='footer-second-section-content'>
              <h6>FAQ</h6>
              <p className='footer-content-list'>
                <div>About Us</div>
                <div>Contact Us</div>
                <div>Blog</div>
              </p>
            </div>

          </Col>
          <Col className="footer-second-section-icon-part" md={12}>
          <FontAwesomeIcon className="footer-second-section-icon" icon={faFacebookF} size="2x"/>
          <FontAwesomeIcon className="footer-second-section-icon" icon={faInstagram} size="2x"/>
          <FontAwesomeIcon className="footer-second-section-icon" icon={faXTwitter} size="2x"/>
          <FontAwesomeIcon className="footer-second-section-icon" icon={faTiktok} size="2x"/>
          </Col>

        </Row>

      {/* copyright */}
        <Row className='footer-third-section'>
          <Col>
          <div style={{border: "0.5px solid white", marginBottom: "0.5rem"}}></div>
          <div>Copyright &copy;2024 Rent React, Inc. All rights reserved. <span>Terms of Use</span> | <span>Privacy Policy</span></div>
          </Col>

        </Row>

    </Container>



    </div>
  )
}

export default Footer
