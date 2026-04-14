import { motion } from "framer-motion";
import { Clock, BookOpen, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";
import { EducationSection } from "../components/EducationSection";
import { SEO } from "../components/SEO";

export const About = () => {
  return (
    <PageTransition>
      <SEO title="About Me" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Summary</h3>
            <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-lg">
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
             <div className="flex items-center gap-4 text-slate-600 dark:text-zinc-300">
               <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg text-cyan-400"><MapPin size={24} /></div>
               <div>
                 <p className="text-sm text-slate-900 dark:text-zinc-500">Location</p>
                 <p className="font-medium">{portfolioData.personalInfo.location}</p>
               </div>
             </div>
             <div className="flex items-center gap-4 text-slate-600 dark:text-zinc-300">
               <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg text-indigo-400"><MapPin size={24} /></div> {/* Replaced with MapPin just to have same sizing, ideally custom icon */}
               <div>
                 <p className="text-sm text-slate-900 dark:text-zinc-500">Contact</p>
                 <p className="font-medium">{portfolioData.personalInfo.phone}</p>
                 <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-cyan-400 hover:underline text-sm truncate block max-w-[150px]">
                   {portfolioData.personalInfo.email}
                 </a>
               </div>
             </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <EducationSection />
        </div>
      </div>
    </PageTransition>
  );
};
