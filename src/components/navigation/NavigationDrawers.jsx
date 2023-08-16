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
import DrawerWrappers from '../customfiles/drawers/DrawerWrappers';
import { useNavigate } from 'react-router-dom';

function NavigationDrawers({ open, close }) {
  const navigate = useNavigate();
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
    {
      title: 'Google Calendar',
      path: '/calendar',
      icon: <CalendarOutlined className='menuIcons' />,
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    close();
  };
  return (
    <DrawerWrappers
      open={open}
      close={close}
      placement={'left'}
      width={300}>
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
            <li
              key={index}
              onClick={() => handleNavigation(item?.path)}>
              <p>
                <span className='menuIcons'>{item.icon}</span>
                <span>{item.title}</span>
              </p>
              <CaretRightOutlined />
            </li>
          ))}
        </ul>
      </div>
    </DrawerWrappers>
  );
}

export default NavigationDrawers;
