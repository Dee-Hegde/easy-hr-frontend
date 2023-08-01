import React from 'react';
import DrawerWrappers from './customfiles/drawers/DrawerWrappers';
import { CloseCircleOutlined } from '@ant-design/icons';

function AddCandidate({ open, close }) {
  return (
    <DrawerWrappers
      open={open}
      onClose={close}
      placement={'right'}
      width={900}
      >
      <div className='nd-title-container'>
        <h3>Add Candidate</h3>
        <CloseCircleOutlined
          onClick={close}
          className='drawer-close'
        />
      </div>
    </DrawerWrappers>
  );
}

export default AddCandidate;
