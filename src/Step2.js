import React, { useEffect, useState } from 'react'
import PlanCard from './Components/PlanCard'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'

function Step2({stepNumber, setStepNumber, selectedID, setSelectedID, plan_priced, terminPlan, setTerminPlan}) {
 

  const handleInputCheckBox = (e)=>{
    setTerminPlan(e.target.checked);   
  }

  const handleClick = (i)=>{
    setSelectedID(i)
  }

  return (
    <div className="stp step-2">

      <header>
        <h1 className="title">Select your plan</h1>
        <p className="exp">You have the option of monthly or yearly billing</p>
      </header>

      <form className="form-2">
        {
          plan_priced.map((obj, index)=>(
            <PlanCard 
              key={obj.plan_name} 
              img_source={obj.img_source} 
              title={obj.plan_name} 
              plan_price={obj.plan_price}
              bonus={obj.bonus}
              className={selectedID===index ? "plan-card selected" : "plan-card"}
              handleClick={handleClick}
              index={index}
            />
          ))
        }
      </form>

      <div className="switcher">
        <p className="monthly sw-active">Monthly</p>
        <label className="switch">
          <input type="checkbox" onChange={handleInputCheckBox} checked={terminPlan}/>
          <span className="slider round"></span>
        </label>
        <p className="yearly">Yearly</p>
      </div>

      <div className="btns">
        <PrevStep key={"butt-st2-01"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        <NextStep key={"butt-st2-02"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
      </div>
      
    </div>
  )
}

export default Step2
