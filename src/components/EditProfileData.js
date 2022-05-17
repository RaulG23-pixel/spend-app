import React from "react";

function EditProfileData() {
  return (
    <form className="profile__edit_data">
      <section className="grid__data">
        <div className="user__data">
          <div className="group">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" />
            <span className="group__description">
              Be creative, this will be your nickname
            </span>
          </div>
          <div className="group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
            <span className="group__description">username@example.com</span>
          </div>
          <div className="group">
            <label htmlFor="bio">Bio</label>
            <textarea name="bio"></textarea>
            <span className="group__description">Your profile description</span>
          </div>
        </div>
      </section>
    </form>
  );
}

export default EditProfileData;
