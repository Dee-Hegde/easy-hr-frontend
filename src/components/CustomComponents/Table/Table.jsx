import React from "react";
import { Table } from "antd";
import "./table.scss";

const Tables = (props) => {
  const {
    columns,
    data,
    pagination = true,
    rowHoverable = false,
    className,
  } = props;

  const tableDisplayFormat = (data) => {
    const dataSource = data?.map((user, index) => ({
      ...user,
      key: index + 1,
    }));
    return dataSource;
  };

  return (
    <div className='easy-table-wrapper'>
      <Table
        columns={columns}
        dataSource={tableDisplayFormat(data)}
        pagination={pagination}
        rowHoverable={rowHoverable}
        className={`table-cols ${className}`}
        //   pagination={{
        //     pageSize: 50,
        //   }}
        //   scroll={{
        //     y: 240,
        //   }}
      />
    </div>
  );
};

export default Tables;
