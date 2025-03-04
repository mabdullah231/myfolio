import React from "react";
import backgroundImage from "../assets/Images/doodle items.png"; // Import the image
import workCard1 from "../assets/Images/workCard1.png"; // Import the image
import workCard2 from "../assets/Images/workCard2.png"; // Import the image
import workCard3 from "../assets/Images/workCard3.png"; // Import the image

const WorkSection = () => {
  return (
    <section
      id="workSection"
      className="w-full min-h-screen flex items-center section-padding relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <div className="workContent z-10 flex flex-col gap-8 w-full">
        <div className="workHeading">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
            My recent
            <span className="theme-text-secondary"> works</span>
          </h1>
        </div>
        <div className="workBadges flex gap-5 flex-wrap">
          <button className="px-8 py-2 md:text-md sm:text-sm text-lg bg-cyan-600 rounded-4xl cursor-pointer transition">
            All
          </button>
          <button className="px-8 py-2 md:text-md sm:text-sm text-lg bg-gray-800 hover:bg-cyan-600 rounded-4xl cursor-pointer transition">
            Frontend
          </button>
          <button className="px-8 py-2 md:text-md sm:text-sm text-lg bg-gray-800 hover:bg-cyan-600 rounded-4xl cursor-pointer transition">
            Backend
          </button>
          <button className="px-8 py-2 md:text-md sm:text-sm text-lg bg-gray-800 hover:bg-cyan-600 rounded-4xl cursor-pointer transition">
            Full Stack
          </button>
        </div>
        <div className="workCards flex flex-wrap lg:justify-between justify-center space-y-5">
          <div className="card w-[375px] h-[300px] bg-gray-800/60 rounded-md px-6 py-10 transition duration-300 hover:bg-gray-700 cursor-pointer">
            <img
              src={workCard1}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="card w-[375px] h-[300px] bg-gray-800/60 rounded-md px-6 py-10 transition duration-300 hover:bg-gray-700 cursor-pointer">
            <img
              src={workCard2}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="card w-[375px] h-[300px] bg-gray-800/60 rounded-md px-6 py-10 transition duration-300 hover:bg-gray-700 cursor-pointer">
            <img
              src={workCard3}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
