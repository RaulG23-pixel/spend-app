import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { storeContext } from "../store/StoreProvider";
import { getAccessToken } from "../utils/utils";

function CreateSpend() {
  const [store, dispatch] = useContext(storeContext);
  const [isLogged, setIsLogged] = useState(false);
  const token = getAccessToken();
  useEffect(() => {
    if (token) setIsLogged(true);
  }, []);

  if (!isLogged) {
    return <Redirect to="/login" />;
  }
  if (store.user) {
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Create spend</h1>
              <span className="subtitle">
                Pliease fill all the fields to create a new spend
              </span>
            </header>
            <section></section>
          </section>
          <Sidebar user={store.user} />
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
