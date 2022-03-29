import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { getUser } from "../services/service";
import { storeContext } from "../store/StoreProvider";
import Sidebar from "../components/Sidebar";
import Graphics from "../components/Graphics";
import Counters from "../components/Counters";

function Dashboard() {
  const [store, dispatch] = useContext(storeContext);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("access_token");
  const storedUser = localStorage.getItem("user");
  useEffect(() => {
    if (token !== undefined && token !== null) setIsLogged(true);
    const fetchUser = async () => {
      const { data } = await getUser(token);
      dispatch({ type: "set-user", payload: data });
      setUser(data.username);
      localStorage.setItem("user", JSON.stringify(data));
    };

    if (isLogged && storedUser === null) {
      fetchUser();
    }
    if (storedUser) {
      let data = JSON.parse(storedUser);
      dispatch({ type: "set-user", payload: data });
      setUser(data.username);
    }
  }, [isLogged, dispatch, storedUser, token]);

  if (token === null || token === undefined) {
    return <Redirect to="/login" />;
  }
  if (store.user) {
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Welcome {user}</h1>
              <span className="subtitle">These are your spends</span>
            </header>
            <section>
              <Counters />
            </section>
            <section>
              <Graphics />
            </section>
          </section>
          <Sidebar user={user} />
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
