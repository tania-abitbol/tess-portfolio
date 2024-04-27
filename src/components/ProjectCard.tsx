import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  labels: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  reverse,
  labels,
}) => {
  const cardClasses = `flex gap-8 fle-col  ${
    reverse ? "flex-row-reverse" : "flex-row"
  } items-center shadow-lg rounded-lg overflow-hidden`;
  const textClasses = `p-4 w-1/2`;
  const imageClasses = `w-1/2`;

  return (
    <div className={cardClasses}>
      <div className={textClasses}>
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="h-1 w-8 bg-primary mb-6"></div>
        <div className=" flex gap-4 mb-6">
          {labels.map((label, index) => (
            <p
              key={index}
              className="bg-greyDark text-white text-xs px-4 py-3 rounded-full uppercase"
            >
              {label}
            </p>
          ))}
        </div>

        <p className="text-base font-normal">{description}</p>
      </div>
      <div className={imageClasses}>
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
