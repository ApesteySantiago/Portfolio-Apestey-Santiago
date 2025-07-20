import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experiencia = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Formación</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center justify-center gap-x-8">
            <div
              className="w-16 h-16 rounded-full border flex items-center justify-center backdrop-blur-2xl shadow-black shadow-md">
              <p className="text-lg font-bold">{experience.year}</p>
            </div>
            <div className="p-5 w-full max-w-xl lg:w-3/4">

              <h5 className="mb-2 font-bold text-2xl">
                {experience.role} - {" "}
                <span className='text-lg'>
                  {experience.company}
                </span>
              </h5>
              
              <p className='mb-4'>{experience.description}</p>

              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 ml-1 border rounded tracking-tight ">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experiencia