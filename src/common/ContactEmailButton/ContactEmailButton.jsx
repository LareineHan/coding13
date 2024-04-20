import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../ContactEmailButton/ContactEmailButton.style.css";

const ContactEmailButton = ({ title }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        className='btn_contact_eamil'
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title ? title : "Email"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>name</Form.Label>
              <Form.Control type='text' placeholder='name' autoFocus />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='email@example.com'
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label></Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            className='btn_contact_close'
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant='primary'
            className='btn_contact_send'
            onClick={handleClose}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactEmailButton;
