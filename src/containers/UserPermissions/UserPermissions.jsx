import React, { useEffect } from "react";
import TitleCard from "../../components/CustomComponents/TitleComponent/Title";
import Buttons from "../../components/CustomComponents/Buttons/Buttons";
import "./userPermissions.scss";

const UserPermissions = () => {
  const [pageLoading, setPageLoading] = React.useState(true);
  const [permissionData, setPermissionData] = React.useState([]);

  const getUserPermissions = async () => {};

  useEffect(() => {}, []);
  return (
    <div className='user-permissions-section'>
      <div className='title-section'>
        <TitleCard title={"User Permissions"} />
        <div className='save-permission-wrapper'>
          <Buttons>Save</Buttons>
        </div>
      </div>
      <div className='list-container'>
        <div className='header-sction'>
          <div className='edit-list'>
            <p>Sn</p>
          </div>
          <div className='page-name'>
            <p>Page Name</p>
          </div>
          <div className='add-list'>
            <p>Add</p>
          </div>
          <div className='edit-list'>
            <p>Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPermissions;
