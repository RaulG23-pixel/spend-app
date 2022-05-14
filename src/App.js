import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Spends from "./pages/Spends";
import Error404 from "./pages/Error404";
import StoreProvider from "./store/StoreProvider";
import Profile from "./pages/Profile";
import Saves from "./pages/Saves";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <main>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/spends" component={Spends} />
              <Route exact path="/saves" component={Saves} />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          </main>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
