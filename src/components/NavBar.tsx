import React, { useState } from "react";
// import { RiMenuLine } from "react-icons/ri";
// import { ThemesColors, useTheme } from "../ThemeContext";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar: React.FC = () => {
//   const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLinks: string[] = ["Home", "About", "Projects", "Contact"];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={'fixed top-0 left-0 right-0 z-10 flex items-center justify-end p-4' }
    >
      <div className="md:hidden">
        {/* <RiMenuLine
          className="text-xl cursor-pointer"
          onClick={handleMenuClick}
        /> */}
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
              href="#home"
              className="block py-2 md:p-0  transition no-underline relative"
              onClick={closeMenu}
            >
              {link}
              <span
                className={`absolute block w-full h-px  bottom-[-5px] left-0 transform scale-x-0 transition-all duration-200 ease-in-out`}
              ></span>
            </a>
          ))}
        </div>

        {/* Toggle Dark/Light Mode */}
        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
          sunColor="#DAA520"
          moonColor='#1E90FF'
        /> */}
      </div>
    </nav>
  );
};

export default NavBar;