import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import LogoCard from "./LogoCard.jsx";

const WorkCard = ({ title, dates, techTitles }) => {
  return (
    <div className="border font-sans border-zinc-800 bg-zinc-900 rounded flex flex-col justify-between mb-5 px-3 py-3 w-full cursor-pointer hover:card-hover">
      <div className="flex justify-between items-center">
        <div className="flex-grow">
          <h3 className="card-title lg:text-lg text-zinc-300">{title}</h3>
          <p className="text-zinc-400 text-sm">{dates}</p>
        </div>
        <div className="flex-shrink-0">
          <ArrowUpRightIcon className="w-5 h-5 text-zinc-400 transform transition-transform duration-300" />
        </div>
      </div>

      <div className="flex flex-wrap mt-2 -mb-2">
        {techTitles &&
          techTitles.map((techTitle, index) => (
            <div key={index} className="mr-2 mb-2">
              <LogoCard techTitle={techTitle} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkCard;
