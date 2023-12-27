import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import AddWorkout from './components/AddWorkout';
import Navbar from './components/Navbar';
import MyBigBad404 from './components/MyBigBad404';
import WorkoutPage from './components/workoutpage/WorkoutPage';
// import Login from './components/LoginSignupLogout/Login/Login';
// import Signup from './components/LoginSignupLogout/Signup/Signup';
import UserAuthWrapper from './components/UserAuthWrapper';
import Logout from './components/LoginSignupLogout/Logout';
const App = () => {
  return (
    <>
      <CssBaseline />
      <div className='red'>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            {/*  */}
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/workout/:workoutId' element={<WorkoutPage />} />

            {/* <Route
              path='/addworkout'
              element={
                <UserAuthWrapper>
                  <AddWorkout />
                </UserAuthWrapper>
              }
            /> */}

            {/* <Route path='/loginpage' element={<Login />} />
            <Route path='/signuppage' element={<Signup />} /> */}
            <Route
                path="/Logout"
                element={
                  <UserAuthWrapper>
                    <Logout />
                  </UserAuthWrapper>
                }
              />
              <Route path="*" element={<MyBigBad404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
