import { Drawer } from 'antd';
import React from 'react'

function DrawerWrappers(props) {
      const { children } = props;
  return (
    <Drawer
      placement={props.placement}
      width={300}
      onClose={props.onClose}
      closeIcon={false}
      closable={false}
      maskClosable={true}
      open={props.open}>
      {children}
    </Drawer>
  );
}

export default DrawerWrappers