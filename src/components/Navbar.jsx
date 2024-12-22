import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Prevent from scrolling when mobile menu is visible
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  // change language
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container flex justify-between items-center py-4 px-6 bg-blue-400 rounded mx-auto ">
        <Link to="/">
          <img src={assets.logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <Link to="/">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 hover:text-gray-400"
                    : "hover:text-gray-400"
                }
              >
                Home
              </NavLink>
            </Link>
            <Link
              to="/about"
              className="cursor-pointer ml-3 hover:text-gray-400"
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 hover:text-gray-400"
                    : "hover:text-gray-400"
                }
              >
                About
              </NavLink>
            </Link>
            <Link
              to="/projects"
              className="cursor-pointer hover:text-gray-400 ml-3"
            >
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 hover:text-gray-400"
                    : "hover:text-gray-400"
                }
              >
                Projects
              </NavLink>
            </Link>
            <Link
              to="/testimonial"
              className="cursor-pointer hover:text-gray-400 ml-3"
            >
              <NavLink
                to="testimonial"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 hover:text-gray-400"
                    : "hover:text-gray-400"
                }
              >
                Testiomnial
              </NavLink>
            </Link>
            <Link
              to="/testimonial"
              className="cursor-pointer hover:text-gray-400 ml-3"
            >
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 hover:text-gray-400"
                    : "hover:text-gray-400"
                }
              >
                Contact Us
              </NavLink>
            </Link>
          </li>
          <select
            className="text-black md:w-[80px]"
            onClick={(e) => changeLanguage(e.target.value)}
          >
            <option value="">Change Language</option>
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="ar">Arabic</option>
          </select>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed ${
            showMobileMenu ? "w-full" : "h-0 w-0"
          }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              src={assets.cross_icon}
              className="w-6"
              alt=""
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
            <Link
              to="/"
              className="px-4 py-2 rounded-full"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-full"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="px-4 py-2 rounded-full"
              onClick={() => setShowMobileMenu(false)}
            >
              Projects
            </Link>
            <Link
              to="/testimonial"
              className="px-4 py-2 rounded-full"
              onClick={() => setShowMobileMenu(false)}
            >
              Testimonial
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact Us
            </Link>
            <select
              onClick={(e) => changeLanguage(e)}
              onChange={() => setShowMobileMenu(false)}
            >
              <option value="en">English</option>
              <option value="ur">Urdu</option>
              <option value="ar">Arabic</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
