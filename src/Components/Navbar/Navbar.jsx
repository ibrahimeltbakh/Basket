import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  let myPages = [
    { name: "Home", path: "" },
    { name: "About", path: "about" },
  ];

  return (
    <header className="flex justify-between px-20 py-4 bg-green-900 text-gray-300 mb-8">
      <section>
        <Link
          className="hover:text-white rounded-md px-3 py-2 font-medium"
          to="/">
          Logo
        </Link>
      </section>

      <nav>
        {myPages.map((page) => (
          <Link
            className="hover:text-white rounded-md px-3 py-2 font-medium"
            to={page.path}
            key={uuidv4()}>
            {page.name}
          </Link>
        ))}
      </nav>

      <section>
        <Link
          className="hover:text-white rounded-md px-3 py-2 font-medium"
          to="cart">
          Cart - 2
        </Link>
      </section>
    </header>
  );
}
