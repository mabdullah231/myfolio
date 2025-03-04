import React, { useState } from 'react';
import aboutRightBG from "../assets/Images/doodle items.png";
import aboutRightVector from "../assets/Images/Group 62.png";

const AboutSection = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className='flex flex-wrap w-full min-h-screen section-padding' id="about">
      <div className="aboutSectionLeft flex items-center flex-[1] md:flex-[2] min-h-[50vh] order-2 md:order-1 p-4">
        <div className="flex aboutLeftContent gap-4">
          <div className="aboutContent flex flex-col justify-between">
            <div className="aboutHeading">
              <h1 className="font-bold text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
                About 
                <span className="theme-text-secondary"> Me</span>
              </h1>
              <p className='text-[#eeeeee75] w-100 md:w-90'>
                {isReadMore 
                  ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est, dolor vero beatae similique illo laudantium libero odio repellat vel corporis autem officia accusantium, sed saepe asperiores! Ipsum quas amet laborum maiores, quaerat adipisci voluptates, quae reiciendis blanditiis dolore porro? Soluta reprehenderit blanditiis architecto eum iste quae molestiae, quod laudantium."
                  : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est, dolor vero beatae similique illo laudantium libero odio repellat vel corporis autem officia accusantium, sed saepe asperiores! Ipsum quas amet laborum maiores..."}
                <span 
                  className="text-[#eeeeee] cursor-pointer" 
                  onClick={toggleReadMore}
                >
                  {isReadMore ? " Read Less" : " Read More"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Moves on top when wrapped) */}
      <div className="relative aboutSectionRight min-w-[30vw] flex items-end justify-center flex-[2] md:flex-[3] p-6 min-h-[50vh] order-1 md:order-2">
        {/* Background Image */}
        <img
          src={aboutRightBG}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Background Design"
        />

        {/* Person Vector (On Top) */}
        <img
          src={aboutRightVector}
          alt="Person Vector"
          className="relative z-10 w-[250px] h-[200px] md:w-[400px] md:h-[325px] -mb-10 md:-mb-15"
        />
      </div>
    </section>
  );
}

export default AboutSection;