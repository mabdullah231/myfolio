import React from 'react';
import leftVector from '../assets/Images/Group 2372.png';
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className='flex flex-wrap w-full min-h-screen section-padding gap-8' id="contact">
      {/* Left Section (Vector) */}
      <div className="contactSectionLeft flex items-center flex-[2] md:flex-[3] order-1 md:order-1 min-h-[50vh] p-4 w-full">
        <div className="flex contactLeftContent gap-4 flex-col justify-between w-full">
          <div className="contactHeading w-full">
            <h1 style={{ lineHeight: '1.3' }} className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
              Got a project in <br />
              <span className="theme-text-secondary"> mind?</span>
            </h1>
          </div>
          <div className="contactVector flex justify-end w-full">
            <img src={leftVector} alt="Vector" />
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="relative contactSectionRight flex flex-col justify-center order-2 md:order-2 flex-[2] md:flex-[3] p-6 min-h-[50vh] w-full">
        <form className="w-full flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="form-group flex-1">
              <label htmlFor="name" className="font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                className="bg-[#393E46] cursor-pointer hover:bg-[#474e5c] transition mt-2 rounded-lg px-4 py-3 text-sm w-full"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group flex-1">
              <label htmlFor="email" className="font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                className="bg-[#393E46] cursor-pointer hover:bg-[#474e5c] transition mt-2 rounded-lg px-4 py-3 text-sm w-full"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="font-semibold">Your Message</label>
            <textarea
              id="message"
              className="bg-[#393E46] cursor-pointer hover:bg-[#474e5c] transition mt-2 rounded-lg px-4 py-3 text-sm w-full"
              placeholder="Enter your message"
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 w-60 py-2 md:px-8 md:py-3 sm:px-4 sm:py-2 text-sm theme-bg-secondary rounded-4xl cursor-pointer transition"
          >
            Send Message <Send className="inline ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;