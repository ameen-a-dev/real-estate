import React from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            perspiciatis quis ipsum. Sed deleniti odit incidunt adipisci libero
            deserunt debitis asperiores, eveniet, architecto et tenetur
            laboriosam ducimus officiis consequuntur facere?
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col text-gray-400">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link to="/testimonial" className="hover:text-white">
              Testimonial
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
