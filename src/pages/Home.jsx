import React, { useState, useEffect } from "react";
import "../style/Home.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import S1 from "../assets/MV1.jpg";
import S2 from "../assets/MV2.jpg";
import S3 from "../assets/MV3.jpg";
import S4 from "../assets/inicio2.jpeg"

import img1 from "../assets/inicio.jpeg";
import img2 from "../assets/inicio2.jpeg";
import img3 from "../assets/inicio3.jpeg";


import Translations from "../Component/Translations";
import { useTranslation } from "react-i18next";
import ScrollTopButton from "../Component/Scrollbtn";
import Swal from "sweetalert2";

function Home() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  // Hero Images
  const heroImages = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  //  Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Cambio manual por dots
  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  //  Animación de tarjetas al hacer scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  //  Form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://civil-consulting.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

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

      {/*  HERO SLIDER */}
      <section
        className="inicio"
        id="inicio"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      >
        <div className="inicio-content">
          <h2>{t("PROYECTO DE INFRAESTRUCTURA Y ARQUITECTURA")}</h2>
          <p>{t("Transformando ideas en realidades tangibles con soluciones innovadoras y sostenibles")}</p>
        </div>

        {/*  Dots para cambiar Imagen */}
        <div className="dots">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentImage === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="nosotros" id="nosotros">
        <div className="nosotros-content">
          <h2>{t("Nuestra empresa")}</h2>
          <p>{t("Nos especializamos en la Creación y Gestión de Proyectos de : Ingeniería, Infraestructura y Arquitectura.")}</p>
        </div>
      </section>  

      {/* SERVICIOS */}
       <section className="servicios" id="servicios">
        <h2>{t("Servicios")}</h2>
        <div className="servicios-grid">
            <div className="card">
          <img src={S1} alt="Servicio1" />
            <h3>{t("ESTUDIOS DE FACTIBILIDAD")}</h3>
            <p>{t("Anteproyectos, Proyectos y Supervisión de Obras.")}</p>
          </div>
          <div className="card">
           <img src={S2} alt="Servicio2" />
            <h3>{t("ARQUITECTURA ESTRUCTURA")}</h3>
            <p>{t("Estudios Hidrológicos, Hidráulicos y Viales.")}</p>
          </div>
          <div className="card">
            <img src={S3} alt="Servicio3" />
            <h3>{t("INFRAESTRUCTURAN")}</h3>
            <p>{t("Estudios de Preinversión, Perfil, Factibilidad.")}</p>
          </div>
          <div className="card">
            <img src={S4} alt="Servicio4" />
            <h3>{t("GESTIÓN DE PROYECTOS")}</h3>
            <p>{t("Simulación en BIM y Supervisión en Obra.")}</p>
          </div>

          </div>
       </section>
       
        {/* MISIÓN Y VISIÓN */}
      <section className="myv" id="myv">
       <h2>{t("Misión y Visión")}</h2>
        <div className="myv-grid">
         <div className="card">
            <h3>{t("Misión")}</h3>
            <p>{t("Brindar servicios orientados al desarrollo de infraestructura sostenible.")}</p>
          </div>
           <div className="card">
            <h3>{t("Vision")}</h3>
            <p>{t("Ser reconocidos como empresa líder en proyectos de construcción sostenibles.")}</p>
          </div>
           <div className="card">
            <h3>{t("Valores")}</h3>
            <p>{t("Compromiso, responsabilidad, innovación y respeto al medio ambiente.")}</p>
          </div>
        </div>
      </section>
      {/* CONTACTO */}
      <section className="contactanos" id="contacto">
        <h2>{t("Habla con nosotros")}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t("Nombre")}
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>

          <label>
            {t("Correo electrónico")}
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
          </label>

          <label>
            {t("Mensaje")}
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
          </label>

          <button type="submit">{t("Enviar")}</button>
        </form>
      </section>

      <Footer />

     

      <div className="fixed-container">
        <ScrollTopButton />
        <Translations />
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/50761982345?text=Hola,%20quiero%20más%20información!" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </main>
  );
}

export default Home;
