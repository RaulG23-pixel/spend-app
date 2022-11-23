import React, { useEffect, useState } from "react";
import LoginForm from "./login/LoginForm";
import RegisterForm from "./register/RegisterForm";
import { useSelector } from "react-redux";

function Card(props) {
  const error = useSelector((state) => state.user.error);
  const [errorHeader, setErrorHeader] = useState(null);
  const { title, setUser, trigger } = props;
  const content =
    props.title === "Login" ? (
      <LoginForm setUser={setUser} trigger={trigger} />
    ) : (
      <RegisterForm setUser={setUser} trigger={trigger} />
    );

  useEffect(() => {
    if (error) {
      setErrorHeader(error);
    }
  }, [error]);
  return (
    <div className="card">
      <div className="card_header">
        <h3>{title}</h3>
        <span>Enter your details below to continue</span>
        {errorHeader && <span className="header_error">{errorHeader}</span>}
      </div>
      {content}
    </div>
  );
}

export default Card;
