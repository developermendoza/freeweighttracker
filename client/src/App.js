import './App.css';
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import NotFoundPage from "./components/404/NotFoundPage";



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from  "react-redux";
import store from "./store";

// check for token to keep user logged in
if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000

  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());

    window.location.href = "./login"
  }
}

function App (){
  // console.log("props: ", props);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <Route path="*" component={NotFoundPage} /> 
          </Switch>
          {/* */}
        </div>
      </Router>
    </Provider>
  );
}

export default  App;
