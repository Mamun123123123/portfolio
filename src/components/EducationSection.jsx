"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "BSc in Computer Science & Engineering",
    institution:
      "Bangladesh Army International University of Science and Technology",
    duration: "Present",
    description:
      "Currently pursuing a Bachelor of Science in Computer Science and Engineering (CSE) with a strong focus on software development, web technologies, problem solving, and modern programming practices.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (HSC)",
    institution: "Giyassuddin Islamic Model College",
    duration: "Science Group",
    description:
      "Successfully completed Higher Secondary Certificate (HSC) in the Science group with a GPA of 5.00. Developed strong analytical and logical thinking skills which inspired the journey into programming and technology.",
    icon: <FaSchool />,
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 font-semibold uppercase tracking-widest">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Academic Qualification
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        
        <div className="relative border-l border-slate-700 ml-4">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-14 ml-10 relative"
            >
              
              <div className="absolute -left-[54px] top-1 bg-sky-500 text-white p-3 rounded-full text-xl shadow-lg">
                {education.icon}
              </div>

             
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-sky-500 transition duration-300">
                <span className="inline-block bg-sky-500/20 text-sky-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {education.duration}
                </span>

                <h3 className="text-2xl font-bold">
                  {education.title}
                </h3>

                <h4 className="text-slate-300 text-lg mt-2">
                  {education.institution}
                </h4>

                <p className="text-slate-400 mt-5 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;