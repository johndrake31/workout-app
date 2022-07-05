import { useState } from 'react';
import AuthContext from './UserAuthContext';

type TypeUserAuthContextProviderProps = {
  children: React.ReactNode; // 👈️ added type for children
};

const UserAuthContextProvider = (props: TypeUserAuthContextProviderProps) => {

  const [userJwt, setUserJwt] = useState<string| null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const addJwtTokenHandler = (token: string): void => {
    if(token){
      setUserJwt(token);
      setIsLogged(true)
    }
  };

  const removeTokenHandler = ()=>{
    setUserJwt(null);
    setIsLogged(false)
  }

  const contextValue = {
    userJwt: userJwt,
    isLogged: isLogged,
    setTokenLogin: addJwtTokenHandler,
    removeTokenLogout: removeTokenHandler,
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default UserAuthContextProvider;
