import React, { useEffect, useState } from "react";
import useForm from "../helpers/useForm";
import validateInfo from "../helpers/validate";
import { Link, Redirect } from "react-router-dom";
import { createUser, getUser } from "../services/userService";
import { setAccessToken } from "../utils/utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHeader, setErrorHeader] = useState(false);
  const { handleSubmit, handleKeyUp, errors, isSubmitted, user } =
    useForm(validateInfo);

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (isSubmitted) {
      setIsLoading(true);
      createUser(user)
        .then((res) => {
          const data = res.data;
          if (data.code === 201) {
            const { access_token } = data;
            setAccessToken(access_token);
            getUser(access_token)
              .then((res) => {
                dispatch(setUser(res.data));
                setIsRegistered(true);
              })
              .catch((e) => {
                setErrorHeader(e);
              });
          }
          if (data.code === 401) {
            setErrorHeader(data.message);
          }
        })
        .catch((e) => console.log(e));
    }
    setIsLoading(false);
  }, [user, isSubmitted, dispatch]);

  if (isRegistered && myState) {
    return <Redirect to="/dashboard" />;
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
    <div className="login_card register">
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
      <div className="card_footer">
        <span>
          Do you have an account?{" "}
          <Link to="/login" className="card_footer__link">
            Login here
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
