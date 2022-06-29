import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddWorkout from './components/AddWorkout';
import Navbar from './components/Navbar';
import LoginPage from './LoginPage';
import WorkoutPage from './components/workoutpage/WorkoutPage';
const App = () => {
  


  return (
    <>
      <CssBaseline />
      <div className='red'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          {/*  */}
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='/workout/:workoutId' element={<WorkoutPage />} />
          <Route path='/delph' element={<AddWorkout />} />
          <Route path='/loginpage' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
};

export default App;
