import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SageLogo from '../assets/images/SageLogo.png';
import { useAuth } from '../auth';
const Title = () => {
  return <img src={SageLogo} className='logo' />;
};

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/IDE'>IDE</Link>
            </li>
            {!auth.user ? null : (
              <li>
                <Link to='/practise'>Practise</Link>
              </li>
            )}

            {!auth.user ? null : (
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
            )}
            {!auth.user ? (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {/* <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav> */}
    </div>
  );
};

export default Header;
