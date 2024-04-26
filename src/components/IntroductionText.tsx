import React from "react";

const IntroductionText: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold">
          Hello ! Je suis Tess, une étudiante{" "}
          <span className="text-pink-500">passionnée de design</span>, sur le
          point de commencer un Mastère en{" "}
          <span className="underline decoration-pink-500">
            Product Design UX/UI
          </span>
          .
        </h1>
      </div>
    </div>
  );
};

export default IntroductionText;
