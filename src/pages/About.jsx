import { motion } from "framer-motion";
import { Clock, BookOpen, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const About = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Summary</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {portfolioData.personalInfo.summary}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center space-y-6"
          >
             <div className="flex items-center gap-4 text-zinc-300">
               <div className="p-3 bg-white/5 rounded-lg text-cyan-400"><MapPin size={24} /></div>
               <div>
                 <p className="text-sm text-zinc-500">Location</p>
                 <p className="font-medium">{portfolioData.personalInfo.location}</p>
               </div>
             </div>
             <div className="flex items-center gap-4 text-zinc-300">
               <div className="p-3 bg-white/5 rounded-lg text-indigo-400"><MapPin size={24} /></div> {/* Replaced with MapPin just to have same sizing, ideally custom icon */}
               <div>
                 <p className="text-sm text-zinc-500">Contact</p>
                 <p className="font-medium">{portfolioData.personalInfo.phone}</p>
                 <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-cyan-400 hover:underline text-sm truncate block max-w-[150px]">
                   {portfolioData.personalInfo.email}
                 </a>
               </div>
             </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
            <BookOpen className="text-cyan-500" /> Education History
          </h3>
          
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
                
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start relative">
                  <div className="hidden md:block col-span-1 text-right pt-1">
                    <span className="text-cyan-400 font-mono text-sm">{edu.period}</span>
                  </div>
                  
                  <div className="absolute left-[-5px] top-2 md:relative md:left-auto md:top-auto md:col-span-1 md:flex md:justify-center">
                     <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10"></div>
                     <div className="hidden md:block absolute top-3 bottom-[-40px] w-px bg-white/10 -z-10"></div>
                  </div>
                  
                  <div className="md:col-span-3 glass-card p-6 rounded-2xl mb-4 md:mb-0">
                    <div className="md:hidden mb-2 text-cyan-400 font-mono text-sm">{edu.period}</div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-indigo-300 font-medium mb-4">{edu.institution}</p>
                    <p className="text-zinc-400 text-sm mb-4">{edu.details}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};
