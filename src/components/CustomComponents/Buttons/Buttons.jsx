import { Button } from 'antd';
import React from 'react';
import './buttons.scss';

const Buttons = (props) => {
  const { className = 'p-button', ...otherProps } = props;
  return (
    <Button
      className={`${className}`}
      {...otherProps}>
      {props?.children}
    </Button>
  );
};

export default Buttons;
