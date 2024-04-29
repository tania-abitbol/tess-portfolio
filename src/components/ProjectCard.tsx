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
  const cardClasses = `flex flex-col sm:flex-row gap-12 ${
    reverse ? "flex-row-reverse" : "flex-row"
  } items-center shadow-lg rounded-lg overflow-hidden`;

  return (
    <div className={cardClasses}>
      <div className="self-end">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="h-1 w-8 bg-primary mb-6"></div>
        <div className="max-w-[375px]">
          <div className="flex-wrap flex gap-4 mb-6">
            {labels.map((label, index) => (
              <p
                key={index}
                className="bg-greyDark whitespace-nowrap text-white text-xs px-4 py-3 rounded-full uppercase"
              >
                {label}
              </p>
            ))}
          </div>

          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt={title}
          className="object-cover max-w-[455px]  max-h-[176px] sm:max-w-[705px] sm:max-h-[426px]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
