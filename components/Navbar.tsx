import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-none w-full sticky top-0 lg:z-50 max-w-8xl mx-auto">
      <div className="flex flex-row justify-between">
        <div className="text-white lg:text-2xl sm:text-xl text-xl lg:mt-12 lg:ml-12 ml-4 mt-8 fixed font-playfair">- MN</div>
        <div className="text-white lg:text-2xl sm:text-xl text-xl lg:mt-12 lg:mr-12 mr-4 mt-8 fixed top-0 right-0 font-playfair">Profile</div>
      </div>
    </div>
  )
}

export default Navbar
