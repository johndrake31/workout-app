import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <Container sx={{ m: 2 }} >
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? classes['button-52-active'] 
            : classes['button-52']
        }
      >
        <Button
          sx={{
            backgroundColor: "#100f0f",
            'text-decoration': 'none',
            color: 'white',
            mr: 2
          }}
        >
          Home
        </Button>
      </NavLink>
      <NavLink
        to='/addworkout'
        className={({ isActive }) =>
          isActive
            ? classes['button-52-active'] 
            : classes['button-52']
        }
      >
        <Button
          sx={{
            backgroundColor: "#100f0f",
            'text-decoration': 'none',
            color: 'white',
            mr: 2,
          }}
        >
          Add Workout
        </Button>
      </NavLink>
      <NavLink
        to='/loginpage'
        className={({ isActive }) =>
          isActive
            ? classes['button-52-active'] 
            : classes['button-52']
        }
      >
        <Button
          sx={{
            backgroundColor: "#100f0f",
            'text-decoration': 'none',
            color: 'white',
            mr: 2,
          }}
        >
          Login
        </Button>
      </NavLink>
    </Container>
  );
};

export default Navbar;
