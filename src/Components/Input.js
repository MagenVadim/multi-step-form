import React from 'react'

function Input({type, labelName, id, placeholder, value, setNameValue}) {
  return (
    <>
        <div className="label">
            <label htmlFor={id}>{labelName}</label>
            <p className="error">This Field is Required</p>
        </div>
        <input 
          type={type} 
          required id={id} 
          placeholder={placeholder}
          value={value}
          onChange={(e)=>setNameValue(e.target.value)}
        />
    </>

  )
}

export default Input
