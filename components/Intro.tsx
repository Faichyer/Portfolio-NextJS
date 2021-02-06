import React from 'react'
import Image from 'next/image'

const Intro = props => {
  return (
    <div className="min-h-screen flex justify-center items-center text-center mx-auto flex-col mt-32">
      <div className="loader">
        <div className="m-0 p-0 absolute w-4/5 opacity-75 transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4">
          <Image src="/images/ring.png" width={1250} height={750} />
        </div>
        <div className="m-0 p-0 absolute w-4/5 opacity-75 transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4">
          <Image src="/images/ring.png" width={1250} height={750} />
        </div>
        <div className="m-0 p-0 absolute w-4/5 opacity-75 transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4">
          <Image src="/images/ring.png" width={1250} height={750} />
        </div>
      </div>
      <div>
        <Image src="/images/Photo_miki_3.jpg" width={120} height={120} className="rounded-full" />
      </div>
      <div className="xl:text-3xl lg:text-3xl md:text-2xl text-xl text-white font-medium mt-4 font-playfair ">
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
      <div className="flex flex-row mt-12 text-white text-lg leading-8">
        <span className="click-see-profile cursor-pointer hover:text-purple-700 transition duration-750">See my profile</span><span className="ml-1"> or scroll down to see my work</span>
      </div>
    </div>
  )
}

export default Intro
