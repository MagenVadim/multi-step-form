import React from 'react'
import Input from './Components/Input'
import { useNavigate } from 'react-router-dom';

function Step1({stepNumber, nameValue, setNameValue, emailValue, setEmailValue, phoneValue, setPhoneValue, setStepNumber}) {

    const navigate = useNavigate();

  return (
    <div className="stp stp-1">
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
      <button 
        className='next-stp' 
        type="submit"
        onClick={()=>{
            setStepNumber(stepNumber+1);
            navigate('/step2');
        }}
        > Next Step
      </button>
    </div>

  </div>
  )
}

export default Step1
