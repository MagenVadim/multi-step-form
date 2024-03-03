import React from 'react'
import { useNavigate } from 'react-router-dom';

function NextStep({stepNumber, setStepNumber, statusButton}) {  
  const navigate = useNavigate();

  return (
    <button 
        className={statusButton ? `next-stp btn-disabled` : `next-stp`}
        type="button"
        onClick={()=>{
          setStepNumber(prev => prev+1)
          navigate(`/step${stepNumber+1}`);
          localStorage.setItem('stepNumber', stepNumber+1) 
        }}
        disabled={statusButton}
        > {stepNumber===4 ? "Confirm": "Next Step"}
  </button>
  )
}

export default NextStep
