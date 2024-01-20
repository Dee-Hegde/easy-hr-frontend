import React from 'react';
import './candidates.scss';
import FilterSection from '../../components/candidates/FilterSection';
import TableGrid from '../../components/candidates/TableGrid';

function Candidates() {
  return (
    <div className='candidates-container'>
      <div className='container'>
        <h2>Candidates</h2>
      </div>
      <div className='container'>
        <FilterSection />
      </div>
      <div className='container'>
        <TableGrid />
      </div>
    </div>
  );
}

export default Candidates;
