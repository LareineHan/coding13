import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import GoToMyPage from "./components/GoToMyPage";
import google from "../images/googlelogo.png";
import logoDark from "../images/logo-dark.png";
import "./AppLayout.style.css";
import { useSelector } from "react-redux";
import "../../node_modules/serve-index/public/style.css";
import { Link } from "react-router-dom";
const AppLayout = () => {
  let username;

  const { userInfo } = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token");
  const name = sessionStorage.getItem("name");

  if (userInfo?.name !== undefined) {
    username = userInfo?.name;
  } else {
    username = name;
  }

  return (
    <>
      <Navbar bg='light' className='main-navbar' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown title='Menu' id='basic-nav-dropdown'>
                <NavDropdown.Item>Rental Tools</NavDropdown.Item>
                <NavDropdown.Item>Help Center</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href='/about'
                  className='text-decoration-none '
                >
                  <a href='/about'>About Us</a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav id='basic-navbar-nav'>
              <Navbar.Text>
                <FontAwesomeIcon icon={faGlobe} className='english' />
                &nbsp;&nbsp;English
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href='/' className='logo-area'>
            <img
              src={logoDark}
              width='220px'
              className='d-inline-block align-top'
              alt='logo'
            />
          </Navbar.Brand>

          <Navbar.Collapse className='justify-content-end'>
            <Nav id='basic-navbar-nav' className='nav-extra-item'>
              <Navbar.Text href='/properties' className='text-decoration-none '>
                <a href='/properties'>Properties</a>
              </Navbar.Text>
            </Nav>

            <Nav id='basic-navbar-nav' className='login-menu'>
              {username ? (
                <NavDropdown title={username} id='basic-nav-dropdown'>
                  <NavDropdown.Item as={Link} to='/myPage'>
                    Go to My Page
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/logout'>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to='/login' className='nav-link d-flex'>
                  Log In
                  <img
                    className='googlelogo'
                    src={google}
                    alt='logo'
                    style={{ width: "15px", height: "15px", marginLeft: "5px" }}
                  />
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='outlet_container'>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
