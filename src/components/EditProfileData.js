import React, { useState } from "react";
import { updateUser } from "../services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

function EditProfileData({ userData }) {
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [bio, setBio] = useState(userData.bio);
  const [form, setForm] = useState({ username, email });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form)
      .then((res) => {
        dispatch(setUser(res.data.user));
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      className="profile__edit_data"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <section className="grid__data">
        <div className="group">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="group__description">
            Be creative, this will be your nickname
          </span>
        </div>
        <div className="group group_email">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="group__description">username@example.com</span>
        </div>
        <div className="group group_bio">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <span className="group__description">Your profile description</span>
        </div>
        <button type="submit" className="profile__btn_submit">
          Save
        </button>
      </section>
    </form>
  );
}

export default EditProfileData;
