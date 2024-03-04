import React from 'react'
import Input from './Components/Input'
import NextStep from './Components/NextStep'
import {useState} from "react"

function Step1({
   stepNumber,
   nameValue,
   setNameValue,
   emailValue,
   setEmailValue,
   phoneValue,
   setPhoneValue,
   setStepNumber,
   nameStatus,
   emailStatus,
   phoneStatus,
   setNameStatus,
   setEmailStatus,
   setPhoneStatus,
   statusButton,
   nameError,
   setNameError,
   emailError,
   setEmailError,
   phoneError,
   setPhoneError
  }) 
  {


  const nameHandler = (e)=>{
    setNameValue(e.target.value)
    if (e.target.value<1) {
      setNameStatus(true);
      setNameError("Name field can't be empty")      
    } else {
      setNameStatus(false);
      setNameError("")
    }
  }

  const emailHandler =(e)=>{
    setEmailValue(e.target.value);
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(!re.test(String(e.target.value).toLowerCase())){
        setEmailError("Invalid Email. Try again!")
        if(e.target.value.length<1){                
            setEmailError("Email field can't be empty!")
            setEmailStatus(false)
        }
    } else{
        setEmailStatus(false)
        setEmailError('')
    }
  }

  const phoneHandler =(e)=>{
    setPhoneValue(e.target.value);
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(!e.target.value.match(phoneno)){
      setPhoneError("Invalid Phone Number. Try again!")
      if(e.target.value.length<1){                
        setPhoneError("Phone Number field can't be empty!")
        setPhoneStatus(false)
      }
    } else{
      setPhoneStatus(false)
      setPhoneError('')
    }
  }


  const blurHandler = (e)=>{
    switch(e.target.name){
      case 'name': 
        setNameStatus(true)
        break
      case 'email':
        setEmailStatus(true)
        break
      case 'phone':
        setPhoneStatus(true)
        break
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
            name={'name'}
            placeholder={'Name Surname'} 
            value={nameValue} 
            setNameValue={setNameValue}
            fieldHandler={nameHandler}
            fieldStatus={nameStatus}
            blurHandler={blurHandler}
            nameError={nameError}
        />
        <Input 
            key ={"input-2"} 
            type ={'text'} 
            labelName={'Email Address'} 
            id={'email'} 
            name={'email'}
            placeholder={'email@gmail.com'}
            value={emailValue} 
            setNameValue={setEmailValue}
            fieldHandler={emailHandler}
            fieldStatus={emailStatus}
            blurHandler={blurHandler}
            nameError={emailError}
        />
        <Input 
            key ={"input-3"} 
            type ={'phone'} 
            labelName={'Phone Number'} 
            id={'phone'} 
            name={'phone'}
            placeholder={'1 234 567 890'}
            value={phoneValue} 
            setNameValue={setPhoneValue}
            fieldHandler={phoneHandler}
            fieldStatus={phoneStatus}
            blurHandler={blurHandler}
            nameError={phoneError}
        />
        </form>

    <div className="btns">
      <NextStep key={"butt-st1-01"} stepNumber={stepNumber} setStepNumber={setStepNumber} statusButton={statusButton}/>
    </div>

  </div>
  )
}

export default Step1
