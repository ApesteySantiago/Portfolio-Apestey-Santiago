import { CONTENIDO_PRINCIPAL } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import CV from "../assets/CV_ApesteySantiago.pdf";
import { delay, motion } from "framer-motion";

const entradaTxt = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay }
  }
})

const entradaImg = () => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2.5, delay: 0 }
  }
})

const Principal = ({ scrollToProyectosRef }) => {
  const scrollToProyectos = () => {
    if (scrollToProyectosRef.current) {
      scrollToProyectosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={entradaTxt(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-custom-color"
            >
              Apestey Santiago
            </motion.h1>
            <motion.span
              variants={entradaTxt(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-custom-color bg-clip-text text-4xl tracking-tight text-transparent font-light"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={entradaTxt(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-custom-color text-justify">
              {CONTENIDO_PRINCIPAL}
            </motion.p>
            <motion.div
              variants={entradaTxt(0.5)}
              initial="hidden"
              animate="visible"
              className="px-4 py-2 mb-5">
              <motion.a
                variants={entradaTxt(1.2)}
                initial="hidden"
                animate="visible"
                href={CV}
                download
                className="px-4 py-2 mb-6 bg-blue-500 text-white rounded tracking-tight">Descargar CV
              </motion.a>
              <motion.button
                variants={entradaTxt(1.2)}
                initial="hidden"
                animate="visible"
                onClick={scrollToProyectos}
                className="px-4 py-2 mb-6 bg-green-500 text-white rounded tracking-tight ml-3"> Proyectos
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={entradaImg()}
              initial="hidden"
              animate="visible"
              src={profilePic} alt="Kevin Rush" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal