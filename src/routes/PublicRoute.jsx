import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"

const PublicRoute = ({children}) =>{
 const {isAuth} = useAuth();
 return isAuth ? <Navigate to="/" />:children
}
export default PublicRoute;