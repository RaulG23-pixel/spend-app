import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return (
    <storeContext.Provider value={[store, dispatch]}>
      {children}
    </storeContext.Provider>
  );
};
export { storeContext };
export default StoreProvider;
