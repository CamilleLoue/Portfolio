"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "../utils";

function Header() {
  const pathname = usePathname();

  return (
    <div className="h-54 py-10 px-10 lg:px-0">
      <ul className="flex gap-x-6">
        <li>
          <Link
            className={classNames(
              "text-neutral-500 hover:text-white",
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
              "text-neutral-500 hover:text-white",
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
              "text-neutral-500 hover:text-white",
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
              "text-neutral-500 hover:text-white",
              pathname === "/contact" ? "text-white" : ""
            )}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
