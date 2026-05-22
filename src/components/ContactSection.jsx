"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact{" "}
            <span className="text-sky-400">
              Me
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for collaboration,
            freelance work, or any project discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">
             
              <div className="flex items-center gap-4">
                <div className="bg-sky-500/20 p-4 rounded-2xl">
                  <FaEnvelope className="text-sky-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>

                  <p className="text-white font-medium">
                    almalm90459@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-sky-500/20 p-4 rounded-2xl">
                  <FaPhoneAlt className="text-sky-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Phone
                  </p>

                  <p className="text-white font-medium">
                    +8801866418423
                  </p>
                </div>
              </div>
            </div>

           
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-5">
                Follow Me
              </h4>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Mamun123123123"
                  target="_blank"
                  className="bg-slate-800 hover:bg-sky-500 transition duration-300 p-4 rounded-2xl"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdullah-al-mamun-459294378/"
                  target="_blank"
                  className="bg-slate-800 hover:bg-sky-500 transition duration-300 p-4 rounded-2xl"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>

              </div>
            </div>
          </div>

          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <form className="space-y-6">
              
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-sky-500"
                />
              </div>

              
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-sky-500"
                />
              </div>

             
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-sky-500 resize-none"
                ></textarea>
              </div>

             
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 transition duration-300 py-3 rounded-xl font-semibold"
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