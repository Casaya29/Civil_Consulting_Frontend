import React, { useState, useEffect } from "react";
import "../style/Scrollbtn.css";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detecta cuando mostrar el botón
  const toggleVisibility = () => {
    if (window.scrollY > 200) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Ir arriba"
    >
      ↑
    </button>
  );
}

export default ScrollTopButton;
