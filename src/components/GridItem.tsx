import React, { useState } from "react";
import PortfolioItem from "./Item";

import ecole from "../assets/image-ecole.png";
import coteNature from "../assets/image-nature.png";
import oeeo from "../assets/image-amelio.png";
import billeterie from "../assets/image-billet.png";
import unlockM from "../assets/image-miel.png";
import eCommerce from "../assets/image-ecommerce.png";

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
      description: "Design UX UI",
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
