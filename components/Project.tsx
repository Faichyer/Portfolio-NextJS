import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useHover from './hooks/useHover';

interface projectProps {
  name: string;
  img: string;
  website: string;
  isActive: boolean;
  technologies: string[]
}

const Project: React.FC<projectProps> = (props) => {

  const [technologies, setTechnologies] = useState([]);
  const [hoverRef, isHovered] = useState(false);

  useEffect(() => {
    setTechnologies(props.technologies)
  }, [technologies])

  const handleHover = () => {
    isHovered(true)
  }

  const handleOut = () => {
    isHovered(false)
  }

  return (
    <div>
      <figure onMouseEnter={handleHover} onMouseLeave={handleOut} className="relative float-left overflow-hidden text-center">
        <Image src={"/images/" + props.img} width={500} height={350} className="max-w-full" />
        {
            hoverRef === true ? <figcaption className="flex flex-col justify-center absolute left-0 w-full h-full bg-background uppercase top-auto bottom-0 p-4 transform transition delay-1000 ease-in">
              <h2 className="capitalize m-0 font-semibold text-xl text-white font-title">
                {props.name}
              </h2>
              <div>
                <h3 className="inline font-thin font-title text-purple-700">
                  {props.technologies.map((tech, index) => {

                    return index != Object.keys(technologies).length - 1 ? <span key={index}>{tech} /</span> : <span key={index}>{tech} </span>
                  })}
                </h3>
              </div>
              <a className="cursor-pointer mt-12 mx-16 transition duration-500 ease-in-out transform bg-transparent font-title hover:bg-purple-900 text-purple-700 font-thin hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent">
                LEARN MORE
              </a>
            </figcaption > : null
        }
      </figure >
    </div >
  )
}

export default Project
