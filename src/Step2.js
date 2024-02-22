import React from 'react'
import PlanCard from './Components/PlanCard'
import IconArcade from './assets/images/icon-arcade.svg'
import IconAdvanced from './assets/images/icon-advanced.svg'
import IconPro from './assets/images/icon-pro.svg'

function Step2() {

  const plan_priced = [
    {plan_name:"Arcade", plan_price:"$9/mo", img_source:IconArcade},
    {plan_name:"Advanced", plan_price:"$12/mo", img_source:IconAdvanced},
    {plan_name:"Pro", plan_price:"$15/mo", img_source:IconPro}
  ]

  return (
    <div className="stp stp-2">

      <header>
        <h1 className="title">Select your plan</h1>
        <p className="exp">You have the option of monthly or yearly billing</p>
      </header>

      <form className="form-2">
        {
          plan_priced.map((obj)=>(
            <PlanCard key={obj.plan_name} img_source={obj.img_source} title={obj.plan_name} plan_price={obj.plan_price}/>
          ))
        }
      </form>
      
    </div>
  )
}

export default Step2
