import React from 'react'

function AddOns({boxID, inputID, labelTitle, description, price, handleAddOnsChange}) {


  return (
    <div className="box" id={boxID}>
        <input type="checkbox" id={inputID} onChange={handleAddOnsChange} value={labelTitle}/>
        <div className="description">
            <label htmlFor={inputID}>{labelTitle}</label>
            <small>{description}</small>
        </div>
        <p className="price">{price}</p>
    </div>
  )
}

export default AddOns
