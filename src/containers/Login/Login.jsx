import React, { useEffect } from 'react';
import LoginVector from '../../assets/images/auth/login-vector.png';
import './login.scss';
import { commonIcons } from '../../assets/images/common';
import Inputs from '../../components/CustomComponents/Inputs/Inputs';
import Buttons from '../../components/CustomComponents/Buttons/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggedInUser } from '../../redux/users/actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const [userData, setUserData] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState({ email: '', password: '' });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleLogin = () => {
    if (
      validateEmail(userData.email)
      //  && validatePassword(userData.password)
    ) {
      dispatch(
        fetchLoggedInUser({
          email: userData?.email,
          password: userData?.password,
        })
      );
    } else {
      let emailErr = '';
      let passwordErr = '';
      if (!validateEmail(userData.email)) {
        emailErr = 'Enter valid email';
      }
      if (userData?.password.length < 8 || userData?.password === '') {
        passwordErr = 'Enter valid 8 digit password';
      }
      // else if (!validatePassword(userData.password)) {
      //   passwordErr =
      //     'password must contain at least one uppercase,one lowercase and one number';
      // }
      setError({ email: emailErr, password: passwordErr });
    }
  };

  useEffect(() => {
    if (user && user?.token && user?.isVerified) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [user, user?.isVerified, navigate, user?.token]);
  return (
    <div className='login-container'>
      <div className='vector-container'>
        <img
          className='vector'
          src={LoginVector}
          alt=''
        />
      </div>
      <div className='credentials-container'>
        <div className='credentials-wrapper'>
          <img
            className='logo'
            src={commonIcons.Logo}
            alt='Logo'
          />
          <h1 className='title'>Welcome!</h1>
          <div className='form-wrapper'>
            <div className='input-container'>
              <Inputs
                label='Email'
                type='email'
                placeholder='Email'
                value={userData.email}
                name={'email'}
                onChange={handleInputs}
                errorMessage={error?.email}
              />
            </div>
            <div className='input-container'>
              <Inputs
                label='Password'
                type='password'
                placeholder='Password'
                value={userData.password}
                name={'password'}
                onChange={handleInputs}
                errorMessage={error?.password}
              />
            </div>
          </div>
          <div className='button-container'>
            <Buttons onClick={handleLogin}>Login</Buttons>
            <div className='signup-link-wrapper'>
              <p>
                Don't have an account? <Link to={'/signup'}>Signup Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
