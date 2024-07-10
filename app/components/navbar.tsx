import React from 'react'
import Buttons from './buttons'
import Logo from './logos'

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 items-center justify-between max-sm:flex-col ">
      <Logo />
      <Buttons />
    </div>
  )
}



export default Navbar