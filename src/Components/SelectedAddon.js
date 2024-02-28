import React from 'react'

function SelectedAddon({servicName, servicPrice}) {
  return (
    <div className='selected-adon'>
        <span className="service-name">{servicName}</span>
        <span className="service-price">{servicPrice}</span>
      
    </div>
  )
}

export default SelectedAddon
