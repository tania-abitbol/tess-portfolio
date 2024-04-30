import React from "react";

import Linkedin from "../assets/LinkedIn.svg";
import Email from "../assets/Mail.svg";
import Dribble from "../assets/Dribble.svg";

const ContactSection: React.FC = () => {
  return (
    <div
      className="bg-black  p-8 flex flex-col items-center justify-center mb-40"
      id="contact"
    >
      <h2 className="text-3xl text-center  sm:text-5xl mb-2 text-grey font-light">
        Prêt à{" "}
        <span className="font-semibold text-white">créer ensemble ?</span>
      </h2>
      <p className="mb-8 font-light">Prenons le temps d'en discuter !</p>
      <div className="flex gap-6">
        <a
          href="mailto:tess.abitbol13@gmail.com"
          aria-label="Email"
          target="_blank"
        >
          <div className="text-2xl hover:text-gray-300">
            <img src={Email} alt="email" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/tess-abitbol-139910224/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <div className="text-2xl">
            <img src={Linkedin} alt="linkedin" />
          </div>
        </a>
        <a
          href="https://dribbble.com/Tess_abitbol"
          aria-label="Website"
          target="_blank"
        >
          <div className="text-2xl">
            <img src={Dribble} alt="dribble" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
