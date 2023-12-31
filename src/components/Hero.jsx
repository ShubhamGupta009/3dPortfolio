import React from 'react'
import { motion} from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hii, I am <span className='text-[#915eff]'>Shubham</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Full Stack Developer devloping User interfaces and Web Applications <br className='sm:block hidden'/></p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero