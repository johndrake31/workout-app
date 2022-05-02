import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddWorkout from './components/AddWorkout';
import Navbar from './components/Navbar';
import LoginPage from './LoginPage';
const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='addworkout' element={<AddWorkout />} />
          <Route path='loginpage' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
