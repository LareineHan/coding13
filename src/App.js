import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import PropertyDetailPage from './pages/PropertyDetail/PropertyDetailPage';
import Listing from './pages/Listing/Listing';
import AppLayout from './layout/AppLayout';
import Mainpage from './pages/Main/Mainpage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<Mainpage />} />
				<Route path='/list' element={<Listing />} />
				<Route path='/properties/:id' element={<PropertyDetailPage />} />
			</Route>
		</Routes>
	);
}

export default App;
