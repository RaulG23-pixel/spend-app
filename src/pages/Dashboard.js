import React, { useEffect } from "react";
import Graphics from "../components/Graphics";
import Counters from "../components/Counters";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/userService";
import { setUser } from "../store/userSlice";

function Dashboard() {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getAccessToken();
    if (token && !user) {
      const userToken = JSON.parse(token);
      getUser(userToken)
        .then((user) => {
          dispatch(setUser(user.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);
  if (user) {
    const { username } = user;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Welcome {username}</h1>
              <span className="subtitle">These are your spends</span>
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
