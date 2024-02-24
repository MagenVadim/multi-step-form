import React from 'react'
import { useNavigate } from 'react-router-dom';


function NextStep({stepNumber, setStepNumber}) {
    const navigate = useNavigate();

  return (
    <button 
        className='next-stp' 
        type="button"
        onClick={()=>{
            setStepNumber(stepNumber+1);
            navigate('/step2');
        }}
        > Next Step
  </button>
  )
}

export default NextStep
