import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import esqueleto from "../assets/esqueleto.jpg";
import ProfileData from "../components/ProfileData";
import EditProfileData from "../components/EditProfileData";
import { useSelector } from "react-redux";

function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  const user = useSelector((state) => state.userData);
  const { username } = user;
  if (user) {
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
                  <span className="user__header__title">{username}</span>
                  <span className="subtitle user__header__subtitle">
                    Your personal account
                  </span>
                </div>
              </div>
            </header>
            <section>
              <nav className="profile__links">
                <button
                  onClick={() => setIsEdit(false)}
                  className={`button button-edit ${!isEdit ? "active" : ""}`}
                >
                  <i class="fas fa-address-book"></i> Profile
                </button>
                <button
                  onClick={() => setIsEdit(true)}
                  className={`button button-edit ${isEdit ? "active" : ""}`}
                >
                  <i class="fas fa-edit"></i> Edit
                </button>
              </nav>
              {
                <div className="profile__outlet">
                  {isEdit ? <EditProfileData /> : <ProfileData />}
                </div>
              }
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

export default Profile;
