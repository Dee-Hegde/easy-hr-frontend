import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../containers/Navbar';
import { checkAuthentication } from '../utils/commonFunctions';
import { useLocation, useNavigate } from 'react-router-dom';

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
      <div>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    )
  );
}

export default AuthRouters;
