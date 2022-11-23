import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { LogInUser } from "../store/userSlice";
import "./css/login.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";

function Login() {
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isFormSubmited && user) {
      dispatch(LogInUser(user));
    }
  }, [user, isFormSubmited, error, dispatch]);

  const triggerSubmit = () => {
    setIsFormSubmited(true);
  };

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
  return <Card title="Login" setUser={setUser} trigger={triggerSubmit} />;
}

export default Login;
