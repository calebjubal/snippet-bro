import React from 'react'
import Hero from './components/hero'
import Buttons from './components/buttons';
import Logo from './components/logos';

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <Hero />
    </div>
  )
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 items-center justify-between max-sm:flex-col ">
      <Logo />
      <Buttons />
    </div>
  )
}

