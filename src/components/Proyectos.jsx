import React from "react"
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"


const Proyectos = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="borde-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Proyectos</motion.h2>
      <div id="proyectos-grid" className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="tarjeta w-[92%] md:w-[45%] max-w-md flex flex-col rounded-xl backdrop-blur-2xl shadow-black/50 shadow-2xl gap-6 p-4"
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center"
            >
              <h2 className="text-2xl font-bold text-black mb-4">{project.title}</h2>
              <a href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-85 h-50 object-cover mx-auto rounded transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                /></a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-neutral-700"
            >
              <p className="mb-2 line-clamp-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white border border-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Proyectos

//<div className="w-96 h-[410px] absolute flex flex-col rounded-xl top-44 left-[500px] backdrop-blur-2xl shadow-black shadow-xl gap-9">
//          <div className="w-full text-center tex-3xl font-bold text-black mt-8">
//            <h2>Hola</h2>
//          </div>
//        </div>