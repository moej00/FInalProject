export const getAdminsStart = () => ({
  type: "GET_ADMINS_START",
});

export const getAdminsSuccess = (admins) => ({
  type: "GET_ADMINS_SUCCESS",
  payload: admins,
});

export const getAdminsFailure = () => ({
  type: "GET_ADMINS_FAILURE",
});

export const createAdminStart = () => ({
  type: "CREATE_ADMIN_START",
});

export const createAdminSuccess = (admin) => ({
  type: "CREATE_ADMIN_SUCCESS",
  payload: admin,
});

export const createAdminFailure = () => ({
  type: "CREATE_ADMIN_FAILURE",
});

export const updateAdminStart = () => ({
  type: "UPDATE_ADMIN_START",
});

export const updateAdminSuccess = (admin) => ({
  type: "UPDATE_ADMIN_SUCCESS",
  payload: admin,
});

export const updateAdminFailure = () => ({
  type: "UPDATE_ADMIN_FAILURE",
});

export const deleteAdminStart = () => ({
  type: "DELETE_ADMIN_START",
});

export const deleteAdminSuccess = (id) => ({
  type: "DELETE_ADMIN_SUCCESS",
  payload: id,
});

export const deleteAdminFailure = () => ({
  type: "DELETE_ADMIN_FAILURE",
});
