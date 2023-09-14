import React from 'react';
import NotFoundImage from '../../assets/images/login/NotFound.png'

function NotFound() {
  return (
    <div className='not-found-container '>
        <h2>Page Not Found ..!</h2>
      <img
        src={NotFoundImage}
        alt='not found'
      />
      <button className='primary-button'>
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
