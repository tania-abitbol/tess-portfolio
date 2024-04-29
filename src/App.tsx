import React from "react";
import NavBar from "./components/NavBar";
import IntroductionText from "./components/IntroductionText";
import ProjectCard from "./components/ProjectCard";
import GridItems from "./components/GridItem";
import ContactSection from "./components/Contact";

import chevron from "./assets/chevron-down.svg";
import alan from "./assets/alan.png";
import clubFrance from "./assets/clubFrance.png";
import oeeo from "./assets/ooeoo.png";
import unlock from "./assets/unlock.png";
import amacelio from "./assets/amaclio.png";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center scroll-smooth">
      <div className="max-w-[320px] sm:max-w-[1120px]">
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <IntroductionText />
          <a href="#projects" className="mt-4 self-center mb-12 scroll-smooth">
            <img
              src={chevron}
              alt="Chevron"
              className="w-10 h-10 animate-bounce "
              id="projects"
            />
          </a>
        </div>
        <p className="text-3xl font-semibold mb-[76px] uppercase">
          Projets sélectionnés
        </p>
        <div className="flex flex-col gap-40">
          <ProjectCard
            title="ALAN"
            description="Alan est une start-up française d'assurance santé fondée en 2016. Elle se démarque par son approche numérique conviviale et transparente, offrant des solutions d'assurance simples et accessibles. Son objectif est de rendre les soins de santé plus faciles à comprendre et à utiliser pour ses clients grâce à la technologie."
            image={alan}
            reverse={true}
            labels={["DESIGN UX UI", "POST MÉDIAS SOCIAUX", "SLIDES"]}
          />
          <ProjectCard
            title="CLUB FRANCE • QUARTERBACK"
            description="Quarterback devient l'agence hospitalités du Club France pour les Jeux olympiques et paralympiques de Paris 2024 ! Club France, la plus grande fan zone des bleus pour les jeux de Paris 2024."
            image={clubFrance}
            reverse={false}
            labels={["DESIGN UX UI"]}
          />
          <ProjectCard
            title="UNLOCK-M"
            description="La plateforme UnlockM, permet aux professionnels du marketing B2B de suivre des formations adaptées à leur emploi du temps, de dialoguer avec des spécialistes renommés du secteur, échanger des idées et renforcer leurs compétences."
            image={unlock}
            reverse={true}
            labels={["DESIGN UX UI", "POST MÉDIAS SOCIAUX", "SLIDES"]}
          />
          <ProjectCard
            title="OOEO"
            description="OOEO est une agence digital spécialisée dans la stratégie digitale, offrant des solutions complètes aux entreprises désireuses de propulser leur présence en ligne.Que ce soit pour les entreprises qui ont besoin d'un site web évolutif, d'un design ou d'une identité de marque à la hauteur de leurs ambitions numériques."
            image={oeeo}
            reverse={false}
            labels={["DESIGN UX UI", "POST MÉDIAS SOCIAUX"]}
          />
          <ProjectCard
            title="AMACLIO PRODUCTION"
            description="Amaclio Productions imagine, conçoit et produit des spectacles prestigieux mettant en scène les monuments emblématiques de l'histoire de France. Parmi leurs réalisations figurent la création de la Cité de l'Histoire et de l'Éternelle Notre-Dame, entre autres."
            image={amacelio}
            reverse={true}
            labels={["DESIGN UX UI"]}
          />
        </div>
        <GridItems />
        <div className="h-[1px] bg-greyDark" />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
