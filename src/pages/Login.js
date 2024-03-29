import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "../helpers/useForm";
import validateInfo from "../helpers/validate";
import { logIn } from "../services/userService";
import { setAccessToken } from "../utils/utils";
import "./css/login.css";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHeader, setErrorHeader] = useState(null);
  const { handleKeyUp, errors, handleSubmit, isSubmitted, user } =
    useForm(validateInfo);

  useEffect(() => {
    if (isSubmitted && user) {
      setIsLoading(true);

      logIn(user)
        .then((res) => {
          
          if (res.status === 200) {
            setAccessToken(res.data.access_token);
            setIsLoading(false);
            setIsLogged(true);
          }

          if (res.status === 401) {
            setErrorHeader(res.data.message);
            setIsLoading(false);
          }

        })
        .catch((error) => console.log(error));
    }
  }, [isSubmitted, user]);

  if (isLogged) {
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
