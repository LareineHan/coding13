import React ,{useEffect}from 'react';
import {logOut} from '../redux/Actions/authAction'
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const LogOut = ({setLogIn}) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
   googleLogout()
  dispatch(logOut())
  setLogIn(false)
  navigate('/')
  },[])
  return (
    <div>
      
    </div>
  );
}

export default LogOut;
