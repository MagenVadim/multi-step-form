import React from 'react'

function Input({type, labelName, id, placeholder}) {
  return (
    <>
        <div className="label">
            <label htmlFor={id}>{labelName}</label>
            <p className="error">This Field is Required</p>
        </div>
        <input type={type} required id={id} placeholder={placeholder}/>
    </>

  )
}

export default Input
