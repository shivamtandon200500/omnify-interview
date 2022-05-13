import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth=() =>{
    const auth=useSelector(state=>state.auth);
    const userToken=auth.token;
    if(userToken){
        return true;
    }
};

  const PrivateRoute = () => {
  const isAuth = useAuth();
    return isAuth ? <Outlet/>:
    <Navigate to="/signIn" replace/>
}

export default PrivateRoute