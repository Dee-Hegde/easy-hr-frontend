import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';

import {
  CaretDownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Popover } from 'antd';
import NavigationDrawers from '../../components/navigation/NavigationDrawers';
import './navbar.scss';

function Navbar() {
  const [openMenu, setOpemMenu] = useState(false);

  const handleDrawer = () => {
    setOpemMenu(!openMenu);
  };
  const content = (
    <div>
      <Button>Logout</Button>
    </div>
  );
  return (
    <div className='nav-main-container'>
      <div className='nav-left-side-section'>
        <div className='nav-logo-container'>
          <img
            className='navlogo'
            src={logo}
            alt=''
          />
        </div>
        <div
          className='menu-container'
          onClick={handleDrawer}>
          {openMenu ? (
            <MenuFoldOutlined className='menuIcons' />
          ) : (
            <MenuUnfoldOutlined className='menuIcons' />
          )}
        </div>
      </div>
      <div className='nav-right-side-section'>
        <Popover
          content={content}
          title=''
          trigger='click'>
          <div className='nav-avatar-container'>
            <Avatar
              size='large'
              icon={<UserOutlined />}
            />
            <h5>Sketch Brahma</h5>
            <CaretDownOutlined />
          </div>
        </Popover>
      </div>
      <NavigationDrawers
        open={openMenu}
        close={handleDrawer}
      />
    </div>
  );
}

export default Navbar;
