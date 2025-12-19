/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useState,useEffect, useContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    useEffect(() => {
   const token = localStorage.getItem("token");
    setIsAuth(!!token);
    }, [])
    const login = (email,password) =>{
        if(email==="test",password==="test"){
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("token",token);
            setIsAuth(true)
            return true
        }
        return false;
    }
    const logout =()=>{
        localStorage.clear();
        setIsAuth(false)
    }
    return (
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=> useContext(AuthContext)