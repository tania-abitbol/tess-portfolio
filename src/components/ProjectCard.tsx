import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
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
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="h-1 w-8 bg-primary mb-4"></div>
        <div>
          <ul className="flex gap-4 mt-2 mb-4">
            <li className="bg-greyDark text-white text-xs px-4 py-3 rounded-full uppercase">
              React
            </li>
            <li className="bg-greyDark text-white text-xs px-4 py-3 rounded-full uppercase">
              TailwindCSS
            </li>
            <li className="bg-greyDark text-white text-xs px-4 py-3 rounded-full uppercase">
              TypeScript
            </li>
          </ul>
        </div>
        <p className="mb-4">{description}</p>
      </div>
      <div className={imageClasses}>
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
