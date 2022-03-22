import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    res.data.isSuperAdmin && dispatch(loginSuccess(res.data));
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export default login;
