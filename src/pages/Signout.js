import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authLogout } from "../store/userSlice";
import { removeAcessToken } from "../utils/utils";

function Signout() {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(authLogout());
      removeAcessToken();
      setTimeout(() => {
        setIsLoggedOut(true);
      }, 2000);
    }
  }, [dispatch, user]);
  if (isLoggedOut) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="loaderContainer">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Signout;
