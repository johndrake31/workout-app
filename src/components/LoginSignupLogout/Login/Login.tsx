import { useContext, useRef, useState } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import loginStyles from '../LoginSignup.module.css';
import AuthContext from '../../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import { Grid } from '@mui/material';

export const LOGIN_USER_BY_EMAIL = gql`
  query Query($password: String!, $email: String!) {
    loginUserByEmail(password: $password, email: $email)
  }
`;

const Login = () => {
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState('');

  const { setTokenLogin } = useContext(AuthContext);
  const navigator = useNavigate();

  const [
    LoginUser,
    { data: userData, loading: userLoading, error: userError },
  ] = useLazyQuery(LOGIN_USER_BY_EMAIL);

  const loginHandler = () => {
    const passwordRef = inputPasswordRef.current?.value;
    const email = inputEmailRef.current?.value;
    if (passwordRef && email) {
      LoginUser({ variables: { password: passwordRef, email: email } })
        .then((res) => {
          setTokenLogin(res.data.loginUserByEmail);
          navigator('/', { replace: true });
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        });
    }
    //add else statement for password and email err
  };

  const showPasswordHandler = () => {
    if (inputPasswordRef.current?.value) {
      setPassword(inputPasswordRef.current.value);
      const bool = !show;
      setTimeout(() => {
        !show && setShow(false);
      }, 2500);
      setShow(bool);
    }
  };

  return (
    <div className={'text-light p-4 ' + loginStyles.background}>
      <h2 className='text-center text-white mb-5'>Pump Up Time</h2>
      <h3 className='text-center text-white mb-5'>Login</h3>
      <Grid
        container
        spacing={2}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12}>
          <label className='' htmlFor='mail'>
            E-Mail
          </label>
        </Grid>
        <Grid item xs={12}>
          <input
            data-testid='login-email-test'
            type='text'
            id='mail'
            ref={inputEmailRef}
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor='password'>Password</label>
        </Grid>
        <Grid item xs={12}>

            <input
              data-testid='login-password-test'
              type={show ? 'text' : 'password'}
              placeholder='password'
              ref={inputPasswordRef}
            />
        </Grid>
        <Grid item xs={12}>
        <VisibilityOffOutlinedIcon
              onClick={showPasswordHandler}
            />
        </Grid>

        {/* {show && (
          <Grid item xs={12} md={12}>
            <span className=''>{password}</span>
          </Grid>
        )} */}

        <Grid item xs={6} md={6}>
          <button
            data-testid='login-enter-btn-test'
            className={loginStyles.btnGreen + ' px-5 py-1 mt-3'}
            onClick={loginHandler}
          >
            {' '}
            Enter
          </button>
        </Grid>
        <Grid item xs={6} md={6}>
          <button
            className={loginStyles.btnText + ' px-5 py-1 mt-3'}
            onClick={() => {
              navigator('/signuppage');
            }}
          >
            {' '}
            Sign-up
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
