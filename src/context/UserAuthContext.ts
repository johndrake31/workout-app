import { createContext } from 'react';


export type AuthContextObj = {
    userJwt: string | null, setTokenLogin: (token: string) => void, isLogged: boolean, removeTokenLogout: () => void
}

const AuthContext = createContext<AuthContextObj>({
    userJwt: '',
    isLogged: false,
    setTokenLogin: (token: string) => { },
    removeTokenLogout: () => { },
});


export default AuthContext;