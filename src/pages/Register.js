import React, { useEffect, useState } from "react";
import useForm from "../helpers/useForm";
import validateInfo from "../helpers/validate";
import { Redirect } from "react-router-dom";
import { createUser } from "../services/userService";
import { setAccessToken } from "../utils/utils";

function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHeader, setErrorHeader] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);
  const { handleSubmit, handleKeyUp, errors, isSubmitted, user } =
    useForm(validateInfo);

  useEffect(() => {
    if (user && isSubmitted) {
      setIsLoading(true);
      createUser(user)
        .then((res) => {
          const { data } = res;
          if (data.code === 201) {
            setAccessToken(data.access_token);
            setIsLoading(false);
            setIsRegistered(true);
            console.log(data);
          }
          if (data.code === 401) {
            setErrorHeader(data.message);
            setIsLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [user, isSubmitted]);

  if (isRegistered && registeredUser) {
    //return <Redirect to="/dashboard" />;
  }
  if (isLoading) {
    return (
      <div className="loaderContainer">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="login_card">
      <div className="card_header">
        <h3>Register</h3>
        <span>Enter your details below to continue</span>
        <span>{errorHeader}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <div className="form_input">
            <span className="icon_helper">
              <i className="fas fa-user"></i>
            </span>
            <input
              className="form_control"
              type="text"
              name="username"
              placeholder="username"
              onKeyUp={handleKeyUp}
            />
          </div>
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form_group">
          <div className="form_input">
            <span className="icon_helper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              className="form_control"
              type="email"
              name="email"
              placeholder="email"
              onKeyUp={handleKeyUp}
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form_group">
          <div className="form_input">
            <span className="icon_helper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              className="form_control"
              type="password"
              name="password"
              placeholder="password"
              onKeyUp={handleKeyUp}
              id="pass"
            />
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form_group">
          <div className="form_input">
            <span className="icon_helper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              className="form_control"
              type="password"
              name="password_confirmation"
              placeholder="repeat your password"
              onKeyUp={handleKeyUp}
              id="pass2"
            />
          </div>
          {errors.password2 && (
            <span className="error">{errors.password2}</span>
          )}
        </div>

        <button className="btn_submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
