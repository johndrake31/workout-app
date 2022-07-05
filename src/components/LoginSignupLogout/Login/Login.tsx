import { useContext, useRef, useState } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import loginStyles from '../LoginSignup.module.css';
import AuthContext from '../../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';

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

  const [ LoginUser, {data: userData, loading: userLoading, error: userError} ] = useLazyQuery(LOGIN_USER_BY_EMAIL);

  

  

  const loginHandler = () => {
    const passwordRef = inputPasswordRef.current?.value
    const email = inputEmailRef.current?.value
    if (passwordRef && email) {
      LoginUser({ variables: { password: passwordRef, email: email } })
      .then((res)=>{
        setTokenLogin(res.data.loginUserByEmail);
        navigator('/', { replace: true });
      }).catch((err)=> {
        setIsError(true)
        console.log(err)})
    }
    //add else statement for password and email err

  };

  const showPasswordHandler = () => {
    if(inputPasswordRef.current?.value){
      setPassword(inputPasswordRef.current.value);
      const bool = !show;
      setShow(bool);
    } 
  };


  return (
    <div className="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
      <div className="text-md flex-col font-medium text-black mt-5">
        <h2 style={{ color: '#8E6161' }} className={'text-center'}>
          Coffee Time
        </h2>
        <h4 style={{ color: '#4B4B4B' }} className="text-center">
          Connexion
        </h4>
        <br />
        <div className={loginStyles.flexColCenter}>
          <label className="self-center space-around" htmlFor="mail">
            Mail
          </label>
          <br />
          <input data-testid="login-email-test" type="text" id="mail"  ref={inputEmailRef}/>
          <br />

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input data-testid="login-password-test" type="password" placeholder="password" ref={inputPasswordRef}/>
            <VisibilityOffOutlinedIcon onClick={showPasswordHandler} />
            <br />
            {show && <span className="">{password}</span>}
          </div>
          <button data-testid="login-enter-btn-test" className={loginStyles.btnGreen + ' px-5 py-1 mt-3'} onClick={loginHandler}>
            {' '}
            Enter
          </button>
          <br />
          <button className={loginStyles.btnText + ' px-5 py-1 mt-3'} onClick={()=>{navigator('/SignUp')}} >
            {' '}
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
