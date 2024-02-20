import React from 'react'

function Step({step, info}) {


  return (
    <div className='step'>
      <div className="circle">{step}</div>
      <div className="step-content">
        <span>Step {step}</span>
        <b>{info}</b>
      </div>
    </div>
  )
}

export default Step
