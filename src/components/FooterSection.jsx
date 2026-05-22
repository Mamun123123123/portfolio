"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          
          <div>
            <h2 className="text-2xl font-bold">
              Abdullah Al Mamun <span className="text-sky-400">.</span>
            </h2>

            <p className="text-slate-400 mt-3 text-sm leading-relaxed">
              Full Stack Web Developer passionate about building modern,
              responsive and scalable web applications using Next.js and
              MERN stack.
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li><Link href="#home" className="hover:text-sky-400">Home</Link></li>
              <li><Link href="#about" className="hover:text-sky-400">About</Link></li>
              <li><Link href="#skills" className="hover:text-sky-400">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-sky-400">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-sky-400">Contact</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Me
            </h3>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Mamun123123123"
                target="_blank"
                className="bg-slate-800 hover:bg-sky-500 p-3 rounded-xl transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-mamun-459294378/"
                target="_blank"
                className="bg-slate-800 hover:bg-sky-500 p-3 rounded-xl transition"
              >
                <FaLinkedin />
              </a>

        
            </div>

          
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400"
            >
              <FaArrowUp />
              Back to top
            </button>
          </div>
        </div>

      
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Abdullah Al Mamun. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;