import { notification } from 'antd';

export const notify = (msg, type) => {
  notification[type]({
    message: msg,
    placement: 'bottomLeft',
  });
};
