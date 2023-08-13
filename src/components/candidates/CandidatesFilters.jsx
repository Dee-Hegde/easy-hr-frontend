import { Select, DatePicker } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;

function CandidatesFilters() {
  return (
    <div className='co-container'>
      <div className='co-filters'>
        <p className='co-filters-title'>Job Openings</p>
        <Select
          defaultValue='lucy'
          style={{
            width: 120,
          }}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />
      </div>
      <div className='co-filters'>
        <p className='co-filters-title'>Notice Period</p>
        <Select
          defaultValue='lucy'
          style={{
            width: 120,
          }}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />
      </div>
      <div className='co-filters'>
        <p className='co-filters-title'>Source</p>
        <Select
          defaultValue='lucy'
          style={{
            width: 120,
          }}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />
      </div>
      <div className='co-filters'>
        <p className='co-filters-title'>Added by</p>
        <Select
          defaultValue='lucy'
          style={{
            width: 120,
          }}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />
      </div>
      <div>
        <p className='co-filters-title'>Start & End Date</p>
        <RangePicker />
      </div>
    </div>
  );
}

export default CandidatesFilters;
