import { notification } from 'antd';

export const successAlert = (message) => {
  notification['success']({
    message: message,
    placement: 'bottomLeft'
  });
};

export const errorAlert = (message) => {
  notification['error']({
    message: message,
    placement: 'bottomLeft',
  });
};

export const warningAlert = (message) => {
  notification['warning']({
    message: message,
    placement: 'bottomLeft',
  });
};