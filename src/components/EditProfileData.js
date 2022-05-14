import React from "react";

function EditProfileData() {
  return (
    <form className="profile__data">
      <section class="grid__data">
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
          </div>
          <div className="group">
            <label htmlFor="bio">Bio</label>
            <textarea name="bio"></textarea>
          </div>
        </div>
      </section>
    </form>
  );
}

export default EditProfileData;
