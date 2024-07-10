import axios from 'axios';
import { appURL } from '../../utils/url-helpers';
import { clearStorage, setLocalStorage } from '../../utils/storage-helper';
import { notify } from '../../utils/toast-helper';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

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

export const fetchLoggedInUser = (payload) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .post(appURL.login, payload)
      .then((response) => {
        notify(response?.data?.message, 'success');
        const user = response?.data?.data;
        clearStorage();
        setLocalStorage('easyUserData', JSON.stringify(user?.user));
        setLocalStorage('easyUserToken', JSON.stringify(user.token));
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        notify(error?.response?.data?.message, 'error');
        clearStorage();
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
