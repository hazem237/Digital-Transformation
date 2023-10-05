import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Logo from "./Logo";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLinks: string[] = [
    "من نحن",
    "منهجيتنا في العمل",
    "خدماتنا ",
    "للتواصل",
  ];
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-5 "
      }
    >
      <Logo />
      <div className="md:hidden">
        <RiMenuLine
          className="text-xl cursor-pointer"
          onClick={handleMenuClick}
        />
      </div>
      <div className=" w-1/3 flex justify-around p-2 mr-4">
        <div
          className={`md:flex md:space-x-6 md:justify-end navbar-menu ${
            isMenuOpen
              ? "flex flex-col items-center bg-white-400 w-full h-screen absolute top-16 left-0"
              : "hidden md:flex"
          }  `}
        >
          {NavLinks.map((link) => (
            <a
              key={link}
              href={'#' + link}
              className="block py-2 md:p-0  font-bold  transition no-underline relative text-blue-400"
              onClick={closeMenu}
            >
              {link}
              <span
                className={`absolute block w-full h-px  bottom-[-5px] left-0 transform scale-x-0 transition-all duration-200 ease-in-out`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
