import React from 'react'

function Input({type, labelName, id, placeholder, value, nameHandler, nameStatus}) {
  return (
    <>
        <div className="label">
            <label htmlFor={id}>{labelName}</label>

            {nameStatus ? (<p className="error">This Field is Required</p>) : (<p className="error"></p>)}

        </div>
        <input 
          type={type} 
          required id={id} 
          placeholder={placeholder}
          value={value}
          onChange={(e)=>nameHandler(e)}

        />
    </>

  )
}

export default Input
