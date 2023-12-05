"use client";
import Link from "next/link";
import Card from "../components/Card.jsx";

import { map } from "./mapping.js";

function WorkPage() {
  return (
    <div>
      <h3 className="mb-8 text-zinc-300">
        Here is some of my work as a freelance ML Engineer.
      </h3>
      {map.map((item) => (
        <Link href={`/work/${item.id}`} key={item.id}>
          <Card
            title={item.project_title}
            dates={item.dates}
            skills={item.skills}
          />
        </Link>
      ))}
    </div>
  );
}

export default WorkPage;
