import React from 'react'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'

function Step4({stepNumber, setStepNumber}) {
  return (
    <div>
      <h1>Step 4</h1>
      <div className="btns">
        <PrevStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        <NextStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
      </div>
    </div>
  )
}

export default Step4
