import React from "react";

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
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
