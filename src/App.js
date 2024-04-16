import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Nav from './components/Nav';
import Login from './Login';
function App() {
  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
