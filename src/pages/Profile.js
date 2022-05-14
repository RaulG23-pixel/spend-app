import React, { useEffect, useContext, useState } from "react";
import { Redirect, Switch } from "react-router-dom";
import { getUser } from "../services/service";
import { storeContext } from "../store/StoreProvider";
import { getAccessToken } from "../utils/utils";
import Sidebar from "../components/Sidebar";
import esqueleto from "../assets/esqueleto.jpg";
import { Route } from "react-router-dom";
import EditProfileData from "../components/EditProfileData";
import ProfileData from "../components/ProfileData";

function Profile() {
  const [store, dispatch] = useContext(storeContext);
  const token = getAccessToken();
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);

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
              <h1 className="title_user">Profile</h1>
              <span className="subtitle">
                These is your profile, you can view,edit and delete them in this
                panel
              </span>
              <div className="user__header">
                <div className="img_container">
                  <img src={esqueleto} alt="avatar" />
                </div>
                <div className="user__header__data">
                  <span className="user__header__title">{user}</span>
                  <span className="subtitle user__header__subtitle">
                    Your personal account
                  </span>
                </div>
              </div>
            </header>
            <section>
              <Switch>
                <Route path="/profile/edit" component={EditProfileData} />
                <Route path="/profile" component={ProfileData} />
              </Switch>
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

export default Profile;
