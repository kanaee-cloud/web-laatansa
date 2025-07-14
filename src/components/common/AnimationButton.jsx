import React from "react";

const AnimationButton = ({ title }) => {
  return (
    <button className="relative bg-transparent border-2 border-accent text-light px-6 py-3 rounded overflow-hidden group transition-all duration-300 hover:scale-105">
      <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default AnimationButton;
