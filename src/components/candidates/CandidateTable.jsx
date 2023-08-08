import { Table, Tabs, Tag } from 'antd';
import React from 'react';

function CandidateTable() {
const interviewStatus = [
    {
      label: 'Yet to Contact - 13',
      key: 0,
    },
    {
      label: 'Tele Verification',
      key: 1,
    },
    {
      label: 'Round 1',
      key: 2,
    },
    {
      label: 'Task Verification',
      key: 3,
    },
    {
      label: 'Round 2',
      key: 4,
    },
    {
      label: 'HR Round',
      key: 5,
    },
    {
      label: 'Offered',
      key: 6,
    },
    {
      label: 'Offer Accepted',
      key: 7,
    },
    {
      label: 'Offer Rejected',
      key: 8,
    },
    {
      label: 'Rejected',
      key: 9,
    },
  ];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag
              color={color}
              key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='co-candidate-container'>
      <div className='co-tab-container'>
        <Tabs
          onChange={onChange}
          type='card'
          value={0}
          items={interviewStatus}
        />
      </div>
      <div className='co-table-container'>
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}

export default CandidateTable;
