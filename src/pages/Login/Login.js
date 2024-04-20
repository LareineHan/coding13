import { useGoogleOneTapLogin } from '@react-oauth/google';
import { googleLogin } from '../../redux/Actions/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useGoogleOneTapLogin({
		onSuccess: async (credentialResponse) => {
			try {
				await dispatch(googleLogin({ token: credentialResponse.credential }));
				return navigate('/');
			} catch (error) {
				console.error('Navigation error:', error);
			}
		},
		onError: () => {
			console.log('Login Failed');
		},
	});
};

export default Login;
