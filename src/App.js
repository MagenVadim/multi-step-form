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

  const add_ons = [
    {service:"Online service", price:"+1/mo", checkStatus:false},
    {service:"Larger storage", price:"+2/mo", checkStatus:false},
    {service:"Customizable Profile", price:"+2/mo", checkStatus:false}
  ]
  const handleAddOnsChange = (e)=>{ 

      // const nextCheckBoxStatus = checkBoxStatus.map((obj)=>{
      //   if(obj.service===e.target.value){
      //     return {...obj, checkStatus: true}
      //   } else {
      //     return obj
      //   }
      // })
      // setCheckBoxStatus(nextCheckBoxStatus)

      if(e.target.checked) {
        add_ons.map((elem)=>{          
          if(e.target.value===elem.service)
          set_add_ons_selected([...add_ons_selected, elem]);        
        });
      } else { 
        set_add_ons_selected(add_ons_selected.filter(obj=>obj.service != e.target.value))        
      } 
  }




  const [stepNumber, setStepNumber] = useState(1)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [selectedID, setSelectedID] = useState(0)
  const [checkBoxStatus, setCheckBoxStatus] = useState(add_ons)

  const [add_ons_selected, set_add_ons_selected] = useState([
    {service:"Online service", price:"+$1/mo", checkStatus:true},
    {service:"Larger storage", price:"+$2/mo", checkStatus:true},
    {service:"Customizable Profile", price:"+$2/mo", checkStatus:false}
  ])

  useEffect(()=>
    add_ons_selected.forEach((elem)=>console.log(elem.service + ", " + elem.price)
  ),[add_ons_selected])
  // useEffect(()=>console.log(checkBoxStatus),[checkBoxStatus])

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
                  handleAddOnsChange={handleAddOnsChange}
                  add_ons={checkBoxStatus}
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
