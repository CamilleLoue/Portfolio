"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "../utils";

function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between mt-2">
      <div className="flex flex-col py-8">
        <Link href="/" className="text-base text-zinc-300 hover:text-white">
          Camille Loue
        </Link>
        <Link href="/" className="text-sm text-zinc-500">
          ML Engineer & Indie Maker
        </Link>
      </div>
      <div className="py-8 px-9 lg:px-0">
        <ul className="flex gap-x-6">
          <li>
            <Link
              className={classNames(
                "text-zinc-500 hover:text-white",
                pathname === "/" ? "text-white" : ""
              )}
              href="/"
            >
              Home
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
              Work
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
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                "text-zinc-500 hover:text-white",
                pathname === "/contact" ? "text-white" : ""
              )}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
