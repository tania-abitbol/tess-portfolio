import React from "react";

import Linkedin from "../assets/LinkedIn.svg";
import Email from "../assets/Mail.svg";
import Dribble from "../assets/Dribble.svg";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">Prêt à créer ensemble ?</h2>
      <p className="mb-8">Prenons le temps d'en discuter !</p>
      <div className="flex gap-6">
        <a href="mailto:contact@example.com" aria-label="Email">
          <div className="text-2xl hover:text-gray-300">
            <img src={Email} alt="email" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" aria-label="LinkedIn">
          <div className="text-2xl hover:text-gray-300">
            <img src={Linkedin} alt="linkedin" />
          </div>
        </a>
        <a href="https://yourwebsite.com" aria-label="Website">
          <div className="text-2xl hover:text-gray-300">
            <img src={Dribble} alt="dribble" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
