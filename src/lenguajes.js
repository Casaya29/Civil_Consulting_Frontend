// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      /*Navbar y Footer */
      "Inicio":"Inicio",
      "Nosotros":"Nosotros",
      "Servicios":"Servicios",
      "Misión y Visión":"Misión y Visión",
      "Contáctanos":"Contáctanos",
      // Hero
      "Evaluación y Diseño de Proyectos de Infraestructura y Arquitectura": "Evaluación y Diseño de Proyectos de Infraestructura y Arquitectura",
      "Transformando ideas en realidades tangibles con soluciones innovadoras y sostenibles": "Transformando ideas en realidades tangibles con soluciones innovadoras y sostenibles",

      // Nosotros
      "Nuestra empresa": "Nuestra empresa",
      "Somos especialistas en aplicación de softwares de metodología BIM para la creación y gestión de proyectos de Ingeniería.": "Somos especialistas en aplicación de softwares de metodología BIM para la creación y gestión de proyectos de Ingeniería.",
      "Aprende todo lo necesario para que tu vida sea más feliz": "Aprende todo lo necesario para que tu vida sea más feliz",

      // Servicios
      "Servicios": "Servicios",
      "Diseño Arquitectónico": "Diseño Arquitectónico",
      "Anteproyectos, Proyectos y Supervisión de Obras.": "Anteproyectos, Proyectos y Supervisión de Obras.",
      "Diseño de Infraestructura": "Diseño de Infraestructura",
      "Estudios Hidrológicos, Hidráulicos y Viales.": "Estudios Hidrológicos, Hidráulicos y Viales.",
      "Formulación y Evaluación": "Formulación y Evaluación",
      "Estudios de Preinversión, Perfil, Factibilidad.": "Estudios de Preinversión, Perfil, Factibilidad.",
      "Modelado Virtual": "Modelado Virtual",
      "Simulación en BIM y Supervisión en Obra.": "Simulación en BIM y Supervisión en Obra.",

      // Misión y Visión
      "Misión y Visión": "Misión y Visión",
      "Misión": "Misión",
      "Brindar servicios orientados al desarrollo de infraestructura sostenible.": "Brindar servicios orientados al desarrollo de infraestructura sostenible.",
      "Visión": "Visión",
      "Ser reconocidos como empresa líder en proyectos de construcción sostenibles.": "Ser reconocidos como empresa líder en proyectos de construcción sostenibles.",
      "Valores": "Valores",
      "Compromiso, responsabilidad, innovación y respeto al medio ambiente.": "Compromiso, responsabilidad, innovación y respeto al medio ambiente.",

      // Contacto
      "Habla con nosotros": "Habla con nosotros",
      "Nombre": "Nombre",
      "Correo electrónico": "Correo electrónico",
      "Mensaje": "Mensaje",
      "Enviar": "Enviar",
      "Escribe tu nombre": "Escribe tu nombre",
      "Escribe tu correo electrónico": "Escribe tu correo electrónico",
      "Escribe un mensaje": "Escribe un mensaje",
      
    }
  },
  en: {
    translation: {

      /*Navbar y Footer */
      "Inicio":"Home",
      "Nosotros":"Our Company",
      "Servicios":"Services",
      "Misión y Visión":"Mission & Vision",
      "Contáctanos":"Talk to us",

      // Hero
      "Evaluación y Diseño de Proyectos de Infraestructura y Arquitectura": "Evaluation and Design of Infrastructure and Architecture Projects",
      "Transformando ideas en realidades tangibles con soluciones innovadoras y sostenibles": "Transforming ideas into tangible realities with innovative and sustainable solutions",

      // Nosotros
      "Nuestra empresa": "Our Company",
      "Somos especialistas en aplicación de softwares de metodología BIM para la creación y gestión de proyectos de Ingeniería.": "We specialize in applying BIM methodology software for the creation and management of engineering projects.",
      "Aprende todo lo necesario para que tu vida sea más feliz": "Learn everything you need to make your life happier",

      // Servicios
      "Servicios": "Services",
      "Diseño Arquitectónico": "Architectural Design",
      "Anteproyectos, Proyectos y Supervisión de Obras.": "Preliminary Projects, Projects, and Construction Supervision.",
      "Diseño de Infraestructura": "Infrastructure Design",
      "Estudios Hidrológicos, Hidráulicos y Viales.": "Hydrological, Hydraulic, and Road Studies.",
      "Formulación y Evaluación": "Formulation and Evaluation",
      "Estudios de Preinversión, Perfil, Factibilidad.": "Pre-investment studies, Profile, Feasibility.",
      "Modelado Virtual": "Virtual Modeling",
      "Simulación en BIM y Supervisión en Obra.": "BIM Simulation and On-site Supervision.",

      // Misión y Visión
      "Misión y Visión": "Mission & Vision",
      "Misión": "Mission",
      "Brindar servicios orientados al desarrollo de infraestructura sostenible.": "Provide services focused on sustainable infrastructure development.",
      "Visión": "Vision",
      "Ser reconocidos como empresa líder en proyectos de construcción sostenibles.": "Be recognized as a leading company in sustainable construction projects.",
      "Valores": "Values",
      "Compromiso, responsabilidad, innovación y respeto al medio ambiente.": "Commitment, responsibility, innovation, and respect for the environment.",

      // Contacto
      "Habla con nosotros": "Talk to us",
      "Nombre": "Name",
      "Correo electrónico": "Email",
      "Mensaje": "Message",
      "Enviar": "Send",
      "Escribe tu nombre": "write your name",
      "Escribe tu correo electrónico": "Write your email",
      "Escribe un mensaje": "Write a message",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;
