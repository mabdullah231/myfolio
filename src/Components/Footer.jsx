import {
  Home,
  User,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-[10vh] pb-[4vh] border border-t-gray-700 border-l-0 border-r-0 border-b-0">
      <div className="navLinks flex justify-center">
        <ul className="flex style-none p-4 gap-5  md:gap-10 lg:gap-15">
          <li className="flex items-center">
            <Home className="inline mr-2" /> <a href="#home">Home</a>
          </li>
          <li className="flex items-center">
            <User className="inline mr-2" /> <a href="#about">About Me</a>
          </li>
          <li className="flex items-center">
            <Phone className="inline mr-2" /> <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navSocials flex justify-center">
        <ul className="flex style-none p-4 gap-5">
          <li className="flex items-center justify-center w-10 h-10 bg-gray-700 cursor-pointer rounded-full transition hover:bg-gray-600">
            <Facebook className="text-white" />
          </li>
          <li className="flex items-center justify-center w-10 h-10 bg-gray-700 cursor-pointer rounded-full transition hover:bg-gray-600">
            <Instagram className="text-white" />
          </li>
          <li className="flex items-center justify-center w-10 h-10 bg-gray-700 cursor-pointer rounded-full transition hover:bg-gray-600">
            <Twitter className="text-white" />
          </li>
          <li className="flex items-center justify-center w-10 h-10 bg-gray-700 cursor-pointer rounded-full transition hover:bg-gray-600">
            <Youtube className="text-white" />
          </li>
        </ul>
      </div>
      <div className="bottom mt-4 flex justify-center">
        <h5 className="text-gray-400">Designed By <b className="theme-text-secondary">MA Codes</b></h5>
      </div>
    </footer>
  );
};

export default Footer;
