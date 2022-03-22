import AdminReducer from "./AdminReducer";
import { createContext, useReducer } from "react";

const ININTIAL_STATE = {
  admins: [],
  isFetching: false,
  error: false,
};

export const AdminContext = createContext(ININTIAL_STATE);

export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, ININTIAL_STATE);

  return (
    <AdminContext.Provider
      value={{
        admins: state.admins,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
