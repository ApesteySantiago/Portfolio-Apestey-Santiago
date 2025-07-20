import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({scrollToAcercaRef}) => {

  return (
    <footer className="w-full bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center justify-between">
        
        {/* Logo o Nombre del Proyecto */}
        <div className="w-full flex justify-center text-lg font-semibold mb-2 md:mb-0">
          <p>Apestey Santiago Portfolio's</p>
        </div>

        {/* Enlaces */}
        {/* <div className="flex space-x-4">
          <button onClick={scrollToAcerca} className="hover:text-gray-400">Acerca de</button>
          <a href="#services" className="hover:text-gray-400">Servicios</a>
          <a href="#contact" className="hover:text-gray-400">Contacto</a>
        </div> */}

        {/* Redes Sociales */}
        {/* <div className="flex space-x-3 mt-3 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4 text-sm">
        <p></p>
        <p></p>
        &copy; {new Date().getFullYear()} Apestey Santiago Portfolio's. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
