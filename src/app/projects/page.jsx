"use client";
import ProjectCard from "../components/ProjectCard.jsx";
import { map } from "./mapping.js";

function ProjectPage() {
  return (
    <div>
      <h3 className="mt-4 mb-8 font-sans text-xl text-zinc-300">
        some of my projects
      </h3>
      {map.map((item) => (
        <ProjectCard
          key={item.id} 
          title={item.project_title}
          href={item.href} 
          techTitles={item.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectPage;
