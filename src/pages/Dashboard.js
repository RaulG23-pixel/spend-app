import React, { useEffect, useState } from "react";
import Graphics from "../components/Graphics";
import Counters from "../components/Counters";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/userService";
import { setUser } from "../store/userSlice";
import "./css/dashboard.css";
import { Redirect } from "react-router-dom";

function Dashboard() {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const token = getAccessToken();
  const [notLogged, setNotLogged] = useState(false);

  useEffect(() => {
    if (token && !user) {
      const userToken = JSON.parse(token);
      getUser(userToken)
        .then((response) => {
          dispatch(setUser(response.data.user));
        })
        .catch((err) => console.log(err));
    }
    if (!token) {
      setNotLogged(true);
    }
  }, [dispatch, user, token]);
  if (user) {
    const { username } = user;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Welcome {username}</h1>
              <span className="subtitle">This is your data</span>
            </header>
            <section>
              <Counters />
            </section>
            <section>
              <Graphics />
            </section>
          </section>
          <Sidebar user={username} />
        </div>
      </>
    );
  }
  if (notLogged) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="loaderContainer">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
