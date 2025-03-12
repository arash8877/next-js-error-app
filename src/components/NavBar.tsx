import Link from "next/link";
import { FaBug } from "react-icons/fa";

interface iNavProps {
  title: string;
  href: string;
}

const NavBar = () => {
  const navLinks: iNavProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Issues", href: "/issues" },
  ];

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
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
