import './App.css';
import Step from './Components/Step'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
import IconArcade from './assets/images/icon-arcade.svg'
import IconAdvanced from './assets/images/icon-advanced.svg'
import IconPro from './assets/images/icon-pro.svg'

function App() {

  const steps = [
    {step: 1, info:"Your info"},
    {step: 2, info:"Select plan"},
    {step: 3, info:"ADD-ONS"},
    {step: 4, info:"Summary"},
  ]
  const plan_priced_month = [
    {plan_name:"Arcade", plan_price:"$9/mo", img_source:IconArcade, bonus:""},
    {plan_name:"Advanced", plan_price:"$12/mo", img_source:IconAdvanced, bonus:""},
    {plan_name:"Pro", plan_price:"$15/mo", img_source:IconPro, bonus:""}
  ]
  const plan_priced_year = [
    {plan_name:"Arcade", plan_price:"$90/yr", img_source:IconArcade, bonus:"2 months free"},
    {plan_name:"Advanced", plan_price:"$120/yr", img_source:IconAdvanced, bonus:"2 months free"},
    {plan_name:"Pro", plan_price:"$150/yr", img_source:IconPro, bonus:"2 months free"}
  ]

  const [plan_priced, setPlan_priced] = useState(plan_priced_month)
  const [stepNumber, setStepNumber] = useState(1)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [selectedID, setSelectedID] = useState(0)
  const [terminPlan, setTerminPlan] = useState(false)

  useEffect(()=>{
    terminPlan ? setPlan_priced(plan_priced_year) : setPlan_priced(plan_priced_month)
  },[terminPlan])

  const [add_ons_selected, set_add_ons_selected] = useState([
    {service:"Online service", price:"+$1/mo", checkStatus:false},
    {service:"Larger storage", price:"+$2/mo", checkStatus:true},
    {service:"Customizable Profile", price:"+$2/mo", checkStatus:false}
  ])

  const handleAddOnsChange = (e)=>{    
    if(e.target.checked) {      
      const nextCheckBoxStatus = add_ons_selected.map((elem)=>{
        if(e.target.value===elem.service) {
          return {...elem, checkStatus: true}
        } else return elem
      })
      set_add_ons_selected(nextCheckBoxStatus)
    } else {
      const nextCheckBoxStatus = add_ons_selected.map((elem)=>{
        if(e.target.value===elem.service) {
          return {...elem, checkStatus: false}
        } else return elem
      })
      set_add_ons_selected(nextCheckBoxStatus)
    }
  }

  return (
    <div className="App">
      <div className="form">
        <div className="form-container">
          <div className="form-sidebar">
            {
              steps.map((step)=>(
                <Step key={step.step} step={step.step} info={step.info} stepNumber={stepNumber}/>
              ))
            }
          </div>

      <Routes>
        <Route path='/'
         element={<Step1
                   stepNumber={stepNumber}
                   nameValue={nameValue}
                   setNameValue={setNameValue}
                   emailValue={emailValue}
                   setEmailValue={setEmailValue}
                   phoneValue={phoneValue}
                   setPhoneValue={setPhoneValue}
                   setStepNumber={setStepNumber}   
                  />}
        />
        <Route path='/step2' 
          element={<Step2
                  stepNumber={stepNumber} 
                  setStepNumber={setStepNumber}
                  selectedID={selectedID}
                  setSelectedID={setSelectedID}
                  plan_priced={plan_priced}
                  terminPlan={terminPlan}
                  setTerminPlan={setTerminPlan}
                  />}
        />
        <Route path='/step3' 
          element={<Step3
                  stepNumber={stepNumber} 
                  setStepNumber={setStepNumber}
                  handleAddOnsChange={handleAddOnsChange}
                  add_ons={add_ons_selected}
                  />}
        />
        <Route path='/step4' 
          element={<Step4
                  stepNumber={stepNumber} 
                  setStepNumber={setStepNumber}
                  selectedID={selectedID}
                  plan_priced={plan_priced}
                  add_ons_selected = {add_ons_selected}
                  />}
        />

      </Routes>



      </div>

      </div>
    </div>
  );
}

export default App;
