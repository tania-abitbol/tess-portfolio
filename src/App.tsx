import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import IntroductionText from "./components/IntroductionText";
import ProjectCard from "./components/ProjectCard";
import GridItems from "./components/GridItem";
import ContactSection from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <NavBar />
      <IntroductionText />
      <div>
        <ProjectCard
          title="ALAN"
          description="Alan est une start-up française d'assurance santé fondée en 2016. Elle se démarque par son approche numérique conviviale et transparente, offrant des solutions d'assurance simples et accessibles. Son objectif est de rendre les soins de santé plus faciles à comprendre et à utiliser pour ses clients grâce à la technologie."
          image="/path-to-alan-image.jpg"
          link="/link-to-alan"
          reverse={true}
        />
        <ProjectCard
          title="CLUB FRANCE • QUARTERBACK"
          description="Quarterback devient l'agence hospitalités du Club France pour les Jeux olympiques et paralympiques de Paris 2024 ! Club France, la plus grande fan zone des bleus pour les jeux de Paris 2024."
          image="/path-to-your-image.jpg"
          link="/link-to-project"
          reverse={false}
        />
        <ProjectCard
          title="CLUB FRANCE • QUARTERBACK"
          description="Quarterback devient l'agence hospitalités du Club France pour les Jeux olympiques et paralympiques de Paris 2024 ! Club France, la plus grande fan zone des bleus pour les jeux de Paris 2024."
          image="/path-to-your-image.jpg"
          link="/link-to-project"
          reverse={true}
        />
      </div>
      <GridItems />
      <ContactSection />
    </div>
  );
};

export default App;
