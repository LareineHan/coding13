import React ,{useEffect}from 'react';
import {logOut} from '../redux /Actions/authAction'
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
const LogOut = ({setLogIn}) => {
  const dispatch=useDispatch()
  useEffect(()=>{
   googleLogout()
  dispatch(logOut())
  setLogIn(false)
  },[])
  return (
    <div>
      
    </div>
  );
}

export default LogOut;
