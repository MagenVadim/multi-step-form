import React from 'react'
import Input from './Components/Input'
import NextStep from './Components/NextStep'


function Step1({
   stepNumber,
   nameValue,
   setNameValue,
   emailValue,
   setEmailValue,
   phoneValue,
   setPhoneValue,
   setStepNumber,
   setNameStatus,
   nameStatus,
   statusButton
  }) 
  {

  const nameHandler = (e)=>{
    setNameValue(e.target.value)
    if (e.target.value<1) {
      setNameStatus(true);      
    } else {
      setNameStatus(false);
    }
  }

  return (
    <div className="stp step-1">
        <header>
        <h1 className="title">Personal info</h1>
        <p className="exp">
            Please provide your name, email address, and phone number.
        </p>
        </header>

        <form className='form-1'>
        <Input 
            key ={"input-1"} 
            type ={'text'} 
            labelName={'Name'} 
            id={'name'} 
            placeholder={'Name Surname'} 
            value={nameValue} 
            setNameValue={setNameValue}
            nameHandler={nameHandler}
            nameStatus={nameStatus}
        />
        <Input 
            key ={"input-2"} 
            type ={'text'} 
            labelName={'Email Address'} 
            id={'email'} 
            placeholder={'email@gmail.com'}
            value={emailValue} 
            setNameValue={setEmailValue}
        />
        <Input 
            key ={"input-3"} 
            type ={'phone'} 
            labelName={'Phone Number'} 
            id={'phone'} 
            placeholder={'+1 234 567 890'}
            value={phoneValue} 
            setNameValue={setPhoneValue}
        />
        </form>

    <div className="btns">
      <NextStep key={"butt-st1-01"} stepNumber={stepNumber} setStepNumber={setStepNumber} statusButton={statusButton}/>
    </div>

  </div>
  )
}

export default Step1
