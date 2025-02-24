import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = [
    { title: "Home", route: "/" },
    { title: "Loans", route: "/loan" },
    { title: "Support", route: "/support" },
    { title: "Login", route: "/login" },
    { title: "Sign Up", route: "/signup" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between">
      <div className="m-2">Agriculture support system</div>
      <div className="hidden md:block flex mr-10">
      {navList.map(({ title, route }, index) => (
        <Link key={index} to={route} className="m-4">
          {title}
        </Link>
      ))}
      </div>
      <div className="md:hidden m-3">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
        </button>
        <div>
              <ul className={`flex flex-col ${isMenuOpen ? "block" : "hidden"}`}>
                  {
                  navList.map(({ title, route}, index) => (
                    <Link key={index} to={route} className="border-b-1 border-black pr-4">
                    {title}
                    </Link>
                  ))
                  
                  }
              </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
