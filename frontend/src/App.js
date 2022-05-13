import './App.css';
import { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import {isUserLoggedIn} from "../src/redux/actions/auth,actions";
import SignIn from "../src/containers/SignIn/SignIn"
import SignUp from "../src/containers/SignUp/SignUp"
import Home from './containers/Home/Home';
import Calender from './containers/Calender/Calender';
function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const token=localStorage.getItem("token");
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [])

  return (
    <div className="App">
      <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
          <Route path='/calender' element={<Calender/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
