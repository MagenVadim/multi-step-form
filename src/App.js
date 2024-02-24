import './App.css';
import Step from './Components/Step'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect, useRef } from "react";


function App() {

  const steps = [
    {step: 1, info:"Your info"},
    {step: 2, info:"Select plan"},
    {step: 3, info:"ADD-ONS"},
    {step: 4, info:"Summary"},
  ]

  const [stepNumber, setStepNumber] = useState(1)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

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
                  />}
        />

      </Routes>



      </div>

      </div>
    </div>
  );
}

export default App;
