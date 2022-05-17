import React from "react";

function ProfileData() {
  return (
    <article className="profile__data_grid">
      <section className="profile__personal_data">
        <div>
          <h5 className="profile__data_title">Username</h5>
          <span className="profile__data_info">NordicR</span>
        </div>
        <div>
          <h5 className="profile__data_title">Email</h5>
          <span className="profile__data_info">nordic@gmail.com</span>
        </div>
        <div>
          <h5 className="profile__data_title">Bio</h5>
          <span className="profile__data_info">Hi my name is NordicR</span>
        </div>
      </section>
      <section className="profile__economic_section">
        <div className="profile__economic_data">
          <section className="economic_section">
            <h4>Spends</h4>
            <section className="economic_data_flex">
              <div>
                <span className="profile__data_title">Total: </span>
                <span className="profile__data_info">4</span>
              </div>
              <div>
                <span className="profile__data_title">Completed: </span>
                <span className="profile__data_info">4</span>
              </div>
              <div>
                <span className="profile__data_title">Active: </span>
                <span className="profile__data_info">4</span>
              </div>
            </section>
          </section>
          <section className="economic_section">
            <h4>Saves</h4>
            <section className="economic_data_flex">
              <div>
                <span className="profile__data_title">Total: </span>
                <span className="profile__data_info">6</span>
              </div>
              <div>
                <span className="profile__data_title">Completed: </span>
                <span className="profile__data_info">6</span>
              </div>
              <div>
                <span className="profile__data_title">Active: </span>
                <span className="profile__data_info">6</span>
              </div>
            </section>
          </section>
        </div>
      </section>
    </article>
  );
}

export default ProfileData;
