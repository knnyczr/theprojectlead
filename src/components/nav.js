import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <h1>The Project Lead</h1>
      <nav className="flex">
        <Link className="mr-2" href={`/`}>
          Home
        </Link>
        <Link className="mr-2" href={`/team`}>
          Team
        </Link>
        <Link className="mr-2" href={`/contact`}>
          Contact
        </Link>
        <Link className="mr-2" href={`/resources`}>
          Resources
        </Link>
        <Link className="mr-2" href={`/blog`}>
          Blog
        </Link>
      </nav>
    </div>
  );
}
