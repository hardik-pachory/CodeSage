import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { db } from '../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const LoginCompo = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [tried, setTried] = useState(false);
  const [correctPass, setCorrectPass] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const usersCollectionRef = collection(db, 'users');
  const handleLogin = async () => {
    const q = query(usersCollectionRef, where('username', '==', user));
    const FireUser = await getDocs(q);

    const userData =
      FireUser?.docs[0]?._document?.data?.value?.mapValue?.fields;
    const userIn = {
      complete: userData.complete.integerValue,
      name: userData.name.stringValue,
      username: userData.username.stringValue,
      password: userData.password.stringValue,
    };
    setTried(true);
    userIn.password == pass ? setCorrectPass(true) : setCorrectPass(false);
    console.log(correctPass);
    auth.login(userIn);
    navigate('/');
  };

  const consoleLogin = async () => {
    let result = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: { user },
        password: 'password@123',
        age: 24,
      }),
    });
    result = await result.json();
    console.log(result.username.user);
    document.cookie = `username=${result.username.user}`;
    auth.login(user);
    navigate('/');
  };

  return (
    <form className='offset-md-3 col-md-6 justify-content-between'>
      <ToastContainer />
      <h3>Sign In</h3>
      <div className='mb-3'>
        <label>Username</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setUser(e.target.value)}
          placeholder='Enter email'
        />
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          onChange={(e) => setPass(e.target.value)}
          placeholder='Enter password'
        />
      </div>
      <div className='d-grid'>
        <p onClick={handleLogin} type='submit' className='btn btn-warning'>
          Submit
        </p>
      </div>
      <p className='forgot-password text-right'>
        Not a User? <Link to='/register'>Register Here.</Link>
      </p>
      {!correctPass && tried && (
        <p className='text-danger text-center'>Password Wrong!</p>
      )}
      {correctPass && tried && (
        <p className='text-success text-center'>Password Correct!</p>
      )}
    </form>
  );
};
