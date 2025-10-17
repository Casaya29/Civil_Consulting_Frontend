import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import logo from "../assets/Logo.JPG";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción

function Navbar() {
  const { t } = useTranslation(); // Hook de traducción
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // menú móvil

  // Mostrar/ocultar navbar según scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Civil Consulting" className="logo" />
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#inicio" onClick={() => setIsOpen(false)}>
            {t("Inicio")}
          </a>
        </li>
        <li>
          <a href="#nosotros" onClick={() => setIsOpen(false)}>
            {t("Nosotros")}
          </a>
        </li>
        <li>
          <a href="#servicios" onClick={() => setIsOpen(false)}>
            {t("Servicios")}
          </a>
        </li>
        <li>
          <a href="#myv" onClick={() => setIsOpen(false)}>
            {t("Misión y Visión")}
          </a>
        </li>
        <li>
          <a href="#contacto" onClick={() => setIsOpen(false)}>
            {t("Contáctanos")}
          </a>
        </li>
      </ul>

      {/* Botón de navegacion */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
