import React from 'react'
import _404 from "../assets/images/_404.gif";
const Error = () => {
  return (
    <div>
          <div className="_404">
              <img src={ _404 } alt="404 Not Found!"/>
          </div>      
          <h1 className='text-center display-2'>Page Not Found!</h1>
    </div>
  )
}

export default Error