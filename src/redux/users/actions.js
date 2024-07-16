import { attachParams, getRequest } from "../../utils/http-helper";
import { notify } from "../../utils/toast-helper";
import { appURL } from "../../utils/url-helpers";

export const FETCH_USERLIST_REQUEST = "FETCH_USERLIST_REQUEST";
export const FETCH_USERLIST_SUCCESS = "FETCH_USERLIST_SUCCESS";
export const FETCH_USERLIST_FAILURE = "FETCH_USERLIST_FAILURE";

export const fetchUserListRequest = () => {
  return {
    type: FETCH_USERLIST_REQUEST,
  };
};

export const fetchUserListSuccess = (userList) => {
  return {
    type: FETCH_USERLIST_SUCCESS,
    payload: userList,
  };
};

export const fetchUserListFailure = (error) => {
  return {
    type: FETCH_USERLIST_FAILURE,
    payload: error,
  };
};

export const fetchUsersList = () => (dispatch) => {
  dispatch(fetchUserListRequest());
  getRequest({
    url: attachParams(appURL.getAllUser),
  })
    .then((response) => {
      if (response.data) {
        dispatch(fetchUserListSuccess(response.data.data));
      }
    })
    .catch((error) => {
      notify(error.response?.data?.message, "error");
      const errorMsg = error.message;
      dispatch(fetchUserListFailure(errorMsg));
    });
};
