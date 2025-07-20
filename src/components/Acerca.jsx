import React from "react";
import aboutImg from "../assets/foto_Apestey_Santiago.png";
import CV from "../assets/CV_ApesteySantiago.pdf";
import { motion } from "framer-motion";

const entradaTxt = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, delay }
  }
})

const Acerca = React.forwardRef((props, ref) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 border-b border-neutral-900 pb-24">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center">

        {/* Imagen animada */}
        <motion.div
          className="flex justify-center w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutImg}
            alt="Profile"
            id="profileImage"
            className=" object-cover rounded-full border border-neutral-900 shadow-lg shadow-black/50"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          id="información"
          className="flex flex-col gap-6 w-full md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Acerca de Mi</h2>
          </div>

          {/* Tarjetas animadas */}
          <div className="flex flex-wrap gap-4">
            <motion.div
              className="flex-1 bg-gray-100 p-4 rounded-xl shadow-md text-center min-w-[120px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span id="exp" className="block text-xl font-semibold">Experiencia</span>
              <span className="text-sm text-gray-600">+ 4 Años</span>
            </motion.div>
            <motion.div
              className="flex-1 bg-gray-100 p-4 rounded-xl shadow-md text-center min-w-[120px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="block text-xl font-semibold">Proyectos</span>
              <span className="text-sm text-gray-600">+ 3 trabajos</span>
            </motion.div>
            <motion.div
              className="flex-1 bg-gray-100 p-4 rounded-xl shadow-md text-center min-w-[120px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="block text-xl font-semibold">Orientado</span>
              <span className="text-sm text-gray-600">FullStack</span>
            </motion.div>
          </div>

          {/* Descripción animada */}
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Soy desarrollador full stack, formado en Ingeniería Informática, con una base sólida en lógica computacional y experiencia tanto en front-end como en back-end. Trabajo con tecnologías como HTML5, CSS3, Bootstrap, JavaScript, React y TypeScript en el lado del cliente, y PHP, Node.js y bases de datos como MySQL, SQLite y MongoDB en el servidor.
            Me especializo en desarrollar aplicaciones funcionales, que estén bien estructuradas y adaptadas a los requerimientos técnicos de cada proyecto.
          </motion.p>

          {/* Botón animado */}
          <motion.a
            variants={entradaTxt(1.2)}
            initial="hidden"
            animate="visible"
            href={CV}
            download
            className="bg-black text-white hover:text-black hover:bg-white px-4 py-2 mb-6 font-bold w-40 h-10 text-center rounded-xl shadow-gray-600 shadow-xl ">Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </section>

  );
});

export default Acerca;