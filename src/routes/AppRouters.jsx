import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../containers/login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from '../containers/dashboard/Dashboard';
import AuthRouters from './AuthRouters';
import NotFound from '../components/notFound/NotFound';
import Candidates from '../containers/candidates/Candidates';
import Calendar from '../containers/calendar/GoogleCalendar';
import Employees from '../containers/employees/Employees';

function AppRouters() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <GoogleOAuthProvider clientId='934254784491-2nesacf8r403tr9hdbfpuln9g303nq11.apps.googleusercontent.com'>
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path='/dashboard'
          element={
            <AuthRouters>
              <Dashboard />
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
        <Route
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
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default AppRouters;
