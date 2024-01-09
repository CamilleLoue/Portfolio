"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "../utils";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function Header() {
  const pathname = usePathname();

  return (
    <div className="flex lg:flex-row justify-between mt-1">
      <div className="lg:flex lg:flex-col lg:py-8 py-4">
        <div className="hidden lg:flex flex-col">
          <Link href="/" className="text-base text-zinc-300 hover:text-white">
            Camille Loue
          </Link>
          <Link href="/" className="text-sm text-zinc-500">
            ML engineer. Indie maker.
          </Link>
        </div>
      </div>
      <div className="py-4 lg:py-8 px-4 lg:px-0 font-sans">
        <ul className="flex gap-x-6">
          <li>
            <Link
              className={classNames(
                "text-zinc-500 hover:text-white",
                pathname === "/" ? "text-white" : ""
              )}
              href="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                "text-zinc-500 hover:text-white",
                pathname === "/work" ? "text-white" : ""
              )}
              href="/work"
            >
              work
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                "text-zinc-500 hover:text-white",
                pathname === "/projects" ? "text-white" : ""
              )}
              href="/projects"
            >
              projects
            </Link>
          </li>
          <div className="flex justify-between text-zinc-500 hover:text-white">
            <a className="mr-1" href="mailto:contact@camilleloue.com">
              hire me
            </a>
            <ArrowUpRightIcon className="w-3 h-3 transform transition-transform duration-300" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
