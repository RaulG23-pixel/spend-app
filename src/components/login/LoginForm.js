import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useForm from "../../helpers/useForm";
import validateInfo from "../../helpers/validate";

function LoginForm(props) {
  const { handleKeyUp, errors, handleSubmit, isSubmitted, user } =
    useForm(validateInfo);
  const { setUser, trigger } = props;

  useEffect(() => {
    if (isSubmitted) {
      setUser(user);
      trigger(true);
    }
  }, [isSubmitted, user, setUser, trigger]);
  return (
    <>
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
    </>
  );
}

export default LoginForm;
