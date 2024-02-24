import React from 'react'
import { useNavigate } from 'react-router-dom';


function PrevStep({stepNumber, setStepNumber}) {
    const navigate = useNavigate();

  return (
    <button 
        className='prev-stp' 
        type="submit"
        onClick={()=>{
            setStepNumber(prev => prev-1);
            stepNumber===2 ? navigate("/") : navigate(`/step${stepNumber-1}`);
        }}
        > Go Back
  </button>
  )
}

export default PrevStep
