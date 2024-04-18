import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import PropertyDetailPage from './pages/PropertyDetail/PropertyDetailPage';
import Listing from './pages/Listing/Listing';
import AppLayout from './layout/AppLayout';
import Mainpage from './pages/Main/Mainpage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import MyPage from "./pages/MyPage/MyPage";
import Login from "./pages/Login/Login";
import LogOut from "./pages/LogOut";
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<AppLayout />} className='app-layout'>
					<Route index element={<Mainpage />} className='main-page' />
					<Route path='/properties'>
						<Route index element={<Listing />} />
						<Route path=':id' element={<PropertyDetailPage />} />
						<Route path="/myPage" element={<MyPage />}/>
       		 	<Route path="/login" element={<Login setLogIn={setLogin}/>}/>
						<Route path="/logout" element={<LogOut setLogIn={setLogin}/>}/>
					</Route>
				</Route>
				<Route path='*' element={<NotFoundPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
