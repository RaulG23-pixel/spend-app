import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { storeContext } from "../store/StoreProvider";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/service";

function Saves() {
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
    if (!store.user && !isLogged) {
      fetchUser();
    }
    if (store.user) setUser(store.user.username);
  }, [dispatch, token, isLogged, store.user]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  if (!token) {
    return <Redirect to="/login" />;
  }

  if (store.user) {
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Saves</h1>
              <span className="subtitle">Here you can see all your saves</span>
            </header>
            <section></section>
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

export default Saves;
