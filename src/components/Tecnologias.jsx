import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";
import { DiDocker, DiPython } from "react-icons/di";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Tecnologias = () => {
  return (
    <div className="items-center border-b border-neutral-900 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial= {{ opacity: 0 , y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Tecnologias</motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4"
          >
          <RiReactjsLine className="text-7xl  text-cyan-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4"
          >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4"
          >
          <DiDocker className="text-7xl  text-sky-600" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-900 p-4"
          >
          <DiPython className="text-7xl  text-blue-500" />
          
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-900 p-4"
          >
          <FaPhp className="text-7xl  text-cyan-700" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-900 p-4"
          >
          <FaNodeJs className="text-7xl  text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tecnologias