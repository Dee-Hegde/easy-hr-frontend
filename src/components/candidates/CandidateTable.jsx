import {
  ArrowRightOutlined,
  EditOutlined,
  FilePdfOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Table, Tabs, Tag } from 'antd';
import React, { useState } from 'react';
import AddCandidate from './AddCandidate';

function CandidateTable() {
  const [visibleStatus, setVisibleStatus] = useState(false);
  const interviewStatus = [
    {
      label: 'Yet to Contact - (13)',
      key: 0,
    },
    {
      label: 'Tele Verification - (12)',
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
      title: 'Id',
      dataIndex: 'id',
      key: 'name',
      align: 'center',
      width: 100,
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 200,
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      width: 180,
      ellipsis: true,
      render: () => <p>{'deepakhegde@sketchbrahma.com'}</p>,
    },
    {
      title: 'Mobile',
      dataIndex: 'Mobile',
      key: 'Mobile',
      align: 'center',
      width: 150,
      render: () => <p>{'7892904634'}</p>,
    },
    {
      title: 'Rel Exp',
      dataIndex: 'Rel Exp',
      key: 'MoRel Expbile',
      align: 'center',
      width: 100,
    },
    {
      title: 'N P',
      dataIndex: 'Notice Period',
      key: 'Notice Period',
      align: 'center',
      width: 80,
    },
    {
      title: 'CTC',
      dataIndex: 'CTC',
      key: 'CTC',
      align: 'center',
      width: 100,
    },
    {
      title: 'Added By',
      dataIndex: 'Added By',
      key: 'Added By',
      align: 'center',
      width: 150,
    },
    {
      title: 'Resume',
      dataIndex: 'age',
      key: 'Resume',
      render: (data) => (
        <p onClick={() => onStatusChange(data)}>
          <FilePdfOutlined style={{ fontSize: '20px' }} />
        </p>
      ),
      align: 'center',
      width: 100,
    },
    {
      title: 'Edit',
      dataIndex: 'Edit',
      key: 'Edit',
      render: () => (
        <p onClick={onStatusChange}>
          <EditOutlined style={{ fontSize: '20px' }} />
        </p>
      ),
      align: 'center',
      width: 80,
    },
    {
      title: '',
      dataIndex: 'Action',
      key: 'Action',
      render: () => (
        <p onClick={onStatusChange}>
          {/* <ArrowRightOutlined /> */}
          <RightOutlined style={{ fontSize: '16px' }} />
        </p>
      ),
      align: 'center',
      width: 80,
    },
    // {
    //   title: '',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag
    //             color={color}
    //             key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
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
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '8',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '9',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '10',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const onTabChange = (key) => {
    console.log(key);
  };
  const onStatusChange = (key) => {
    setVisibleStatus(!visibleStatus);
    console.log(key);
  };
  return (
    <div className='co-candidate-container'>
      <div className='co-tab-container'>
        <Tabs
          onChange={onTabChange}
          type='card'
          value={0}
          items={interviewStatus}
        />
      </div>
      <div className='co-table-container'>
        <div className='co-tab-container'>
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
      <AddCandidate
        open={visibleStatus}
        close={onStatusChange}
      />
    </div>
  );
}

export default CandidateTable;
