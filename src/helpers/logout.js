import { useContext } from "react";
import { storeContext } from "../store/StoreProvider";

const useLogOut = () => {
  const [dispatch] = useContext(storeContext);
  const logOut = () => {
    localStorage.removeItem("access_token");
    dispatch({ type: "auth-logout" });
  };
  return { logOut };
};

export default useLogOut;
