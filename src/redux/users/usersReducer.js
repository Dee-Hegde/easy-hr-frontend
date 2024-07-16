import {
  FETCH_USERLIST_REQUEST,
  FETCH_USERLIST_SUCCESS,
  FETCH_USERLIST_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  userList: [],
  error: "",
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERLIST_REQUEST:
      return {
        ...state,
        loading: true,
        userList: [],
      };
    case FETCH_USERLIST_SUCCESS:
      return {
        loading: false,
        userList: action?.payload,
        error: "",
      };
    case FETCH_USERLIST_FAILURE:
      return {
        loading: false,
        userList: [],
        error: action?.payload,
      };
    default:
      return state;
  }
};

export default userListReducer;
