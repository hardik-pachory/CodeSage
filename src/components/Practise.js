import React from 'react'
import ques from '../ques'
import { Navigate, useNavigate } from 'react-router-dom'
import Problem from './Problem'

const Practise = () => {
  const navigate = useNavigate();
  const handleClick = (question) => {
    console.log(question);
    navigate('/problem', {state:question})
  }

  return (
    <div className='p-5 my-3'>
      {ques.map((question) => (
        <div className="offset-md-2" style={{cursor: 'pointer'}}>
          <div onClick={() => handleClick(question)} className="p-3 bg-warning col-md-10 border border-dark m-2">
            <p><strong>{question.title}</strong></p>
          </div>
        </div>
      ))}
      <p className="text-danger text-center my-3"><strong>More questions adding soon...</strong></p>
    </div>
  )
}

export default Practise