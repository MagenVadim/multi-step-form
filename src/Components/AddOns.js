import React from 'react'

function AddOns({boxID, inputID, labelTitle, description, price}) {
  return (
    <div className="box" id={boxID}>
        <input type="checkbox" id={inputID}/>
        <div className="description">
            <label htmlFor={inputID}>{labelTitle}</label>
            <small>{description}</small>
        </div>
        <p className="price">{price}</p>
    </div>
  )
}

export default AddOns
