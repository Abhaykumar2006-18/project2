import React from 'react'
import ankit from '../assets/ankit.png'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='h-[100vh] w-[100%] overflow-hidden  bg-black pt-15 px-6  items-center flex flex-col md:flex-row md:justify-between '>
        <div className=' h-[50%] md:h-[70%] w-[100%] md:w-[60%] pt-15 flex flex-col grid grid-cols-1 font-Cinzel items-center md:gap-3 md:pl-20 '>
              <motion.span initial={{opacity:0 , x:-500}} animate={{opacity:1 , x:0}} transition={{duration:1 , delay:1}} className="text-cyan-400 text-sm md:text-base tracking-[4px] uppercase underline underline-offset-6"> Astro & Wealth Coach </motion.span>
               <motion.h2 initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0}} transition={{duration:1 , delay:2}} className="font-Cinzel text-xl md:text-4xl font-bold text-white leading-tight"> Dr R Ankit</motion.h2>

            <motion.h1 initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0}} transition={{duration:1 , delay:1}} className=" text-3xl md:text-6xl font-bold text-white leading-tight"> Navigate Life<span className="block text-cyan-300">  Wealth With Clarity</span> </motion.h1>

            <motion.p initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0}} transition={{duration:1 , delay:1}} className="max-w-xl text-gray-400 text-[12px] md:text-lg leading-relaxed"> Gain clarity in career, finances, and life decisions through personalized astrological insights and strategic wealth guidance.</motion.p>


            <motion.button initial={{opacity:0 }} animate={{opacity:1 }} transition={{duration:1 , delay:3}} className=" max-w-[190px] px-6 py-3 rounded-xl bg-black border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:border-cyan-300">Book Session</motion.button>
        </div>
        
        <motion.div initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0}} transition={{duration:1 , delay:1}} className='relative h-[50%] md:h-[70%] w-[100%] md:w-[40%]  md:items-baseline'><img src={ankit} className='absolute h-[100%] w-[100%] drop-shadow-[0_0_80px_rgba(255,215,0,0.15)] opacity-85   drop-shadow-[0_0_100px_rgba(255,255,255,0.1)]'  style={{ maskImage:"linear-gradient(to bottom, black 65%, rgba(0,0,0,0.8) 80%, transparent 100%)", WebkitMaskImage:"linear-gradient(to bottom, black 65%, rgba(0,0,0,0.8) 80%, transparent 100%)",}}  alt="" /></motion.div>
    
    
    </div>
  )
}

export default Hero