import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

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

export const Skills = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
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
      </div>
    </PageTransition>
  );
};
