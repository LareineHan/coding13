import React from "react";
import "./Contact.style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import contactIcon from "../Icons/telephone-call.png";

const Contact = ({ contact }) => {
  return (
    <Container className="contact-container">
      <h2>
        Contact{" "}
        <img src={contactIcon} alt="contact icon" className="contactIcon" />
      </h2>
      <Row className="contactName-logo">
        <Col xs={8} md={9}>
          <h3>{contact.name}</h3>
        </Col>
        <Col md={3} className="contact-logo">
          <img
            src={contact.logo}
            className="contact-logo-img"
            alt={contact.name}
          />
        </Col>
        <Col md={12}>
          <p>{contact.phone}</p>
        </Col>
      </Row>{" "}
      <Button className="contact-message-btn">Message</Button>
    </Container>
  );
};

export default Contact;
