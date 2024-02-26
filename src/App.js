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

  const plan_priced = [
    {plan_name:"Arcade", plan_price:"$9/mo", img_source:IconArcade},
    {plan_name:"Advanced", plan_price:"$12/mo", img_source:IconAdvanced},
    {plan_name:"Pro", plan_price:"$15/mo", img_source:IconPro}
  ]


  const [stepNumber, setStepNumber] = useState(1)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [selectedID, setSelectedID] = useState(0)


  useEffect(()=>console.log(nameValue),
  [stepNumber])

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
                  />}
        />
        <Route path='/step3' 
          element={<Step3
                  stepNumber={stepNumber} 
                  setStepNumber={setStepNumber}
                  />}
        />
        <Route path='/step4' 
          element={<Step4
                  stepNumber={stepNumber} 
                  setStepNumber={setStepNumber}
                  selectedID={selectedID}
                  plan_priced={plan_priced}
                  />}
        />

      </Routes>



      </div>

      </div>
    </div>
  );
}

export default App;
