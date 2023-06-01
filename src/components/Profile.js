import React from 'react';
import { useAuth } from '../auth';
import DEV from '../assets/images/DEV.png';

const Profile = () => {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div className='m-5 p-5 offset-md-2 col-md-7'>
      <h1>Welcome, {auth.user.name}!</h1>
      <p>
        Hope you are doing well! Keep the spirits high, and keep on practising!
      </p>

      <div class='container my-5 offset-md-3'>
        <div class='card p-3 row flex-row-reverse'>
          <img class='col-lg-4 card-img-end img-fluid p-0' src={DEV} />
          <div class='col-lg-8 card-body'>
            <h1 class='card-title'>{auth.user.name}</h1>
            <p class='card-text'>Username: {auth.user.username}</p>
            <p class='card-text'>Question Completed: {auth.user.complete}</p>
            <p class='card-text'>The developer is under training!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
