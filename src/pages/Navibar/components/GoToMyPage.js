import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GoToMyPage = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Nav.Link onClick={handleClick}>
      {children}
    </Nav.Link>
  );
}

export default GoToMyPage;
