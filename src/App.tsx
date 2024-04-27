import React from "react";
import NavBar from "./components/NavBar";
import IntroductionText from "./components/IntroductionText";
import ProjectCard from "./components/ProjectCard";
import GridItems from "./components/GridItem";
import ContactSection from "./components/Contact";

import chevron from "./assets/chevron-down.svg";
import alan from "./assets/alan.png";
import clubFrance from "./assets/clubFrance.png";
import oeeo from "./assets/ooeo.png";
import unlock from "./assets/unlock.png";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col px-40">
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <IntroductionText />
        <img
          src={chevron}
          alt="Chevron"
          className="w-10 h-10 animate-bounce mt-4 self-center mb-12"
        />
      </div>

      <div>
        <p className="text-3xl font-semibold mb-8 uppercase">
          Projets sélectionnés
        </p>
        <ProjectCard
          title="ALAN"
          description="Alan est une start-up française d'assurance santé fondée en 2016. Elle se démarque par son approche numérique conviviale et transparente, offrant des solutions d'assurance simples et accessibles. Son objectif est de rendre les soins de santé plus faciles à comprendre et à utiliser pour ses clients grâce à la technologie."
          image={alan}
          reverse={true}
        />
        <ProjectCard
          title="CLUB FRANCE • QUARTERBACK"
          description="Quarterback devient l'agence hospitalités du Club France pour les Jeux olympiques et paralympiques de Paris 2024 ! Club France, la plus grande fan zone des bleus pour les jeux de Paris 2024."
          image={clubFrance}
          reverse={false}
        />
        <ProjectCard
          title="CLUB FRANCE • QUARTERBACK"
          description="Quarterback devient l'agence hospitalités du Club France pour les Jeux olympiques et paralympiques de Paris 2024 ! Club France, la plus grande fan zone des bleus pour les jeux de Paris 2024."
          image={unlock}
          reverse={true}
        />
        <ProjectCard
          title="CLUB FRANCE • QUARTERBACK"
          description="Quarterback devient l'agence hospitalités du Club France pour les Jeux olympiques et paralympiques de Paris 2024 ! Club France, la plus grande fan zone des bleus pour les jeux de Paris 2024."
          image={oeeo}
          reverse={false}
        />
      </div>
      <GridItems />
      <ContactSection />
    </div>
  );
};

export default App;
