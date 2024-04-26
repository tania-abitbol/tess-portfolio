import React from "react";
import PortfolioItem from "./Item";

export const GridItems: React.FC = () => {
  const projects = [
    {
      title: "Projet 1",
      thumbnail: "/path-to-thumbnail-1.jpg",
      description: "Brève description du projet 1",
    },
    {
      title: "Projet 2",
      thumbnail: "/path-to-thumbnail-2.jpg",
      description: "Brève description du projet 2",
    },
    {
      title: "Projet 1",
      thumbnail: "/path-to-thumbnail-1.jpg",
      description: "Brève description du projet 1",
    },
    {
      title: "Projet 2",
      thumbnail: "/path-to-thumbnail-2.jpg",
      description: "Brève description du projet 2",
    },
    {
      title: "Projet 1",
      thumbnail: "/path-to-thumbnail-1.jpg",
      description: "Brève description du projet 1",
    },
    {
      title: "Projet 2",
      thumbnail: "/path-to-thumbnail-2.jpg",
      description: "Brève description du projet 2",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <PortfolioItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default GridItems;
