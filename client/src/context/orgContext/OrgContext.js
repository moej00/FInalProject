import OrgReducer from "./OrgReducer";
import { createContext, useReducer } from "react";

const ININTIAL_STATE = {
  orgs: [],
  isFetching: false,
  error: false,
};

export const OrgContext = createContext(ININTIAL_STATE);

export const OrgContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrgReducer, ININTIAL_STATE);

  return (
    <OrgContext.Provider
      value={{
        orgs: state.orgs,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </OrgContext.Provider>
  );
};
