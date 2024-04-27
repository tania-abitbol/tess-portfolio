import React, { useState } from "react";
import logo from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white">
      <img src={logo} alt="Logo" />
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`flex-col md:flex-row md:flex gap-8 items-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <a
          href="/"
          className="hover:text-primary text-grey transition-colors text-sm font-semibold tracking-wider"
        >
          ACCUEIL
        </a>
        <a
          href="/projects"
          className="hover:text-primary text-grey transition-colors text-sm font-semibold tracking-wider"
        >
          PROJETS
        </a>
        <a
          href="/cv"
          className="hover:text-primary text-grey transition-colors text-sm font-semibold tracking-wider"
        >
          MON CV
        </a>
        <a
          href="/contact"
          className="bg-primary text-white text-sm p-4 font-semibold rounded-lg tracking-wider"
        >
          ME CONTACTER
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
