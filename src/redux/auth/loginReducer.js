import { getLocalStorage } from "../../utils/storage-helper";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from "./actions";

const getUserData = getLocalStorage("easyUserData");
const getUserToken = getLocalStorage("easyUserToken");
const initialState = {
  loading: false,
  isVerified: getUserToken && getUserData ? true : false,
  user: getUserData ? JSON.parse(getUserData) : {},
  token: getUserToken ? JSON.parse(getUserToken) : "",
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        isVerified: true,
        user: action.payload.user,
        token: action.payload.token,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        user: {},
        isVerified: false,
        token: "",
        error: action.payload,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        loading: false,
        isVerified: false,
        user: {},
        token: "",
        error: "",
      };
    case LOGOUT_USER_FAILURE:
      return {
        loading: false,
        user: {},
        isVerified: false,
        token: "",
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
