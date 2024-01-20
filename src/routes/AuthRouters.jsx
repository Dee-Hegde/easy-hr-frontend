import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../containers/Navbar';
import { checkAuthentication } from '../utils/commonFunctions';
import { useLocation, useNavigate } from 'react-router-dom';
import "./auth.scss";

function AuthRouters({ children }) {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(false);
  const location = useLocation();

  const checkUserAuthentication = useCallback(async () => {
    try {
      const isAuthenticated = await checkAuthentication();
      if (isAuthenticated) {
        setUserAuth(true);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error during authentication check:', error);
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    checkUserAuthentication();
  }, [checkUserAuthentication, location.pathname]);

  return (
    userAuth && (
      <div className='main-auth-container'>
        <div className='auth-nav-container'>
          <Navbar />
        </div >
        <div className='auth-child-container'>{children}</div>
      </div>
    )
  );
}

export default AuthRouters;
