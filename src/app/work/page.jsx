"use client";
import Link from "next/link";
import Card from "../components/WorkCard.jsx";

import { map } from "./mapping.js";

function WorkPage() {
  return (
    <div className="px-8 lg:px-0">
      <h3 className="mt-2 lg:mt-4 mb-4 lg:mb-8 font-sans text-base lg:text-lg text-zinc-300">
        some of my work as a ML engineer
      </h3>
      {map.map((item) => (
        <Link href={`/work/${item.id}`} key={item.id}>
          <Card
            title={item.project_title}
            dates={item.dates}
            techTitles={item.technologies}
          />
        </Link>
      ))}
    </div>
  );
}

export default WorkPage;
