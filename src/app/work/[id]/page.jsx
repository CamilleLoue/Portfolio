"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { map } from "../mapping";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  const [workItem, setWorkItem] = useState(undefined);

  useEffect(() => {
    const mappedItem = map.find((item) => item.id === params.id);
    if (mappedItem === undefined) {
      // Redirect to 404
      redirect("/not-found");
    } else {
      setWorkItem(mappedItem);
    }
  }, [params.id]);

  if (workItem === undefined) {
    // TODO: Add some sort of loading animation
    return <div>Loading...</div>; // Placeholder for loading animation
  }

  // Function to render project details conditionally as list or plain text
  const renderProjectDetails = (title, items) => {
    if (items.length === 1) {
      return <p className="text-neutral-400 text-sm">{items[0]}</p>;
    } else {
      return (
        <ul className="list-none space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="pl-3 before:content-['•'] before:pr-2 text-neutral-400 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
  };

  // Function to render badges for skills and technologies
  const renderBadges = (items) => {
    return items.map((item, index) => (
      <span
        key={index}
        className="inline-block bg-neutral-700 text-neutral-300 text-xs mr-2 px-2.5 py-0.5 rounded mb-2"
      >
        {item}
      </span>
    ));
  };

  return (
    <div className="text-neutral-300 pb-14">
      <h1 className="text-2xl mb-4">{workItem.project_title}</h1>
      <p className="text-base mb-8">
        Client: <span className="text-neutral-400">{workItem.client}</span>
      </p>

      <div className="sm:mt-5 xl:mx-auto xl:max-w-7xl pb-8">
        <Image
          src={workItem.image_source}
          alt="Project Image"
          className="object-cover rounded-xl"
          width={workItem.image_width}
          height={300}
        />
      </div>

      <section className="mb-10">
        <h2 className="text-lg mb-4">Project Overview</h2>
        {renderProjectDetails("Project Overview", workItem.project_overview)}
      </section>

      <section className="mb-10">
        <h2 className="text-lg mb-4">Development</h2>
        {renderProjectDetails("Development", workItem.development)}
      </section>

      <section className="mb-10">
        <h2 className="text-lg mb-4">Results</h2>
        {renderProjectDetails("Results", workItem.results)}
      </section>

      <section className="mb-10">
        <h2 className="text-lg mb-4">Learnings</h2>
        {renderProjectDetails("Learnings", workItem.learnings)}
      </section>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
          <div className="bg-neutral-900 rounded-lg p-3">
            <h2 className="mb-4">Skills</h2>
            <div className="flex flex-wrap">
              {renderBadges(workItem.skills)}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="bg-neutral-900 rounded-lg p-3">
            <h2 className="mb-4">Technologies</h2>
            <div className="flex flex-wrap">
              {renderBadges(workItem.technologies)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
