import { Input } from 'antd';
import React from 'react';

function CandidatesFilters() {
  return (
    <div className='co-container'>
      <div>
        <p>Job Openings</p>
        <Input placeholder='name' />
      </div>
      <div>
        <p>Notice Period</p>
        <Input placeholder='name' />
      </div>
      <div>
        <p>Source</p>
        <Input placeholder='name' />
      </div>
      <div>
        <p>Added by</p>
        <Input placeholder='name' />
      </div>
      <div>
        <p>Start & End Date</p>
        <Input placeholder='name' />
      </div>
    </div>
  );
}

export default CandidatesFilters;
