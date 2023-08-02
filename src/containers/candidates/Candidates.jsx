import React, { useState } from 'react';
import AddCandidate from '../../components/candidates/AddCandidate';
import CandidatesFilters from '../../components/candidates/CandidatesFilters';
import CandidateTable from '../../components/candidates/CandidateTable';

function Candidates() {
  const [openMenu, setOpemMenu] = useState(false);

  const handleClose = () => {
    setOpemMenu(!openMenu);
  };
  return (
    <div className='co-main-container'>
      <div className='co-container'>
        <h2>Candidate Overview</h2>
        <div>
          <button
            onClick={handleClose}
            className='primary-button'>
            Add Candidates
          </button>
        </div>
      </div>
      <CandidatesFilters />
      <CandidateTable />
      <AddCandidate
        open={openMenu}
        close={handleClose}
      />
    </div>
  );
}

export default Candidates;
