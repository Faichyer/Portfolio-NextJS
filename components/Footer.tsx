import Image from 'next/image'
import React from 'react'

const Footer = () => {

  const src = "/favicon.ico";
  return (
    <div className="mx-auto flex flex-col container relative">
      <div className="text-2xl text-white font-playfair">
        Say Hi :
    </div>
      <a href="mailto:miki.namsrai@gmail.com" className="font-playfair text-6xl text-white hover:text-purple-700 cursor-pointer mt-16">
        Email
    </a>
      <a href="https://www.linkedin.com/in/mikinamsrai/" className="font-playfair text-6xl text-white hover:text-purple-700 cursor-pointer">
        LinkedIn
    </a>
      <a href="https://www.instagram.com/miki.nsi" className="font-playfair text-6xl text-white hover:text-purple-700 cursor-pointer">
        Instagram 
    </a>
      <div className="absolute bottom-0 text-white flex flex-row font-playfair font-semibold">
        Built with <Image src={src} width={25} height={20} alt="Next.JS" /> by Miki Namsrai
    </div>
    </div>
  )
}

export default Footer
