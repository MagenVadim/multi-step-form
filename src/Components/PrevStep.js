import React from 'react'
import { useNavigate } from 'react-router-dom';


function PrevStep({stepNumber, setStepNumber}) {
    const navigate = useNavigate();

  return (
    <button 
        className='prev-stp' 
        type="submit"
        onClick={()=>{
            setStepNumber(stepNumber-1);
            navigate('/');
        }}
        > Go Back
  </button>
  )
}

export default PrevStep
