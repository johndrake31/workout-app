import loginStyles from '../LoginSignup.module.css';
import AuthContext from '../../../context/UserAuthContext';
import { gql, useMutation } from '@apollo/client';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data)
  }
`;

export interface ICreateUser {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

const Signup = () => {
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputFirstNameRef = useRef<HTMLInputElement>(null);
  const inputLastNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputPasswordRepeatRef = useRef<HTMLInputElement>(null);

  //   const [formData, setFormData] = useState<ICreateUser| null>()
  const [CreateUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => console.log('Data from mutation', data),
    onError: (error) => console.error('Error creating a post', error),
  });

  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const { setTokenLogin } = useContext(AuthContext);

  const navigator = useNavigate();

  const signupHandler = () => {
    if (
      inputEmailRef.current?.value &&
      inputFirstNameRef.current?.value &&
      inputLastNameRef.current?.value &&
      inputPasswordRef.current?.value &&
      inputPasswordRepeatRef.current?.value &&
      inputPasswordRef.current?.value === inputPasswordRepeatRef.current?.value
    ) {
      const data: ICreateUser = {
        password: inputPasswordRef.current.value,
        email: inputEmailRef.current.value,
        firstName: inputFirstNameRef.current.value,
        lastName: inputLastNameRef.current.value,
      };

      CreateUser({ variables: { data: data } }).then((res) => {
        setTokenLogin(res.data.createUser);
        navigator('/', { replace: true });
      });
    }
  };
  return (
    <div className={'text-light p-4 ' + loginStyles.background}>
        <h2 className='text-center text-white mb-5'>Pump Up Time</h2>
        <h3 className='text-center text-white mb-5'>Login</h3>

        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {/* Email */}
          <Grid item xs={6} md={6}>
            <label className='' htmlFor='mail'>
              E-Mail
            </label>
          </Grid>
          <Grid item xs={6} md={6}>
            <input type='email' id='mail' ref={inputEmailRef} />
          </Grid>

          {/* First Name */}
          <Grid item xs={6} md={6}>
            <label className='self-center space-around' htmlFor='firstName'>
              First Name
            </label>
          </Grid>
          <Grid item xs={6} md={6}>
            <input type='text' id='firstName' ref={inputFirstNameRef} />
          </Grid>

          {/* Last Name */}
          <Grid item xs={6} md={6}>
            <label className='self-center space-around' htmlFor='lastName'>
              Last Name
            </label>
          </Grid>
          <Grid item xs={6} md={6}>
            <input type='text' id='lastName' ref={inputLastNameRef} />
          </Grid>

          {/* Password */}
          <Grid item xs={6} md={6}>
            <label htmlFor='password'>Password</label>
          </Grid>
          <Grid item xs={6} md={6}>
            <input
              type='text'
              placeholder='password'
              ref={inputPasswordRef}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <label htmlFor='passwordRep'>Repeat Password</label>
          </Grid>
          <Grid item xs={6} md={6}>
            <input
              type='passwordRep'
              placeholder='password'
              ref={inputPasswordRepeatRef}
            />
          </Grid>

          <Grid item xs={6} md={6}>
          <button
            className={loginStyles.btnGreen + ' px-5 py-1 mt-3'}
            onClick={signupHandler}
          >
            {' '}
            Sign-up
          </button>
          </Grid>
          <Grid item xs={6} md={6}>
          <button
            className={loginStyles.btnText + ' px-5 py-1 mt-3'}
            onClick={() => {
              navigator('/loginpage');
            }}
          >
            {' '}
            Login
          </button>
          </Grid>

          <Grid item xs={6} md={6}></Grid>
          <Grid item xs={6} md={6}></Grid>
        </Grid>
    </div>
  );
};
export default Signup;
