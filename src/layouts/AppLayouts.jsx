import React, { useEffect } from 'react';
import './layouts.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { commonIcons } from '../assets/images/common';
import { useSelector } from 'react-redux';
import AppLoader from '../components/Loader/AppLoader';
import { getLocalStorage } from '../utils/storage-helper';

const AppLayouts = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state?.user);
  const [expandedMenu, setExpandedMenu] = React.useState(true);
  const [isPageLoading, setIsPageLoading] = React.useState(true);

  const handleSidebar = () => {
    setExpandedMenu(!expandedMenu);
  };

  useEffect(() => {
    const userData = getLocalStorage('easyUserData');
    if (!userData || !user || !user?.token || !user?.isVerified) {
      navigate('/');
    } else {
      setIsPageLoading(false);
    }
  }, [location?.pathname, user, navigate]);

  return isPageLoading ? (
    <AppLoader />
  ) : (
    <div className='layout-container'>
      <div className='header-container'>
        <div className='logo-container'>
          <img
            src={commonIcons?.Logo}
            alt='Logo'
          />
        </div>
        <div className='user-info'>
          <p>{user?.user?.email ?? ''}</p>
        </div>
      </div>
      <div className='content-wrapper'>
        <div
          className={
            expandedMenu
              ? 'sidebar-container'
              : 'sidebar-container short-sidebar'
          }>
          <ul className='nav-link-wrapper'>
            <li>
              <Link to={'/dashboard'}>
                {' '}
                <img
                  src={commonIcons?.Home}
                  alt=''
                />
                <span> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={'/employees'}>
                <img
                  src={commonIcons?.Employees}
                  alt=''
                />
                <span>Employees</span>
              </Link>
            </li>
            <li>
              <Link to={'/candidates'}>
                <img
                  src={commonIcons?.Candidates}
                  alt=''
                />
                <span> Candidates</span>
              </Link>
            </li>
            <li>
              <Link to={'/assets'}>
                {' '}
                <img
                  src={commonIcons?.Assets}
                  alt=''
                />
                <span>Assets</span>
              </Link>
            </li>
            <li>
              <Link to={'/clients'}>
                {' '}
                <img
                  src={commonIcons?.Cliets}
                  alt=''
                />
                <span>Clients</span>
              </Link>
            </li>
          </ul>
          <ul className='nav-link-wrapper'>
            <li>
              <Link to={'/users'}>
                <img
                  src={commonIcons?.User}
                  alt=''
                />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to={'/settings'}>
                <img
                  src={commonIcons?.Settings}
                  alt=''
                />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to={'/logout'}>
                {' '}
                <img
                  src={commonIcons?.Logout}
                  alt=''
                />
                <span> Logout</span>
              </Link>
            </li>
            <li className='version-data'>V:0.0.1</li>
          </ul>
          <div
            onClick={handleSidebar}
            className='expand-close-container'>
            <img
              src={
                !expandedMenu
                  ? commonIcons?.expandMenu
                  : commonIcons?.collapseMenu
              }
              alt='menu expand close icon'
            />
          </div>
        </div>
        <div className='content-section'>{props.children}</div>
      </div>
    </div>
  );
};

export default AppLayouts;
