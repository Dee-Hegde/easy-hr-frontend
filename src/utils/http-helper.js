import axios from 'axios';
import { getLocalStorage } from './storage-helper';

export const sendRequest = async (args) => {
  try {
    const { url, headers } = args;
    let headerParams;
    const token = await JSON.parse(getLocalStorage('easyUserToken'));
    if (headers) {
      headerParams = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    } else {
      headerParams = {
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await axios({
      ...args,
      headers: headerParams,
      url: url,
    });

    return response;
  } catch (error) {
    return { error };
  }
};

export const getRequest = async (args) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'get',
  });
  if (status === 200) {
    return {
      data,
      error: null,
      headers,
      status,
    };
  }
  return {
    data,
    error: error || data,
    status,
  };
};

export const postRequest = async (args) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'post',
  });

  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status,
    };
  }
  return {
    data: null,
    error: error || data,
    status,
  };
};
