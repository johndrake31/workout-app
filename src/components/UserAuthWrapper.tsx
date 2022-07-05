import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/UserAuthContext";

type TypeUserAuthWrapperProps = {
  children: React.ReactNode; // 👈️ added type for children
};

const UserAuthWrapper = (props:TypeUserAuthWrapperProps)=>{
    const { isLogged } = useContext(AuthContext);
    let navigate = useNavigate();
  
    useEffect(()=>{
      if(!isLogged){
        navigate('/Login', { replace: true });
      }
    }, [isLogged, navigate])

    return (
      <>
        {props.children}
      </>
    )

}

export default UserAuthWrapper;