import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface RingProps{
  duration: number;
}

const Ring: React.FC<RingProps> = (props) => {
  return (
    <motion.div className="m-0 p-0 absolute opacity-75 top-64 left-15 w-72 md:top-12 md:w-auto "
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: props.duration }}
    >
      <Image src="/images/ring.png" width={500} height={500} />
    </motion.div>
  )
}

export default Ring
