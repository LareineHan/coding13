import React from "react";
import "./Contact.style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const Contact = ({ contact }) => {
  return (
    <Container className="contact-container">
      <Row className="contactName-logo">
        <h2>Contact</h2>
        <Col xs={8}>
          <h3>{contact.name}</h3>
        </Col>
        <Col className="contact-logo">
          <img
            src={contact.logo}
            className="contact-logo-img"
            alt={contact.name}
          />
        </Col>
        <Col>
          <p>{contact.phone}</p>
        </Col>
      </Row>{" "}
      <Button className="message-btn">Message</Button>
    </Container>
  );
};

export default Contact;
