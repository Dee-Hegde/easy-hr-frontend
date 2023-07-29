import React from 'react';
import logo from '../../assets/images/logo.svg';

import {  
  CalendarOutlined,
  CaretRightOutlined,
  CloseCircleOutlined,
  HomeOutlined,
  LaptopOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import DrawerWrappers from '../customfiles/DrawerWrappers';



function NavigationDrawers({ open, close }) {
  const appNavigations = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <HomeOutlined className='menuIcons' />,
    },
    {
      title: 'Candidates',
      path: '/candidates',
      icon: <UsergroupAddOutlined className='menuIcons' />,
    },
    {
      title: 'Employees',
      path: '/employees',
      icon: <UserOutlined className='menuIcons' />,
    },
    {
      title: 'Comapany Assets',
      path: '/assets',
      icon: <LaptopOutlined className='menuIcons' />,
    },
    {
      title: 'Upcoming Events',
      path: '/events',
      icon: <CalendarOutlined className='menuIcons' />,
    },
  ];
  return (
    <DrawerWrappers
      open={open}
      close={close}
      placement={'left'}>
      <div className='nd-title-container'>
        <img
          src={logo}
          alt=''
        />
        <CloseCircleOutlined
          onClick={close}
          className='drawer-close'
        />
      </div>
      <div className='nav-drawer-body'>
        <ul>
          {appNavigations.map((item, index) => (
            <li>
              <Link to={item.path}>
                <p>
                  <span className='menuIcons'>{item.icon}</span>
                  <span>{item.title}</span>
                </p>
                <CaretRightOutlined />
              </Link>
            </li>
          ))} 
        </ul>
      </div>
    </DrawerWrappers>
  );
}

export default NavigationDrawers;
