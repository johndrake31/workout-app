import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/UserAuthContext';

const Logout = () => {
  const { removeTokenLogout } = useContext(AuthContext);
  const navigator = useNavigate();

  useEffect(() => {
    removeTokenLogout();
    navigator('/home', { replace: true });
  }, []);
  return (
    <>
      <h1>Logging out...</h1>
    </>
  );
};

export default Logout;
