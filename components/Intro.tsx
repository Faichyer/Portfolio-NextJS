import React from 'react'
import Image from 'next/image'
import Ring from './Ring'


const Intro = props => {
  return (
    <div className="w-full max-w-8xl mx-auto">
      <div className="min-h-screen flex justify-center items-center text-center flex-col mt-32">
        <Ring duration={4} />
        <Ring duration={6} />
        <Ring duration={8} />
        <div>
          <Image src="/images/Photo_miki_3.jpg" width={120} height={120} className="rounded-full" />
        </div>
        <div className="xl:text-3xl lg:text-3xl md:text-2xl text-lg text-white font-medium mt-4 font-playfair ">
          Miki Namsrai
    </div>
        <div className=" lg:text-6xl md:text-4xl text-3xl text-white font-title mt-10 font-thin leading-none" >
          Web & Mobile
    </div>
        <div className="xl:text-8xl lg:text-6xl md:text-4xl text-3xl text-white font-title font-thin leading-none" >
          Solution Architect
    </div>

        <div className="text-white font-playfair text-2xl mt-12">
          Freelancer
    </div>
        <div className="text-white font-playfair text-2xl">
          SAP MII Consultant at Movilitas
    </div>
        <div className="flex flex-row mt-12 text-white text-base leading-8">
          <span className="click-see-profile cursor-pointer hover:text-purple-700 transition duration-750">See my profile</span><span className="ml-1"> or scroll down to see my work</span>
        </div>
      </div>
    </div>
  )
}

export default Intro
