import React from 'react'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'
import AddOns from './Components/AddOns'

function Step3({stepNumber, setStepNumber, handleAddOnsChange, add_ons}) {
  return (
    <div className='stp step-3'>
      <header>
        <h1 className='title'>Pick add-ons</h1>
        <p className="exp">Add-ons help enhance your gaming experience</p>
      </header>

    <form className="form-3">
      <AddOns 
        key={"add-01"} 
        boxID={1} 
        inputID={"online"} 
        labelTitle={"Online service"} 
        description={"Access to multiplayer games"} 
        price={"+1/mo"} 
        handleAddOnsChange={handleAddOnsChange}
        checked={add_ons[0].checkStatus}
      />
      <AddOns 
        key={"add-02"} 
        boxID={2} 
        inputID={"larger"} 
        labelTitle={"Larger storage"} 
        description={"Extra 1TB of cloud save"} 
        price={"+2/mo"} 
        handleAddOnsChange={handleAddOnsChange}
        checked={add_ons[1].checkStatus}
      />
      <AddOns 
        key={"add-03"} 
        boxID={3} 
        inputID={"profile"} 
        labelTitle={"Customizable Profile"} 
        description={"Custom them on your profile"} 
        price={"+2/mo"} 
        handleAddOnsChange={handleAddOnsChange}
        checked={add_ons[2].checkStatus}
      />
    </form>


      <div className="btns">
        <PrevStep key={"butt-st3-01"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        <NextStep key={"butt-st3-02"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
      </div>
    </div>
  )
}

export default Step3
