"use client";
import Link from "next/link";
import Card from "../components/WorkCard.jsx";
import { map } from "./mapping.js";

import { Disclosure } from "@headlessui/react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; // Import the Image component from Next.js

function Testimonial({ text, name, position, avatar }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentElement = contentRef.current;
      const lineHeight = parseFloat(
        getComputedStyle(contentElement).lineHeight
      );
      const contentHeight = contentElement.clientHeight;
      const lines = Math.floor(contentHeight / lineHeight);
      setIsOverflowing(lines > 8);
    }
  }, []);

  return (
    <Disclosure>
      {({ open }) => {
        setIsOpen(open);
        return (
          <div className="bg-zinc-900 rounded-lg p-3 flex flex-col">
            <div className="relative">
              <div
                ref={contentRef}
                className={`m-2 text-zinc-300 text-base font-sans ${
                  open || !isOverflowing ? "" : "line-clamp-6"
                }`}
              >
                {text}
              </div>
              {isOverflowing && !open && (
                <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              )}
            </div>
            {isOverflowing && (
              <Disclosure.Button className="text-zinc-400 mx-2 my-[2px] text-sm text-left hover:text-zinc-100">
                {open ? "Read less" : "Read more"}
              </Disclosure.Button>
            )}
            <div className="m-2 mt-5 flex items-center">
              <Image
                src={`/images/avatars/${avatar}.png`}
                alt={`${name}'s avatar`}
                width={60}
                height={60}
                className="rounded-full mr-2"
              />
              <div>
                <p className="text-zinc-200 font-medium">{name}</p>
                <p className="text-zinc-400 text-sm">{position}</p>
              </div>
            </div>
          </div>
        );
      }}
    </Disclosure>
  );
}

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
      <h3 className="mt-2 lg:mt-12 mb-4 lg:mb-8 font-sans text-base lg:text-lg text-zinc-300">
        what they say about me
      </h3>

      <div className="flex flex-wrap -mx-4 mb-12">
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
          <Testimonial
            text={` "In a small and dynamic team, where Camille integrated very well, she was able to rapidly evolve her skills in the direction of not only producing outstanding data science research and development, but also playing a key role in operationalizing her work. As a result in a short period we were able to build and productionize two groundbreaking and valuable projects in a short time span. Myself and the team thoroughly enjoyed working with Camille. Her positive attitude, humility, camaraderie and skill were highly commendable." `}
            name="James Donnelly"
            position="CTO at Cloud.IQ"
            avatar="James"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <Testimonial
            text={` "Camille was an incredible part of our team. Her enthusiasm and professionalism never failed to impress. Always ready to put in the extra effort, she embraced new challenges with a smile, mastering new tools and frameworks with ease. She was the driving force behind our product's data capabilities." `}
            name="Mehdi Rachedi"
            position="CEO at DataImmoSolutions"
            avatar="Mehdi"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
