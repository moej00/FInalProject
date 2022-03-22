const OrgReducer = (state, action) => {
  switch (action.type) {
    case "GET_ORGS_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "GET_ORGS_SUCCESS":
      return {
        orgs: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ORGS_FAILURE":
      return {
        orgs: [],
        isFetching: false,
        error: true,
      };

    case "CREATE_ORG_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "CREATE_ORG_SUCCESS":
      return {
        orgs: [...state.orgs, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_ORG_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ORG_START":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ORG_SUCCESS":
      return {
        orgs:
          state.lists.map((org) => org._id) === action.payload._id &&
          action.payload,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ORG_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_ORG_START":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_ORG_SUCCESS":
      return {
        lists: state.orgs.filter((org) => org._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ORG_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default OrgReducer;
