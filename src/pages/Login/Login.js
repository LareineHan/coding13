import React from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { googleLogin } from '../../redux/Actions/authAction';
import { useDispatch } from 'react-redux';
const Login = ({setLogIn}) => {
  const dispatch=useDispatch()
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
     
      dispatch(googleLogin({token:credentialResponse.credential}))
    },
    onError: () => {
      console.log('Login Failed');
    },
  });


  return (
    <div>
  


    </div>
  );
}

export default Login;