import React from "react";
import "../style/Footer.css";
import linkedin from "../assets/icon/linkedin.png";
import sobre from "../assets/icon/sobre.png";
import whatsapp from "../assets/icon/whatsapp.png";
import telefono from "../assets/icon/llamada_telefonica.png";
import logo from "../assets/Logo_ISCM2.0.png";
import { useTranslation } from "react-i18next"; // Hook de traducción

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-links">
          <li><a href="#inicio">{t("Inicio")}</a></li>
          <li><a href="#nosotros">{t("Nosotros")}</a></li>
          <li><a href="#servicios">{t("Servicios")}</a></li>
          <li><a href="#myv">{t("Misión y Visión")}</a></li>
          <li><a href="#contacto">{t("Contáctanos")}</a></li>
        </ul>
      </div>

      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/kevin-d%C3%ADaz-481270138/" target="_blank">
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </a>
        <a href="https://wa.me/message/3SJNV7RXUOJAJ1">
          <img src={whatsapp} alt="WhatsApp" className="icon" />
        </a>
        <a href="mailto:civilasesoria100@gmail.com">
          <img src={sobre} alt="Email" className="icon" />
        </a>
       <a href="tel:+507 61982345">
          <img src={telefono} alt="Telefono" className="icon" /> +507 61982345
        </a>
      </div>
      
    <div className="footer-logo">
        <img src={logo} alt="Logo ISCM" className="logo-img" />
      </div>

      <div className="footer-bottom">
        <p>© 2025 Civil Consulting. {t("Todos los derechos reservados")}.</p>
      </div>
    </footer>
  );
}

export default Footer;
