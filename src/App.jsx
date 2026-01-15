
// import './App.css'
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
