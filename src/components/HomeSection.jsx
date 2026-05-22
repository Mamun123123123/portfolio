"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sky-400 font-semibold mb-3 tracking-wider">
              HELLO THERE 👋
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              I'm{" "}
              <span className="text-sky-400">
                Abdullah Al Mamun
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-4">
              Full Stack Web Developer
            </h2>

            <p className="text-slate-400 mt-6 leading-relaxed max-w-xl">
              I build modern, responsive, and scalable web applications using
              Next.js, React, Node.js, Express, and MongoDB. I enjoy creating
              beautiful user interfaces and solving real-world problems through
              clean and efficient code.
            </p>

           
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#"
                
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <Link
                href="#projects"
                className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                View Projects
              </Link>
            </div>

          
            <div className="flex items-center gap-5 mt-10">
              <a
                href="https://github.com/Mamun123123123"
                target="_blank"
                className="text-2xl text-slate-400 hover:text-sky-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-mamun-459294378/"
                target="_blank"
                className="text-2xl text-slate-400 hover:text-sky-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
           
              <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>

          
              <Image
                src="/profilePhot.jpeg"
                alt="Profile"
                fill
                priority
                className="object-cover rounded-full border-4 border-sky-500 shadow-[0_0_40px_rgba(14,165,233,0.5)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;