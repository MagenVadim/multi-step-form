import React from 'react'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'
import SelectedAdon from "./Components/SelectedAddon"

function Step4({stepNumber, setStepNumber, selectedID, plan_priced}) {
  return (    
      <div className="stp step-4">
        <header>
          <h1 className="title">Finishing up</h1>
          <p className="exp">
            Double-check everything looks OK before confirming.
          </p>
        </header>
        <div className="selection-box">

          <div className="selection-container">

            <div className="selected-plan">
              <p className="plan-name">{plan_priced[selectedID].plan_name}</p>
              <p className="plan-price">{plan_priced[selectedID].plan_price}</p>
            </div>

            <hr />
            <div className="addons">
              <SelectedAdon/>
            </div>
          </div>
          
        </div>

        <p className="total">Total (per month) <b>+$12/mo</b></p>
        
        <div className="btns">
          <PrevStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
          <NextStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        </div>

      </div>
  )
}

export default Step4
