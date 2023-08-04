import React from 'react'

//styles

import './landingPage.css'

// components
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Feed from '../../Components/Feed/Feed'
import Footer from '../../Components/Footer/Footer'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Navbar/>
      <Header/>
      <Feed/>
      <Footer/>
    </div>
  )
}

export default LandingPage