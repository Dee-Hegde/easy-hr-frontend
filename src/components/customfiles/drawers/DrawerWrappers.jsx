import { CloseCircleOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React from 'react';

function DrawerWrappers(props) {
  const { children } = props;
  return (
    <Drawer
      placement={props.placement}
      width={props.width}
      onClose={props.onClose}
      closeIcon={false}
      closable={false}
      maskClosable={true}
      open={props.open}>
      {props?.title && (
        <div className='nd-title-container'>
          <h3>Add Candidate</h3>
          <CloseCircleOutlined
            onClick={props.onClose}
            className='drawer-close'
          />
        </div>
      )}
      {children}
    </Drawer>
  );
}

export default DrawerWrappers;
