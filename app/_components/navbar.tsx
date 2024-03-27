"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='navbar'>
      <h1>Navbar</h1>
      <p>You are on {pathname}</p>
      <hr />
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={pathname === link.path ? "active" : ""}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
