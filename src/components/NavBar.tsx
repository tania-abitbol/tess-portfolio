import React from "react";
import logo from "../assets/logo.svg";

const cv = require("../assets/cv.pdf");

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 sticky top-0 bg-black z-10">
      <img src={logo} alt="Logo" className="hidden sm:block" />
      <div className="flex gap-8 items-center">
        <a
          href="/"
          className="hover:text-white text-primary transition-colors text-sm font-semibold tracking-wider"
        >
          ACCUEIL
        </a>
        <a
          href="/#projects"
          className="hover:text-white text-grey transition-colors text-sm font-semibold tracking-wider"
        >
          PROJETS
        </a>
        <a
          href={cv}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white text-grey transition-colors text-sm font-semibold tracking-wider"
        >
          MON CV
        </a>
        <a
          href="mailto:tess.abitbol13@gmail.com"
          className="hidden sm:block bg-primary text-white text-sm p-4 font-semibold rounded-lg tracking-wider"
        >
          ME CONTACTER
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
