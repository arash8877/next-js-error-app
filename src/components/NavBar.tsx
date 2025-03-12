"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

interface iNavProps {
  title: string;
  href: string;
}

//---------------- main component ----------------
const NavBar = () => {
  const navLinks: iNavProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Issues", href: "/issues" },
  ];

  const currentPath = usePathname();

  console.log("currentPath: ", currentPath);

  //---------------- JSX ----------------
  return (
    <nav className="flex items-center space-x-6 border-b px-4 h-12 mb-8">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((nav) => (
          <li key={nav.href}>
            <Link
              href={nav.href}
              // Active link style
              //   className={`${
              //     nav.href === currentPath ? "text-blue-600" : "text-zinc-600"
              //   } hover:text-blue-400 transition-colors`}

              className={classNames({
                "text-blue-600": nav.href === currentPath,
                "text-zinc-600": nav.href !== currentPath,
                "hover:text-blue-400 transition-colors": true,
              })}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
