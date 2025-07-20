import project1 from "../assets/Proyectos/Full-stack.png";
import project2 from "../assets/Proyectos/Front-End-Final.png";
import project3 from "../assets/Proyectos/Bootstrap.png";
import project4 from "../assets/Proyectos/Programa_ABMC.png";
import project5 from "../assets/Proyectos/TeamFakas.png";

export const CONTENIDO_PRINCIPAL = `Soy un desarrollador full stack apasionado con una gran capacidad para crear aplicaciones web eficientes y bien estructuradas. Con 4 años de experiencia, he perfeccionado mis habilidades en tecnologías de front-end como React, JavaScript, TypeScript, HTML5, CSS3, Bootstrap y AJAX, así como en tecnologías de back-end como Node.js, PHP, y bases de datos como MySQL, SQLite y MongoDB. Mi objetivo es aprovechar mi experiencia y nutrirla con nuevos objetivos para desarrollar soluciones innovadoras que se ajusten a las necesidades de los proyectos y ofrezcan experiencias de usuario de alta calidad.`;

export const TEXTO_ACERCA = `Soy un desarrollador full stack con 4 años de experiencia, habiendo comenzado mi trayectoria en Ingeniería Informática, donde me formé en lógica computacional y trabajé con lenguajes como C, Java y Python. Inicié mi camino en la programación en la facultad, trabajando con PSeInt y avanzando a C, donde desarrollé algoritmos computacionales y de hash (encriptación). Posteriormente, trabajé con Java diseñando un sistema de revisión de carga para la tarjeta prepaga de transporte (SUBE) y he desarrollado aplicaciones de escritorio con Python.`;

export const TEXTO_ACERCA1 = `A lo largo de mi carrera, he adquirido habilidades tanto en el front-end como en el back-end. En el lado del front-end, tengo experiencia con tecnologías como HTML5, CSS3, Bootstrap, JavaScript, React, y TypeScript. En el back-end, he trabajado con PHP, AJAX, Node.js, y bases de datos como MySQL, SQLite, y MongoDB, lo que me permite desarrollar aplicaciones web de manera integral.`;

export const TEXTO_ACERCA2 = `Mi capacidad de adaptarme rápidamente a nuevos lenguajes y tecnologías ha sido clave para abordar proyectos de manera eficiente. Además, tengo una sólida base en programación orientada a objetos (POO) y una destacada habilidad para la abstracción, lo que me permite enfrentar desafíos complejos y ofrecer soluciones bien estructuradas e innovadoras que se ajusten a las necesidades del proyecto. Cuando surgen dificultades, persisto hasta encontrar la mejor solución posible, asegurando que cada reto sea superado con éxito.`;


export const EXPERIENCES = [
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "Codo a Codo 4.0",
    description: `Se desarrolló una Landing Page expositora de conferencias utilizando HTML5, CSS3 y funcionalidades de Bootstrap para galerias. Se implementó funcionalidades para la compra y administración de los tickets del evento, gestado por base de datos en MySQL.`,
    technologies: ["Bootstrap", "PHP", "MySQL"],
  },
  {
    year: "2022",
    role: "Front End trainee Developer",
    company: "Universidad Tecnológica Nacional",
    description: `Se desarrolló una Pagina Web Estática sobre astronomía empleando HTML5 y JavaScript, como base y lienzo. Además de la utilización del Framework de Bootstrap para diversas herramientas y funcionalidades para el estilo del sitio web y galeria expositora.`,
    technologies: ["Bootstrap"],
  },
  {
    year: "2022",
    role: "Front End Developer",
    company: "Universidad Tecnológica Nacional",
    description: ``,
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    year: "2020",
    role: "Estudiante",
    company: "Facultad de Ingenieria del Ejército",
    description: `Algoritmos y base de datos`,
    technologies: ["C"],
  },
  {
    year: "2019",
    role: "Estudiante",
    company: "Facultad de Ingenieria del Ejército",
    description: `Introducción a paradigmas de la programación con un fluido y amplio armado de programas funcionales para el procesamiento de datos y administración de los mismos dentro del lenguaje.`,
    technologies: ["PSeInt", "C"],
  },

];

export const PROJECTS = [
  {
    title: "Team Fakas",
    image: project5,
    description:
      "(En desarrollo) Aplicación SaaS para importantes profesores de gymnasios, con funcionalidades de gestión de clientes, clases y pagos.",
    technologies: ["Next.js","Nest.js", "Docker", "Typescript", "Node.js", "Rabbit  MQ"],
  },
  {
    title: "Cosmos",
    image: project3,
    link: "https://apesteysantiago.github.io/Cosmos/",
    description:
      "Landing Page estática informativa de astronomía, con un diseño responsivo y galería de imágenes.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Conferencia Landing Page",
    image: project1,
    link: "https://conferencia-codo-a-codo.vercel.app",
    description:
      "Landing Page para un evento de conferencias, con funcionalidades de compra y administración de tickets.",
    technologies: ["HTML", "CSS", "MySQL", "PHP", "Bootstrap"],
  },
  {
    title: "APP Inventario",
    image: project4,
    link: "https://github.com/ApesteySantiago/App-Escritorio",
    description:
      "Aplicación de escritorio para la gestión de inventario, con funcionalidades de alta, baja y modificación de productos.",
    technologies: ["Python", "SQLite"],
  },
  {
    title: "Proyecto de Blog Simple",
    image: project2,
    link: "https://proyecto-blog-informativo-basico.vercel.app",
    description:
      "Proyecto de blog estático con funcionalidades de creación, edición y eliminación de entradas. Con el fin de hacer una puesta en práctica de las herramientas aprendidas.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  email: "apesteysantiagoo@gmail.com",
};
