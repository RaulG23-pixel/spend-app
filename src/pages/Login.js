import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "../helpers/useForm";
import validateInfo from "../helpers/validate";
import { LogInUser } from "../store/userSlice";
import "./css/login.css";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [errorHeader, setErrorHeader] = useState(null);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const { handleKeyUp, errors, handleSubmit, isSubmitted, user } =
    useForm(validateInfo);

  useEffect(() => {
    if (isSubmitted && user) {
      dispatch(LogInUser(user));
      if (error) {
        setErrorHeader(error);
      }
    }
  }, [isSubmitted, user, error, dispatch]);

  if (status === "user logged") {
    return <Redirect to="/dashboard" />;
  }
  if (status === "loading") {
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
        <h3>Login</h3>
        <span>Enter your details below to continue</span>
        {errorHeader && <span className="header_error">{errorHeader}</span>}
      </div>
      <form onSubmit={handleSubmit}>
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
              placeholder="Password"
              id="pass"
              onKeyUp={handleKeyUp}
            />
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button className="btn_submit" type="submit">
          Login
        </button>
      </form>
      <div className="card_footer">
        <span>
          Don't have an account?{" "}
          <Link to="/register" className="card_footer__link">
            register here
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
