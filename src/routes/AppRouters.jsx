import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../containers/login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from '../containers/dashboard/Dashboard';
import Candidates from '../containers/candidates/Candidates';


function AppRouters() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <GoogleOAuthProvider clientId="934254784491-2nesacf8r403tr9hdbfpuln9g303nq11.apps.googleusercontent.com">
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/candidates"
          element={<Candidates />}
        />
      </Routes>
    </>
  );
}

export default AppRouters;
