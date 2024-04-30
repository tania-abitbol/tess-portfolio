import React from "react";

const IntroductionText: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center self-center">
      <div>
        <h1 className="text-xl sm:text-3xl lg:text-5xl font-light text-center text-grey tracking-tight">
          Hello ! Je suis Tess, une étudiante{" "}
          <span className="text-white font-semibold">passionnée de design</span>
          , sur le point de commencer un Mastère en{" "}
          <span className="text-white  font-semibold">
            Product Design UX/UI
          </span>
          .
        </h1>
      </div>
    </div>
  );
};

export default IntroductionText;
