import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddWorkout from './components/AddWorkout';
import Navbar from './components/Navbar';
import LoginPage from './LoginPage';
import WorkoutPage from './components/workoutpage/WorkoutPage';
import Login from './components/LoginSignupLogout/Login/Login';
import Signup from './components/LoginSignupLogout/Signup/Signup';
import UserAuthWrapper from './components/UserAuthWrapper';
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
            <UserAuthWrapper>
              <Route path='/addworkout' element={<AddWorkout />} />
            </UserAuthWrapper>
            <Route path='/loginpage' element={<Login />} />
            <Route path='/signuppage' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
