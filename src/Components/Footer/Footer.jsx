import React from 'react'
import './footer.css'
import Button from '../Button/Button'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerWrapper">
        <img src="assets/logo-light.svg" alt="footerLogo" className="footerLogo" />
        <Button color='purple'/>
      </div>
    </div>
  )
}

export default Footer