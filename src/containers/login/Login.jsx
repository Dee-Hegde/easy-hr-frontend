/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import HROffice from '../../assets/images/login/HROffice.png';
import logo from '../../assets/images/logo.svg';
// import googleLogo from '../../assets/images/login/googleLogo.svg';
import { Input } from 'antd';
// import { useGoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { checkAuthentication, checkIsValid } from '../../utils/commonFunctions';
import { formats } from '../../utils/constants';
import axios from 'axios';
import { errorAlert, successAlert } from '../../utils/toaster-helper';
import { setLocalStorage } from '../../utils/storage-helper';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: 'cposene@meetup.com',
    password: 'gK3<3mq&',
  });
  const [error, setError] = useState({ email: '', password: '' });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleLogin = async () => {
    if (!checkIsValid(loginData?.email, formats.email)) {
      let err = {
        email: '',
        password: '',
      };
      if (!loginData.email) {
        err.email = 'Enter valid email';
      }
      if (loginData.password.length <= 4) {
        err.password = 'Enter valid password';
      }
      setError(err);
    } else {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/auth/login',
          {
            email: loginData.email,
            password: loginData.password,
          }
        );

        if (response.status === 200) {
          successAlert(response?.data?.message);
          await setLocalStorage('easytokens', response?.data?.data?.token);
          navigate('/candidates');
        }
      } catch (error) {
        console.log(error);
        errorAlert(error.message);
      }
    }
  };
  // const googleLogin = useGoogleLogin({
  //   onSuccess: (tokenResponse) => navigate('/dashboard'),
  // });

  useEffect(() => {
    if (checkAuthentication()) {
      navigate('/candidates');
    }
  }, []);
  return (
    <div className='login-main-container'>
      <div className='login-left-container'>
        <div className='login-container'>
          <img
            src={logo}
            alt='logo'
          />
          <h2>Welcome!.</h2>
          <div className='login-input-container'>
            <label>Email</label>
            <Input
              className='basic-input '
              placeholder='Email'
              onChange={handleInputs}
              name='email'
              value={loginData.email}
            />
            {error?.email && (
              <span className='email-error'>{error?.email}</span>
            )}
          </div>
          <div className='login-input-container'>
            <label>Password</label>
            <Input.Password
              className='basic-input '
              placeholder='Password'
              onChange={handleInputs}
              name='password'
              value={loginData.password}
            />
            <div className='login-error-container'>
              {error?.password && (
                <span className='validation-error'>{error?.password}</span>
              )}
              <Link to='/forgot-password'>Forgot Password? </Link>
            </div>
          </div>
          <div className='login-input-container'>
            <button
              onClick={handleLogin}
              className='primary-button '>
              Login
            </button>
            {/* <button
              onClick={googleLogin}
              className='secondary-button'>
              <img
                src={googleLogo}
                alt=''
              />
              Google Login
            </button> */}
          </div>
        </div>
      </div>
      <div className='login-image-container'>
        <img
          src={HROffice}
          alt=''
        />
      </div>
    </div>
  );
}

export default Login;
