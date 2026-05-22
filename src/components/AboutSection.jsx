"use client";

import { motion } from "framer-motion";
import { BiCricketBall } from "react-icons/bi";
import {
  FaCode,
  FaLaptopCode,
  FaGamepad,
  FaFutbol,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
   
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Know Who I Am
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold leading-snug">
              Passionate About Building Modern Web Applications
            </h3>

            <p className="text-slate-400 mt-6 leading-relaxed">
              My programming journey started with curiosity about how websites
              work. Over time, I became passionate about building responsive and
              user-friendly web applications using modern technologies.
            </p>

            <p className="text-slate-400 mt-4 leading-relaxed">
              I enjoy working on full-stack projects where I can create both
              beautiful frontend interfaces and powerful backend systems. I love
              solving real-world problems through clean, scalable, and efficient
              code.
            </p>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Besides programming, I enjoy Cricket, exploring new
              technologies, and continuously learning new things to improve my
              development skills.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                <FaCode className="text-3xl text-sky-400 mb-3" />
                <h4 className="text-xl font-semibold">
                  Web Development
                </h4>
                <p className="text-slate-400 text-sm mt-2">
                  Building responsive and scalable web applications.
                </p>
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                <FaLaptopCode className="text-3xl text-sky-400 mb-3" />
                <h4 className="text-xl font-semibold">
                  Problem Solving
                </h4>
                <p className="text-slate-400 text-sm mt-2">
                  Enjoy solving logical and programming challenges.
                </p>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                <BiCricketBall className="text-3xl text-sky-400 mb-3" />
                <h4 className="text-xl font-semibold">
                  Cricket
                </h4>
                <p className="text-slate-400 text-sm mt-2">
                  Passionate about sports and outdoor activities.
                </p>
              </div>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8">
                Quick Information
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 text-sm">
                    Name
                  </p>
                  <h4 className="text-lg font-semibold">
                    Abdullah Al Mamun
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>
                  <h4 className="text-lg font-semibold">
                    almalm90459@gmail.com
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Location
                  </p>
                  <h4 className="text-lg font-semibold">
                    Matuail Demra, Dhaka
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Experience
                  </p>
                  <h4 className="text-lg font-semibold">
                    Full Stack Web Development
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Languages
                  </p>
                  <h4 className="text-lg font-semibold">
                    Bangla, English
                  </h4>
                </div>

                
              </div>
            </div>

            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;