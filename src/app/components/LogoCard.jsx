import React from "react";
import Image from "next/image";

const LogoCard = ({ techTitle }) => {
  // Check if techTitle is a string, and if not, provide a default value (empty string)
  const imageTitle = typeof techTitle === "string" ? techTitle.toLowerCase() : "";

  return (
    <div className="flex items-center bg-zinc-800 border border-zinc-700 text-zinc-200 rounded py-1 px-1.5">
      <Image
        src={`/images/tech_logos/${imageTitle}.svg`}
        alt={`${techTitle} Logo`}
        width={5}
        height={5}
        className="h-3 w-3"
      />
      <span className="text-xs ml-1 inline-block">{techTitle}</span>
    </div>
  );
};

export default LogoCard;

