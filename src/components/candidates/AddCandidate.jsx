import React from 'react';
import DrawerWrappers from '../customfiles/drawers/DrawerWrappers';
import { CloseCircleOutlined } from '@ant-design/icons';
import InputContainers from './InputContainers';

function AddCandidate({ open, close }) {
  return (
    <DrawerWrappers
      open={open}
      onClose={close}
      placement={'right'}
      width={900}
      title={'Add Candidate'}>
      <InputContainers />
    </DrawerWrappers>
  );
}

export default AddCandidate;
