import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { storeContext } from "../store/StoreProvider";

function CreateSpend() {
  const token = localStorage.getItem("access_token");
  const [store, dispatch] = useContext(storeContext);
  const storedUser = localStorage.getItem("user");

  useEffect(() => {
    if (storedUser) {
      let data = JSON.parse(storedUser);
      dispatch({ type: "set-user", payload: data });
    }
  }, [storedUser]);

  if (token === null || token === undefined) {
    return <Redirect to="/login" />;
  }
}
export default CreateSpend;
