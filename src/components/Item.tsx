import React, { useState } from "react";

interface PortfolioItemProps {
  title: string;
  thumbnail: string;
  description: string;
  index: number;
  isClicked: boolean;
  setClickedIndex: (index: null | number) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  thumbnail,
  description,
  index,
  isClicked,
  setClickedIndex,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = () => {
    if (isClicked) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  return (
    <div onClick={handleItemClick}>
      {isClicked && (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-opacity-80 items-center justify-center transition-colors duration-400 flex">
          <img
            src={thumbnail}
            alt={title}
            className="max-w-[800px] max-h-[477px] object-cover z-20 "
          />
        </div>
      )}

      <div
        className="rounded-lg shadow-md overflow-hidden relative transition-colors duration-500 ease-in-out cursor-pointer "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleItemClick}
      >
        <img
          src={thumbnail}
          alt={title}
          className="max-w-[347px] max-h-[207px] object-cover"
        />
        {isHovered && (
          <div className="p-4 absolute top-0 left-0 right-0 bottom-0 hover:bg-transp transition-colors duration-500 ease-in-out flex items-center justify-center flex-col">
            <h2 className="font-semibold text-2xl mb-2 text-white">{title}</h2>
            <div className="h-0.5 w-2 bg-white mb-2"></div>
            <p className="text-lg mb-4 text-white">{description}</p>
          </div>
        )}
      </div>
      {isClicked && (
        <div className="p-4 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 transition-colors duration-500 ease-in-out flex items-center justify-center flex-col z-10"></div>
      )}
    </div>
  );
};

export default PortfolioItem;
