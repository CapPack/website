import React from "react";
import { useMediaQuery } from "react-responsive";

interface ButtonProps {
  text: string;
  link: string;import React from "react";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a
      href={link}
      className="px-4 py-2 bg-blue-500 hover:bg-yellow-500 text-white text-xl md:text-2xl"
    >
      {text}
    </a>
  );
};

export default Button;

}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1028px)" });

  return (
    <a
      href={link}
      className={`px-4 py-2 bg-blue-500 hover:bg-yellow-500 text-white ${isMobile ? "text-5xl" : "text-2xl"}`}
    >
      {text}
    </a>
  );
};

export default Button;
