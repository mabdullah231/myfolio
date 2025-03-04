import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`theme-bg-primary z-50 navBar px-[5vw] py-[1.5vh] border border-t-0 border-l-0 border-r-0 border-b-gray-700 fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? 'py-[2vh]' : 'py-[5vh]'}`}>
      <nav className="flex justify-between items-center">
        <div className="navBrand text-[#D9D9D9]">
          <h1 className={`transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>MyFolio</h1>
        </div>
        <div className="navList hidden md:block">
          <ul className="flex items-center space-x-12">
            <li className="hover:text-gray-300 cursor-pointer transition"><a href="#home">Home</a></li>
            <li className="hover:text-gray-300 cursor-pointer transition"><a href="#about">About Me</a></li>
            <li className="hover:text-gray-300 cursor-pointer transition"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className={`absolute top-full right-5 w-[200px] bg-gray-800 border border-gray-500 text-white p-4 rounded-lg shadow-lg md:hidden animate-slideDown`}>
          <ul className="flex flex-col space-y-4">
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}><a href="#home">Home</a></li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}><a href="#about">About Me</a></li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
      <style>
        {`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Header;