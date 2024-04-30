import React, { useState } from "react";
import PortfolioItem from "./Item";

import ecole from "../assets/crer-son-ecole.png";
import coteNature from "../assets/cote-nature.png";
import oeeo from "../assets/ooeo.png";
import billeterie from "../assets/billeterie.png";
import unlockM from "../assets/unlock-m.png";
import eCommerce from "../assets/e-commerce.png";

export const GridItems: React.FC = () => {
  const [clickedIndex, setClickedIndex] = useState<null | number>(null);

  const projects = [
    {
      title: "Créer son école",
      thumbnail: ecole,
      description: "Refonte UX UI",
    },
    {
      title: "Coté Nature",
      thumbnail: coteNature,
      description: "Newsletter",
    },
    {
      title: "Omnitune",
      thumbnail: oeeo,
      description: "Design UX UI",
    },
    {
      title: "Billeterie en ligne",
      thumbnail: billeterie,
      description: "Design UX UI",
    },
    {
      title: "Maison Apicole de Lugos",
      thumbnail: unlockM,
      description: "Refonte UX UI",
    },
    {
      title: "E-commerce",
      thumbnail: eCommerce,
      description: "Refonte UX UI",
    },
  ];

  return (
    <div className="p-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-40">
        {projects.map((project, index) => (
          <PortfolioItem
            key={index}
            index={index}
            {...project}
            setClickedIndex={setClickedIndex}
            isClicked={clickedIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default GridItems;
