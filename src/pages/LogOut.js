import React, { useEffect } from 'react';
import { logOut } from '../redux/Actions/authAction';
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = async () => {
      googleLogout();
     await dispatch(logOut()); 
      navigate('/');
     window.location.reload();
    
    };

    handleLogout();
  }, []);

  return <div />;
}

export default LogOut;
