// src/services/projectService.js

export const getProyectos = () => {
  return [
    {
      id: 1,
      title: "Prode Futbolero",
      description: "App de pronósticos deportivos en tiempo real con optimización de lectura en Firebase.",
      tech: ["React", "Firebase", "Vite","Vercel"],
      link: "https://prode-futbolero.vercel.app/",
      image: "/prode.jpg" // Agrega esta línea para incluir la imagen del proyecto
    },
    {
      id: 2,
      title: "RowaSound",
      description: "Plataforma de servicios y catálogo profesional de Audio Car con enfoque corporativo.",
      tech: ["React", "CSS", "Vite","Video"],
      link: "https://www.rowasound.com.ar/",
      image: "/rowasound.jpg" // Agrega esta línea para incluir la imagen del proyecto
    },
    {
      id: 3,
      title: "Llevate Todo Corrientes",
      description: "Plataforma de gestión de pedidos y e-commerce dinámico de productos varios.",
      tech: ["React", "CSS","Firebase","CRUD"],
      link: "https://www.llevatetodocorrientes.com.ar/",
      image: "/llevate-todo.jpg" // Agrega esta línea para incluir la imagen del proyecto
    }
  ];
};