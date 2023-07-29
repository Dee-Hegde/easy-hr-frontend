import React, { useState } from 'react';
import HROffice from '../../assets/images/login/HROffice.png';
import logo from '../../assets/images/logo.svg';
import googleLogo from '../../assets/images/login/googleLogo.svg';
import { Input } from 'antd';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { checkIsValid } from '../../utils/commonFunctions';
import { formats } from '../../utils/constants';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError({ ...error, [name]: '' });
  };


  const handleLogin = () => {
    if (!loginData.email || !checkIsValid(loginData.email, formats.email)) {
      let err = {
        email: '',
        password: '',
      };
      if (!loginData.email) {
        err.email = 'Enter valid email';
      }
      if (loginData.password.length < 4) {
        err.password = 'Enter valid password';
      }
      setError(err);
    } else {
      navigate('/dashboard');
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => navigate('/dashboard'),
  });
  return (
    <div className="login-main-container">
      <div className="login-main-inputs-container">
        <div className="login-inputs-container">
          <img
            src={logo}
            alt="logo"
          />
          <h3 className="login-welcome-title">Welcome!.</h3>
          <div>
            <label>
              Email <span className="error-text">*</span>
            </label>
            <Input
              value={loginData.email}
              onChange={handleInputs}
              name="email"
              placeholder="Email"
            />
            {error.email && <p className="error-text">{error.email}</p>}
          </div>
          <div>
            <label>
              Password <span className="error-text">*</span>
            </label>
            <Input.Password
              value={loginData.password}
              onChange={handleInputs}
              name="password"
              placeholder="Password"
            />
            {error.password && <p className="error-text">{error.password}</p>}
          </div>
          <div className="login-fp-container">
            <p>
              Forgot Password? <span>Click here</span>
            </p>
          </div>

          <div className="login-btn-container">
            <button
              onClick={handleLogin}
              className="primary-button">
              Login
            </button>
            <button
              className="secondary-btn "
              onClick={() => googleLogin()}>
              <div>
                <img
                  src={googleLogo}
                  alt=""
                />
                <span>Login with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="login-vector-container">
        <img
          src={HROffice}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
