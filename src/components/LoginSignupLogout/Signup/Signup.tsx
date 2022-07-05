import loginStyles from '../LoginSignup.module.css';
import AuthContext from '../../../context/UserAuthContext';
import { gql, useMutation } from '@apollo/client';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

      CreateUser({ variables: {data:data} }).then((res) => {
        setTokenLogin(res.data.createUser);
        navigator('/', { replace: true });
      });
    }
  };
  return (
    <div className="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
      <div className="text-md flex-col font-medium text-black mt-5">
        <h2 style={{ color: '#8E6161' }} className={'text-center'}>
          Coffee Time
        </h2>
        <h4 style={{ color: '#4B4B4B' }} className="text-center">
          Sign-up
        </h4>
        <br />
        <div className={loginStyles.flexColCenter}>
          {/* Mail */}
          <label className="self-center space-around" htmlFor="mail">
            Mail
          </label>
          <br />
          <input type="email" id="mail" ref={inputEmailRef} />
          <br />

          {/* First Name */}
          <label className="self-center space-around" htmlFor="firstName">
            First Name
          </label>
          <br />
          <input type="text" id="firstName" ref={inputFirstNameRef} />
          <br />

          {/* Last Name */}
          <label className="self-center space-around" htmlFor="lastName">
            Last Name
          </label>
          <br />
          <input type="text" id="lastName" ref={inputLastNameRef} />
          <br />

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="password" ref={inputPasswordRef} />
            <br />
            <label htmlFor="passwordRep">Repeat Password</label>
            <br />
            <input type="passwordRep" placeholder="password" ref={inputPasswordRepeatRef} />
            <br />
          </div>
          <button className={loginStyles.btnGreen + ' px-5 py-1 mt-3'} onClick={signupHandler}>
            {' '}
            Sign-up
          </button>
          <br />
          <button
            className={loginStyles.btnText + ' px-5 py-1 mt-3'}
            onClick={() => {
              navigator('/Login');
            }}
          >
            {' '}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
