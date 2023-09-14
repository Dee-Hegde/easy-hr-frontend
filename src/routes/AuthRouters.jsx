import React from 'react';
import Navbar from '../containers/navbar/Navbar';

function AuthRouters({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default AuthRouters;
