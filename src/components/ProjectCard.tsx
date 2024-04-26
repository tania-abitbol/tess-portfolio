import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string; // URL de l'image du projet
  link: string; // Lien pour plus d'informations ou pour une brochure
  reverse?: boolean; // Si true, affiche le composant dans le style inversé
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  reverse,
}) => {
  const cardClasses = `flex ${
    reverse ? "flex-row-reverse" : "flex-row"
  } items-center shadow-lg rounded-lg overflow-hidden`;
  const textClasses = `p-4 w-1/2`;
  const imageClasses = `w-1/2`;

  return (
    <div className={cardClasses}>
      <div className={textClasses}>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <a
          href={link}
          className="text-pink-600 hover:text-pink-700 transition duration-300 ease-in-out"
        >
          En savoir plus
        </a>
      </div>
      <div className={imageClasses}>
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
