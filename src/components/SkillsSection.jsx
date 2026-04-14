import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiMysql, SiHtml5, SiCss,
  SiPostgresql, SiGit, SiGithub, SiBootstrap,
  SiDjango, SiReact, SiTailwindcss, SiNumpy, SiPandas,
  SiScikitlearn, SiStreamlit
} from '@icons-pack/react-simple-icons';
import { Table } from "lucide-react";
import { Code2, Database, Layout, Terminal } from "lucide-react";

import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const SkillsSection = ({ showGrid = true }) => {
  const allIcons = [
    { Icon: SiPython, name: "Python", color: "text-[#3776AB]" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
    { Icon: SiMysql, name: "SQL", color: "text-[#4479A1]" },
    { Icon: SiHtml5, name: "HTML", color: "text-[#E34F26]" },
    { Icon: SiCss, name: "CSS", color: "text-[#1572B6]" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]" },
    { Icon: SiGit, name: "Git", color: "text-[#F05032]" },
    { Icon: SiGithub, name: "GitHub", color: "text-slate-900 dark:text-white" },
    { Icon: SiBootstrap, name: "Bootstrap", color: "text-[#7952B3]" },
    { Icon: Table, name: "Excel", color: "text-[#217346]" },
    { Icon: SiDjango, name: "Django", color: "text-[#092E20]" },
    { Icon: SiReact, name: "React", color: "text-[#61DAFB]" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
    { Icon: SiNumpy, name: "NumPy", color: "text-[#013243]" },
    { Icon: SiPandas, name: "pandas", color: "text-[#150458]" },
    { Icon: SiScikitlearn, name: "scikit-learn", color: "text-[#F7931E]" },
    { Icon: SiStreamlit, name: "Streamlit", color: "text-[#FF4B4B]" },
  ];

  return (
    // <div className="w-full flex flex-col gap-16 overflow-hidden">
    <div className="w-full flex flex-col gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Infinite Scroll Marquee */}
      <div className="relative flex group mx-auto pt-8 pb-8 w-full max-w-7xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee gap-8 w-max pl-8 pr-4">
          {[...allIcons, ...allIcons].map((item, idx) => (
            <div key={`idx-${idx}`} className="flex flex-col items-center justify-center gap-2 group/icon min-w-[100px]">
              <div className={`p-4 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-2xl shadow-sm transition-transform duration-300 group-hover/icon:-translate-y-2 group-hover/icon:shadow-lg ${item.color}`}>
                <item.Icon size={40} className="transition-all duration-300 drop-shadow-sm" />
              </div>
              <span className="text-sm font-semibold text-slate-500 dark:text-zinc-400 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/icon:translate-y-0 shadow-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {showGrid && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {/* Languages */}
          <motion.div
            variants={staggerContainer} initial="hidden" animate="show"
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Code2 size={120} /></div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><Code2 size={24} /></div>
              Languages
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {portfolioData.skills.languages.map((skill, i) => (
                <motion.div key={i} variants={skillItem} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-black/5 dark:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            variants={staggerContainer} initial="hidden" animate="show"
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Layout size={120} /></div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Layout size={24} /></div>
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {portfolioData.skills.frameworks.map((skill, i) => (
                <motion.div key={i} variants={skillItem} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-black/5 dark:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Terminal size={120} /></div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-red-500/20 rounded-lg text-red-400"><Terminal size={24} /></div>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {portfolioData.skills.tools.map((skill, i) => (
                <motion.div key={i} variants={skillItem} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-black/5 dark:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Database size={120} /></div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><Database size={24} /></div>
              Core Competencies
            </h3>
            <div className="flex flex-col gap-3 relative z-10">
              {portfolioData.skills.core.map((skill, i) => (
                <motion.div key={i} variants={skillItem} className="flex items-center gap-3 p-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-slate-600 dark:text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {!showGrid && (
        <div className="text-center mt-4">
          <Link to="/skills">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/10 rounded-full font-semibold inline-flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              View More Skills
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
};
