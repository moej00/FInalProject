import {
  createAdminFailure,
  createAdminStart,
  createAdminSuccess,
  deleteAdminFailure,
  deleteAdminStart,
  deleteAdminSuccess,
  getAdminsFailure,
  getAdminsStart,
  getAdminsSuccess,
} from "./AdminActions";
import axios from "axios";

export const getAdmins = async (dispatch) => {
  dispatch(getAdminsStart());
  try {
    const res = await axios.get("/admins", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getAdminsSuccess(res.data));
  } catch (err) {
    dispatch(getAdminsFailure());
  }
};

export const createAdmin = async (admin, dispatch) => {
  dispatch(createAdminStart());
  try {
    const res = await axios.post("/admins/", admin, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createAdminSuccess(res.data));
  } catch (err) {
    dispatch(createAdminFailure());
  }
};

export const deleteAdmin = async (id, dispatch) => {
  dispatch(deleteAdminStart());
  try {
    await axios.delete("/admins/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteAdminSuccess(id));
  } catch (err) {
    dispatch(deleteAdminFailure());
  }
};
