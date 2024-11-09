import React from "react";
import aboutImg from "../assets/about.jpg";
import { TEXTO_ACERCA, TEXTO_ACERCA1, TEXTO_ACERCA2 } from "../constants";
import { motion } from "framer-motion";


const Acerca = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Acerca de
        <span className="text-neutral-500"> Mí</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
      <div className="flex items-center justify-center ">
          <img className="rounded-2xl" src={aboutImg} alt="about" />
      </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0, x: -100 }}
        className="w-full lg:w-1/2">
        <div className="flex items-center justify-center ">
          <p className="my-2 max-w-xl pt-6 font-light tracking-tighter text-justify">{TEXTO_ACERCA}</p>
        </div>
        <div className="flex items-center justify-center ">
          <p className="my-2 max-w-xl py-2 font-light tracking-tighter text-justify">{TEXTO_ACERCA1}</p>
        </div>
        <div className="flex items-center justify-center ">
          <p className="my-2 max-w-xl py-2 font-light tracking-tighter text-justify">{TEXTO_ACERCA2}</p>
        </div>
      </motion.div>
    </div>
  </div>
  );
});

export default Acerca;