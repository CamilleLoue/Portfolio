"use client";
import Link from "next/link";
import Card from "../components/Card.jsx";

import { map } from "./mapping.js";

function WorkPage() {
  return (
    <div>
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
