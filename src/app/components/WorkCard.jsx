import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import LogoCard from "./LogoCard.jsx";


const WorkCard = ({ title, dates, techTitles }) => {
  return (
    <div className="border font-sans border-zinc-800 bg-zinc-900 rounded flex flex-col justify-between mb-5 px-3 py-3 w-full cursor-pointer hover:card-hover">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="card-title text-lg text-gray-300">{title}</h3>
          <p className="text-gray-400 text-sm">{dates}</p>
        </div>
        <ArrowUpRightIcon className="w-5 h-5 text-gray-400 transform transition-transform duration-300" />
      </div>

      <div className="flex mt-2">
        {techTitles &&
          techTitles.map((techTitle, index) => (
            <div key={index} className="mr-2">
              <LogoCard techTitle={techTitle} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkCard;
