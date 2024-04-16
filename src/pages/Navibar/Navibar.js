import React,{useEffect,useState} from 'react';
import './Navibar.css'
import { Container,Nav,Navbar ,Button} from 'react-bootstrap';
import GoToMyPage from './components/GoToMyPage';
import { useSelector} from 'react-redux';

const Navibar = ({setLogin ,login}) => {
  const { userInfo } = useSelector(state => state.user);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        
        </Nav>
        <Nav>
          <GoToMyPage to="/myPage">{userInfo?.name}</GoToMyPage>
          <Nav.Link eventKey={2} href={!login?'/login':'/logOut'}>
          <Button  className='loginBtn' variant='outline-dark'>

          <img className='googlelogo' src={'./image/googlelogo.png'} />
        {login?'Log Out': 'Log In'}
          </Button>
         
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navibar;