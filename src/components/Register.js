import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);

  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      complete: 0,
      list: [],
      name: fullName,
      username: username,
      password: password,
    });
    setDone(true);
    console.log(fullName, username, password);
  };

  return (
    <div>
      <form className='offset-md-3 col-md-6 justify-content-between'>
        <h3>Register</h3>
        <div className='mb-3'>
          <label>Fullname</label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Enter full name'
          />
        </div>
        <div className='mb-3'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter username'
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
          />
        </div>
        <div className='d-grid'>
          <p onClick={createUser} type='submit' className='btn btn-warning'>
            Submit
          </p>
        </div>
        <p className='forgot-password text-right'>
          Already a User? <Link to='/login'>Sign In here.</Link>
        </p>
        {done && (
          <p className='text-success'>
            User Registered Successfully! Go to Login Now!
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
