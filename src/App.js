import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";
import Savings from "./pages/Savings";
import Signout from "./pages/Signout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/savings" component={Savings} />
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
