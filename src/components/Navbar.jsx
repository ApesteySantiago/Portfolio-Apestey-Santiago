import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import {motion} from "framer-motion"

const entradaNavBar = (x) => ({
  hidden: { x, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0 }
  }
})

const Navbar = () => {
  return <nav className="pl-0.9 m-4 flex item-center justify-between">
    <motion.div 
      variants={ entradaNavBar(-100) }
      initial="hidden"
      animate="visible"
      className="flex flex-shrink-0 item-center ">
        
    </motion.div>
    {/* <motion.div 
      variants={ entradaNavBar(100) }
      initial="hidden"
      animate="visible"
      className="m-8 ml-3 flex item-center justify-center gap-3 texr-2xl">
      <a
        href=""
        className="hover:text-cyan-300 transition-colors duration-300"
        >
        <FaLinkedin size={24} />
      </a>
      <a href="" 
        className="hover:text-cyan-300 transition-colors duration-300"
        >
        <FaGithub size={24} />
      </a>
      <a href="" 
        className="hover:text-cyan-300 transition-colors duration-300"
        >
        <FaInstagram size={24} />
      </a>
      <a href="" 
        className="hover:text-cyan-300 transition-colors duration-300"
        >
        <FaEnvelope size={24} />
      </a>
    </motion.div> */}
  </nav>;
};

export default Navbar