import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navb from './components/Nav/Navb';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Navb/>
      <Routes>
        <Route path="/" element={<Home/>}/>
 <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
