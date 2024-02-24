import React from 'react'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'

function Step3({stepNumber, setStepNumber}) {
  return (
    <div className='stp step-3'>
      <h1 className='title'>Pick add-ons</h1>


      <div className="btns">
        <PrevStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        <NextStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
      </div>
    </div>
  )
}

export default Step3
