"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        
        
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact <span className="text-sky-400">Me</span>
          </h2>

          <p className="text-slate-400 mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Feel free to contact me for collaboration, freelance work, or any project discussion.
          </p>
        </div>

       
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

         
         
          <div className="bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8">

            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">

              
              
              <div className="flex items-center gap-4">
                <div className="bg-sky-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <FaEnvelope className="text-sky-400 text-lg sm:text-xl" />
                </div>

                <div className="break-all">
                  <p className="text-slate-400 text-xs sm:text-sm">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    almalm90459@gmail.com
                  </p>
                </div>
              </div>

             
             
              <div className="flex items-center gap-4">
                <div className="bg-sky-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <FaPhoneAlt className="text-sky-400 text-lg sm:text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-xs sm:text-sm">Phone</p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    +8801866418423
                  </p>
                </div>
              </div>
            </div>

          
          
            <div className="mt-8 md:mt-10">
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                Follow Me
              </h4>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">

                <a
                  href="https://github.com/Mamun123123123"
                  target="_blank"
                  className="bg-slate-800 hover:bg-sky-500 transition p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdullah-al-mamun-459294378/"
                  target="_blank"
                  className="bg-slate-800 hover:bg-sky-500 transition p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                >
                  <FaLinkedinIn className="text-lg sm:text-xl" />
                </a>

              </div>
            </div>
          </div>

          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8">

            <form className="space-y-5 md:space-y-6">

              
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 md:px-5 py-3 outline-none focus:border-sky-500 text-sm md:text-base"
                />
              </div>

              
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 md:px-5 py-3 outline-none focus:border-sky-500 text-sm md:text-base"
                />
              </div>

              
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 md:px-5 py-3 outline-none focus:border-sky-500 resize-none text-sm md:text-base"
                />
              </div>

              
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 transition py-3 rounded-xl font-semibold text-sm md:text-base"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;