import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
	return (
	  <Routes>
		<Route path="/signin.html" element={<Login />} />
		<Route path="/signup.html" element={<Registration />} />
		<Route path="/main.html" element={<HomePage />} />
	  </Routes>
	);
  }

export default App