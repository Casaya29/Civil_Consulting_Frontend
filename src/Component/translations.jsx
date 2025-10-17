import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/translations.css";

function Translations() {
  const { i18n } = useTranslation(); // Con esto accedemos al idioma actual
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma en tiempo real
    setOpen(false);
  };

  return (
    
    <div className="translate-container">
      <button className="translate-btn" onClick={toggleMenu}>
        🌐
      </button>

      {open && (
        <div className="translate-options">
          <button onClick={() => changeLanguage("es")}>Español</button>
          <button onClick={() => changeLanguage("en")}>Inglés</button>
        </div>
      )}
    </div>
  );
}

export default Translations;
