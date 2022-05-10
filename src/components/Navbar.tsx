import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <Container>
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
            backgroundColor: 'black',
            'text-decoration': 'none',

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
            backgroundColor: 'black',
            'text-decoration': 'none',

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
            backgroundColor: 'black',
            'text-decoration': 'none',

          }}
        >
          Login
        </Button>
      </NavLink>
    </Container>
  );
};

export default Navbar;
