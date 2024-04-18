import React from 'react'
import "./AppLayout.style.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';
import { Nav,Navbar ,Button} from 'react-bootstrap';
import GoToMyPage from './components/GoToMyPage';
const AppLayout = () => {
    const login = sessionStorage.getItem("token")
    const name = sessionStorage.getItem('name')
  return (
    <div>
        <div className='appLayout-container'>
            <div className='appLayout-left-section'>
                <div className='appLayout-left-section-menu'>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Rental Tools</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Help Center</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <button className='appLayout-left-section-language'>English</button>
            </div>

            <div className='appLayout-center-section'>Apartment</div>

            <div className='appLayout-right-section'>
            <Nav>
          <GoToMyPage to="/myPage">{name}</GoToMyPage>
          <Nav.Link eventKey={2} href={!login?'/login':'/logOut'}>
          <Button  className='loginBtn' variant='outline-dark'>

          <img className='googlelogo' src={'./image/googlelogo.png'} />
        {login?'Log Out': 'Log In'}
          </Button>
         
          </Nav.Link>
        </Nav>
                <div className='appLayout-right-section-wrap'>
                    <button className='appLayout-right-section-add-property'>Add a Property</button>
                </div>
            </div>
        </div>
        <div style={{padding: "4.6rem", paddingTop: "1rem", paddingBottom: "2rem", backgroundColor: "#666", position: "absolute", right: "0", top: "0"}}></div>
      <Outlet/>
    </div>
  )
}

export default AppLayout
