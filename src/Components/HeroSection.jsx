import React from "react";
import { Download } from "lucide-react";
import heroLeftVector from "../assets/Images/Vector 187.png";
import heroRightBG from "../assets/Images/doodles mixed round.png";
import heroRightVector from "../assets/Images/Group 2346@2x.png";

const HeroSection = () => {
  return (
    <section className="mt-25 flex flex-wrap w-full min-h-screen section-padding" id="home">
      {/* Left Section (Moves below on small screens) */}
      <div className="heroSectionLeft flex items-center flex-[1] md:flex-[3] min-h-[50vh] order-2 md:order-1 p-4">
        <div className="flex heroLeftContent gap-4">
          <div className="heroVector">
            <img className="lg:h-[30vh] md:h-[15vh] h-[15vh] mt-8" src={heroLeftVector} alt="Hero Left Vector" />
          </div>
          <div className="heroContent flex flex-col justify-between">
            <div className="heroHeading">
              <h1 className="uppercase font-bold text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
                CREATIVE UI <br />
                <span className="theme-text-secondary">DESIGNER</span>
              </h1>
            </div>
            <div className=" heroBtns flex gap-5 mt-4">
              <button className="px-8 py-2 md:text-md sm:text-sm text-lg theme-bg-secondary rounded-4xl cursor-pointer transition">
                Hire Me
              </button>
              <button className="px-8 py-2 md:text-md sm:text-sm text-lg bg-[#393E46] hover:bg-gray-700 rounded-4xl cursor-pointer transition flex items-center">
                Download CV
                <Download className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Moves on top when wrapped) */}
      <div className="relative heroSectionRight min-w-[30vw] flex items-end flex-[2] md:flex-[2] p-6 min-h-[50vh] order-1 md:order-2">
        {/* Background Image */}
        <img
          src={heroRightBG}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Background Design"
        />

        {/* Person Vector (On Top) */}
        <img
          src={heroRightVector}
          alt="Person Vector"
          className="relative z-10 w-[250px] h-[200px] md:w-[300px] md:h-[250px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;