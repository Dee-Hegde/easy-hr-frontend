import React, { useState } from 'react';
import AddCandidate from '../../components/AddCandidate';

function Candidates() {
  const [openMenu, setOpemMenu] = useState(false);

  const handleClose = () => {
    setOpemMenu(!openMenu);
  };
  return (
    <div className='co-main-container'>
      <div className='co-title-container'>
        <h2>Candidate Overview</h2>
        <div>
          <button
            onClick={handleClose}
            className='primary-button'>
            Add Candidates
          </button>
        </div>
      </div>
      <AddCandidate
        open={openMenu}
        close={handleClose}
      />
    </div>
  );
}

export default Candidates;
