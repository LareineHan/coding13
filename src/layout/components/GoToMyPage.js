import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../../node_modules/serve-index/public/style.css';

const GoToMyPage = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Nav.Link onClick={handleClick} style={{color:'lightGray',fontSize:'15px',cursor:'pointer'}}>
     {children}<span></span> 
    </Nav.Link>
  );
}

export default GoToMyPage;
