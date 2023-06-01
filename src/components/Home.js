import React from 'react';
import Land from '../assets/images/Land.png';
import wave from '../assets/images/wave.svg';
import { useAuth } from '../auth';
const Home = () => {
  return (
    <>
      <div className='container-fluid  p-2 banner'>
        <div className='row justify-content-evenly'>
          <div className='col-md-4 m-5 my-5'>
            <h1 className='display-1'>
              The <strong className='text-warning'>Journey</strong> you chose,
            </h1>
            <h3 className='slogan'>
              The <strong className='text-warning'>Path</strong> we provide.
            </h3>
          </div>
          <div className='col-md-6'>
            <img src={Land} className='landing-img' alt='HeaderImage' />
          </div>
        </div>
      </div>

      {/* Here Ends the banner */}
      <section className='features-icons bg-light text-center m-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='features-icons-item'>
                <div className='features-icons-icon d-flex'>
                  <i className='bi-window  bi-3xl m-auto text-warning'></i>
                </div>
                <h3>Learn</h3>
                <p className='lead mb-0'>
                  All you need to learn to have a gppd grasp of DSA. HEADS UP!
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='features-icons-item'>
                <div className='features-icons-icon d-flex'>
                  <i className='bi-layers bi-3xl m-auto text-warning'></i>
                </div>
                <h3>Practise</h3>
                <p className='lead mb-0'>
                  Practise through the well curated list of problem statements,
                  and HUSTLE UP!
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='features-icons-item'>
                <i className='bi-terminal bi-3xl m-auto text-warning '></i>
                <h3>Compete</h3>
                <p className='lead mb-0'>
                  The warrior is now ready to test it's skills in front of
                  others. BUCKLE UP!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Describing about section */}
      <section className='mt-5'>
        <h1 className='text-center pt-5' style={{ fontSize: '3rem' }}>
          About Us{' '}
        </h1>
        <img src={wave} alt='' />
        <div class='container-fluid darker mb-3'>
          <div class='row d-flex justify-content-center'>
            <div class='col-md-7'>
              {/* Card begins */}
              <div class='card bg-dark text-light p-3 py-4 mb-5 glass'>
                <div class='text-center'>
                  <img
                    src='https://media.licdn.com/dms/image/D4D03AQHjDrOu96rOFw/profile-displayphoto-shrink_800_800/0/1680237037448?e=1689206400&v=beta&t=Azv1SjbI_fy8nN7JrrKMEHW4tBkyTomnDwoeGpXK4Ps'
                    class='rounded-circle'
                    width='25%'
                  />
                </div>

                <div class='text-center mt-3'>
                  <h5 class='mt-2 mb-0'>Hardik Pachory</h5>
                  <span>
                    <i>Web Developer & Software Engineer</i>
                  </span>
                  <ul
                    class='social-list d-flex justify-content-md-center'
                    style={{ listStyle: 'none' }}
                  >
                    <li className='p-3'>
                      <i class='bi text-warning bi-2xl bi-facebook'></i>
                    </li>
                    <li className='p-3'>
                      <i class='bi text-warning bi-2xl bi-instagram'></i>
                    </li>
                    <li className='p-3'>
                      <i class='bi text-warning bi-2xl bi-linkedin'></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='m-4'>
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
