const AdminReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADMINS_START":
      return {
        admins: [],
        isFetching: true,
        error: false,
      };
    case "GET_ADMINS_SUCCESS":
      return {
        admins: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ADMINS_FAILURE":
      return {
        admins: [],
        isFetching: false,
        error: true,
      };

    case "CREATE_ADMINS_START":
      return {
        admins: [...state.admins, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_ADMINS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "CREATE_ADMINS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ADMIN_START":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ADMIN_SUCCESS":
      return {
        movies:
          state.admins.map((admin) => admin._id) === action.payload._id &&
          action.payload,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ADMIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_ADMIN_START":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_ADMIN_SUCCESS":
      return {
        admins: state.admins.filter((admin) => admin._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ADMIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default AdminReducer;
