import React, { useState } from "react";
import "./Contact.style.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Alert,
} from "react-bootstrap";
import contactIcon from "../Icons/telephone-call.png";

const Contact = ({ contact }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    // Reset form fields and submission status when closing the modal
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform any form validation here if needed

    // Simulate sending form data (you can replace this with actual API call)
    // For demonstration, we'll just set the form as submitted after a short delay
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Container className="contact-container">
      <h2>
        Contact{" "}
        <img src={contactIcon} alt="contact icon" className="contactIcon" />
      </h2>
      <Row className="contactName-logo">
        <Col xs={8} md={9}>
          <h3 className="contactPage-name">{contact.name}</h3>
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
      <Button className="contact-message-btn" onClick={handleShowForm}>
        Email
      </Button>
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title className="messageFormModal-title">
            Send Message
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              className="messageFormModal-sendBtn"
              variant="success"
              type="submit"
            >
              Send
            </Button>
          </Form>
          {submitted && (
            <Alert variant="success" className="mt-3 messageFormModal-success">
              Thank you. We will get back to you soon!
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
