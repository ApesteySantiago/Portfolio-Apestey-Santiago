import React, { useRef } from 'react'
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
    <div>
      <Navbar />
      <Principal scrollToProyectosRef={proyectosRef} />
      <Acerca ref={acercaRef} />
      <Tecnologias />
      <Proyectos ref={proyectosRef} />
      <Experiencia />
      <Contacto scrollToAcercaRef={acercaRef} />
      <Footer scrollToAcercaRef={acercaRef} />
    </div>

    // <body>
    //   <div ref={snapContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    //     <section className="h-screen snap-start">
    //       <Navbar />
    //       <Principal scrollToProyectosRef={proyectosRef} />
    //     </section>
    //     <section className="h-screen snap-start">
    //       <Acerca ref={acercaRef} />
    //     </section>
    //     <section className="h-screen snap-start">
    //       <Tecnologias />
    //     </section>
    //   </div>

    //   <section className="py-20">
    //     <Experiencia />
    //   </section>
    //   <section className="py-20">
    //     <Proyectos ref={proyectosRef} />
    //   </section>
    //   <section className="py-20">
    //     <Contacto scrollToAcercaRef={acercaRef} />
    //   </section>
    //   <Footer scrollToAcercaRef={acercaRef} />
    // </body>
  )
}

export default App