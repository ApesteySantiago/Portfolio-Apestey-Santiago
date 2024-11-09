import React, {useRef} from 'react'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import Acerca from './components/Acerca'
import Tecnologias from './components/Tecnologias'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer.jsx'

const App = () => {
  const proyectosRef = useRef(null);
  const acercaRef = useRef(null);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-custom-color1 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="containter mx-auto px-8 justify-center">
        <Navbar />
        <Principal scrollToProyectosRef={proyectosRef} />
        <Acerca ref={acercaRef} />
        <Tecnologias />
        <Experiencia />
        <Proyectos ref={proyectosRef} />
        <Contacto />
        <Footer scrollToAcercaRef={acercaRef} />
      </div>

    
    </div>
  )
}

export default App