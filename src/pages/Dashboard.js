import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { getUser } from "../services/userService";
import { storeContext } from "../store/StoreProvider";
import Sidebar from "../components/Sidebar";
import Graphics from "../components/Graphics";
import Counters from "../components/Counters";
import { getAccessToken } from "../utils/utils";

function Dashboard() {
  const [store, dispatch] = useContext(storeContext);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const token = getAccessToken();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUser(token);
      dispatch({ type: "set-user", payload: data });
      setIsLogged(true);
    };

    if (store.user) setUser(store.user.username);
    if (!isLogged && !store.user) {
      fetchUser();
    }
  }, [isLogged, dispatch, token, store.user]);

  if (!token) {
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
