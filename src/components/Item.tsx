import React, { useState } from "react";

interface PortfolioItemProps {
  title: string;
  thumbnail: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  thumbnail,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="rounded-lg shadow-md overflow-hidden relative transition-colors duration-300 ease-in-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isHovered)}
    >
      <img
        src={thumbnail}
        alt={title}
        className={
          isClicked
            ? "max-w-[347px] max-h-[207px] object-cover"
            : "min-w-[347px] min-h-[207px] object-cover transition-transform duration-300 ease-in-out"
        }
      />
      {isHovered && (
        <div className="p-4 absolute top-0 left-0 right-0 bottom-0 hover:bg-transp transition-colors duration-400 ease-in-out flex items-center justify-center flex-col">
          <h2 className="font-semibold text-2xl mb-2 text-white">{title}</h2>
          <div className="h-0.5 w-2 bg-white mb-2"></div>
          <p className="text-lg mb-4 text-white">{description}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
