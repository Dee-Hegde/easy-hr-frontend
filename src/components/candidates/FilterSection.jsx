import { Button, Select } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';

const options = [];
for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

function FilterSection() {
  const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
  const selectProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  return (
    <div className='main-filter-container'>
      <div className='filter-container'>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
        <div className='select-container '>
          <Select {...selectProps} />
        </div>
      </div>
      <div className='search-container'>
        <Search
          placeholder='input search text'
          style={{
            width: 200,
          }}
        />
        <Button>+Add</Button>
      </div>
    </div>
  );
}

export default FilterSection;
