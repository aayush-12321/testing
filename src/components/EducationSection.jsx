import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export const EducationSection = ({ limit }) => {
  const educationItems = limit ? portfolioData.education.slice(0, limit) : portfolioData.education;

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={limit ? "text-center mb-16" : "mb-8"}
      >
        {limit ? (
          <>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          </>
        ) : (
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="text-cyan-500" /> Education History
          </h3>
        )}
      </motion.div>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        {educationItems.map((edu, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-black/5 dark:bg-white/10"></div>
            
            <div className="md:grid md:grid-cols-5 md:gap-8 items-start relative">
              <div className="hidden md:block col-span-1 text-right pt-1">
                <span className="text-cyan-400 font-mono text-sm">{edu.period}</span>
              </div>
              
              <div className="absolute left-[-5px] top-2 md:relative md:left-auto md:top-auto md:col-span-1 md:flex md:justify-center">
                 <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10"></div>
                 <div className="hidden md:block absolute top-3 bottom-[-40px] w-px bg-black/5 dark:bg-white/10 -z-10"></div>
              </div>
              
              <div className="md:col-span-3 glass-card p-6 rounded-2xl mb-4 md:mb-0">
                <div className="md:hidden mb-2 text-cyan-400 font-mono text-sm">{edu.period}</div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                <p className="text-indigo-300 font-medium mb-4">{edu.institution}</p>
                <p className="text-slate-500 dark:text-zinc-400 text-sm mb-4">{edu.details}</p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-xs text-slate-600 dark:text-zinc-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {limit && portfolioData.education.length > limit && (
          <div className="text-center mt-12">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/10 rounded-full font-semibold inline-flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                View Full Education
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
