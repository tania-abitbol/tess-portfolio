import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <div className="text-xl font-semibold">TessAbitbol.</div>
      <div className="flex gap-4">
        <a href="/" className="hover:text-gray-300 transition-colors">
          ACCUEIL
        </a>
        <a href="/projects" className="hover:text-gray-300 transition-colors">
          PROJETS
        </a>
        <a href="/cv" className="hover:text-gray-300 transition-colors">
          MON CV
        </a>
        <a
          href="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          ME CONTACTER
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
