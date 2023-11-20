import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../containers/Login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthRouters from './AuthRouters';
import NotFound from '../components/notFound/NotFound';
import Dashboard from '../containers/Dashboard';
import Candidates from '../containers/Candidates';

function AppRouters() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <GoogleOAuthProvider clientId='964161569232-pfdvohajova8p2h38tcrhbt0lc5a8dth.apps.googleusercontent.com'>
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path='/dashboard'
          element={
            <AuthRouters>
              <Dashboard/>
            </AuthRouters>
          }
        />
        <Route
          path='/candidates'
          element={
            <AuthRouters>
              <Candidates />
            </AuthRouters>
          }
        />
        {/* <Route
          path='/calendar'
          element={
            <AuthRouters>
              <Calendar />
            </AuthRouters>
          }
        />
        <Route
          path='/employees'
          element={
            <AuthRouters>
              <Employees />
            </AuthRouters>
          }
        /> */}
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default AppRouters;
