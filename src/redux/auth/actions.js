import axios from "axios";
import { appURL } from "../../utils/url-helpers";
import { clearStorage, setLocalStorage } from "../../utils/storage-helper";
import { notify } from "../../utils/toast-helper";
import { attachParams, postRequest } from "../../utils/http-helper";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const logoutUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const logoutUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const logoutUserSuccess = (error) => {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
};

// Login Request
export const fetchLoggedInUser = (payload) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    postRequest({
      url: attachParams(appURL.login),
      data: payload,
    })
      .then((response) => {
        if (response?.data?.status === 200) {
          notify(response?.data?.message, "success");
          setLocalStorage(
            "easyUserData",
            JSON.stringify(response?.data?.data?.user)
          );
          setLocalStorage(
            "easyUserToken",
            JSON.stringify(response?.data?.data?.token)
          );
          dispatch(fetchUserSuccess(response?.data?.data));
        }
      })
      .catch((error) => {
        notify(error?.response?.data?.message, "error");
        clearStorage();
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

// Logout Request
export const updateUserLoggedOut = (payload) => {
  return (dispatch) => {
    dispatch(logoutUserRequest());
    dispatch(logoutUserSuccess());
    // axios
    //   .post(appURL.logout, payload)
    //   .then((response) => {
    //     notify(response?.data?.message, "success");
    //     clearStorage();
    //     dispatch(logoutUserSuccess());
    //   })
    //   .catch((error) => {
    //     notify(error?.response?.data?.message, "error");
    //     clearStorage();
    //     const errorMsg = error.message;
    //     dispatch(logoutUserFailure(errorMsg));
    //   });
  };
};
