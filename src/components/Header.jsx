import React, { useTransition } from "react";
import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          {t("welcome")}
        </h2>
        <div className="space-x-6 mt-16">
          <Link
            to="/projects"
            className="border border-white px-8 py-3 rounded"
          >
            Projects
          </Link>
          <Link to="/contact" className="bg-blue-500 px-8 py-3 rounded">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
