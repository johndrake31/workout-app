import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import AuthContext from '../context/UserAuthContext';
import classes from './Navbar.module.css';

const Navbar = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Container sx={{ m: 2 }}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? classes['button-52-active'] : classes['button-52']
        }
      >
        <Button
          sx={{
            backgroundColor: '#100f0f',
            'text-decoration': 'none',
            color: 'white',
            mr: 2,
          }}
        >
          Home
        </Button>
      </NavLink>
      {isLogged && (
        <NavLink
          to='/addworkout'
          className={({ isActive }) =>
            isActive ? classes['button-52-active'] : classes['button-52']
          }
        >
          <Button
            sx={{
              backgroundColor: '#100f0f',
              'text-decoration': 'none',
              color: 'white',
              mr: 2,
            }}
          >
            Add Workout
          </Button>
        </NavLink>
      )}
      {!isLogged && (
        <>
          <NavLink
            to='/loginpage'
            className={({ isActive }) =>
              isActive ? classes['button-52-active'] : classes['button-52']
            }
          >
            <Button
              sx={{
                backgroundColor: '#100f0f',
                'text-decoration': 'none',
                color: 'white',
                mr: 2,
              }}
            >
              Login
            </Button>
          </NavLink>
          <NavLink
            to='/signuppage'
            className={({ isActive }) =>
              isActive ? classes['button-52-active'] : classes['button-52']
            }
          >
            <Button
              sx={{
                backgroundColor: '#100f0f',
                'text-decoration': 'none',
                color: 'white',
                mr: 2,
              }}
            >
              Sign-up
            </Button>
          </NavLink>
          
        </>
      )}
      {isLogged && (
        <NavLink
          to='/Logout'
          className={({ isActive }) =>
            isActive ? classes['button-52-active'] : classes['button-52']
          }
        >
          <Button
            sx={{
              backgroundColor: '#100f0f',
              'text-decoration': 'none',
              color: 'white',
              mr: 2,
            }}
          >
            Logout
          </Button>
        </NavLink>
      )}
    </Container>
  );
};

export default Navbar;
