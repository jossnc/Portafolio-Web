import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //cuando el scroll es mayor a 560 del la vista, agrega el show-scroll a la clase con el-scroll tap
    if (this.scrollY >= 0) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#homet");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Joss
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills"  onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#service"  onClick={() => setActiveNav("#service")}
                className={
                  activeNav === "#service" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Service
              </a>
            </li>

            <li className="nav__item">
              <a href="#portafolio"  onClick={() => setActiveNav("#portafolio")}
                className={
                  activeNav === "#portafolio" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-scenery nav__icon"></i> Portafolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact"  onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
