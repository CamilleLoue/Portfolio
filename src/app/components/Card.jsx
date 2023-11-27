import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Card = ({ title, dates, badges }) => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded flex flex-col justify-between mt-6 px-3 py-3 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{dates}</p>
        </div>
        <ArrowUpRightIcon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex mt-3">
        {badges.map((badge, index) => (
          <span key={index} className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-neutral-800 text-gray-200 rounded mr-2">{badge}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
