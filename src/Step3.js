import React from 'react'
import NextStep from './Components/NextStep'
import PrevStep from './Components/PrevStep'
import AddOns from './Components/AddOns'

function Step3({stepNumber, setStepNumber, handleAddOnsChange}) {
  return (
    <div className='stp step-3'>
      <header>
        <h1 className='title'>Pick add-ons</h1>
        <p className="exp">Add-ons help enhance your gaming experience</p>
      </header>

    <form className="form-3">
      <AddOns boxID={1} inputID={"online"} labelTitle={"Online service"} description={"Access to multiplayer games"} price={"+1/mo"} handleAddOnsChange={handleAddOnsChange}/>
      <AddOns boxID={2} inputID={"larger"} labelTitle={"Larger storage"} description={"Extra 1TB of cloud save"} price={"+2/mo"} handleAddOnsChange={handleAddOnsChange}/>
      <AddOns boxID={3} inputID={"profile"} labelTitle={"Customizable Profile"} description={"Custom them on your profile"} price={"+2/mo"} handleAddOnsChange={handleAddOnsChange}/>
    </form>


      <div className="btns">
        <PrevStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        <NextStep stepNumber={stepNumber} setStepNumber={setStepNumber}/>
      </div>
    </div>
  )
}

export default Step3
