import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { CaretDownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import NavigationDrawers from '../../components/navigation/NavigationDrawers';


function Navbar() {
  const [openMenu, setOpemMenu] = useState(false);

  const handleDrawer = () => {
    setOpemMenu(!openMenu);
  };
  return (
    <div className="nav-main-container">
      <div className="nav-left-side-section">
        <div className="nav-logo-container">
          <img
            className="navlogo"
            src={logo}
            alt=""
          />
        </div>
        <div
          className="menu-container"
          onClick={handleDrawer}>
          {openMenu ? (
            <MenuFoldOutlined className="menuIcons" />
          ) : (
            <MenuUnfoldOutlined className="menuIcons" />
          )}
        </div>
      </div>
      <div className="nav-right-side-section">
        <div className="nav-avatar-container">
          <Avatar
            size="large"
            icon={<UserOutlined />}
          />
          <h5>Sketch Brahma</h5>
          <CaretDownOutlined />
        </div>
      </div>
      <NavigationDrawers
        open={openMenu}
        close={handleDrawer}
      />
    </div>
  );
}

export default Navbar;
