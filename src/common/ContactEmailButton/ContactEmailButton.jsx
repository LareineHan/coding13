import React from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";

import { useState } from "react";
import "../ContactEmailButton/ContactEmailButton.style.css";

// const ContactEmailButton = ({ title }) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button
//         variant='primary'
//         onClick={handleShow}
//         className='btn_contact_eamil'
//       >
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{title ? title : "Email"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
//               <Form.Label>name</Form.Label>
//               <Form.Control type='text' placeholder='name' autoFocus />
//             </Form.Group>
//             <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type='email'
//                 placeholder='email@example.com'
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className='mb-3'
//               controlId='exampleForm.ControlTextarea1'
//             >
//               <Form.Label></Form.Label>
//               <Form.Control as='textarea' rows={3} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant='secondary'
//             className='btn_contact_close'
//             onClick={handleClose}
//           >
//             Close
//           </Button>
//           <Button
//             variant='primary'
//             className='btn_contact_send'
//             onClick={handleClose}
//           >
//             Send
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default ContactEmailButton;

const ContactEmailButton = ({ title }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    // Reset form fields and submission status when closing the modal
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  const handleShow = () => setShow(true);

  const handleFormSubmit = () => {
    // Perform form validation
    if (email && message) {
      // Simulate sending form data (you can replace this with actual API call)
      // For demonstration, we'll just set the form as submitted after a short delay
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    }
  };

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        className='btn_contact_email'
      >
        Email
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
          {submitted && (
            <Alert variant='success' className='mt-3'>
              Thank you. We will get back to you soon!
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={handleFormSubmit}
            className='btn_contact_send'
          >
            Send
          </Button>
          <Button
            variant='secondary'
            onClick={handleClose}
            className='btn_contact_close'
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactEmailButton;
