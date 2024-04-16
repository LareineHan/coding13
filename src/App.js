import './App.css';
import { useState ,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navibar from './pages/Navibar/Navibar';
import { useSelector } from 'react-redux';
import LogOut from './pages/LogOut';
import MyPage from './pages/MyPage/MyPage';
function App() {
	const {userInfo }= useSelector(state=>state.user)
  const [login,setLogin]=useState(false)
	
  useEffect(()=>{
    if(sessionStorage.getItem('token') !== null){
      setLogin(true)
			console.log(userInfo,'test')
    }else{
      setLogin(false)
    }
  },[userInfo])
	return (
	<div className='App'>
	<Navibar setLogin={setLogin} login={login}/>
		<Routes >
			<Route path="/login" element={<Login setLogIn={setLogin}/>}/>
			<Route path="/logout" element={<LogOut setLogIn={setLogin}/>}/>
			<Route path="/myPage" element={<MyPage />}/>
		</Routes>
	</div>
	)
}

export default App;
