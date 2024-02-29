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
      {add_ons.map((el, index)=>(
        <AddOns 
          key={el.service} 
          boxID={index + 1} 
          inputID={el.inputID} 
          labelTitle={el.service} 
          description={el.description} 
          price={el.price} 
          handleAddOnsChange={handleAddOnsChange}
          checked={el.checkStatus}
        />
      ))
      }

    </form>


      <div className="btns">
        <PrevStep key={"butt-st3-01"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        <NextStep key={"butt-st3-02"} stepNumber={stepNumber} setStepNumber={setStepNumber}/>
      </div>
    </div>
  )
}

export default Step3
