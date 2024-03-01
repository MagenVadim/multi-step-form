import React from 'react'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'
import SelectedAdon from "./Components/SelectedAddon"

function Step4({stepNumber, setStepNumber, selectedID, plan_priced, add_ons_selected, totalSum}) {

  const render_add_ons_selected = add_ons_selected.filter(elem=>elem.checkStatus)

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
              {render_add_ons_selected.map((obj)=>(
                <SelectedAdon 
                  key={obj.service} 
                  servicName={obj.service} 
                  servicPrice={obj.price}
                />
              ))}              
            </div>
          </div>
          
        </div>

        <p className="total">Total (per month) <b>{`+$${totalSum}/mo`}</b></p>
        
        <div className="btns">
          <PrevStep key={"butt-st4-01"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
          <NextStep key={"butt-st4-02"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        </div>

      </div>
  )
}

export default Step4
