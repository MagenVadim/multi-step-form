import React from 'react'
import ImageThanks from './assets/images/icon-thank-you.svg'

function Step5() {
  return (
    <div className='stp step-5'>
      <img src={ImageThanks} alt="thank" />
      <header>
        <h1 className="title">Thank you!</h1>
        <p className="exp">Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to emailus at support@loremgaming.com
        </p>
      </header>
    </div>
  )
}

export default Step5
