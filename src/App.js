import React, { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";
import Savings from "./pages/Savings";
import Signout from "./pages/Signout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getAccessToken } from "./utils/utils";
import { fetchUser } from "./store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const token = getAccessToken();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (token) {
      dispatch(fetchUser());
    }
  }, [token, isLogged, dispatch]);
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/login"
            render={(props) => {
              return !isLogged ? (
                <Login {...props} />
              ) : (
                <Redirect to="/dashboard" />
              );
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => {
              return token ? <Dashboard {...props} /> : <Redirect to="/home" />;
            }}
          />
          <Route
            exact
            path="/profile"
            render={(props) => {
              return token ? <Profile {...props} /> : <Redirect to="/home" />;
            }}
          />
          <Route
            exact
            path="/expenses"
            render={(props) => {
              return token ? <Expenses {...props} /> : <Redirect to="/home" />;
            }}
          />
          <Route
            exact
            path="/savings"
            render={(props) => {
              return token ? <Savings {...props} /> : <Redirect to="/home" />;
            }}
          />
          <Route exact path="/singout" component={Signout} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
