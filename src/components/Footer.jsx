import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({scrollToAcercaRef}) => {

    const scrollToAcerca = () => {
        if (scrollToAcercaRef.current) {
          const targetPosition = scrollToAcercaRef.current.offsetTop;
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
    <footer className="w-full bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo o Nombre del Proyecto */}
        <div className="text-lg font-semibold mb-2 md:mb-0">
          Mi Proyecto
        </div>

        {/* Enlaces */}
        <div className="flex space-x-4">
          <button onClick={scrollToAcerca} className="hover:text-gray-400">Acerca de</button>
          <a href="#services" className="hover:text-gray-400">Servicios</a>
          <a href="#contact" className="hover:text-gray-400">Contacto</a>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-3 mt-3 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
