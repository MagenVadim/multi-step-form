import React from 'react'

function Step({step, info, stepNumber}) {


  return (
    <div className={step===stepNumber ? 'step active' : 'step'}>
      <div className="circle">{step}</div>
      <div className="step-content">
        <span>Step {step}</span>
        <b>{info}</b>
      </div>
    </div>
  )
}

export default Step
