import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { storeContext } from "../store/StoreProvider";

function Navigation() {
  const [store, dispatch] = useContext(storeContext);
  const logOut = () => {
    dispatch({ type: "auth-logout" });
    localStorage.removeItem("access_token");
  };
  return (
    <div className="navigation">
      <div className="logo">
        <h2>
          <NavLink to="/">SpendApp</NavLink>
        </h2>
      </div>
      <ul className="nav_links">
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        {!store.user ? (
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        ) : (
          <button className="btn_logout" onClick={logOut}>
            Logout
          </button>
        )}
        {!store.user && (
          <li>
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
