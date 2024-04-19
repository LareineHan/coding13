import React,{useState} from "react";
import "./AppLayout.style.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import GoToMyPage from "./components/GoToMyPage";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import '../../node_modules/serve-index/public/style.css';


const AppLayout = () => {
let username;

const {userInfo}=useSelector(state=>state.user)
const token = sessionStorage.getItem('token')
const name = sessionStorage.getItem('name')

if(userInfo?.name !== undefined){
  username = userInfo?.name
}else{
  username = name
}
  return (
    <div>
      <div className='appLayout-container'>
        <div className='appLayout-left-section'>
          <div className='appLayout-left-section-menu'>
            <NavDropdown title='Menu' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Rental Tools
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Help Center
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/properties'>properties</NavDropdown.Item>
            </NavDropdown>
          </div>
          <button className='appLayout-left-section-language'>English</button>
        </div>

        <div className='appLayout-center-section'>Apartment</div>

        <div className='appLayout-right-section'>
          <div className='appLayout-right-section-login'>
        
        
          </div>

          <div className='appLayout-right-section-wrap'>
            {/* <button className='appLayout-right-section-add-property'>
              another btn
            </button> */}
            
          </div>
        </div>
      </div>
      <div
        style={{
          display:'flex',
         justifyContent:'flex-end',

         borderRadius:'10px',
         marginTop:'10px',
         marginRight:'10px',
          padding: "1.1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          backgroundColor: "#666",
          position: "absolute",
          right: "0",
          top: "0",
          
        }}
      >
<button   className={username ?'appLayout-right-section-add-property':'none'}>
              <GoToMyPage to='/myPage'>{username}'Page</GoToMyPage>
            </button>
            <a
              className='appLayout-right-section-add-property'
              
              href={!username  ? "/login" : "/logOut"}
              style={{textDecorationLine:'none',fontSize:'15px',color:'white'}}
            >
              {username  ? "Log Out" : "Log In"}
              <span  style={{paddingLeft:'10px',cursor:'pointer'}} >
                <img
                  className='googlelogo'
                  src={"./image/googlelogo.png"}
                  alt='logo'
                 
                 
                />
              </span>
            </a>

      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
