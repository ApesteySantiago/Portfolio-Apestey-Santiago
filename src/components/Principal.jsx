import React from "react";
import { delay, motion } from "framer-motion";

const entradaTxt = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, delay }
  }
})

const entradaTxtinverso = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, delay }
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

  // funcion para el control de scroll
  const scrollToProyectos = () => {
    if (scrollToProyectosRef.current) {
      const targetPosition = scrollToProyectosRef.current.offsetTop;
      const step = 10; // Ajusta este valor para que el desplazamiento sea más lento o más rápido

      const scrollInterval = setInterval(() => {
        const currentPosition = window.scrollY;
        const distance = targetPosition - currentPosition;

        if (Math.abs(distance) <= step) {
          clearInterval(scrollInterval);
          window.scrollTo(0, targetPosition); // Asegura que termina exactamente en el destino
        } else {
          window.scrollBy(0, distance > 0 ? step : -step);
        }
      }, 5); // Ajusta el intervalo para hacer el scroll más rápido o lento (10 ms es bastante suave)
    }
  };

  return (
    <section>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen ">
              <motion.h1
                variants={entradaTxt(0)}
                initial="hidden"
                animate="visible"
                id ="tituloPrincipal"
                className="pb-2 text-6xl font-semibold tracking-tight lg:mt-16 lg:text-8xl"
              >
                Apestey Santiago
              </motion.h1>
              <motion.span
                variants={entradaTxt(0.5)}
                initial="hidden"
                animate="visible"
                id ="subtituloPrincipal"
                className="bg-clip-text text-4xl tracking-tight "
              >
                Full-Stack Developer
              </motion.span>
              {/* <motion.p
              variants={entradaTxt(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tigh text-justify">
              {CONTENIDO_PRINCIPAL}
              </motion.p> */}
              <motion.div
                variants={entradaTxt(0.5)}
                initial="hidden"
                animate="visible"
                className="px-4 py-2 mb-5 justify-between flex items-center gap-4">
                <motion.button
                  variants={entradaTxt(1.2)}
                  initial="hidden"
                  animate="visible"
                  onClick={scrollToProyectos}
                  id="btnProyectos"
                  className="hover:text-white hover:bg-black  px-4 py-1.5 mb-6 rounded-xl ml-3 shadow-gray-600 shadow-xl font-semibold "> Proyectos
                </motion.button>
                {/* <motion.a
                  variants={entradaTxt(1.2)}
                  initial="hidden"
                  animate="visible"
                  href={CV}
                  download
                  className="hover:text-white hover:bg-black px-4 py-2 mb-6 rounded-xl shadow-gray-600 shadow-xl ">Descargar CV
                </motion.a> */}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Principal