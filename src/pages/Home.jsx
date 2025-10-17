import React, { useState } from "react";
import "../style/Home.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import MV1 from "../assets/MV1.jpg";
import MV2 from "../assets/MV2.jpg";
import MV3 from "../assets/MV3.jpg";
import plano from "../assets/icon/plano.png";
import construccion from "../assets/icon/construccion-de-casas.png";
import Formulacion from "../assets/icon/lapiz-regla.png";
import Busqueda from "../assets/icon/Busqueda.png";
import Translations from "../Component/Translations"; // Botón de traducción
import { useTranslation } from "react-i18next";
import ScrollTopButton from "../Component/Scrollbtn";
import Swal from "sweetalert2";

function Home() {
  const { t } = useTranslation(); // Hook de traducción
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
    const response = await fetch("https://civil-consulting.onrender.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.text();

    if (response.ok) {
      Swal.fire({
        title: t("Gracias por contactarnos"),
        text: t("Te responderemos tan pronto veamos tu mensaje"),
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      setFormData({ nombre: "", correo: "", mensaje: "" });
    } else {
      Swal.fire({
        title: t("Error"),
        text: t("Error al enviar el correo"),
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  } catch (error) {
    console.error("Error en el envío:", error);
    Swal.fire({
      title: t("Error del servidor"),
      text: t("Hubo un problema con el servidor"),
      icon: "warning",
      confirmButtonText: "Aceptar",
    });
  }
  };

  return (
    <main className="contenedor-principal">
      <Navbar />

      {/* Hero */}
      <section className="inicio" id="inicio">
        <div className="inicio-content">
          <h2>{t("Evaluación y Diseño de Proyectos de Infraestructura y Arquitectura")}</h2>
          <p>{t("Transformando ideas en realidades tangibles con soluciones innovadoras y sostenibles")}</p>
        </div>
      </section>

      {/* About */}
      <section className="nosotros" id="nosotros">
        <div className="nosotros-content">
          <h2>{t("Nuestra empresa")}</h2>
          <p>{t("Somos especialistas en aplicación de softwares de metodología BIM para la creación y gestión de proyectos de Ingeniería.")}</p>
          <blockquote>{t("Aprende todo lo necesario para que tu vida sea más feliz")}</blockquote>
        </div>
      </section>

      {/* Services */}
      <section className="servicios" id="servicios">
        <h2>{t("Servicios")}</h2>
        <div className="servicios-grid">
          <div className="card">
            <img src={plano} alt="plano" />
            <h3>{t("Diseño Arquitectónico")}</h3>
            <p>{t("Anteproyectos, Proyectos y Supervisión de Obras.")}</p>
          </div>
          <div className="card">
            <img src={construccion} alt="construccion" />
            <h3>{t("Diseño de Infraestructura")}</h3>
            <p>{t("Estudios Hidrológicos, Hidráulicos y Viales.")}</p>
          </div>
          <div className="card">
            <img src={Formulacion} alt="formulacion" />
            <h3>{t("Formulación y Evaluación")}</h3>
            <p>{t("Estudios de Preinversión, Perfil, Factibilidad.")}</p>
          </div>
          <div className="card">
            <img src={Busqueda} alt="Busqueda" />
            <h3>{t("Modelado Virtual")}</h3>
            <p>{t("Simulación en BIM y Supervisión en Obra.")}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="myv" id="myv">
        <h2>{t("Misión y Visión")}</h2>
        <div className="mision-grid">
          <div className="card">
            <img src={MV1} alt="Mision" />
            <h3>{t("Misión")}</h3>
            <p>{t("Brindar servicios orientados al desarrollo de infraestructura sostenible.")}</p>
          </div>
          <div className="card">
            <img src={MV2} alt="Vision" />
            <h3>{t("Visión")}</h3>
            <p>{t("Ser reconocidos como empresa líder en proyectos de construcción sostenibles.")}</p>
          </div>
          <div className="card">
            <img src={MV3} alt="Valores" />
            <h3>{t("Valores")}</h3>
            <p>{t("Compromiso, responsabilidad, innovación y respeto al medio ambiente.")}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contactanos" id="contacto">
        <h2>{t("Habla con nosotros")}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t("Nombre")}
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={t("Escribe tu nombre")}
              required
            />
          </label>
          <label>
            {t("Correo electrónico")}
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder={t("Escribe tu correo electrónico")}
              required
            />
          </label>
          <label>
            {t("Mensaje")}
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder={t("Escribe un mensaje")}
              required
            />
          </label>
          <button type="submit">{t("Enviar")}</button>
        </form>
      </section>

      <Footer />

      <div className="fixed-container">
        <ScrollTopButton />
        <Translations />
      </div>
    </main>
  );
}

export default Home;
