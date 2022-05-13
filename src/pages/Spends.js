import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { storeContext } from "../store/StoreProvider";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/service";

function CreateSpend() {
  const [store, dispatch] = useContext(storeContext);
  const [isLogged, setIsLogged] = useState(false);
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
  }, [dispatch, token, isLogged, store.user]);

  if (!token) {
    return <Redirect to="/login" />;
  }
  if (store.user) {
    const user = store.user.username;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Spends</h1>
              <span className="subtitle">
                Here you can see all your current spends
              </span>
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

export default CreateSpend;
