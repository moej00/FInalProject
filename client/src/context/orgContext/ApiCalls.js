import {
  createOrgFailure,
  createOrgStart,
  createOrgSuccess,
  deleteOrgFailure,
  deleteOrgStart,
  deleteOrgSuccess,
  getOrgsFailure,
  getOrgsStart,
  getOrgsSuccess,
} from "./OrgActions";
import axios from "axios";

export const getOrgs = async (dispatch) => {
  dispatch(getOrgsStart());
  try {
    const res = await axios.get("/orgs", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getOrgsSuccess(res.data));
  } catch (err) {
    dispatch(getOrgsFailure());
  }
};

export const createOrg = async (org, dispatch) => {
  dispatch(createOrgStart());
  try {
    const res = await axios.post("/orgs/", org, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createOrgSuccess(res.data));
  } catch (err) {
    dispatch(createOrgFailure());
  }
};

export const deleteOrg = async (id, dispatch) => {
  dispatch(deleteOrgStart());
  try {
    await axios.delete("/orgs/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteOrgSuccess(id));
  } catch (err) {
    dispatch(deleteOrgFailure());
  }
};
