import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  const myPages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div className="bg-[#35AFA0] w-full flex items-center justify-center h-10 text-white">
        <p className="my-auto">
          Due to current circumstances, there may be slight delays in order processing
        </p>
      </div>

      {/* Info Bar */}
      <div className="flex justify-center border-b">
        <div className="flex h-10 items-center justify-between">
          <Link className="mr-3" to="/about">About Us</Link>
          <Link className="mr-3" to="/compare">Compare</Link>
          <Link className="mr-3" to="/wishlist">Wishlist</Link>
          <p className="mr-3">
            100% Secure delivery without contacting the courier
          </p>
          <hr className="mr-3" />
          <p className="mr-3">Need help? Call Us: +0020 500</p>
        </div>

        <hr className="mr-3" />

        <div className="flex items-center justify-between w-[8%]">
          <p>English</p>
          <p>UCD</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="flex justify-between px-20 py-4 bg-green-900 text-gray-300">
        <section>
          <Link className="hover:text-white rounded-md px-3 py-2 font-medium" to="/">
            Logo
          </Link>
        </section>

        <nav>
          {myPages.map((page) => (
            <Link
              className="hover:text-white rounded-md px-3 py-2 font-medium"
              to={page.path}
              key={uuidv4()}
            >
              {page.name}
            </Link>
          ))}
        </nav>

        <section>
          <Link
            className="hover:text-white rounded-md px-3 py-2 font-medium"
            to="/cart"
          >
            Cart - 2
          </Link>
        </section>
      </header>
    </div>
  );
}
