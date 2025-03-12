import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center space-x-6 border-b px-4 h-12 mb-8">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
