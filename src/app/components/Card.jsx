import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Card = ({ title, dates, skills }) => {
  return (
    <div className="border font-sans border-zinc-800 bg-zinc-900 rounded flex flex-col justify-between mb-5 px-3 py-3 w-full cursor-pointer hover:card-hover">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="card-title text-lg text-gray-300">{title}</h3>
          <p className="text-gray-400 text-sm">{dates}</p>
        </div>
        <ArrowUpRightIcon className="w-5 h-5 text-gray-400 transform transition-transform duration-300" />
      </div>
      <div className="flex mt-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-zinc-800 text-gray-200 rounded mr-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

