export const getOrgsStart = () => ({
  type: "GET_LISTS_START",
});

export const getOrgsSuccess = (orgs) => ({
  type: "GET_ORGS_SUCCESS",
  payload: orgs,
});

export const getOrgsFailure = () => ({
  type: "GET_ORGS_FAILURE",
});

export const createOrgStart = () => ({
  type: "CREATE_ORGS_START",
});

export const createOrgSuccess = (org) => ({
  type: "CREATE_ORG_SUCCESS",
  payload: org,
});

export const createOrgFailure = () => ({
  type: "CREATE_ORG_FAILURE",
});

export const updateOrgStart = () => ({
  type: "UPDATE_ORG_START",
});

export const updateOrgSuccess = (user, admin) => ({
  type: "UPDATE_ORG_SUCCESS",
  payload: user,
  admin,
});

export const updateOrgFailure = () => ({
  type: "UPDATE_ORG_FAILURE",
});

export const deleteOrgStart = () => ({
  type: "DELETE_ORG_START",
});

export const deleteOrgSuccess = (id) => ({
  type: "DELETE_ORG_SUCCESS",
  payload: id,
});

export const deleteOrgFailure = () => ({
  type: "DELETE_ORG_FAILURE",
});
