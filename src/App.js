import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <main>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exac path="/create/spend">
                <div></div>
              </Route>
              <Route exac path="/create/save">
                <div></div>
              </Route>
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
