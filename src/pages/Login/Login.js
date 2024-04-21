import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useState ,useEffect} from 'react';
import { googleLogin } from '../../redux/Actions/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import './Login.css';
const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	

	
	useGoogleOneTapLogin({
		onSuccess: async (credentialResponse) => {
			try {
				await dispatch(googleLogin({ token: credentialResponse?.credential }));
				return navigate('/');
			} catch (error) {
				console.error('Navigation error:', error);
			}
		},
		onError: () => {
			console.log('Login Failed');
		},
	});
 
	
	return(
		<div style={{backgroundColor:'#198754',color:'white'}} className='Login' >
			 
			 <Spinner animation="grow" />
		</div>
	)
};

export default Login;
