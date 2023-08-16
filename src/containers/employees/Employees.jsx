import Search from 'antd/es/transfer/search';
import React, { useState } from 'react'
import CandidatesFilters from '../../components/candidates/CandidatesFilters';
import CandidateTable from '../../components/candidates/CandidateTable';
import AddCandidate from '../../components/candidates/AddCandidate';

function Employees() {
  const [openMenu, setOpemMenu] = useState(false);

  const handleClose = () => {
    setOpemMenu(!openMenu);
  };
  return (
    <div className='co-main-container'>
      <div className='co-container'>
        <h2>Employees Overview</h2>
        <div className='co-search-container'>
          <div className='co-search-wrapper'>
            <Search
              placeholder='input search text'
              allowClear
            />
          </div>
          <button
            onClick={handleClose}
            className='primary-button co-add-candidate-btn'>
            Add Employee
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

export default Employees