import React from 'react'

function Input({type, labelName, id, placeholder, value, fieldStatus, blurHandler, name, nameError, fieldHandler}) {
  return (
    <>
        <div className="label">
            <label htmlFor={id}>{labelName}</label>

            {fieldStatus ? (<p className="error">{nameError}</p>) : (<p className="error"></p>)}

        </div>
        <input 
          type={type} 
          required id={id} 
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={(e)=>blurHandler(e)}
          onChange={(e)=>fieldHandler(e)}
        />
    </>

  )
}

export default Input
