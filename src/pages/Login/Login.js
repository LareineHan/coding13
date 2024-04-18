import React from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { googleLogin } from '../../redux/Actions/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
     
      dispatch(googleLogin({token:credentialResponse.credential}))
     navigate('/')
    },
    onError: () => {
      console.log('Login Failed');
    },
  });


  
}

export default Login;