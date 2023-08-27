"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "../utils";

function Header() {
  const pathname = usePathname();

  return (
    <div className="h-54 py-16 px-10 lg:px-0">
      <ul className="flex gap-x-6">
        <li>
          <Link
            className={classNames(
              "text-gray-500 hover:text-white",
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
              "text-gray-500 hover:text-white",
              pathname === "/about" ? "text-white" : ""
            )}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              "text-gray-500 hover:text-white",
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
