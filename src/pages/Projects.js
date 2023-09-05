import React from 'react'
import AnimatedText from '../components/AnimateText'
import { motion } from 'framer-motion'
import Project from '../components/Project'
import Button from '../components/Button'
import projectlinks from '../utils/projectlinks'
const Projects = () => {


  return (
    <div className='pb-24'>
      <div className='fixed w-full h-full animate-pulse bg-black/50 rotate-[30deg] top-36 -z-20'>
      
      </div>

      <AnimatedText
        className='!text-5xl md:!text-6xl lg:!text-8'
        text={"Imaging Trumps Knowledges"}
      />
      <div
        className='pt-6 mb-10 container mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(20rem,calc(100%-30px)),_1fr))] gap-y-10 gap-x-4 px-2'
      >

        {
          projectlinks.map((arr, index) => {
            return (<Project key={index} {...arr} />)

          })
        }
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0.3 }}
        whileInView={{
          y: 0, opacity: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <Button
          title="Load More"
          className="bg-transparent !text-black !font-medium !border !py-2.5 hover:!bg-black hover:!text-white hover:!rounded-md transition-all duration-500 !border-black"
        />
      </motion.div>
    </div>
  )
}

export default Projects