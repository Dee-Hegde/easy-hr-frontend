import React, { useCallback, useEffect } from "react";
import "./users.scss";
import TitleCard from "../../components/CustomComponents/TitleComponent/Title";
import Buttons from "../../components/CustomComponents/Buttons/Buttons";
import Inputs from "../../components/CustomComponents/Inputs/Inputs";
import AppLoader from "../../components/CustomComponents/Loader/AppLoader";
import Tables from "../../components/CustomComponents/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "../../redux/users/actions";
import { formatDate } from "../../utils/utils";

const Users = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  const getUsersList = useCallback(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  const userTableColumns = [
    {
      title: "sn",
      dataIndex: "key",
      key: "key",
      width: 80,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      width: 200,
      render: (isActive) => <span>{isActive ? "Active" : "Inactive"}</span>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: 150,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (text) => <span>{formatDate(text, "DD/MM/YYYY")}</span>,
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 150,
      render: (text) => <span>{formatDate(text, "DD/MM/YYYY")}</span>,
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
      width: 150,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Last Updated By",
      dataIndex: "lastUpdatedBy",
      key: "lastUpdatedBy",
      width: 150,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
      render: (text) => <span>{text}</span>,
    },
  ];

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);
  return userList?.loading ? (
    <AppLoader />
  ) : (
    <div className='user-section-container'>
      <TitleCard title={"Users List"} />
      <div className='filter-container'>
        <Inputs
          className={"seachbox"}
          type='seach-box'
          isLableRequired={false}
          isErrorMessageRequired={false}
          placeholder='Search name'
        />
        <Buttons className={"p-button add-user"}>+Add</Buttons>
      </div>
      <div className='grid-container'>
        <Tables
          columns={userTableColumns}
          data={userList?.userList}
        />
      </div>
    </div>
  );
};

export default Users;
