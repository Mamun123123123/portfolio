"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Education", path: "#education" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">
       
          <Link
            href="/"
            className="text-2xl font-bold text-white tracking-wide"
          >
            Abdullah<span className="text-sky-400">.</span>
          </Link>

          
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-slate-300 hover:text-sky-400 transition duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

       
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full font-medium transition duration-300"
          >
            Resume
          </a>

          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

  
        {open && (
          <div className="md:hidden pb-5">
            <ul className="flex flex-col gap-4 mt-4 bg-slate-900 p-5 rounded-2xl border border-slate-800">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="block text-slate-300 hover:text-sky-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <a
                href="#"
                download
                className="bg-sky-500 hover:bg-sky-600 text-white text-center py-2 rounded-xl transition duration-300"
              >
                Download Resume
              </a>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;