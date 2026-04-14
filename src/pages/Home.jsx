import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const Home = () => {
  return (
    <PageTransition className="flex flex-col justify-center min-h-[calc(100vh-80px)]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-700/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-700/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-cyan-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Hello, I'm <br />
            <span className="text-gradient">{portfolioData.personalInfo.name}</span>
          </h1>

          <p className="text-xl text-slate-500 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
            {/* {portfolioData.personalInfo.role} based in {portfolioData.personalInfo.location}. I build modern, scalable, and data-driven applications. */}
            Building modern, scalable, and data-driven applications with full-stack development, data science, machine learning, and AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white dark:bg-white dark:text-zinc-950 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-zinc-200 transition-colors"
              >
                View My Work
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/10 rounded-full font-semibold flex items-center justify-center hover:bg-black/5 dark:bg-white/10 transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Abstract shapes or placeholder for portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-2xl rotate-6 opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-slate-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-2xl -rotate-6 transition-transform hover:rotate-0 duration-500 flex items-center justify-center overflow-hidden">
              {/* Generative shapes replacing generic photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,211,238,0.3)_360deg)] mix-blend-screen"
              />
              <div className="absolute inset-1 bg-slate-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center flex-col gap-4 text-zinc-600">
                <div className="text-4xl font-black tracking-tighter opacity-10 uppercase">&lt;CODE /&gt;</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-900 dark:text-zinc-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </PageTransition>
  );
};
