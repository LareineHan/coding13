import React from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
const Login = () => {
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });
const handleGoogleLogin =async(googleData)=>{
console.log('hh',googleData)
}

  return (
    <div>
  


    </div>
  );
}

export default Login;
